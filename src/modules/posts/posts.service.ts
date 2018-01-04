import { Model } from "mongoose";
import { Component, Inject } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";

import { CreatePostDto } from "./dto/create-post.dto";
import { Post } from "./interfaces/posts.interface";
import { PostSchema } from "./schemas/posts.schema";

@Component()
export class UsersService {
    constructor(@InjectModel(PostSchema) private readonly postModel: Model<Post>) {}
}