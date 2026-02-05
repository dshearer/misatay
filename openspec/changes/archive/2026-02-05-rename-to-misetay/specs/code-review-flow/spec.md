## MODIFIED Requirements

### Requirement: Agent uses navigation tools to show code

The agent SHALL use openFile, highlightLines, and navigateToLine tools to guide the user through changes.

#### Scenario: Opening a file for review
- **WHEN** agent shows a file that was modified
- **THEN** agent calls dshearer.misetay/openFile with the file path

#### Scenario: Highlighting relevant sections
- **WHEN** agent wants to draw attention to specific code
- **THEN** agent calls dshearer.misetay/highlightLines with appropriate line range

#### Scenario: Centering code in viewport
- **WHEN** agent wants to ensure code is visible
- **THEN** agent calls dshearer.misetay/navigateToLine to center it

### Requirement: Navigation tools declared in package.json

The extension SHALL declare navigation tools in package.json languageModelTools.

#### Scenario: Tool declarations
- **WHEN** extension package.json is inspected
- **THEN** languageModelTools includes:
  - "misetay_openFile"
  - "misetay_highlightLines"  
  - "misetay_navigateToLine"
