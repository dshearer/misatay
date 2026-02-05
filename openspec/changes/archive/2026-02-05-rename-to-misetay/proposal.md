## Why

Renaming the project from "Smidja" to "Misetay" for better brand identity. "Misetay" is the preferred name for this AI agent tool.

## What Changes

**package.json:**
- `name`: "smidja" → "misetay"
- `displayName`: "Smidja" → "Misetay"
- `commands[].command`: "smidja.*" → "misetay.*"
- `commands[].title`: "Smidja: *" → "Misetay: *"
- `languageModelTools[].name`: "smidja_*" → "misetay_*"

**README.md:**
- All occurrences of "Smidja" → "Misetay"

**Agent and Skills:**
- Rename file: `agents/smidja.agent.md` → `agents/misetay.agent.md`
- Update tool references in agent file: "dshearer.smidja/*" → "dshearer.misetay/*"
- Update tool references in skills: "dshearer.smidja/*" → "dshearer.misetay/*"
- Update skill names: "smidja-*" → "misetay-*"

**Source code (src/):**
- Tool registration names: "smidja_*" → "misetay_*"
- Command registration IDs: "smidja.*" → "misetay.*"
- String literals and console messages: "Smidja" → "Misetay", "smidja" → "misetay"
- File path references: "smidja.agent.md" → "misetay.agent.md"
- View IDs: "smidjaTaskStatus" → "misetayTaskStatus"
- Test extension ID: "dshearer.smidja" → "dshearer.misetay"

**Documentation:**
- `.github/copilot-instructions.md`: "Smidja" → "Misetay"
- `openspec/specs/`: Update existing spec files (covered by delta specs)

## Capabilities

### New Capabilities
<!-- No new capabilities - this is a rename only -->

### Modified Capabilities
<!-- Existing specs contain references to "Smidja" and "smidja" that need updating -->
- `installation`: Command labels, messages, and file paths reference "Smidja"
- `code-review-flow`: Tool names use "dshearer.smidja" prefix
- `state-management`: Tool names use "dshearer.smidja" prefix
- `task-status-view`: Command label references "Smidja"

## Impact

**Affected files:**
- `package.json` - name, displayName, commands, languageModelTools
- `README.md` - all project name references
- `.github/copilot-instructions.md` - project name reference
- `agents/smidja.agent.md` - file rename and tool references
- `skills/**/*.md` - tool references and skill names
- `src/extension.ts` - command IDs, file paths, messages
- `src/taskTools.ts` - tool registration names, console messages
- `src/navigationTools.ts` - tool registration names, console messages
- `src/taskStatusView.ts` - view ID and title
- `src/beadsBackend.ts` - code comments
- `src/test/extension.test.ts` - extension ID and test assertions
- `openspec/specs/*` - covered by delta specs in this change

**No breaking changes** - This is purely a cosmetic rename. All functionality remains identical.
