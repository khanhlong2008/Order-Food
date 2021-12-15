const { User } = require('../models/Schema.js')
const Register = async (req, res) => {

    try {
        // const post = new PostModel({
        //     username: "alice",
        //     password: "1234546",
        // })
        // post.save();
        const newUser = req.body;


        const user = new User(newUser);
        await user.save();

        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({ error: err })
    }
}

module.exports = Register