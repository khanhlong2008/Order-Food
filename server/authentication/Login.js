const { User } = require('../models/Schema.js')
const jwt = require('jsonwebtoken');
const router = require("express-promise-router")()
const Login = (req, res) => {
  const { PhoneNumber, Password } = req.body
    User.findOne({
        PhoneNumber: PhoneNumber
    }, (err, user) => {
        if (user) {
            if (user) {
              if (Password === user.Password) {
                    const token = jwt.sign(
                        {
                            PhoneNumber: user.PhoneNumber,

                        },
                        "MY_SECRET_KEY",
                        {
                            expiresIn: 36000,
                        });

                    res.json({
                        user: {
                            PhoneNumber: user.PhoneNumber,
                            // Password: user.Password,

                        },

                        token: token,
                    })
                    res.send({ message: "Login successfull" })

                }
            }
        }
        else {
            res.send("User not register")
        }
    })

}




module.exports = Login

