const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const mongoose = require('mongoose');
// const Register = require('./authentication/Register.js');
// const Login = require('./authentication/Login.js');
const Bill = require('./Routes/Bill')
const Res = require('./Routes/Res');
// const User = require('./Routes/User/User')
const Auth = require('./Routes/auth')
dotenv.config();

const app = express();
const URI = "mongodb+srv://admin:gVQX4cNFMYW5c2Hq@cluster0.3kc7o.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
// const URI = "mongodb+srv://admin:gVQX4cNFMYW5c2Hq@cluster0.3kc7o.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"  

app.use(cors({
  origin: 'http://localhost:3000',
}));
app.use(express.json())


//auth
// app.post('/login', Login)
// app.post('/register', Register)
app.use('/auth', Auth)
//user
// app.use('/user', User)
app.use('/bill', Bill)
app.use('/restaurant', Res)


mongoose
  .connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('✅ Connected database from mongodb.');
    app.listen(5000, () => {
      console.log(`Server is running on port 5000`);
    });
  })
  .catch((err) => {
    console.log('err', err);
  });

