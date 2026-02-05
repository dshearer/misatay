import * as assert from 'assert';

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
import * as vscode from 'vscode';
// import * as myExtension from '../../extension';

suite('Extension Test Suite', () => {
	vscode.window.showInformationMessage('Running Smidja tests...');

	test('Extension should be present', () => {
		assert.ok(vscode.extensions.getExtension('dshearer.smidja'));
	});

	test('Extension should activate', async () => {
		const ext = vscode.extensions.getExtension('dshearer.smidja');
		assert.ok(ext);
		await ext.activate();
		assert.strictEqual(ext.isActive, true);
	});

	test('At least one Smidja tool is registered', () => {
		const tools = vscode.lm.tools;
		const smidjaTools = tools.filter(t => t.name.startsWith('smidja_'));
		assert.ok(smidjaTools.length > 0, 'At least one smidja_ tool should be registered');
	});
});
