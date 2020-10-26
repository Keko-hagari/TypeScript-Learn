## やった事

### typescript の特性について

- typescript は実行する前に error を見つけてくれる
- error にされても〜.to_s など型を指定すれば解消される
- .json ファイルの設定

## ハマった事

- practice1 フォルダを作ってファイルを移行したら error になった（done）
  - tsconfig.json の include 内が src から practice1/src になっていたため error になっていた
  - inclede で探すのは tsconfig.json のある階層を root として探す

## わからない事
