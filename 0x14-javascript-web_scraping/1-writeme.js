#!/usr/bin/node
//file argument path
const fs = require('fs');
//argument is the string to write
fs.writeFile(process.argv[2], process.argv[3],'utf-8', error => {
//error occurred during while writing, print the error object
  if (error) console.log(error);
});
