<div align="center"><strong>Start your next P5 project in seconds</strong></div>

<br />

<div align="center">
  <!-- Dependency Status -->
  <a href="https://david-dm.org/Alexintosh/p5-pack">
    <img src="https://david-dm.org/Alexintosh/p5-pack.svg" alt="Dependency Status" />
  </a>
  <!-- devDependency Status -->
  <a href="https://david-dm.org/Alexintosh/p5-pack#info=devDependencies">
    <img src="https://david-dm.org/Alexintosh/p5-pack/dev-status.svg" alt="devDependency Status" />
  </a>
  <!-- Build Status -->
  <a href="https://travis-ci.org/Alexintosh/p5-pack">
    <img src="https://travis-ci.org/Alexintosh/p5-pack.svg" alt="Build Status" />
  </a>
  <!-- Test Coverage -->
  <a href="https://coveralls.io/r/Alexintosh/p5-pack">
    <img src="https://coveralls.io/repos/github/Alexintosh/p5-pack/badge.svg" alt="Test Coverage" />
  </a>
</div>


## <a name="features"></a>Features

* Webpack setup including dev server and build process
* ES6 support with babel
* Boilerplate sketch in either Instance mode or Global mode
* nvm support


## <a name="dev-server"></a>Dev server
The dev server builds your whole project through the webpack build pipeline and keeps the generated artifacts in its memory (bundled files are not saved to your disk). It automatically detects when something in your files has changed, builds the changed code with webpack and automatically reloads the browser window.

You can change the port on which the HTTP server listens and more dev server related options in the `webpack.config.js`.

[More on the webpack dev server](https://webpack.js.org/configuration/dev-server/)

## <a name="npm-commands"></a>NPM commands

* `npm start`: Runs the dev server and opens the project in your standard browser
* `npm run build`: Builds the whole project and saves the resulting bundles in the `dist` directory

## <a name="project-structure"></a>Project structure

### Directory Tree

```
your-project
|- src
|	|- index.js 
|	|- sketch 
|		|- index.js 
|
|- package.json
|- webpack.config.js
|- yarn.lock
|- README.md
|- .babelrc
|- .gitignore
|- .nvmrc

```

<br />