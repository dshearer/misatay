// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';
import { BeadsBackend } from './beadsBackend';
import { registerTaskTools } from './taskTools';
import { TaskStatusView } from './taskStatusView';
import { registerNavigationTools } from './navigationTools';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Initialize task backend (default: Beads)
	const workspaceRoot = vscode.workspace.workspaceFolders?.[0]?.uri.fsPath;
	if (!workspaceRoot) {
		vscode.window.showWarningMessage('Smidja: No workspace folder open');
		return;
	}

	const taskBackend = new BeadsBackend(workspaceRoot);

	// Initialize task status view
	const taskStatusView = new TaskStatusView(context, taskBackend);
	context.subscriptions.push({
		dispose: () => taskStatusView.dispose()
	});

	// Register task management tools
	registerTaskTools(context, taskBackend);

	// Register navigation tools
	registerNavigationTools(context);

	// Register Show Task Status command
	const showTaskStatusCommand = vscode.commands.registerCommand('smidja.showTaskStatus', async () => {
		await taskStatusView.show();
	});

	// Register Install Agent command
	const installAgentCommand = vscode.commands.registerCommand('smidja.installAgent', async () => {
		if (!workspaceRoot) {
			vscode.window.showErrorMessage('No workspace folder is open. Please open a folder first.');
			return;
		}

		// Create .github/agents/ directory if it doesn't exist
		const githubAgentsDir = path.join(workspaceRoot, '.github', 'agents');
		if (!fs.existsSync(githubAgentsDir)) {
			fs.mkdirSync(githubAgentsDir, { recursive: true });
		}

		// Copy agents/smidja.agent.md to .github/agents/smidja.agent.md
		const sourceFile = path.join(context.extensionPath, 'agents', 'smidja.agent.md');
		const targetFile = path.join(githubAgentsDir, 'smidja.agent.md');
		
		if (!fs.existsSync(sourceFile)) {
			vscode.window.showErrorMessage('Agent file not found in extension. Please reinstall Smidja.');
			return;
		}

		fs.copyFileSync(sourceFile, targetFile);

		vscode.window.showInformationMessage(
			'Smidja agent installed successfully! Reload VS Code to use the @smidja agent in GitHub Copilot chat.',
			'Reload Window'
		).then(selection => {
			if (selection === 'Reload Window') {
				vscode.commands.executeCommand('workbench.action.reloadWindow');
			}
		});
	});

	context.subscriptions.push(showTaskStatusCommand, installAgentCommand);
}

// This method is called when your extension is deactivated
export function deactivate() {}
