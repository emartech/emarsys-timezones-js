# Emarsys-timezones

Provide timezones usable in Emarsys products.

## Usage

```javascript
var timezones = require('emarsys-timezones');

timezones.getLongValues(); // => { "Europe/Kiev": "GMT+2:00 Europe/Kiev", ... }
timezones.getShortValues(); // => { "Europe/Kiev": "GMT+2:00", ... }
timezones.getLongValue("Europe/Kiev"); // => "GMT+2:00 Europe/Kiev"
timezones.getShortValue("Europe/Kiev"); // => "GMT+2:00"
```
