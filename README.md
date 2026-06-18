
# XLM Tip widget

A lightweight, zero-dependency Stellar Lumens (XLM) tipping and payment button that can be easily embedded into any web page by just copying and pasting the code.

## Features

- **Zero Dependencies:** Does not rely on jQuery or external QR code generation libraries, making it highly secure, fast, and conflict-free.
- **Responsive & Mobile Friendly:** - **Mobile:** Tapping the button automatically opens installed Stellar wallet apps (e.g., LOBSTR) via the SEP-0007 standard.
  - **Desktop:** Clicking the button instantly generates and displays a payment QR code on the spot.
- **Dynamic Amount:** Users can input any custom amount of XLM they wish to send.

## How to Use

1. Copy the entire code from the `XLMtipwidget.html` file in this repository.
2. Replace the placeholder address in the code with your own Stellar receiving address (the public key starting with `G`):

```
const destination = "YOUR_STELLAR_ADDRESS_HERE";
```

# XLMチップウィジェット (ステラルーメン送金ボタン)

Webページにコピペするだけで設置できる、外部ライブラリ不要の軽量なStellar Lumens（XLM）送金ボタンです。

## 特徴

- **外部依存なし:** jQueryや外部のQRコード生成ライブラリを読み込まないため、動作が軽量で競合のリスクがありません。
- **レスポンシブ対応:** - **スマートフォン:** ボタンをタップすると、LOBSTRなどのStellarウォレットアプリが自動で起動します（SEP-0007準拠）。
  - **PC:** ボタンをクリックすると、その場に送金用のQRコードが生成・表示されます。
- **金額指定可能:** ユーザーが任意の金額（XLM）を入力して送金できます。

## 使い方

1. 本リポジトリの `XLMtipwidget.html` 内のコードをすべてコピーします。
2. コード内の以下の部分をご自身のStellar受取アドレス（`G`から始まる公開鍵）に書き換えます。

```
const destination = "YOUR_STELLAR_ADDRESS_HERE";
```

[MIT License](LICENSE)
