const router = require("express-promise-router")()

const UserController = require('../../controller/User')
const { validateBody, validateParam, schemas } = require('../../helpers/routerHelpers')

// router.route('/signup').post(UserController.signUp)
// router.route('/signin').post(UserController.signIn)
// router.route('/secret').get(UserController.secret)

router.route('/')
    .get(UserController.index)
  .post(validateBody(schemas.userSchema), UserController.newUser)



router.route('/:userID')
  .get(validateParam(schemas.isSchema, 'userID'), UserController.getUser)
  .put(validateParam(schemas.isSchema, 'userID'), validateBody(schemas.userSchema), UserController.replaceUser)
  .patch(validateParam(schemas.isSchema, 'userID'), validateBody(schemas.userOptionalSchema), UserController.updateUser)



module.exports = router 