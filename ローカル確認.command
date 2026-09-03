#!/bin/bash

set -u

PROJECT_DIR="$(cd "$(dirname "$0")" && pwd)"
PREVIEW_URL="http://127.0.0.1:3000"

cd "$PROJECT_DIR" || exit 1

if curl -fsS "$PREVIEW_URL" >/dev/null 2>&1; then
  open "$PREVIEW_URL"
  exit 0
fi

if ! command -v npm >/dev/null 2>&1; then
  echo "Node.js / npm が見つかりません。"
  echo "この画面を閉じずに、制作者へご連絡ください。"
  read -r
  exit 1
fi

if [ ! -d node_modules ]; then
  echo "初回起動の準備をしています。"
  npm install || {
    echo "準備に失敗しました。この画面を閉じずに、制作者へご連絡ください。"
    read -r
    exit 1
  }
fi

echo "Shiny Girl ローカル確認版を準備しています…"
npm run build || {
  echo "確認版の準備に失敗しました。この画面の内容を制作者へお知らせください。"
  read -r
  exit 1
}

echo "ローカル確認版を起動しています…"
npm run start &
SERVER_PID=$!

stop_server() {
  if kill -0 "$SERVER_PID" >/dev/null 2>&1; then
    kill "$SERVER_PID" >/dev/null 2>&1
  fi
}
trap stop_server EXIT INT TERM

for _ in {1..60}; do
  if curl -fsS "$PREVIEW_URL" >/dev/null 2>&1; then
    open "$PREVIEW_URL"
    echo ""
    echo "ブラウザに確認画面を開きました。"
    echo "確認中は、このターミナル画面を開いたままにしてください。"
    echo "終了するときは Control + C を押してください。"
    wait "$SERVER_PID"
    exit $?
  fi
  sleep 1
done

echo "起動を確認できませんでした。この画面の内容を制作者へお知らせください。"
read -r
exit 1
