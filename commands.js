const fs = require('fs');

module.exports = {
  pwd: function(param) {
    setTimeout(this.prompt, 0);
    process.stdout.write(process.cwd());
  },

  fullDate: function(param) {
    return date.toString();
  },

  logDate: function(param) {
    setTimeout(this.prompt, 0);
    var date = new Date;
    process.stdout.write(date.toString());
  },

  ls: function(param) {
    setTimeout(this.prompt, 0);
    fs.readdir('.', function(err, files) {
      if (err) throw err;
      files.forEach(function(file) {
        process.stdout.write(file.toString() + "\n");
      });
      process.stdout.write("prompt > ");
    });
  },

  echo: function(param) {
    setTimeout(this.prompt, 0);
    if(param[0] === '$') {
      var arg = param.slice(1).toUpperCase();
      process.stdout.write(process.env[arg]);
    } else {
      process.stdout.write(param);
    }
  },

  cat: function(param) {
    setTimeout(this.prompt, 0);
  },

  head: function(param) {

  },

  tail: function(param) {

  },

  prompt: function(param) {
    process.stdout.write('\nprompt > ');
  }

};
