---
on:
  pull_request:
    types: [closed]
    branches: [develop]
engine:
  id: gemini
  model: gemini-2.5-flash

permissions:
  contents: read
  pull-requests: read

network: defaults

tools:
  github:
    toolsets: [repos]

safe-outputs:
  create-pull-request:
---

# sync-log-json

Update `analytics/log.json` to match the current app log definitions in `app/main.js`.

## Tasks

1. Read `app/main.js` and extract log names from all `sendLog("name")` calls.
   - Use the first argument string literal as `name`.
2. For each extracted log name, infer `condition` and `description` by reading surrounding code context:
   - Determine where and when the call is triggered (for `condition`).
   - Summarize the user/business meaning in one short sentence (for `description`).
   - If the code context is insufficient, keep the existing values from `analytics/log.json` when available.
3. Read `analytics/log.json`.
4. Make `analytics/log.json` the source-of-truth mirror of extracted log names:
   - Add missing logs.
   - Update `condition` or `description` using the latest inference from code context.
   - Remove logs that are no longer present in `sendLog(...)` calls.
5. Sort output by `name` ascending.
6. Keep JSON formatting with 2-space indentation and a trailing newline.

## Pull request policy

- If `analytics/log.json` did not change, do not open a pull request.
- If it changed, open one pull request with:
  - title: `chore: sync analytics log catalog`
  - body: include a short summary of added/updated/removed logs.

## Constraints

- Edit only `analytics/log.json`.
- Do not modify `app/main.js`.
