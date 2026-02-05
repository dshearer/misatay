## MODIFIED Requirements

### Requirement: Installation Command

The extension SHALL provide a VS Code command to install Misetay into the current workspace.

**Command ID**: `misetay.installAgent`
**Command Label**: "Misetay: Install Agent"

#### Scenario: Fresh Installation
- **GIVEN** a workspace with no `.github/` directory
- **WHEN** user runs "Misetay: Install Agent" command
- **THEN** agent and skills are copied to `.github/agents/` and `.github/skills/`
- **AND** success message is displayed

#### Scenario: Update Installation
- **GIVEN** a workspace with existing Misetay files
- **WHEN** user runs "Misetay: Install Agent" command
- **THEN** existing files are overwritten with new versions
- **AND** success message is displayed

#### Scenario: No Workspace Error
- **GIVEN** no workspace folder is open in VS Code
- **WHEN** user runs "Misetay: Install Agent" command
- **THEN** error message is displayed
- **AND** no files are created

### Requirement: File Installation

When the install command executes, it SHALL:
1. Create `.github/agents/` directory if it doesn't exist
2. Copy agent definition to `.github/agents/misetay.agent.md`
3. Create `.github/skills/` directory if it doesn't exist
4. Copy all skill files to `.github/skills/` preserving directory structure:
   - `planning/SKILL.md`
   - `execution/SKILL.md`
   - `review/SKILL.md`
   - `git-ops/SKILL.md`

#### Scenario: Directory Creation
- **GIVEN** workspace has no .github directory
- **WHEN** install command runs
- **THEN** .github/agents/ and .github/skills/ directories exist
- **AND** all expected files are present

#### Scenario: Preserves Other Files
- **GIVEN** workspace has .github/other-file.md
- **WHEN** install command runs
- **THEN** .github/other-file.md still exists
- **AND** Misetay files are added alongside it

### Requirement: Success Feedback

After successful installation, the command SHALL:
1. Show an information message: "Misetay agent installed successfully"
2. Include next steps in the message (e.g., "Start chatting with @misetay to plan your tasks")

#### Scenario: Success message display
- **WHEN** installation completes successfully
- **THEN** information message references "Misetay" and "@misetay"

### Requirement: Command Registration

The extension SHALL register the installation command at activation.

#### Scenario: Command Registration
- **GIVEN** extension is activated
- **WHEN** checking available commands
- **THEN** "misetay.installAgent" is registered
