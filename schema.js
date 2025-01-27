const mongoose = require('mongoose');

// Define the User Schema
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email address'],
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
    },
    roles: {
      type: [String],
      default: ['user'], // Default role is 'user'
      enum: ['user', 'admin', 'moderator'], // Valid roles
    },
    profile: {
      firstName: {
        type: String,
        trim: true,
      },
      lastName: {
        type: String,
        trim: true,
      },
      age: {
        type: Number,
        min: 0,
        max: 120, // Reasonable age limit
      },
    },
    lastLogin: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true, // Automatically creates `createdAt` and `updatedAt` fields
  }
);

// Create and export the model
const User = mongoose.model('User', userSchema);

module.exports = User;
