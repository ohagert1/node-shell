const fs = require('fs');

module.exports = {
  pwd: function() {
    process.stdout.write(process.cwd());
  },

  fullDate: function() {
    return date.toString();
  },

  logDate: function() {
    var date = new Date;
    process.stdout.write(date.toString());
  },

  ls: function() {
    fs.readdir('.', function(err, files) {
      if (err) throw err;
      files.forEach(function(file) {
        process.stdout.write(file.toString() + "\n");
      });
      process.stdout.write("prompt > ");
    });
  }
};
