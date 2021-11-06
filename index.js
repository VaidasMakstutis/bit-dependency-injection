const car = require('./js/car.js');
const currencyPrice = require('./js/currencyPrice.js');
const price = require('./js/price.js');
const priceCurrency = require('./js/priceCurrency.js');

const tesla = car('Tesla', 'Model S', 100000, priceCurrency);
console.log(tesla);