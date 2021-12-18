const router = require("express-promise-router")()

const UserController = require('../controller/User')
const { validateBody, validateParam, schemas } = require('../helpers/routerHelpers')


router.route('/:userID')
  .get(validateParam(schemas.isSchema, 'userID'), UserController.getUser)
  .put(validateParam(schemas.isSchema, 'userID'), validateBody(schemas.userSchema), UserController.replaceUser)
  .patch(validateParam(schemas.isSchema, 'userID'), validateBody(schemas.userOptionalSchema), UserController.updateUser)


module.exports = router 