const passport = require('passport')
const JwtStrategy = require('passport-jwt').Strategy
const { ExtractJwt } = require('passport-jwt')
const { JWT_SECRET } = require('../configs')
const { User } = require('../models/Schema')

passport.use(new JwtStrategy({
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken('Authorization'),
  secretOrKey: JWT_SECRET
}, async (payload, done) => {
  try {
    console.log("payload", payload);
    const user = await User.findById(payload.sub)
    if (!user) return done(null, false);
    done(null, user)
  } catch (error) {
    done(error, false);
  }
}));



