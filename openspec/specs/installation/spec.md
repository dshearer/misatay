# Agent Installation

## Context

Misatay's intelligence lives in agent and skill files that must be copied to the user's workspace. This spec defines how those files get installed for different AI platforms.

## Requirements

### R1: Installation Commands

The extension SHALL provide VS Code commands to install Misatay for different AI platforms:

**For GitHub Copilot:**
- **Command ID**: `misatay.installForCopilot`
- **Command Label**: "Misatay: Install for Copilot"

**For Claude Code:**
- **Command ID**: `misatay.installForClaudeCode`
- **Command Label**: "Misatay: Install for Claude Code"

### R2: File Installation for Copilot

When the "Install for Copilot" command executes, it SHALL:
1. Create `.github/agents/` directory if it doesn't exist
2. Copy agent definition to `.github/agents/Misatay.agent.md`
3. Create `.github/skills/` directory if it doesn't exist
4. Copy all skill files to `.github/skills/` preserving directory structure:
   - `planning/SKILL.md`
   - `execution/SKILL.md`
   - `review/SKILL.md`
   - `needs-help/SKILL.md`

### R2b: File Installation for Claude Code

When the "Install for Claude Code" command executes, it SHALL:
1. Create `.claude/agents/` directory if it doesn't exist
2. Copy agent definition to `.claude/agents/misatay.md`
3. Create `.claude/skills/` directory if it doesn't exist
4. Copy all skill files to `.claude/skills/` preserving directory structure:
   - `planning/SKILL.md`
   - `execution/SKILL.md`
   - `review/SKILL.md`
   - `needs-help/SKILL.md`

### R3: Overwrite Behavior

Both commands SHALL overwrite existing files without prompting to ensure users can update to latest versions.

### R4: Success Feedback

After successful installation:
- **Copilot**: Show message "Misatay agent and skills installed for GitHub Copilot! Reload VS Code to use the @misatay agent in GitHub Copilot chat." with "Reload Window" button
- **Claude Code**: Show message "Misatay agent and skills installed for Claude Code! The misatay agent should now be available in Claude Code." with "OK" button

### R5: Error Handling

If installation fails (e.g., permission issues, no workspace open), the command SHALL:
1. Show an error message explaining what went wrong
2. Not create partial directory structures

## Acceptance Criteria

### AC1: Fresh Installation for Copilot
- **GIVEN** a workspace with no `.github/` directory
- **WHEN** user runs "Misatay: Install for Copilot" command
- **THEN** agent and skills are copied to `.github/agents/` and `.github/skills/`
- **AND** success message is displayed

### AC1b: Fresh Installation for Claude Code
- **GIVEN** a workspace with no `.claude/` directory
- **WHEN** user runs "Misatay: Install for Claude Code" command
- **THEN** agent and skills are copied to `.claude/agents/` and `.claude/skills/`
- **AND** success message is displayed

### AC2: Update Installation
- **GIVEN** a workspace with existing Misatay files
- **WHEN** user runs either install command
- **THEN** existing files are overwritten with new versions
- **AND** success message is displayed

### AC3: No Workspace Error
- **GIVEN** no workspace folder is open in VS Code
- **WHEN** user runs either install command
- **THEN** error message is displayed
- **AND** no files are created

### AC4: Both Platforms Supported
- **GIVEN** a workspace
- **WHEN** user runs both install commands
- **THEN** Misatay is installed for both GitHub Copilot and Claude Code
- **AND** both installations work independently

## Test Scenarios

### Scenario 1: Command Registration
```
GIVEN extension is activated
WHEN checking available commands
THEN "misatay.installForCopilot" is registered
AND "misatay.installForClaudeCode" is registered
```

### Scenario 2: Directory Creation for Copilot
```
GIVEN workspace has no .github directory
WHEN install for Copilot command runs
THEN .github/agents/ and .github/skills/ directories exist
AND all expected files are present
```

### Scenario 2b: Directory Creation for Claude Code
```
GIVEN workspace has no .claude directory
WHEN install for Claude Code command runs
THEN .claude/agents/ and .claude/skills/ directories exist
AND all expected files are present
```

### Scenario 3: Preserves Other Files
```
GIVEN workspace has .github/other-file.md and .claude/other-file.md
WHEN either install command runs
THEN existing files still exist
AND Misatay files are added alongside them
```
