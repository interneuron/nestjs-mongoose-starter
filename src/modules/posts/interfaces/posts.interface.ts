import { Document } from "mongoose";
import { User } from "../../users/interfaces/user.interface";

export interface Post extends Document {
  slug: string,
  title: string,
  body: string,
  description: string,
  tags: string[],
  author: [User] | [string],
  comments: [String],
  likes: number
}