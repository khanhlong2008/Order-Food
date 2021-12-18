const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({

  FirstName: {
    type: String,
    required: true,
  },
  LastName: {
    type: String,
    required: true,
  },
  PhoneNumber: {
    type: String,
    required: true,
    unique: true,
  },
  Password: {
    type: String,
    // required: true,
  },
  AvatarURL: {
    type: String
  },
  Role: {
    User: { type: Number, },
    Driver: { type: Number, }
  },
  address: {
    long: Number,
    lat: Number,
  },
  salt: {
    type: String
  },
  hashed: {
    type: String
  }
})
// UserSchema.methods.verifyPassword = async function(newPassword) {
//   const { userID } =
// }
// su dung normal fnc de su dung dc this.
// UserSchema.pre('save', async function (next) {
//   try {
//     // console.log('password', this.Password)
//     const salt = await bcrypt.genSalt(10);
//     // console.log("salt", salt)
//     const passwordHashed = await bcrypt.hash(this.Password, salt)
//     // console.log('passwordHashed', passwordHashed)
//     this.Password = passwordHashed;
//     next();
//   } catch (err) {
//     next(err)
//   }
// })

// UserSchema.methods.isValidPassword = async function (newPassword) {
//   try {
//     return await bcrypt.compare(newPassword, this.password)
//   } catch (error) {
//     throw new Error(error)
//   }
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
  },
  RestaurantID: {
    type: String,
    unique: true
  },
  DriverID: {
    type: String,
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