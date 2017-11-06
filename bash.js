const cmd = require('./commands');

process.stdin.on('data', function(input) {
  var userInput = input.toString().trim().toUpperCase();
  if(userInput === 'DATE') {
    cmd.logDate();
  } else if(userInput === 'PWD') {
    cmd.pwd();
  }
});

