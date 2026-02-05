## 1. Rename Agent File

- [x] 1.1 Use `git mv agents/smidja.agent.md agents/misetay.agent.md` to rename agent file

## 2. Update package.json

- [x] 2.1 Change `name` field from "smidja" to "misetay"
- [x] 2.2 Change `displayName` field from "Smidja" to "Misetay"
- [x] 2.3 Update command "smidja.installAgent" to "misetay.installAgent"
- [x] 2.4 Update command title "Smidja: Install Agent" to "Misetay: Install Agent"
- [x] 2.5 Update command "smidja.showTaskStatus" to "misetay.showTaskStatus"
- [x] 2.6 Update command title "Smidja: Show Task Status" to "Misetay: Show Task Status"
- [x] 2.7 Update languageModelTool "smidja_createTask" to "misetay_createTask"
- [x] 2.8 Update languageModelTool "smidja_updateTask" to "misetay_updateTask"
- [x] 2.9 Update languageModelTool "smidja_listTasks" to "misetay_listTasks"
- [x] 2.10 Update languageModelTool "smidja_addDependency" to "misetay_addDependency"
- [x] 2.11 Update languageModelTool "smidja_openFile" to "misetay_openFile"
- [x] 2.12 Update languageModelTool "smidja_highlightLines" to "misetay_highlightLines"
- [x] 2.13 Update languageModelTool "smidja_navigateToLine" to "misetay_navigateToLine"

## 3. Update README.md

- [x] 3.1 Replace all occurrences of "Smidja" with "Misetay" in README.md

## 4. Update Agent File Content

- [x] 4.1 Update tool reference "dshearer.smidja/openFile" to "dshearer.misetay/openFile"
- [x] 4.2 Update tool reference "dshearer.smidja/highlightLines" to "dshearer.misetay/highlightLines"
- [x] 4.3 Update tool reference "dshearer.smidja/navigateToLine" to "dshearer.misetay/navigateToLine"
- [x] 4.4 Update tool reference "dshearer.smidja/createTask" to "dshearer.misetay/createTask"
- [x] 4.5 Update tool reference "dshearer.smidja/updateTask" to "dshearer.misetay/updateTask"
- [x] 4.6 Update tool reference "dshearer.smidja/listTasks" to "dshearer.misetay/listTasks"
- [x] 4.7 Update tool reference "dshearer.smidja/addDependency" to "dshearer.misetay/addDependency"
- [x] 4.8 Update heading "Smidja - AI Pair Programming Agent" to "Misetay - AI Pair Programming Agent"
- [x] 4.9 Update "You are Smidja" to "You are Misetay"

## 5. Update Skills Files

- [x] 5.1 Update skill name in skills/planning/SKILL.md from "smidja-planning" to "misetay-planning"
- [x] 5.2 Update all tool references in skills/planning/SKILL.md from "dshearer.smidja/*" to "dshearer.misetay/*"
- [x] 5.3 Update skill name in skills/execution/SKILL.md from "smidja-execution" to "misetay-execution"
- [x] 5.4 Update all tool references in skills/execution/SKILL.md from "dshearer.smidja/*" to "dshearer.misetay/*"
- [x] 5.5 Update skill name in skills/review/SKILL.md from "smidja-review" to "misetay-review"
- [x] 5.6 Update all tool references in skills/review/SKILL.md from "dshearer.smidja/*" to "dshearer.misetay/*"
- [x] 5.7 Update "Smidja navigation tools" reference to "Misetay navigation tools" in skills/review/SKILL.md

## 6. Update Source Code - Extension

- [x] 6.1 Update command registration "smidja.showTaskStatus" to "misetay.showTaskStatus" in src/extension.ts
- [x] 6.2 Update command registration "smidja.installAgent" to "misetay.installAgent" in src/extension.ts
- [x] 6.3 Update warning message "Smidja:" to "Misetay:" in src/extension.ts
- [x] 6.4 Update file path "agents/smidja.agent.md" to "agents/misetay.agent.md" in src/extension.ts (2 occurrences)
- [x] 6.5 Update error message "reinstall Smidja" to "reinstall Misetay" in src/extension.ts
- [x] 6.6 Update success message "Smidja agent" to "Misetay agent" in src/extension.ts
- [x] 6.7 Update success message "@smidja agent" to "@misetay agent" in src/extension.ts

