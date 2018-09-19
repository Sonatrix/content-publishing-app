const user = require('./user');
const article = require('./article');
const products = require('./products');
const booking = require('./booking');

module.exports = router => {
  user(router);
  article(router);
  products(router);
  booking(router);
};
