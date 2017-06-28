#!/usr/bin/env node

const program = require('commander');

const createModule = require('./method/modules')

/*
script->module {
  1: actions
  2: components
  3: pages
  4: store
  5: ctrl.js
  6: util.js
  7: nativeApi.js
}
 routes-> 1: route
          2: api
 views->pages
*/
program
  .option('-m, --module <moduleName>', 'Initial a module', createModule)
  .parse(process.argv);
