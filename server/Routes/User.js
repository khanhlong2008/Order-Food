const router = require("express-promise-router")()

const UserController = require('../controller/User')
// const { validateBody, validateParam, schemas } = require('../helpers/routerHelpers')

router.route('/')
  .get(UserController.index)
  .post(UserController.newUser)

router.route('/:userID')
  .get(UserController.getUser)
  .put(UserController.updateUser)
  // .patch(UserController.updateUser)
  // .put(validateParam(schemas.isSchema, 'userID'), validateBody(schemas.userSchema), UserController.replaceUser)
  // .patch(validateParam(schemas.isSchema, 'userID'), validateBody(schemas.userOptionalSchema), UserController.updateUser)


module.exports = router 