'use strict';

var timezones = require('./timezones.json');

module.exports = {

  getLongValues: function() {
    return timezones;
  },


  getLongValue: function(timezone) {
    return timezones[timezone];
  },


  getShortValues: function() {
    return Object.keys(timezones)
      .reduce(function(timezonesWithShortValues, key) {
        timezonesWithShortValues[key] = this.getShortValue(key);
        return timezonesWithShortValues;
      }.bind(this), {});
  },


  getShortValue: function(timezone) {
    return timezones[timezone].split(' ')[0];
  }
};
