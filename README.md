<img src="https://github.com/Alexintosh/p5-pack/blob/master/header.png?raw=true" alt="p5-pack logo">

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
  
  [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
</div>


## <a name="features"></a>Features

* Webpack setup including dev server and build process
* ES6 support with babel
* Boilerplate sketch in either Instance mode or Global mode
* nvm support
* <a href="https://facebook.github.io/jest/docs/">Jest testing suite</a>
* JavaScript Standard Style
* Test and Linting check before commit (husky)

[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)

## <a name="start"></a> Quick Start

1. Clone this repo using `git clone https://github.com/Alexintosh/p5-pack
2. Move to the appropriate directory: `cd p5-pack`.<br />
3. Run `yarn install` in order to install dependencies and clean the git repo.<br />
   *At this point you can run `npm run start` to see the example app at `http://localhost:8080/`.*

## <a name="dev-server"></a>Dev server
The dev server builds your whole project through the webpack build pipeline and keeps the generated artifacts in its memory (bundled files are not saved to your disk). It automatically detects when something in your files has changed, builds the changed code with webpack and automatically reloads the browser window.

You can change the port on which the HTTP server listens and more dev server related options in the `webpack.config.js`.

[More on the webpack dev server](https://webpack.js.org/configuration/dev-server/)

## <a name="npm-commands"></a>NPM commands

* `npm start`: Runs the dev server and opens the project in your standard browser
* `npm run build`: Builds the whole project and saves the resulting bundles in the `dist` directory
* `npm run test`: Run tests using Jest
* `npm run test:watch`: Run tests using Jest in watch mode
* `npm run lint`: Run <a href="https://github.com/standard/standard">standard</a> to check JavaScript Standard Style 
* `npm run lint:fix`: Run <a href="https://github.com/standard/standard">standard</a> to check JavaScript Standard Style and fixes problem automatically
* `npm run validate`: Runs linting and testing in parallel for maximum efficiency (npm-run-all)

## How can I support the developer?
- Star our GitHub repo :star:
- Create pull requests, submit bugs, suggest new features or documentation updates :wrench:
- Follow me on [Twitter](https://twitter.com/alexintosh) :feet:

## Can I hire you?
Yes!  Ping me on [Twitter](https://twitter.com/alexintosh) or get in touch by [mail](mailto:alessio.d@gmail.com)
I will be happy to work with you!

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
