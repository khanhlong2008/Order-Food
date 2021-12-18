const router = require("express-promise-router")()
const RestaurantController = require('../controller/Res')
const { validateBody, validateParam, schemas } = require('../helpers/routerHelpers')


router.route('/')
  .get(RestaurantController.index)
  .post(RestaurantController.CreateRes)


router.route('/:restaurantID')
  .get(validateParam(schemas.isSchema, 'restaurantID'), RestaurantController.getRes)
  .put(validateParam(schemas.isSchema, 'restaurantID'), validateBody(schemas.ResSchema), RestaurantController.replaceRes)
  .patch(validateParam(schemas.isSchema, 'restaurantID'), validateBody(schemas.ResOptionalSchema), RestaurantController.updateRes)

module.exports = router;