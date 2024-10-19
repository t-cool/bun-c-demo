# bun-c-demo

このプロジェクトは、BunとC言語を使用して、C言語で作成された関数を呼び出す方法を説明します。コンパイルされていない共有ライブラリとコンパイルされた共有ライブラリの両方を使用して、C言語で作成された関数を呼び出す方法を説明します。

## 準備

1. Bun のインストール: https://bun.sh

## 手順

1. 依存関係をインストールします。

```bash
bun install
```

2. コンパイルしていない共有ライブラリを使用する場合は以下のコマンドを実行します。

```bash
bun run index.js
```

3. C言語のコードをコンパイルして共有ライブラリを作成し、読み込む場合は以下のコマンドを実行します。

```bash
gcc -shared -o libcalculator.dylib -fPIC calculator.c
bun run compiled.js
```

このプロジェクトはbun v1.1.30の`bun init`を使って作成した。[Bun](https://bun.sh)は高速なオールインワンJavaScriptランタイムです。

## ライセンス

MIT
