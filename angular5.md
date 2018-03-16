## Lets start developing a Simple Angular5 App ,which use the loopback API.

- See the running containers.
```
docker ps
```

- Go inside `web` container, which is where angular5 development environment is available.
```
docker exec -it web sh
```

- If you remember the source code is mounted under `/app` folder.
```
cd /app
cd frontend
```

- Files mounted.
```
/app # ls
Dockerfile     backend        loopback01.md  loopback04.md
README.md      data           loopback02.md  loopback05.md
angular5.md    frontend       loopback03.md  package.json
/app # 
```

### Creat a new ng app

- ng new `myshop`
```
/app/frontend # ng new myshop
Unable to find "@angular/cli" in devDependencies.

Please take the following steps to avoid issues:
"npm install --save-dev @angular/cli@latest" 

  create myshop/README.md (1022 bytes)
  create myshop/.angular-cli.json (1241 bytes)
  create myshop/.editorconfig (245 bytes)
  create myshop/.gitignore (529 bytes)
  create myshop/src/assets/.gitkeep (0 bytes)
  create myshop/src/environments/environment.prod.ts (51 bytes)
  create myshop/src/environments/environment.ts (387 bytes)
  create myshop/src/favicon.ico (5430 bytes)
  create myshop/src/index.html (293 bytes)
  create myshop/src/main.ts (370 bytes)
  create myshop/src/polyfills.ts (3114 bytes)
  create myshop/src/styles.css (80 bytes)
  create myshop/src/test.ts (642 bytes)
  create myshop/src/tsconfig.app.json (211 bytes)
  create myshop/src/tsconfig.spec.json (283 bytes)
  create myshop/src/typings.d.ts (104 bytes)
  create myshop/e2e/app.e2e-spec.ts (288 bytes)
  create myshop/e2e/app.po.ts (208 bytes)
  create myshop/e2e/tsconfig.e2e.json (235 bytes)
  create myshop/karma.conf.js (923 bytes)
  create myshop/package.json (1291 bytes)
  create myshop/protractor.conf.js (722 bytes)
  create myshop/tsconfig.json (363 bytes)
  create myshop/tslint.json (3012 bytes)
  create myshop/src/app/app.module.ts (316 bytes)
  create myshop/src/app/app.component.css (0 bytes)
  create myshop/src/app/app.component.html (1141 bytes)
  create myshop/src/app/app.component.spec.ts (986 bytes)
  create myshop/src/app/app.component.ts (207 bytes)
...



> uws@9.14.0 install /app/frontend/myshop/node_modules/uws
> node-gyp rebuild > build_log.txt 2>&1 || exit 0


> node-sass@4.7.2 install /app/frontend/myshop/node_modules/node-sass
> node scripts/install.js

Downloading binary from https://github.com/sass/node-sass/releases/download/v4.7.2/linux_musl-x64-57_binding.node
Download complete .] - :
Binary saved to /app/frontend/myshop/node_modules/node-sass/vendor/linux_musl-x64-57/binding.node
Caching binary to /root/.npm/node-sass/4.7.2/linux_musl-x64-57_binding.node

> uglifyjs-webpack-plugin@0.4.6 postinstall /app/frontend/myshop/node_modules/webpack/node_modules/uglifyjs-webpack-plugin
> node lib/post_install.js


> node-sass@4.7.2 postinstall /app/frontend/myshop/node_modules/node-sass
> node scripts/build.js

Binary found at /app/frontend/myshop/node_modules/node-sass/vendor/linux_musl-x64-57/binding.node
Testing binary
Binary is fine
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.1.3 (node_modules/fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.1.3: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})

added 1267 packages from 1239 contributors in 67.263s
/bin/sh: git: not found
You can `ng set --global packageManager=yarn`.
Project 'myshop' successfully created.

```

Usually this will take some time. 1-2 Mins at max.

- A folder will be created with the `project name`
```
/app/frontend # ls
myshop
```

- Go inside the folder
```
cd myshop
```

- Look at this folder. This is the boilerplate angular5 APP generated.
```
/app/frontend/myshop # ls
README.md           package-lock.json   tsconfig.json
e2e                 package.json        tslint.json
karma.conf.js       protractor.conf.js
node_modules        src

```

- Lets try to run this angular 5 app using `ng serve`

```
ng serve
```

Expected Output
```
/app/frontend/myshop # ng serve
** NG Live Development Server is listening on localhost:4200, open your browser on http://localhost:4200/ **
Date: 2018-03-16T16:45:04.644Z                                                          
Hash: f9abaa17801f708b4f1d
Time: 6101ms
chunk {inline} inline.bundle.js (inline) 3.85 kB [entry] [rendered]
chunk {main} main.bundle.js (main) 17.9 kB [initial] [rendered]
chunk {polyfills} polyfills.bundle.js (polyfills) 549 kB [initial] [rendered]
chunk {styles} styles.bundle.js (styles) 41.5 kB [initial] [rendered]
chunk {vendor} vendor.bundle.js (vendor) 7.42 MB [initial] [rendered]

webpack: Compiled successfully.
```

### BUG: Since you are following this via docker. 
[Ref to stackoverflow.com](https://stackoverflow.com/questions/46778868/ng-serve-not-working-in-docker-container)

`ng serve` itself does not allow the nodejs process to listen on localhost:4200.

-  The workaround is add `-H 0.0.0.0` flag to `ng serve`.

`ng serve -H 0.0.0.0`

```
/app/frontend/myshop # ng serve -H 0.0.0.0
** NG Live Development Server is listening on 0.0.0.0:4200, open your browser on http://localhost:4200/ **
Date: 2018-03-16T16:50:08.971Z                                                          
Hash: f9abaa17801f708b4f1d
Time: 6098ms
chunk {inline} inline.bundle.js (inline) 3.85 kB [entry] [rendered]
chunk {main} main.bundle.js (main) 17.9 kB [initial] [rendered]
chunk {polyfills} polyfills.bundle.js (polyfills) 549 kB [initial] [rendered]
chunk {styles} styles.bundle.js (styles) 41.5 kB [initial] [rendered]
chunk {vendor} vendor.bundle.js (vendor) 7.42 MB [initial] [rendered]

webpack: Compiled successfully.

```

### Now Open the following link in your browser.
[localhost:4200](http://localhost:4200)

- HINT: 4200 is reserved port for Angular.
