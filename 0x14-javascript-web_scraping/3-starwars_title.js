#!/usr/bin/node
// Star wars API
const StarWarsAPI_URL = 'https://swapi-api.hbtn.io/api/films/';
const request = require('request');
const episodeNum = process.argv[2];


request(StarWarsAPI_URL + episodeNum, function (err, response, body) {
  if (err) {
    console.log(err);
  } else if (response.statusCode === 200) {
    const responseJSON = JSON.parse(body);
    console.log(responseJSON.title);
  } else {
    console.log('Error code: ' + response.statusCode);
  }
});
