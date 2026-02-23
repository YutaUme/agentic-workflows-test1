---
on:
  workflow_dispatch:
  push:
    branches: [develop]

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

Update `analytics/log.json` to match the current app log definitions in `app/log_events.ts`.

## Tasks

1. Read `app/log_events.ts` and extract all objects in `logDefinitions` as:
   - `name`
   - `condition`
   - `description`
2. Read `analytics/log.json`.
3. Make `analytics/log.json` the source-of-truth mirror of `logDefinitions`:
   - Add missing logs.
   - Update logs when `condition` or `description` changed.
   - Remove logs that are no longer present in `logDefinitions`.
4. Sort output by `name` ascending.
5. Keep JSON formatting with 2-space indentation and a trailing newline.

## Pull request policy

- If `analytics/log.json` did not change, do not open a pull request.
- If it changed, open one pull request with:
  - title: `chore: sync analytics log catalog`
  - body: include a short summary of added/updated/removed logs.

## Constraints

- Edit only `analytics/log.json`.
- Do not modify `app/log_events.ts`.
