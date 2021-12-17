const passport = require('passport')
const JwtStrategy = require('passport-jwt').Strategy
const LocalStrategy = require('passport-local').Strategy
const { ExtractJwt } = require('passport-jwt')
const { JWT_SECRET } = require('../configs')

const User = require('../models/Schema')

passport.use(new JwtStrategy({
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken('Authorization'),
  secretOrKey: JWT_SECRET
}, async (payload, done) => {
  try {
    // console.log("payload", payload);
    const user = await User.findById(payload.sub)
    if (!user) return done(null, false);
    done(null, user)
  } catch (error) {
    done(error, false);
  }
}));


// passport local 
passport.use(new LocalStrategy({
  usernameField: 'PhoneNumber',
}, async (PhoneNumber, Password, done) => {
  try {

    const user = await User.findOne({ PhoneNumber })

    if (!user) return done(null, false)

    const isCorrectPassword = await user.isValidPassword(Password);

    if (!isCorrectPassword) return done(null, false)

    done(null, user)
  } catch (error) {
    done(error, false)
  }

}))
