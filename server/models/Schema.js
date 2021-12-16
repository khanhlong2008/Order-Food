const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

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
                type: Number,
                default: 0
            },
            Driver: {
                type: Number,
                default: 0
            }
        }
    ]
})
// // su dung normal fnc de su dung dc this.
// UserSchema.pre('save', async function (next) {
//     try {
//         console.log('password', this.password)
//         const salt = await bcrypt.genSalt(10);
//         console.log("salt", salt)
//         const passwordHashed = await bcrypt.hash(this.password, salt)
//         console.log('passwordHashed', passwordHashed)
//         this.password = passwordHashed;
//         next();
//     } catch (err) { next(err) }
// })


// UserSchema.methods.isValidPassword = async function (newPassword) {
//     try {
//         return await bcrypt.compare(newPassword, this.password)

//     }
//     catch (err) {
//         throw new Error(err)
//     }
// }

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
        type: Number,
        default: 0
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
    ],
    Status: {
        type: String
    },
    Rate: {
        type: Number,
        default: 0
    },

}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
})
const Bill = mongoose.model('Bill', BillingSchema);
module.exports = { User, Restaurant, Bill };