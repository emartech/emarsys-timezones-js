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


  describe('#getLongValue', function() {

    it('should return the timezone in "GMT+2:00 Europe/Kiev" format if Emarsys timezone format provided in the parameter', function() {
      this.expect(timezonesModule.getLongValue('Europe/Kiev')).to.eql('GMT+2:00 Europe/Kiev');
    });

  });


  describe('#getShortValues', function() {

    it('should return the timezones using hash keys in Emarsys timezone format and hash values in "GMT+2:00" format', function() {
      this.expect(timezonesModule.getShortValues()).to.contain({ 'Europe/Kiev': 'GMT+2:00' });
    });

  });


  describe('#getShortValue', function() {

    it('should return the timezone in "GMT+2:00" format if Emarsys timezone format provided in the parameter', function() {
      this.expect(timezonesModule.getShortValue('Europe/Kiev')).to.eql('GMT+2:00');
    });

  });



});
