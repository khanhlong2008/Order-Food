const express = require("express");
const router = require("express-promise-router")()
const RestaurantController = require('../../controller/Res')


router.route('/').get(RestaurantController.index)


router.route('/:restaurantID')
  .put(RestaurantController.replaceRes)
  .patch(RestaurantController.updateRes)

module.exports = router;