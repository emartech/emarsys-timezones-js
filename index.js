'use strict';

module.exports = {
  timezones: require('./timezones.json'),


  getLongValues: function() {
    return this.timezones;
  },


  getLongValue: function(timezone) {
    return this.timezones[timezone];
  },


  getShortValues: function() {
    return Object.keys(this.timezones)
      .reduce(function(timezonesWithShortValues, key) {
        timezonesWithShortValues[key] = this.getShortValue(key);
        return timezonesWithShortValues;
      }.bind(this), {});
  },


  getShortValue: function(timezone) {
    return this.timezones[timezone].split(' ')[0];
  }
};
