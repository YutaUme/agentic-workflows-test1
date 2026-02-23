# test-repo1

Agentic Workflows で `analytics/log.json` の自動同期を検証するためのサンプルリポジトリです。

## アプリ概要

- 画面には `HelloWorld` と `送信` ボタンを表示
- ページ表示時に `show_page_home` を送信

実装ファイル:

- `app/index.html`
- `app/main.js`

## ログ管理

- 管理ファイル: `analytics/log.json`
- 現在は `show_page_home` を管理

## Agentic Workflow

- 定義ファイル: `.github/workflows/sync-log-json.md`
- 生成ファイル: `.github/workflows/sync-log-json.lock.yml`
- トリガー:
  - `workflow_dispatch`
  - `push` to `develop`

Workflow は `app/main.js` の `sendLog("name")` 呼び出しを正として、`analytics/log.json` を同期します。
