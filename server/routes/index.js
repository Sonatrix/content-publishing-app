const user = require('./user');
const article = require('./article');
const products = require('./products');

module.exports = router => {
  user(router);
  article(router);
  products(router);
};
