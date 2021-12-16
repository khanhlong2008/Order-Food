const express = require('express');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const cors = require('cors');
const mongoose = require('mongoose');
const Register = require('./authentication/Register.js');
const Login = require('./authentication/Login.js');
const Bill = require('./Routes/Bill/Bill')
const Res = require('./Routes/Restaurant/Res');
const User = require('./Routes/User/User')
// const { GetRes, UpdateRes } = require('./controller/Res')
dotenv.config();

const app = express();
const URI = "mongodb+srv://admin:vEyIn7mQSrR1LtMq@cluster0.jjdwp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

app.use(cors({
    origin: 'http://localhost:3000',
}));
app.use(express.json())


//auth
app.post('/login', Login)
app.post('/register', Register)

//user
app.use('/user', User)

//bill
app.use('/bill', Bill)

//res
app.use('/restaurant', Res)
// app.get('/restaurant', GetRes)
// app.post('/restaurant/update', UpdateRes)


app.get('/me', (req, res) => {
    const token = req.headers.authorization;
    if (!token) {
        res.status(401).send("JWT missing");
        return;
    }
    const jwtString = token.split(" ")[1];
    jwt.verify(jwtString, "MY_SECRET_KEY", (err, decoded) => {
        console.log(err)
        if (err) {
            res.status(401).send("invalid jwt")
        }
        else {
            const username = decoded.username;
            const user = users.find((u) => u.username === username);
            if (user) {
                res.json({
                    username: user.username, photoUrl: user.photoUrl
                })
            }
            else {
                res.status(401).send("User not found")
            }
        }
    })
})



mongoose
    .connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to DB');
        app.listen(5000, () => {
            console.log(`Server is running on port 5000`);
        });
    })
    .catch((err) => {
        console.log('err', err);
    });