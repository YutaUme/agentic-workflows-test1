# test-repo1

Agentic Workflows で `analytics/log.json` の自動同期を検証するためのサンプルリポジトリです。

## アプリ概要

- 画面には `HelloWorld` と `送信` ボタンを表示
- ページ表示時に `show_page_home` を送信
- 送信ボタンクリック時に `click_btn_send` を送信

実装ファイル:

- `app/index.html`
- `app/main.js`

## ログ管理

- 管理ファイル: `analytics/log.json`
- 現在は意図的に `show_page_home` のみ記載
- `click_btn_send` は未記載のため、差分がある状態

## Agentic Workflow

- 定義ファイル: `.github/workflows/sync-log-json.md`
- 生成ファイル: `.github/workflows/sync-log-json.lock.yml`
- トリガー:
  - `workflow_dispatch`
  - `push` to `develop`

Workflow は `app/main.js` の `EVENT_DEFINITIONS` を正として、`analytics/log.json` を同期します。
