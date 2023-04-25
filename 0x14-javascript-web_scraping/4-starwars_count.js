//can i comment?
#!/usr/bin/node

require('request')(process.argv[2], (err, r, b) => {
  if (err) console.log(err);
  else {
    const nb = JSON.parse(b).results.filter((elem) => {
      return elem.characters.filter((url) => { return url.includes('18'); }).length;
    }).length;
    console.log(nb);
  }
});
