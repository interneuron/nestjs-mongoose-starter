import { Model } from "mongoose";
import { Component, Inject } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";

import { CreatePostDto } from "./dto/create-post.dto";
import { Post } from "./interfaces/posts.interface";
import { PostSchema } from "./schemas/post.schema";

@Component()
export class PostsService {
  constructor( @InjectModel(PostSchema) private readonly postModel: Model<Post>) { }

  async create(post: CreatePostDto):Promise<Post> {
    return await this.postModel.create(post)
  }
  
  async getById(postID: string): Promise<Post> {
    return await this.postModel.findById(postID)
  }
  
  async getBySlug(slug: string): Promise<Post> {
    return await this.postModel.findOne({ slug })
  }

  async getAll():Promise<Post[]> {
    return await this.postModel.find().exec()
  }

  async remove(postID: string): Promise<Post> {
    return await this.postModel.findByIdAndRemove(postID)
  }

  async update(postID: string, post: CreatePostDto): Promise<Post> {
    return await this.postModel.findByIdAndUpdate(postID, post)
  }

  async userPosts(postID: string): Promise<Post[]> {
    return await this.postModel.find({ author: postID })
  }
  
}