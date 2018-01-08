import { Controller, Get, Post, Body, Req, Param } from "@nestjs/common";

import { PostsService } from "./posts.service";
import { CreatePostDto } from "./dto/create-post.dto";

@Controller('posts')
export class PostsController {
  constructor(private postService: PostsService){}

  @Get()
  async getAll() {
    return this.postService.getAll()
  }

  @Post()
  async create(@Body() createPostDto: CreatePostDto) {
    return this.postService.create(createPostDto)
  }

  @Get('/user/:userID')
  async userPosts(@Param('userID') userID: string) {
    return this.postService.userPosts(userID)
  }
  
  @Get('/:id')
  async getById(@Param("id") id: string) {
    return this.postService.getById(id)
  }


}