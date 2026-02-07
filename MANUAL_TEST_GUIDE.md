# Manual Testing Guide for Claude Code Support

This guide provides manual test steps to verify that Misatay can be installed for both GitHub Copilot and Claude Code.

## Prerequisites

- VS Code with the Misatay extension installed
- A test workspace/folder open in VS Code

## Test 1: Install for GitHub Copilot

### Steps:
1. Open VS Code with a test workspace
2. Open Command Palette (Cmd+Shift+P on Mac, Ctrl+Shift+P on Windows/Linux)
3. Type "Misatay: Install for Copilot" and select it
4. Verify success message appears: "Misatay agent and skills installed for GitHub Copilot! Reload VS Code to use the @misatay agent in GitHub Copilot chat."
5. Click "Reload Window"
6. After reload, check that the following files exist in your workspace:
   - `.github/agents/Misatay.agent.md`
   - `.github/skills/planning/SKILL.md`
   - `.github/skills/execution/SKILL.md`
   - `.github/skills/review/SKILL.md`
   - `.github/skills/needs-help/SKILL.md`

### Expected Result:
- All files are created in `.github/` directory
- Agent is available as `@misatay` in GitHub Copilot chat

## Test 2: Install for Claude Code

### Steps:
1. Open VS Code with a test workspace (can be the same as Test 1)
2. Open Command Palette (Cmd+Shift+P on Mac, Ctrl+Shift+P on Windows/Linux)
3. Type "Misatay: Install for Claude Code" and select it
4. Verify success message appears: "Misatay agent and skills installed for Claude Code! The misatay agent should now be available in Claude Code."
5. Click "OK"
6. Check that the following files exist in your workspace:
   - `.claude/agents/misatay.md`
   - `.claude/skills/planning/SKILL.md`
   - `.claude/skills/execution/SKILL.md`
   - `.claude/skills/review/SKILL.md`
   - `.claude/skills/needs-help/SKILL.md`

### Expected Result:
- All files are created in `.claude/` directory
- Agent is available in Claude Code (requires Claude Code extension)

## Test 3: Both Installations Coexist

### Steps:
1. After completing Test 1 and Test 2, verify that both directories exist:
   - `.github/agents/` and `.github/skills/`
   - `.claude/agents/` and `.claude/skills/`
2. Verify that files in one directory don't interfere with the other

### Expected Result:
- Both installations work independently
- No conflicts between the two installations

## Test 4: Update Installation

### Steps:
1. Modify one of the installed skill files (e.g., add a comment to `.github/skills/planning/SKILL.md`)
2. Run "Misatay: Install for Copilot" again
3. Verify the modified file is overwritten with the original content

### Expected Result:
- Files are overwritten without prompting
- Changes are reverted to the extension's version

## Test 5: No Workspace Error

### Steps:
1. Close all folders/workspaces in VS Code
2. Open Command Palette
3. Try to run "Misatay: Install for Copilot"

### Expected Result:
- Error message: "No workspace folder is open. Please open a folder first."
- No files are created

## Test 6: Command Registration

### Steps:
1. Open Command Palette
2. Type "Misatay:"

### Expected Result:
- Should see three commands:
  - "Misatay: Install for Copilot"
  - "Misatay: Install for Claude Code"
  - "Misatay: Show Task Status"
- Old command "Misatay: Install Agent" should NOT appear

## Functional Tests

### Test 7: GitHub Copilot Integration
1. After installing for Copilot, open GitHub Copilot Chat
2. Type `@misatay` and verify the agent is available
3. Try a simple command like "List tasks" or "Plan a feature"

### Test 8: Claude Code Integration (if Claude Code is installed)
1. After installing for Claude Code, open Claude Code
2. Verify the `misatay` agent is available
3. Try a simple command

## Notes

- The actual VS Code extension testing requires a VS Code environment
- Integration tests with GitHub Copilot require an active Copilot subscription
- Integration tests with Claude Code require the Claude Code extension
