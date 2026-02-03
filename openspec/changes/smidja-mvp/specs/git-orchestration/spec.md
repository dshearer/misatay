## ADDED Requirements

### Requirement: Agent creates feature branch before first task
The agent SHALL create a new git branch for the feature work before executing the first task.

#### Scenario: Starting first task
- **WHEN** agent begins executing the first task of a feature
- **THEN** agent runs `git checkout -b feature/<descriptive-name>`

#### Scenario: Branch name is descriptive
- **WHEN** agent creates a feature branch
- **THEN** branch name reflects the feature being implemented

### Requirement: All tasks commit to same branch
The agent SHALL commit all tasks for a feature to the same feature branch.

#### Scenario: Multiple tasks in feature
- **WHEN** feature has multiple tasks
- **THEN** all task commits are made to the same feature branch

### Requirement: Commits include task ID in message
The agent SHALL include the task ID in every commit message for traceability.

#### Scenario: Task commit message format
- **WHEN** agent commits changes for a task
- **THEN** commit message follows format "Task description (task-id)"

#### Scenario: Fix commit message format
- **WHEN** agent commits review fixes
- **THEN** commit message follows format "Fix description (task-id)"

### Requirement: Commits are linear and append-only
The agent SHALL create new commits for all changes, never amending or rebasing existing commits.

#### Scenario: Review feedback requires changes
- **WHEN** user requests changes during review
- **THEN** agent creates new commit, does not amend previous commit

#### Scenario: Multiple fixes to same task
- **WHEN** task requires multiple rounds of fixes
- **THEN** each fix is a separate commit in chronological order

### Requirement: Agent stages all changes before commit
The agent SHALL stage all modified files before creating each commit.

#### Scenario: Committing task changes
- **WHEN** agent is ready to commit a task
- **THEN** agent runs `git add -A` before `git commit`

### Requirement: Git operations use shell tool
The agent SHALL use the shell tool to execute git commands.

#### Scenario: Creating branch
- **WHEN** agent needs to create a branch
- **THEN** agent uses shell tool to run git command

#### Scenario: Committing changes
- **WHEN** agent needs to commit
- **THEN** agent uses shell tool to run git commands

### Requirement: Commits reference tasks for reverse lookup
Commits SHALL enable finding all commits for a given task ID using git log.

#### Scenario: Finding task commits
- **WHEN** searching for commits related to a task
- **THEN** `git log --grep="task-id"` returns all relevant commits
