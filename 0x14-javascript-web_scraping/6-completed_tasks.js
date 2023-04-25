#!/usr/bin/node

require('request')(process.argv[2], (error, response, body) => {
  if (error) console.log(error);
  const CompletedTasks = {};
  for (let i = 1; i <= 10; i++) {
    const n = JSON.parse(body).filter(task => task.completed === true)
      .filter(task => task.userId === i).length;
    if (n) CompletedTasks[i] = n;
  }
  console.log(CompletedTasks);
});
