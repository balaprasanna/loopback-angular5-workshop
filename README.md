## Build your REST API's in minutes.

```
Welcome to the workshop 
```

### Install.

#### Backend

Docker: Pull the node images for the backend.
```
docker pull balanus/loopback
```

Docker: run a local development docker container for loopback
```
docker run -d -it -v <path to your folder>:/usr/src/app -p 3000:3000 --name="api" balanus/loopback bash
```

##### Example
```
docker run -d -it -v /home/std-user01/Projects/workshop/session1_loopback_api_demo/:/usr/src/app -p 3000:3000 --name="api" balanus/loopback bash
```

Now connect to the docker container, which provides loopback-cli

```
docker exec -it api bash
```

Now you are inside the container, you will be able to generate loopback application.

### Check your installation is correct or not.

Run docker exec and go inside the container, and make sure you are having the same version of the following.
```
root@abd70e13f28c:/# node --version
v9.8.0
root@abd70e13f28c:/# npm --version
5.7.1
root@abd70e13f28c:/# lb --version
4.1.0 (generator-loopback@5.7.0 loopback-workspace@4.1.1)
```
 
Docker images:
```
std-user01@stduser01-Latitude-E5470:~/mac$ docker images
REPOSITORY          TAG                 IMAGE ID            CREATED             SIZE
balanus/loopback    latest              16f9267a52bf        37 minutes ago      804MB
```


#### Frontend: Angular 5
FYI- Hint: This is based on alpine images.

Docker: Pull the ng5/Angular-5 images for the frontend.
```
docker pull balanus/ng5
```

Docker: run a local development docker container for angular5
```
docker run -d -it -v <path to your folder>:/app -p 4200:4200 --name="web" balanus/ng5 bash
```
##### Example
```
docker run -d -it -v /home/std-user01/Projects/workshop/session1_loopback_api_demo/:/app -p 4200:4200 --name="web" balanus/ng5 sh
```

Now connect to the docker container, which provides angular-cli /ng

```
docker exec -it web sh
```

Now you are inside the container, you will be able to generate angular5/ng application.

### Check your installation is correct or not.

Run docker exec and go inside the container, and make sure you are having the same version of the following.
```
/ # node --version
v8.9.4
/ # npm --version
5.7.1
/ # ng --version

    _                      _                 ____ _     ___
   / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
  / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
 / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
/_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
               |___/
    
Angular CLI: 1.7.0
Node: 8.9.4
OS: linux x64
Angular: 
...


```

#### Lets prepare the database container for our APP

To link to mysql container.
```
docker run --name some-app --link some-mysql:mysql -d application-that-uses-mysql
```

To run a mysql container:
```
docker run --name mysqldb -e MYSQL_ROOT_PASSWORD=<password> -e MYSQL_DATABASE=<dbname> -e MYSQL_USER=<username> -e MYSQL_PASSWORD=<password> -p 3306:3306 -v <data folder to map>:/var/lib/mysql -d mysql:latest 
```

For example we can use this configuration for our APP.

Run the following to get a mysqldb container with the following config
1. MYSQL_DATABASE = sampledb
2. MYSQL_ROOT_PASSWORD = root
3. MYSQL_USER = appuser
4. MYSQL_PASSWORD = supersecret
5. volume `/home/std-user01/Projects/workshop/session1_loopback_api_demo/data` will be mounted as data folder `/var/lib/mysql`


```
docker run --name mysqldb -e MYSQL_ROOT_PASSWORD=root -e MYSQL_DATABASE=sampledb -e MYSQL_USER=appuser -e MYSQL_PASSWORD=supersecret -p 6606:3306 -v /home/std-user01/Projects/workshop/session1_loopback_api_demo/data:/var/lib/mysql -d mysql:latest 
```

### Now We have expose our db container to the backend (loopback) container.
You can achieve this by two ways.
1. Linking both backend container with mysqldb container.
2. Launching both containers in same network

#### For now, lets launch both db container and backend container under a same network namespace.

For that we need to stop these running containers
```
docker stop api mysqldb
docker rm api mysqldb
```

Create a docker network to connect the two containers.
```
docker network create backend
```

Now start the two containers (api, mysqldb) on the same network that we created above.
```
docker run --name mysqldb -e MYSQL_ROOT_PASSWORD=root -e MYSQL_DATABASE=sampledb -e MYSQL_USER=appuser -e MYSQL_PASSWORD=supersecret -p 6606:3306 -v /home/std-user01/Projects/workshop/session1_loopback_api_demo/data:/var/lib/mysql --network=backend -d mysql:latest 

docker run -d -it -v /home/std-user01/Projects/workshop/session1_loopback_api_demo/:/usr/src/app -p 3000:3000 --name="api" --network=backend balanus/loopback bash

```

Finally to check, if you run this
```
docker ps
```

You should see the following,
```
std-user01@stduser01-Latitude-E5470:~/Projects/workshop/session1_loopback_api_demo$ docker ps
CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                    NAMES
5c011560adc7        balanus/ng5         "sh"                     4 seconds ago       Up 2 seconds        0.0.0.0:4200->4200/tcp   web
3da899db6882        balanus/loopback    "bash"                   39 seconds ago      Up 37 seconds       0.0.0.0:3000->3000/tcp   api
1a0a70752173        mysql:latest        "docker-entrypoint.s…"   48 seconds ago      Up 47 seconds       0.0.0.0:6606->3306/tcp   mysqldb
```

[click here for next stage](loopback01.md)