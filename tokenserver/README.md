# Token Server

日本語は下にあります。

The goal of the this token server is to provide an example of how to implement a two-legged authentication workflow for interacting with the iTwin Platform and configure it for the iTwin Viewer.

This server holds the client secret created for your application and manages issuing the token to a client-side application that will allow access to the
the iTwin Platform. This will enforce a secure workflow when implementing the [client credentials workflow](https://developer.bentley.com/apis/overview/authorization/#clientcredentialflow).

> __Important__: It is strongly recommended that this server be placed behind a layer of authorization and/or authentication that fits your workflow and validates the user has access to get the token required. However to simplify the example, this server will not be setup with any additional checking and essentially provide an "unprotected" endpoint.

## Setup token server

Use the CLIENT_ID and CLIENT_SECRET created in the [client registration](../README.md#client-registration) to populate the values in the `.env`.

Run,

- `npm install`
- `npm run build`
- `npm start`
- Note the port the server starts on, that will be used when configuring the Viewer.
  - The PORT can be configured by setting the `PORT` in the `.env`

## Setup the iTwin Viewer to use the proxy

To configure the viewer to use the token server, make the following change to the `Viewer` component in [App.tsx](../react-viewer/src/App.tsx):

```jsx
<Viewer
  // ... (iModel related information)
  authClient={myTokenServerAuthClient}
>
```

If a custom port is defined in setting up the token server, provide the new port using `TOKEN_URL`. The default value is, `http://localhost:3001/getToken`.

---

# トークン・サーバー
このトークンサーバーの目的は、iTwinプラットフォームと対話するための2本足の認証ワークフローを実装し、iTwin Viewer用に構成する方法の例を提供することです。

このサーバーは、アプリケーション用に作成されたクライアントシークレットを保持し、iTwinプラットフォームへのアクセスを許可するクライアント側アプリケーションへのトークンの発行を管理します。これにより、クライアント認証ワークフローを実装する際に、安全なワークフローが実施されます。

> __重要__: このサーバーは、ワークフローに適合し、ユーザーが必要なトークンを取得するためのアクセス権を持っていることを検証する、承認および/または認証のレイヤーの背後に配置することを強くお勧めします。しかし、この例を簡単にするために、このサーバーは追加のチェックを行わず、本質的に「保護されていない」エンドポイントを提供します。

## トークン・サーバーのセットアップ
クライアント登録で作成したCLIENT_ID、CLIENT_SECRETを使用して、.envに値を入力します。

実行方法

- `npm install`
- `npm run build`
- `npm start`
- Viewer を設定する際に使用される、サーバーの起動ポートをメモしておきます。
  - PORTは`.env`に`PORT`を設定することで設定可能です。

## iTwin Viewerがプロキシを使用するように設定する
トークン・サーバーを使用するようにビューアを設定するには、App.tsx の Viewer コンポーネントを以下のように変更します。

```jsx
<Viewer
  // ... (iModel related information)
  authClient={myTokenServerAuthClient}
>
```

トークンサーバーのセットアップでカスタムポートが定義されている場合、TOKEN_URLを使用して新しいポートを指定します。デフォルト値は、http://localhost:3001/getToken。

www.DeepL.com/Translator（無料版）で翻訳しました。