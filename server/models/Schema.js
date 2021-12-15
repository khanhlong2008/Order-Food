const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    FirstName: {
        type: String,
    },
    LastName: {
        type: String
    },
    PhoneNumber: {
        type: Number,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    AvatarURL: {
        type: String
    },
    Address: [
        {
            long: {
                type: Number,
                unique: true,
            },
            lat: {
                type: Number,
                unique: true,
            }
        }
    ],
    Role: [
        {
            User: {
                type: String
            },
            Driver: {
                type: String
            }
        }
    ]
})
const User = mongoose.model('User', UserSchema);

const RestaurantSchema = new mongoose.Schema({
    Name: {
        type: String
    },
    OpenTime: {
        type: String
    },
    Food: [
        {
            FoodName: {
                type: String
            },
            Price: {
                type: Number
            },
            Overview: {
                type: String
            },
            ImgFood: {
                type: String
            }
        },
    ],
    Rate: {
        type: Number
    }
})
const Restaurant = mongoose.model('Restaurant', RestaurantSchema);

const BillingSchema = new mongoose.Schema({
    UserID: {
        type: String,
        unique: true,
    },
    RestaurantID: {
        type: String,
        unique: true,
    },
    DriverID: {
        type: String,
        unique: true,
    },
    Food: [
        {
            FoodName:
            {
                type: String
            },
            Price: {
                type: Number
            },
            Description: {
                type: String
            },
            Amout: {
                type: Number
            },
            Cash: {
                type: Number
            }
        }
    ]
})
const Bill = mongoose.model('Bill', BillingSchema);
module.exports = { User, Restaurant, Bill };