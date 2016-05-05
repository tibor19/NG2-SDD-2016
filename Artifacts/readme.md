run npm init to initialize the package

For minimal functionality run: 

```shell
npm install es6-shim reflect-metadata systemjs rxjs zone.js angular2 --save 
```


For dev env run: 

```shell
npm install typescript concurrently lite-server typings --save-dev 
```

Please note that some side dependencies might be missmatched


Initialize the typings repository:

```shell
typings init
```

Install typings for the dependencies:

```shell
typings install es6-shim
```

At the moment the only one we are using is es6-shim as all other are part of the angular packages.

Create the index.html file and include the following js files:
```shell
    angular2-polyfills
    system.src
    Rx
    angular2.dev
```

Configure the system.js and import the main module: 
```shell
      System.config({
        packages: {
          defaultJSExtensions: true,
          app: {
            defaultExtension: 'js'
          }
        }
      });

      System.import('app/main').then(null, console.error.bind(console));
```
