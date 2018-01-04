import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  email: String,
  age: Number,
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  liked_posts: [{
    type: String,
    ref: mongoose.Schema.Types.ObjectId 
  }]
}, { timestamps: true });