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