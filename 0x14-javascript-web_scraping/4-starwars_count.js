#!/usr/bin/node
//Wedge Antilles is character ID 18
require('request')(process.argv[2], (err, r, b) => {
  if (err) console.log(err);
  else {
    const nb = JSON.parse(b).results.filter((elem) => {
      return elem.characters.filter((url) => { return url.includes('18'); }).length;
    }).length;
    console.log(nb);
  }
});
