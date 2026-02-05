## MODIFIED Requirements

### Requirement: Extension provides task management tools

The VS Code extension SHALL register custom tools for task operations.

#### Scenario: createTask tool registration
- **WHEN** extension activates
- **THEN** extension registers dshearer.misetay/createTask tool
- **AND** package.json declares languageModelTool named "misetay_createTask"

#### Scenario: updateTask tool registration
- **WHEN** extension activates
- **THEN** extension registers dshearer.misetay/updateTask tool
- **AND** package.json declares languageModelTool named "misetay_updateTask"

#### Scenario: listTasks tool registration
- **WHEN** extension activates
- **THEN** extension registers dshearer.misetay/listTasks tool
- **AND** package.json declares languageModelTool named "misetay_listTasks"

#### Scenario: addDependency tool registration
- **WHEN** extension activates
- **THEN** extension registers dshearer.misetay/addDependency tool
- **AND** package.json declares languageModelTool named "misetay_addDependency"
