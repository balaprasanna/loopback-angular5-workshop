## Build your REST API's in minutes.

```
Welcome to the workshop 
```

### Install.

Docker: Pull the node images for the backend.
```
docker pull node
```

Docker: run a local development docker container for loopback
```
docker run -d -it -v <path to your folder>:/usr/src/app -p 3000:3000 --name="api" balanus/loopback bash
```

#### Example
```
docker run -d -it -v /home/std-user01/Projects/workshop/session1_loopback_api_demo/:/usr/src/app -p 3000:3000 --name="api" balanus/loopback bash
```

Now connect to the docker container, which provides loopback-cli

```
docker exec -it api bash
```

Now you are inside the container, you will be able to generate loopback application.

### Check your installtion is correct or not.

```
root@abd70e13f28c:/# node --version
v9.8.0
root@abd70e13f28c:/# npm --version
5.6.0
root@abd70e13f28c:/# lb --version
4.1.0 (generator-loopback@5.7.0 loopback-workspace@4.1.1)
```

### 

