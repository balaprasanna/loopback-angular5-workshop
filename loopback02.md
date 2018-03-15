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

```