const { User } = require('../models/Schema.js')
const jwt = require('jsonwebtoken');

const Login = (req, res) => {
    const { PhoneNumber, password } = req.body
    User.findOne({
        PhoneNumber: PhoneNumber
    }, (err, user) => {
        if (user) {
            if (user) {
                if (password === user.password) {
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
                            // password: user.password,

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

