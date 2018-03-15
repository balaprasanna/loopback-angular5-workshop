## Lets explore with loopback to create a simple Backend

### Create a simple loopback APP
Go inside api container and create a folder in your prefered locations.
Preferablly, inside /usr/src/app create a folder called backend

```
cd /usr/src/app
mkdir backend
cd backend
```

Now we are going to create a loopback project.
- Type lb and hit `<enter>` key
```
lb 
```

Expected output: Please select the following options, when it promts.
```
root@13fb60d0e015:/usr/src/app/backend# lb
? What's the name of your application? backend
? Which version of LoopBack would you like to use? 3.x (current)
? What kind of application do you have in mind? api-server (A LoopBack API serve
Generating .yo-rc.json)


I'm all done. Running npm install for you to install the required dependencies. If this fails, try running the command yourself.


   create .editorconfig
   create .eslintignore
   create .eslintrc
   create server/boot/root.js
   create server/middleware.development.json
   create server/middleware.json
   create server/server.js
   create README.md
   create server/boot/authentication.js
   create .gitignore
   create client/README.md
```

By the the project is created with some boilerplate codes.

## There is a bug in with `npm install`. It might fails.
Quick fix, dont worry about it. Try running `npm install` again for few times and it works.
```
npm install --verbose
```

- `--verbose` is to make sure, npm install is doing the right things. Because sometimes, it hangs and you might want to re-run.
So it helps me to actually see if there any activity going on with npm install. 
If it hangs for long time, `<ctrl + c>` Quit and Try running the `npm install` again.

