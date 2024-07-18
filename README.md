# 概要

PrAha Challenge の設計課題の[雛形](https://github.com/praha-inc/praha-challenge-ddd-template)をベースに特大課題をやっていくリポジトリ

```md
# プラハチャレンジ DDD 課題テンプレート

環境構築が大変という方のために、ある程度オニオンアーキテクチャに準拠する形でサンプルアプリケーション（TODO リスト）を用意しました。ここから拡張していく形で課題に取り組んでください。

## 環境構築

- `pnpm install`で依存関係をインストールしてください。
- `.env.example`をコピーして、`.env`を作成してください。
- `pnpm run migration:apply`で DB のマイグレーションを実行してください。
  - `docker compose up`で DB のコンテナーを起動しておく必要があります。

## 開発

- `pnpm run dev`で API サーバーを起動できます。
- `pnpm run lint`で Biome による静的解析とフォーマットを実行できます。
- `pnpm run build`でビルド、`pnpm run start`でビルドしたものを起動できます。
- `pnpm run test`でテストを実行できます。
- `./src/libs/drizzle/schema.ts`でデータベースのテーブル定義を変更できます。
  - 変更したテーブル定義を DB に反映するには、`pnpm run migration:generate`でマイグレーションファイルを生成し、`pnpm run migration:apply`でマイグレーションを実行してください。
- DB のマイグレーションファイル（`./src/libs/drizzle/migrations/*`）を削除したい場合は、`pnpm run migration:drop`で削除してください。
  - `drizzle-kit`がマイグレーションの整合性を取れなくなるため、手作業で削除しないでください。

## 注意

このリポジトリはあくまで環境構築の手間を省くためのリポジトリです。Value Object がない・Nominal Typing ができていない（Task と同じプロパティを持つクラスだと型が等価になってしまう）などなど、厳密な実装は全然できておりません。あるべき姿を模索しつつ実装を進めてください！
```
