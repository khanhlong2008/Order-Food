const express = require('express')
const router = require("express-promise-router")()

const UserController = require('../../controller/User')

router.route('/')
    .get(UserController.index)
    .post(UserController.newUser)

router.route('/:userID')
    .get(UserController.getUser)
    .put(UserController.replaceUser)
    .patch(UserController.updateUser)

// router.route('/:PhoneNumber')
//     .get(UserController.getPhoneNumberUser)

module.exports = router 