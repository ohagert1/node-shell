const cmd = require('./commands');

cmd.prompt();

process.stdin.on('data', function(input) {
  var command = input.toString().trim().toUpperCase().split(' ')[0];
  var arg = input.toString().trim().split(' ').slice(1).join(' ');
  switch(command) {
    case 'DATE':
      cmd.logDate();
      break;
    case 'PWD':
      cmd.pwd();
      break;
    case 'LS':
      cmd.ls();
      break;
    case 'ECHO':
      cmd.echo(arg);
      break;
    case 'CAT':
      cmd.cat();
      break;
    case 'HEAD':
      cmd.head();
      break;
    case  'TAIL':
      cmd.tail();
      break;
    default:
      cmd.prompt();
  }
});

