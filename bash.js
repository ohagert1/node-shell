// Start of the node shell workshop
function pwd() {
  process.stdout.write(process.cwd());
}


function fullDate() {
  var date = new Date;
  return date.toString();
}
// console.log(cwd);
// console.log(fullDate());

function logDate() {
  process.stdout.write(fullDate());
}

process.stdin.on('data', function(input) {
  var userInput = input.toString().trim().toUpperCase();
  if(userInput === 'DATE') {
    logDate();
  } else if(userInput === 'PWD') {
    pwd();
  }
});


