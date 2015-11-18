'use strict';

let timezones = require('../timezones.json');
let timezonesModule = require('../index');

describe('Timezones module', function() {

  describe('@timezones', function() {

    it('should delegate the timezones json outside', function() {
      this.expect(timezonesModule.timezones).to.eql(timezones);
    });

  });


  describe('#getLongValues', function() {

    it('should return the timezones using hash keys in Emarsys timezone format and hash values in "GMT+2:00 Europe/Kiev" format', function() {
      this.expect(timezonesModule.getLongValues()).to.contain({ 'Europe/Kiev': 'GMT+2:00 Europe/Kiev' });
    });

  });



  describe('#getShortValues', function() {

    it('should return the timezones using hash keys in Emarsys timezone format and hash values in "GMT+2:00" format', function() {
      this.expect(timezonesModule.getShortValues()).to.contain({ 'Europe/Kiev': 'GMT+2:00' });
    });

  });



});
