## Lets explore with loopback to create a datasource

### Create a mysql datasource
```
lb --help
```

Expected Result:
You can create datasource, model, property, relation, acl, remote-method and much more..

```
Usage:
  lb app [options] [<name>]

Options:
  -h,   --help             # Print the command's options and usage
        --skip-cache       # Do not remember prompt answers                     
     Default: false
        --skip-install     # Do not install npm dependencies                    
     Default: false
        --skip-next-steps  # Do not print "next steps" info
        --explorer         # Add Loopback Explorer to the project (true by defau
lt)
        --loopbackVersion  # Select the LoopBack version
        --template         # Set up the LoopBack application template
        --bluemix          # Set up as a Bluemix app

Arguments:
  name  # Name of the application to scaffold.  Type: String  Required: false

Description:
  Creates a LoopBack application.

Example:

  lb

  This will create:

    package.json: Development packages installed by npm.

    common/models/<modelName>.json: Definition of basic models provided by LoopBack.
    common/models/: Directory where to put custom model code.

    server/server.js: The main application file.
    server/config.json: Machine-editable app configuration.
    server/datasources.json: Definition of data sources.
    server/model-config.json: Model configuration.

Available commands:

  lb acl
  lb app
  lb bluemix
  lb boot-script
  lb datasource
  lb export-api-def
  lb middleware
  lb model
  lb oracle
  lb property
  lb relation
  lb remote-method
  lb soap
  lb swagger
  lb zosconnectee

```

### Now lets create a mysql datasource
Hit: Before you proceed make sure, you are inside the loopback project folder.
In our case, its `backend` folder.
```
lb datasource
```
Hints: 
- For mysql connector, use down arrow keys to find the mysql connector.
- username, password, database name , ALl these we have created in stage 1. (Refer to stage 1- installtion and running the containers.)

### Important Hind: If you are using docker. please make sure you are using `mysqldb` instead of `localhost`

In this case: 
```json
"mysqldb": {
    "host": "mysqldb",
    "port": 3306,
    "url": "mysql://appuser:supersecret@mysqldb:3306/sampledb",
    "database": "sampledb",
    "password": "supersecret",
    "name": "mysqldb",
    "user": "appuser",
    "connector": "mysql"
  }
```

Please provide the following details
```
root@3da899db6882:/usr/src/app/backend# lb datasource
? Enter the datasource name: mysqldb
? Select the connector for mysqldb: MySQL (supported by StrongLoop)
? Connection String url to override other settings (eg: mysql://user:pass@host/d
? host: mysqldb
? port: 3306
? user: appuser
? password: ***********
? database: sampledb
? Install loopback-connector-mysql@^2.2 Yes
+ loopback-connector-mysql@2.4.1
added 12 packages from 16 contributors in 6.489s

```

### You can verify the following file.
`/usr/src/app/backend/server/datasources.json`
This file will have the following.

```json
{
  "db": {
    "name": "db",
    "connector": "memory"
  },
  "mysqldb": {
    "host": "mysqldb",
    "port": 3306,
    "url": "mysql://appuser:supersecret@mysqldb:3306/sampledb",
    "database": "sampledb",
    "password": "supersecret",
    "name": "mysqldb",
    "user": "appuser",
    "connector": "mysql"
  }
}
```

This is datasouce that, we have generated just now using, loopback cli.

[click here for next stage](loopback03.md)