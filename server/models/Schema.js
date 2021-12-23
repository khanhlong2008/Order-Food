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
    User: { type: Boolean, },
    Driver: { type: Boolean, }
  },
  address: {
    fullAddress: String,
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
    type: Date
  },
  Closetime: {
    type: Date
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
    type: mongoose.Schema.ObjectId,
    required: true
  },
  RestaurantID: {
    type: mongoose.Schema.ObjectId,
    required: true
  },
  DriverID: {
    type: mongoose.Schema.ObjectId,
    required: true
  },
  Food: [
    {
      FoodName:
      {
          type: String,
          required: true
        },
        Price: {
          type: Number,
          required: true
        },
        Description: {
          type: String,
          required: true
        },
        Amout: {
        type: Number,
        required: true
      }
    }
  ],
  Cash: {
    type: Number,
    required: true
  },
  Status: {
    type: String,
    required: true
  },
  Rate: {
    type: Number,
    required: true
  },

}

  , {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
})
const Bill = mongoose.model('Bill', BillingSchema);

module.exports = { User, Restaurant, Bill };