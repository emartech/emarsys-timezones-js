'use strict';


module.exports = {
  timezones: require('./timezones.json'),


  getLongValues: function() {
    return this.timezones;
  },


  getShortValues: function() {
    var timezones = this.timezones;

    return Object.keys(this.timezones).reduce(function(timezonesWithShortValues, key) {
      timezonesWithShortValues[key] = timezones[key].split(' ')[0];
      return timezonesWithShortValues;
    }, {});
  }
};
