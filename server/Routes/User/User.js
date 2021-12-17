const router = require("express-promise-router")()

const UserController = require('../../controller/User')
const { validateBody, validateParam, schemas } = require('../../helpers/routerHelpers')

const passport = require('passport');
const passportCofig = require('../../middlewares/passport')

//authentication
router.route('/signup').post(validateBody(schemas.authSignUpSchema), UserController.signUp)
router.route('/signin').post(validateBody(schemas.authSignInSchema), passport.authenticate('local', { session: false }), UserController.signIn)
router.route('/secret').get(passport.authenticate('jwt', { session: false }), UserController.secret)


router.route('/')
    .get(UserController.index)
  .post(validateBody(schemas.userSchema), UserController.newUser)




router.route('/:userID')
  .get(validateParam(schemas.isSchema, 'userID'), UserController.getUser)
  .put(validateParam(schemas.isSchema, 'userID'), validateBody(schemas.userSchema), UserController.replaceUser)
  .patch(validateParam(schemas.isSchema, 'userID'), validateBody(schemas.userOptionalSchema), UserController.updateUser)



module.exports = router 