const bookingcontroller = require('./../controllers/booking.ctrl');

module.exports = router => {
  /**
   * get all articles
   */
  router.route('/cities').get(bookingcontroller.getCities);

  /**
   * get a particlular article to view
   */
  router.route('/city/:id').get(bookingcontroller.getShows);
};
