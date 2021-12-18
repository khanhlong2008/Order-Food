const { User } = require('../models/Schema')
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../configs')
const AuthController = require('../controller/auth')


const encodeToken = (userID) => {
  return jwt.sign({
    iss: "Khanh Long",
    sub: userID,
    iat: new Date().getTime(),
    exp: new Date().setDate(new Date().getDate() + 3)
  }, JWT_SECRET)
}

const getUser = async (req, res, next) => {
  try {
    const { userID } = req.value.params
    const user = await User.findById(userID)
    return res.status(200).json({ user })
  } catch (err) {
    res.status(500).json({ error: err })
  }
}

const index = async (req, res, next) => {
    const users = await User.find({})
    return res.status(200).json({ users })
}

const newUser = async (req, res, next) => { 
    try {
      const newUser = new User(req.value.body)
        await newUser.save();
        return res.status(201).json({ user: newUser })
    }
    catch (err) {
      console.log(err)
      res.status(500).json({ error: err })
    }
}
const replaceUser = async (req, res, next) => {
  try {
    const { userID } = req.value.params
    const newUser = req.value.body
    const result = await User.findByIdAndUpdate(userID, newUser)
    return res.status(200).json({ success: true })
  } catch (err) {
    res.status(500).json({ error: err })
  }
}
const updateUser = async (req, res, next) => {
  try {
    const { userID } = req.value.params
    const newUser = req.value.body
    const result = await User.findByIdAndUpdate(userID, newUser)
    return res.status(200).json({ success: true })
  } catch (err) {
    res.status(500).json({ error: err })
  }
}

const signUp = async (req, res, next) => {
  // console.log('call to signup')
  const { PhoneNumber, Password, FirstName, LastName } = req.value.body
  // check if there is a user with the same user
  const foundUser = await User.findOne({ PhoneNumber })
  // console.log('found user', foundUser)
  if (foundUser) return res.status(403).json({ error: { message: 'PhoneNumber is already is use' } })
  // create a new user
  // const newUser = new User({ PhoneNumber, Password })
  const user = await AuthController.signUpAuth(PhoneNumber, Password)
  const newUser = new User({
    PhoneNumber,
    salt: user.salt,
    hashed: user.hashed,
    LastName,
    FirstName,
    Password
  })
  newUser.save();
  //encode 
  const token = encodeToken(newUser._id)
  res.setHeader('Authorization', token)
  return res.status(201).json({ success: true, token })
}

const signIn = async (req, res, next) => {
  // console.log('call to signin')
  const { userID } = req.value.params

  // const user = await AuthController.signInAuth(PhoneNumber, Password)
  console.log(userID)

  const token = encodeToken()

  res.setHeader('Authorization', token)
  return res.status(200).json({ success: true, token })
}

const secret = async (req, res, next) => {

  return res.status(200).json({ resource: true })
}

module.exports = {
  index,
  newUser,
  getUser,
  replaceUser,
  updateUser,
  signUp,
  signIn,
  secret
}