## 7. Update Source Code - Task Tools

- [x] 7.1 Update tool registration "smidja_createTask" to "misetay_createTask" in src/taskTools.ts
- [x] 7.2 Update tool registration "smidja_updateTask" to "misetay_updateTask" in src/taskTools.ts
- [x] 7.3 Update tool registration "smidja_listTasks" to "misetay_listTasks" in src/taskTools.ts
- [x] 7.4 Update tool registration "smidja_addDependency" to "misetay_addDependency" in src/taskTools.ts
- [x] 7.5 Update console log "Smidja:" to "Misetay:" in src/taskTools.ts (2 occurrences)
- [x] 7.6 Update filter "startsWith('smidja_')" to "startsWith('misetay_')" in src/taskTools.ts

## 8. Update Source Code - Navigation Tools

- [x] 8.1 Update tool registration "smidja_openFile" to "misetay_openFile" in src/navigationTools.ts
- [x] 8.2 Update tool registration "smidja_highlightLines" to "misetay_highlightLines" in src/navigationTools.ts
- [x] 8.3 Update tool registration "smidja_navigateToLine" to "misetay_navigateToLine" in src/navigationTools.ts
- [x] 8.4 Update console log "Smidja:" to "Misetay:" in src/navigationTools.ts

## 9. Update Source Code - Task Status View

- [x] 9.1 Update view ID "smidjaTaskStatus" to "misetayTaskStatus" in src/taskStatusView.ts
- [x] 9.2 Update view title "Smidja Tasks" to "Misetay Tasks" in src/taskStatusView.ts

## 10. Update Source Code - Backend and Comments

- [x] 10.1 Update comment "Smidja workflow statuses" to "Misetay workflow statuses" in src/taskBackend.ts
- [x] 10.2 Update comment "Map Smidja status" to "Map Misetay status" in src/beadsBackend.ts
- [x] 10.3 Update variable name "smidjaStatus" to "misetayStatus" in src/beadsBackend.ts
- [x] 10.4 Update comment "Map Beads status to Smidja" to "Map Beads status to Misetay" in src/beadsBackend.ts

## 11. Update Tests

- [x] 11.1 Update test message "Running Smidja tests" to "Running Misetay tests" in src/test/extension.test.ts
- [x] 11.2 Update extension ID "dshearer.smidja" to "dshearer.misetay" in src/test/extension.test.ts (2 occurrences)
- [x] 11.3 Update test name "At least one Smidja tool" to "At least one Misetay tool" in src/test/extension.test.ts
- [x] 11.4 Update filter "startsWith('smidja_')" to "startsWith('misetay_')" in src/test/extension.test.ts
- [x] 11.5 Update assertion message "smidja_ tool" to "misetay_ tool" in src/test/extension.test.ts

## 12. Update Documentation

- [x] 12.1 Update "This is Smidja" to "This is Misetay" in .github/copilot-instructions.md
- [x] 12.2 Update "how Smidja should behave" to "how Misetay should behave" in .github/copilot-instructions.md

## 13. Update OpenSpec Specs

- [x] 13.1 Archive current specs using openspec workflow
- [x] 13.2 Apply delta specs from this change to update openspec/specs/ files

## 14. Verify and Test

- [x] 14.1 Run `npm run compile` to verify TypeScript compilation
- [x] 14.2 Run `npm run test` to verify all tests pass
- [x] 14.3 Search for any remaining "smidja" references: `grep -ri "smidja" src/ package.json README.md agents/ skills/ .github/`
- [x] 14.4 Load extension in VS Code and verify commands appear with "Misetay" names
- [x] 14.5 Verify extension activates without errors
