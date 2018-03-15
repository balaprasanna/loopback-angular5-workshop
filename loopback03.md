## Lets explore with loopback to create few models

### Create a category model
```
lb model Category
```

Step 1:
```
root@3da899db6882:/usr/src/app/backend/server# lb model Category

Just found a `.yo-rc.json` in a parent directory.
Setting the project root at: /usr/src/app/backend
? Enter the model name: (Category) 
```

Step 2: Select `mysqldb` datasource - which we created in the previous stage
```
? Select the datasource to attach Category to: 
  db (memory) 
❯ mysqldb (mysql) 
  (no datasource) 

```

Step 3: Select Model base class - Please select `PersistedModel`
```
Select model's base class (Use arrow keys)
  Model 
❯ PersistedModel 

```

Step 4:  Want to expose this model as REST API. ? Say Yes .
```
Expose Category via the REST API? (Y/n) Y
```

Step 5: Leave it as default: Just press `<enter>` key.
```
 Custom plural form (used to build REST URL): 
```

Step 6: Choose where the model should live. Is it going to be shared across both client / server.
For our case, we place it under `server`
```
Common model or server only? (Use arrow keys)
 common 
❯ server 
```
So select server

### Lets create some properties.
- id (auto generated) no need to inform, so dont need to create.
- name

Step 7: 
```
Enter an empty property name when done.
? Property name: name
   invoke   loopback:property
? Property type: string
? Required? Yes
? Default value[leave blank for none]: 

```

Once we are done with this, You can press `<enter>` key again, to confirm that you are done with properties for that model.


Just a recap of all the steps:
```
root@3da899db6882:/usr/src/app/backend/server# lb model Category

Just found a `.yo-rc.json` in a parent directory.
Setting the project root at: /usr/src/app/backend
? Enter the model name: Category
? Select the datasource to attach Category to: mysqldb (mysql)
? Select model's base class PersistedModel
? Expose Category via the REST API? Yes
? Custom plural form (used to build REST URL): 
? Common model or server only? server
Let's add some Category properties now.

Enter an empty property name when done.
? Property name: name
   invoke   loopback:property
? Property type: string
? Required? Yes
? Default value[leave blank for none]: 

Let's add another Category property.
Enter an empty property name when done.
? Property name: 

```

### How to verify, whats generated.
You can find the generated `Category` model under the server/model folder.
```
root@3da899db6882:/usr/src/app/backend# ls server/models/
category.js  category.json
```

Let have a look at those files.
- category.js
```js
'use strict';

module.exports = function(Category) {

};

```

- category.json
```json
{
  "name": "Category",
  "base": "PersistedModel",
  "idInjection": true,
  "options": {
    "validateUpsert": true
  },
  "properties": {
    "name": {
      "type": "string",
      "required": true
    }
  },
  "validations": [],
  "relations": {},
  "acls": [],
  "methods": {}
}

```

Also have a look at the `model-config.json` file.
You can see that, category model is added.

```json
{
  "_meta": {
    "sources": [
      "loopback/common/models",
      "loopback/server/models",
      "../common/models",
      "./models"
    ],
    "mixins": [
      "loopback/common/mixins",
      "loopback/server/mixins",
      "../common/mixins",
      "./mixins"
    ]
  },
  "User": {
    "dataSource": "db"
  },
  "AccessToken": {
    "dataSource": "db",
    "public": false
  },
  "ACL": {
    "dataSource": "db",
    "public": false
  },
  "RoleMapping": {
    "dataSource": "db",
    "public": false,
    "options": {
      "strictObjectIDCoercion": true
    }
  },
  "Role": {
    "dataSource": "db",
    "public": false
  },
  "Category": {
    "dataSource": "mysqldb",
    "public": true
  }

```

If you noticed above, you can see this section which contains `Category` model.
```json
"Category": {
    "dataSource": "mysqldb",
    "public": true
  }
```


### Finally, lets test out Category model using REST API.
For that, we need to run the node application (loopback server)

```
cd /usr/src/app/backend/
node .
```


### Oops: Error

Right ??

Yeah you will have the following error, when you try to access the Category API

If you try to make a GET request to this `http://localhost:3000/api/Categories` route.

```bash
curl -X GET --header 'Accept: application/json' 'http://localhost:3000/api/Categories'
```

You will get the following error.

