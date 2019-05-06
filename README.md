# hnr-cafe

## 見
https://hnr-cafe.netlify.com/

## 環境
 - `.node-version` を見ろ
 - ちなみに `v6.0.0` でも動いた
 - 音声は `.mp3` を推奨しています。
   - `.wav` だと Netlify の CDN に載るまで重く、走馬灯ボタンが全面的に崩壊気味になるためです
   - 対応拡張子は以下の通り
     - `.mp3`
     - `.wav`
     - `.ogg`
     - `.acc`

## 作

1. `$ npm install`
2. 編集する
3. `$ npm run fmt` で ESLint と Prettier を実行
4. `$ npm run build` で HTML を生成し、ローカルで動作を確認出来る
5. `$ git push origin <branch>` でリモートリポジトリに pushする
6. GitHub 上で PullRequest を作成し、Netlify でビルドが実行されて、ブランチ毎の環境へのデプロイが行われるので、動作確認する
7. master merge で本番環境に反映する

### Docker 上でやる

何がなんでもローカル環境を汚したくない人向け

1. Docker と docker-compose の実行環境を用意する
2. `$ docker-compose build`
3. `$ docker-compose run --rm npm run <COMMAND>` で各種コマンドを実行する

## 増

1. `client/sounds/<人物>/<台詞>.mp3` に mp3 を追加
2. `npm run build` でビルド
3. fork なりなんなりしてから PR 投げてください
