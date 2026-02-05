## Context

This is a straightforward project rename from "Smidja" to "Misetay" for brand identity purposes. The functionality, architecture, and code logic remain completely unchanged - only text references and file names need to be updated. This is a VS Code extension project written in TypeScript with associated documentation and configuration files.

## Goals / Non-Goals

**Goals:**
- Replace all occurrences of "Smidja" with "Misetay" across documentation, configuration, and code
- Rename files that contain "smidja" in their names to use "misetay" instead
- Ensure the extension continues to function identically after the rename
- Maintain git history through proper file renames

**Non-Goals:**
- Changing any functionality or behavior of the extension
- Modifying the code structure, architecture, or implementation
- Adding or removing features

## Decisions

**Decision 1: Case-sensitive search and replace**
- Use case-sensitive replacement to preserve proper capitalization in different contexts
- "Smidja" → "Misetay" (title case)
- "smidja" → "misetay" (lowercase, for file names and package names)
- Rationale: Maintains consistency with the original naming conventions and avoids unintended replacements

**Decision 2: Git mv for file renames**
- Use `git mv` to rename files containing "smidja" in their names
- Specifically: `agents/smidja.agent.md` → `agents/misetay.agent.md`
- Rationale: Preserves git history and makes the rename traceable in version control

**Decision 3: Package name change**
- Update the `name` field in package.json from "smidja" to "misetay"
- Rationale: Package name should match the project brand; this is the extension's identifier

**Decision 4: Systematic file-by-file updates**
- Process each affected file individually rather than bulk find-replace
- Review each occurrence to ensure context is appropriate
- Rationale: Minimizes risk of breaking references or inadvertent changes; easier to verify correctness

## Risks / Trade-offs

**Risk: Breaking references in hidden or binary files**
→ Mitigation: Limit changes to known text files (md, json, ts); verify extension loads after changes

**Risk: Missing occurrences in comments or documentation**
→ Mitigation: Use grep/search to find all occurrences before starting; systematic file review

**Trade-off: Manual vs. automated replacement**
- Manual file-by-file ensures accuracy but takes more effort
- Automated find-replace is faster but riskier
→ Chosen approach: Semi-automated with verification at each step

**Risk: Repository name mismatch if package.json contains URLs**
→ Mitigation: Check package.json repository field and update if it references the project name
