const router = require("express-promise-router")()
const UserController = require('../controller/User')
const { validateBody, schemas } = require('../helpers/routerHelpers')

router.route('/signup').post(validateBody(schemas.authSignUpSchema), UserController.signUp)
router.route('/signin').post(validateBody(schemas.authSignInSchema), UserController.signIn)

module.exports = router 