```json
{
  {
  "error": {
    "statusCode": 500,
    "name": "Error",
    "message": "ER_NO_SUCH_TABLE: Table 'sampledb.Category' doesn't exist",
    "code": "ER_NO_SUCH_TABLE",
    "errno": 1146,
    "sqlMessage": "Table 'sampledb.Category' doesn't exist",
    "sqlState": "42S02",
    "index": 0,
    "sql": "SELECT `name`,`id` FROM `Category` ORDER BY `id`",
    "stack": "Error: ER_NO_SUCH_TABLE: Table 'sampledb.Category' doesn't exist\n    at Query.Sequence._packetToError (/usr/src/app/backend/node_modules/mysql/lib/protocol/sequences/Sequence.js:52:14)\n    at Query.ErrorPacket (/usr/src/app/backend/node_modules/mysql/lib/protocol/sequences/Query.js:77:18)\n    at Protocol._parsePacket (/usr/src/app/backend/node_modules/mysql/lib/protocol/Protocol.js:279:23)\n    at Parser.write (/usr/src/app/backend/node_modules/mysql/lib/protocol/Parser.js:76:12)\n    at Protocol.write (/usr/src/app/backend/node_modules/mysql/lib/protocol/Protocol.js:39:16)\n    at Socket.<anonymous> (/usr/src/app/backend/node_modules/mysql/lib/Connection.js:103:28)\n    at Socket.emit (events.js:180:13)\n    at addChunk (_stream_readable.js:269:12)\n    at readableAddChunk (_stream_readable.js:256:11)\n    at Socket.Readable.push (_stream_readable.js:213:10)\n    at TCP.onread (net.js:578:20)\n    --------------------\n    at Protocol._enqueue (/usr/src/app/backend/node_modules/mysql/lib/protocol/Protocol.js:145:48)\n    at PoolConnection.query (/usr/src/app/backend/node_modules/mysql/lib/Connection.js:208:25)\n    at runQuery (/usr/src/app/backend/node_modules/loopback-connector-mysql/lib/mysql.js:186:16)\n    at executeWithConnection (/usr/src/app/backend/node_modules/loopback-connector-mysql/lib/mysql.js:228:7)\n    at Ping.onOperationComplete [as _callback] (/usr/src/app/backend/node_modules/mysql/lib/Pool.js:110:5)\n    at Ping.Sequence.end (/usr/src/app/backend/node_modules/mysql/lib/protocol/sequences/Sequence.js:88:24)\n    at Ping.Sequence.OkPacket (/usr/src/app/backend/node_modules/mysql/lib/protocol/sequences/Sequence.js:97:8)\n    at Protocol._parsePacket (/usr/src/app/backend/node_modules/mysql/lib/protocol/Protocol.js:279:23)\n    at Parser.write (/usr/src/app/backend/node_modules/mysql/lib/protocol/Parser.js:76:12)\n    at Protocol.write (/usr/src/app/backend/node_modules/mysql/lib/protocol/Protocol.js:39:16)\n    at Socket.<anonymous> (/usr/src/app/backend/node_modules/mysql/lib/Connection.js:103:28)\n    at Socket.emit (events.js:180:13)\n    at addChunk (_stream_readable.js:269:12)\n    at readableAddChunk (_stream_readable.js:256:11)\n    at Socket.Readable.push (_stream_readable.js:213:10)\n    at TCP.onread (net.js:578:20)"
            }
    }
}

```


### Now we need to actually create the tables, in order to fix this.
How to create tables ??
We are going to do auto-migrate the tables from nodejs.
Which means, the tables will be created for us based on the model definition.

### Create a file under /server/boot folder

```
cd server/boot/
touch whole-db-migrate.js
```

Add the following code inside it.
```js
module.exports = function (app) {

    // Do this once. When u want to install for first time.
    app.dataSources.mysqldb.automigrate();

}
```

### Hint:

Please note that, `automigrate` will re-create all the tables every time when u restart the server. Which mean you will loose all your exiting data from that table.
We shall talk about it. 
There is a another way to do. You can use `autoupdate`.

### Now let re-run the app again.
```
root@3da899db6882:/usr/src/app/backend# node .
Web server listening at: http://localhost:3000
Browse your REST API at http://localhost:3000/explorer

```

### Now browser the explorer and test Category model.

Try to create two categories.
- shoes
- laptop

Now when you try to get all the category using `http://localhost:3000/api/Categories`.
You should be able to get this response.
```json
[
  {
    "name": "shoes",
    "id": 1
  },
  {
    "name": "laptop",
    "id": 2
  }
]
```

### You finally made it.
Now you successfully create a REST API for your model `Category`.
Congratulations.

But there is a lot more, you can do with this. Let learn from next stage.

[click here for next stage](loopback04.md)