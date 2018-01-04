import * as mongoose from 'mongoose';

export const PostSchema= new mongoose.Schema({
  slug: {
    type: String,
    unique: true,
    lowercase: true
  },
  title: String,
  body: String,
  description: String,
  tags: [{
    type: String
  }],
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  comments: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Comment"
  }],
  likes: {
    type: Number,
    default: 0
  }
}, { timestamps: true })