import * as assert from 'assert';

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
import * as vscode from 'vscode';
// import * as myExtension from '../../extension';

suite('Extension Test Suite', () => {
	vscode.window.showInformationMessage('Running Misetay tests...');

	test('Extension should be present', () => {
		assert.ok(vscode.extensions.getExtension('dshearer.misetay'));
	});

	test('Extension should activate', async () => {
		const ext = vscode.extensions.getExtension('dshearer.misetay');
		assert.ok(ext);
		await ext.activate();
		assert.strictEqual(ext.isActive, true);
	});

	test('At least one Misetay tool is registered', () => {
		const tools = vscode.lm.tools;
		const misetayTools = tools.filter(t => t.name.startsWith('misetay_'));
		assert.ok(misetayTools.length > 0, 'At least one misetay_ tool should be registered');
	});
});
