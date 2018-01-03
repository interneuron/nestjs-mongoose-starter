import { Document } from 'mongoose';

export interface User extends Document {
  readonly name: string;
  readonly firstname: string;
  readonly lastname: string;
  readonly email: string;
  readonly age: string;
  readonly username: string;
  readonly password: string;
  readonly liked_posts: string;
}