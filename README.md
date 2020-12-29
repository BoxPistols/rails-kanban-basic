# README

---

- Rails 開発基盤 Example:
  - <https://github.com/BoxPistols/tweetApp_Rails_TP/wiki>

---

## Rails Basic

- Link = `<%= link_to '表示したい文字', パス, メソッド %>`
- マイグレーションファイル作成 `rails g migration クラス名 カラム名:型`

---

## 要件定義/設計

- サインアップ・サインイン機能
  - ユーザー名
  - メールアドレス
  - パスワード
- カンバン/リスト
  - リストタイトル
  - 作成ユーザー情報
- カンバン/カード
  - タイトル
  - カード詳細
  - リストの場所との照合

## 主に必要な情報

1.  ユーザー情報
2.  リスト情報
3.  カード情報

## Bootstrap / FA の導入

- Gem でなく WebPack と Yarn で

## 共通 Component

- 共通化方法
  - app/views/partial/\_header.html.erb を作成して
  - app/views/layouts/application.html.erb で include

## Devise

1.  Devise の Gem をインストール
2.  Devise のフラッシュメッセージを追加
3.  Devise のビューファイルをインストール
4.  User モデルを作成
5.  Users テーブルを作成
6.  Devise の導入の確認
7.  ナビゲーションヘッダーの非表示

add gem
`gem 'devise'`

g/instal
`rails generate devise:install`
`bundle`

Flash Message
layout/application.html.erb

Devise View
`rails g devise:views`

UserModel
`rails g devise User`

Check config/routes.rb

```ruby
Rails.application.routes.draw do
  devise_for :users
  root 'top#index'
end
```

Create Table
`rails db:migrate`

ログイン/登録画面
<http://localhost:3000/users/sign_in>
<http://localhost:3000/users/sign_up>

### Toggle header

    if sign in
      able view
    else
      not view

Rails devise で使えるようになるヘルパーメソッド一覧
<https://qiita.com/tobita0000/items/866de191635e6d74e392>

### ユーザー登録

登録ユーザーのレコードを取得

> first メソッドは、デフォルトでは主キー順の最初のレコードを取り出します。

<https://railsguides.jp/active_record_querying.html#first>

      rails console
      User.first
      exit

### Sign Out

- ルートの確認
  - `rails routes`
    - keyword `sign_out` Search

```ruby
# HTTPメソッド: DELETE
destroy_user_session DELETE /users/sign_out(.:format)

devise/sessions#destroy
```

views/partial/\_header.html.erb
`<li><%= link_to "サインアウト", destroy_user_session_path, class: "nav-link", method: :delete %></li>`

パス：destroy_user_session_path
メソッド：delete

### リダイレクト

#### 要件/仕様

- サインアウト
  - サインイン・サインアップページ以外のページ行かせない
- 非サインイン
  - サインインページにリダイレクトする

Devise のヘルパーメソッド`authenticate_user!`を使う
`app/controllers/application_controller.rb`

```ruby
      # アクションを実行する前にフィルターをかけるメソッド
      before_action :authenticate_user!
      # 非サインインアクセス時、サインインページにリダイレクト
```

- ログインしていない時/ログアウト時
  - <http://localhost:3000/> にアクセス
    - <http://localhost:3000/users/sign_in>　にリダイレクト

## users テーブルに name カラムを追加

devise に username カラムを追加し、username を登録できるようにする。
<https://qiita.com/yasuno0327/items/ff17ddb6a4167fc6b471>

- Devise にはデフォルトで name カラムが無い
- ユーザー名がサービスで必要な場合は、テーブルにカラム追加が必要
- name カラムを users テーブルに追加

- Flow
  - カラムを追加するためのマイグレーションファイルの作成
  - マイグレーションファイルを実行
  - バリデーションの設定
  - name カラムを保存できるようにする

`rails g migration クラス名 カラム名:型`
`rails g migration AddNameToUser name:string`

※ 動かない時：`spring stop`

Created:
`db/migrate/20201229111051_add_name_to_user.rb`
