## ADDED Requirements

### Requirement: Extension provides a modern task status view
The extension SHALL provide a custom webview panel that displays tasks with a modern, polished UI.

#### Scenario: User opens the task status view
- **WHEN** user executes command "Smidja: Show Task Status"
- **THEN** extension opens a webview panel with current task status

### Requirement: View displays all tasks with status indicators
The view SHALL show all tasks from the task backend with visual status indicators.

#### Scenario: Viewing tasks with different statuses
- **WHEN** task status view is open
- **THEN** view displays tasks grouped or colored by status (ready, in_progress, committed, reviewed)

### Requirement: View uses modern design aesthetic
The view SHALL use contemporary design patterns including smooth animations, clear typography, and refined color palette.

#### Scenario: Visual design standards
- **WHEN** task status view is rendered
- **THEN** view uses:
  - Smooth transitions and animations for status changes
  - Clear visual hierarchy with modern typography
  - Thoughtful use of color for status indicators
  - Card-based or list-based layout with proper spacing
  - Responsive design that adapts to panel width

### Requirement: View shows task dependencies visually
The view SHALL display task dependencies in a way that makes relationships clear.

#### Scenario: Tasks with dependencies
- **WHEN** tasks have dependencies (parent/child relationships)
- **THEN** view shows dependency relationships through visual indicators (indentation, lines, or tree structure)

### Requirement: View updates in real-time
The view SHALL automatically refresh when task status changes.

#### Scenario: Task status changes
- **WHEN** agent updates a task status
- **THEN** task status view updates automatically without manual refresh

### Requirement: View allows basic task interactions
The view SHALL support clicking on tasks to view details or perform actions.

#### Scenario: Clicking a task
- **WHEN** user clicks on a task in the view
- **THEN** view shows task details (title, description, status, branch, commits)

#### Scenario: Status actions
- **WHEN** user right-clicks or uses action buttons on a task
- **THEN** view provides context menu with actions like:
  - "View commits" (runs git log for that task)
  - "Review task" (triggers agent review)
  - "Mark as reviewed"

### Requirement: View shows task progress indicators
The view SHALL display visual progress for tasks with commits.

#### Scenario: Task with commits
- **WHEN** task has associated commits
- **THEN** view shows commit count and status progression (e.g., "3 commits • committed")

### Requirement: View follows VS Code theming
The view SHALL respect user's VS Code theme (light/dark/high-contrast).

#### Scenario: Theme compatibility
- **WHEN** view is rendered
- **THEN** view uses VS Code's CSS variables for colors to match active theme

### Requirement: View handles empty state gracefully
The view SHALL show helpful guidance when no tasks exist.

#### Scenario: No tasks created yet
- **WHEN** task status view is open and no tasks exist
- **THEN** view displays welcoming empty state with:
  - Friendly message like "No tasks yet"
  - Quick start instructions: "Chat with @smidja to create your first task"
  - Optional illustration or icon

### Requirement: View shows active work spinner with heartbeat pattern
The view SHALL display a spinner on tasks when AI is actively working on them, using a heartbeat pattern to track activity.

#### Scenario: AI starts working on a task
- **WHEN** AI calls startingTask tool with a task ID
- **THEN** view displays a spinner on that task indicating active work

#### Scenario: AI continues working on task
- **WHEN** AI calls workingOnTask tool (every ~5 minutes)
- **THEN** view keeps the spinner active on that task

#### Scenario: AI stops working (heartbeat timeout)
- **WHEN** AI does not call workingOnTask for 7 minutes
- **THEN** view automatically stops the spinner on that task

#### Scenario: Multiple tasks being worked on
- **WHEN** AI is working on multiple tasks with active heartbeats
- **THEN** view shows spinners on all actively-worked tasks independently
