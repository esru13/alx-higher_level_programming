#!/usr/bin/node
// the URL to request (GET)
const request = require('request');

request.get(process.argv[2]).on('response', function (response) {
  console.log(`code: ${response.statusCode}`);
});
