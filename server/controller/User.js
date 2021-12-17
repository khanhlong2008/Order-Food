const { User } = require('../models/Schema')



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
    const { userID } = req.params
    const newUser = req.body
    const result = await User.findByIdAndUpdate(userID, newUser)
    return res.status(200).json({ success: true })
  } catch (err) {
    res.status(500).json({ error: err })
  }
}

const updateUser = async (req, res, next) => {
  try {
    const { userID } = req.params
    const newUser = req.body
    const result = await User.findByIdAndUpdate(userID, newUser)
    return res.status(200).json({ success: true })
  } catch (err) {
    res.status(500).json({ error: err })
  }
}

const signUp = async (req, res, next) => {
  console.log('call to signup')
  // const { FirstName, LastName, PhoneNumber, Password, AvatarURL, Address, Role } = req.body

  // const foundUser = await User.findOne({ PhoneNumber })
  // console.log('found user', foundUser)
  // if (foundUser) return res.status(403).json({ error: { message: 'PhoneNumber is already is use' } })

  const newUser = new User(req.body)
  console.log(newUser)
  await newUser.save();

  return res.status(201).json({ success: true })
}
const signIn = async (req, res, next) => {
  console.log('call to signin')
}

const secret = async (req, res, next) => {
  console.log('call tp secret')
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