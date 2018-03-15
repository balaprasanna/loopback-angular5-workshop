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

[click here for next stage](loopback.md)