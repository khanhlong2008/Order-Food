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

const User = mongoose.model('User', UserSchema);

const RestaurantSchema = new mongoose.Schema({
  Name: {
    type: String
  },
  Opentime: {
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
  },
  address: {
    long: Number,
    lat: Number,
  },
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