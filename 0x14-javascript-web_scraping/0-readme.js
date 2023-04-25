#!/usr/bin/node
//fiile argument path
const fs = require('fs');
fs.readFile(process.argv[2], 'utf-8',
  function (err, inputD) {
  //error occurred ,print the error. 
  console.log(err || inputD);
});
