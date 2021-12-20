const router = require("express-promise-router")()
const RestaurantController = require('../controller/Res')
// const { validateBody, validateParam, schemas } = require('../helpers/routerHelpers')


router.route('/')
  .get(RestaurantController.index)
  .post(RestaurantController.CreateRes)


router.route('/:restaurantID')
  .get(RestaurantController.getRes)
  .put(RestaurantController.updateRes)
  // .patch(validateParam(schemas.isSchema, 'restaurantID'), RestaurantController.updateRes)

module.exports = router;