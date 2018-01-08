import { Model } from "mongoose";
import { Component, Inject } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";

import { CreatePostDto } from "./dto/create-post.dto";
import { Post } from "./interfaces/posts.interface";
import { PostSchema } from "./schemas/post.schema";

@Component()
export class PostsService {
  constructor( @InjectModel(PostSchema) private readonly postModel: Model<Post>) { }

  async getById(userId: string): Promise<Post> {
    return await this.postModel.findById(userId)
  }

  async create(post: CreatePostDto):Promise<Post> {
    return await this.postModel.create(post)
  }
  
  async getAll():Promise<Post[]> {
    return await this.postModel.find().exec()
  }

  async userPosts(userID: string): Promise<Post[]> {
    console.log(userID)
    return await this.postModel.find({ author: userID })
  }
  
}