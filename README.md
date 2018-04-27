# Webpack-React-Redux-Jest-Babel-ESLint Boilerplate

A front-end web project boilerplate utilizing the Webpack bundler configured with React, Redux, Jest, Babel and ESLint. 

ESLint is configured with 'ES2015' and 'plugin:react/recommended' codestyle presets, and the entire build system is configured to support ES6-style modules with `import` and `export`. 

## Getting Started
You should have NPM installed in your system before proceeding: https://www.npmjs.com/

### Installing

`cd` into project folder and install dependencies:
```
npm install
```

After installation, try running the webpack-dev-server, which will build everything in a `./dist` folder and run the server with that folder as root:
```
npm start
```
You should see a very simple Hello World HTML file being served in your browser.   

### Other Commands

Try out other commands:
```
npm test
```
```
npm run test-watch
```
```
npm run build
```
These should all work and report zero errors in the build process if everything is set up correctly.

## Usage In Your Project

If you have some experience using NPM and Webpack, you can peruse the following files and integrate them to your project:
```
package.json            // NPM config
webpack.common.js       // Webpack common configs
webpack.dev.js          // Webpack development-specific configs
webpack.prod.js         // Webpack production-specific configs
.babelrc                // Babel config
.eslintrc.json          // ESLint config
.jestrc.json            // Jest config
```

If you are just starting out learning Webpack, I recommend that you download a zipped copy of this project, and rename the project folder to your project name.    

You would also want to modify the `package.json` and change stuff like the project name, author, keywords etc.   

To reduce clutter in the `package.json` file and standardize configuration for all the Javascript tools, Webpack + Babel + ESLint + Jest all uses json-formatted external configuration files:

### Webpack

Webpack's configuration file is split into 3 parts. This follows the official Getting Started guide on Webpack: https://webpack.js.org/guides/production/
1. `webpack.common.js` contains configuration options that is common to both development and production environments.
2. `webpack.dev.js` contains configs for a React development environment.
3. `webpack.prod.js` contains configs for a production-ready React build. 

They are combined using the `webpack-merge` utility.

### Babel

Babel's configuration file is `.babelrc`. The "plugin:react/recommended" and "es2015" presets are configured here. If you plan to use other presets, you will need to install them first via `npm install --save-dev` before adding it to the config.

### ESLint

ESLint's configuration file is `.eslintrc.json`. You can add further linting rules from https://eslint.org/docs/rules/.

### Jest

Jest's configuration file is `.jestrc.json`.


## Source Code Folder Structure

An example module is included in the `./src` folder called `myModule.jsx`. This module is written in ES6 Module syntax. An example usage of this module is in `index.jsx`.    

Webpack is configured to be able to bundle ES6-style modules, so you can use the pattern demonstrated here to start coding your project.
```
// myModule.jsx
const myModule = {
  init: function init() {
    
  }
};

const createInstance = function createInstance() {
  return Object.create(myModule);
};

export default createInstance;
```

And then import the module in another file:
```
// index.jsx
import createMyModule from './myModule.jsx';

const a = createMyModule();
a.init();
```

An example React component is included, aptly named `MyComponent.jsx`.

The folder structure for your project is flexible, as Webpack is already configured to look for source files in the `./src` folder regardless of subdirectories.   

Tests should be saved in a `__tests__` folder. (You can have multiple `__tests__` folders in different subdirectory levels, Jest would still be able to find them)
```
src\
    __tests__\
        index.test.jsx
    index.html
    index.jsx
    modules\
        module1\
            __tests__\
                module1.test.jsx
            module1.jsx
            
        module2\
            __tests__\
                module2.test.jsx
            module2.jsx
            
```


## Building

For the build step, Webpack first lints all files with the `.jsx` extension before transpiling the code with Babel, and minifying with UglifyJS. Any linting errors or transpile errors will prevent the build from completing.   

You can run a one-off build with:
```
npm run build
```
   
   
Otherwise, you can start the Webpack-dev-server, which builds the project, starts up a server and watches for file changes in `./src`:
```
npm start
```
**Hot Module Replacement** is also configured. See the [Guide on how to use it.](https://webpack.js.org/guides/hot-module-replacement/)   

If you would like to see the actual commands behind these npm ones, see `package.json`, under "scripts".


## Writing and Running Tests

Tests should follow Jest's default conventions and best practices, e.g. all tests should be written in `__tests__` folders and be named `*.test.jsx` for consistency and allowing Jest to automatically search for tests to run. If you are new to Jest, see their excellent [Getting Started article](https://facebook.github.io/jest/docs/en/getting-started.html).
 
 To run a one-off test, 
 ```
 npm test
 ```
 
 To watch for file changes and re-run tests automatically,
 ```
 npm run test-watch
 ```
 
 Because its rather difficult to have Webpack run Jest tests automatically, you will need to open a separate terminal window to watch for file changes. 
 
## Future Improvements

This boilerplate is not complete. The following features are planned:   

1. Automatically run Jest tests with Webpack.
2. ~~Add asset management in Webpack.~~ (*done*)
3. Provide examples of hot module reloading.
4. ~~Support for React.~~ (*done*)

## Authors

* **Daniel Leng** - *Initial work* - [dleng.xyz](http://dleng.xyz)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* The excellently written Webpack guides which helped me through the initial stages of learning Webpack: https://webpack.js.org/guides/getting-started/
* Adrian Hall's excellent article: https://shellmonger.com/2016/01/26/using-eslint-with-webpack/
* Razvan Draghici's excellent article: https://monkeyvault.net/react-starting-from-scratch/

