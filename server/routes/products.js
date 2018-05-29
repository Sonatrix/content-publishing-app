const productcontroller = require('./../controllers/product.ctrl');
const multipart = require('connect-multiparty');

const multipartWare = multipart();
module.exports = router => {
  /**
   * get all articles
   */
  router.route('/products').get(productcontroller.getProducts);
};
