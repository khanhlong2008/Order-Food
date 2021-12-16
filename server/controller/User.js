const { User } = require('../models/Schema')


const getUser = async (req, res, next) => {
    // console.log("req params: ", req.params);
    const { userID } = req.params

    const user = await User.findById(userID)
    // console.log("user info", user)

    return res.status(200).json({ user })
}
// const getPhoneNumberUser = async (req, res, next) => {
//     const { PhoneNumber } = req.params

//     const phoneNumber = await User.find({ PhoneNumber })
//     console.log('phonenumber', phoneNumber)
// }
const index = async (req, res, next) => {
    const users = await User.find({})
    return res.status(200).json({ users })
}

const newUser = async (req, res, next) => {
    try {
        const newUser = new User(req.body)
        await newUser.save();
        return res.status(201).json({ user: newUser })
    }
    catch (err) {
        res.status(500).json({ error: err })
    }
}
const replaceUser = async (req, res, next) => {
    const { userID } = req.params
    const newUser = req.body
    const result = await User.findByIdAndUpdate(userID, newUser)
    return res.status(200).json({ success: true })
}

const updateUser = async (req, res, next) => {
    const { userID } = req.params
    const newUser = req.body
    const result = await User.findByIdAndUpdate(userID, newUser)
    return res.status(200).json({ success: true })
}



module.exports = { index, newUser, getUser, replaceUser, updateUser }