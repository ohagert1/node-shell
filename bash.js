const cmd = require('./commands');

process.stdin.on('data', function(input) {
  var userInput = input.toString().trim().toUpperCase();
  switch(userInput) {
    case 'DATE':
      cmd.logDate();
      break;
    case 'PWD':
      cmd.pwd();
      break;
    case 'LS':
      cmd.ls();
      break;

  }
});

