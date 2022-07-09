## 内容について
- "yamaguchi","houfu","kudamatsu","ube"の地域を指定することで、おすすめのラーメン屋を抽出する。
## 機能
- サーバー起動後、以下リクエストを送信。
curl -X POST -H "CONTENT-TYPE: APPLICATION/JSON" -D "{"tiiki":"***"}" LOCALHOST:3001/eat
"***"箇所には
yamaguchi、houfu、kudamatsu、ube
のどれかを入力。