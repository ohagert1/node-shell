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
  }
};
