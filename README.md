# README

---

- Example:
  - <https://github.com/BoxPistols/tweetApp_Rails_TP/wiki>

---

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
