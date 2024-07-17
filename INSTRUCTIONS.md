# [Create a CAP Business Service with Node.js Using Visual Studio Code](https://developers.sap.com/tutorials/cp-apm-nodejs-create-service..html#b96fcbea-124c-4ec6-8bd9-bbea4d461504)

## Next Steps

- Open a new terminal and run `cds watch`
- (in VS Code simply choose _**Terminal** > Run Task > cds watch_)
- Start adding content, for example, a [db/schema.cds](db/schema.cds).

## Add data

- Run the command

```shell
cds add data
```

Add some values to the generated `.csv` files.

## Persist data

- Add the following code to the `package.json` file.

```json
"cds": {
  "requires": {
    "db": {
      "kind": "sqlite",
      "credentials": { "url": "db/my-bookshop.sqlite" }
    }
  }
}
```

- Run the command to persist the data to `SQLite`.

```shell
cds deploy
```

- Open `SQLite` and view the newly created database:

```shell
sqlite3 db/my-bookshop.sqlite -cmd .dump
```
