import { Controller, Get, Post, Body, Req, Param } from "@nestjs/common";

import { PostsService } from "./posts.service";
import { CreatePostDto } from "./dto/create-post.dto";

@Controller('posts')
export class PostsController {
  constructor(private postService: PostsService){}

  // Get all posts
  @Get()
  async getAll() {
    return this.postService.getAll();
  }
  
  // Get a post By ID
  @Get('/:id')
  async getById(@Param("id") id: string) {
    return this.postService.getById(id);
  }
  
  // Get a post By slug
  @Get('/slug/:slug')
  async getBySlug(@Param("slug") slug: string) {
    return this.postService.getBySlug(slug);
  }
  
  // Create a new post 
  @Post()
  async create(@Body() createPostDto: CreatePostDto) {
    return this.postService.create(createPostDto);
  }
  
  // Get posts for a particular user
  @Get('/user/:userID')
  async userPosts(@Param('userID') userID: string) {
    return this.postService.userPosts(userID);
  }

  // Delete a post
  @Get('/delete/:postID')
  async deletePost(@Param('userID') userID: string) {
    return this.postService.remove(userID);
  }

  // Update a post
  @Get('/edit/:postID')
  async editPost(@Param('userID') userID: string, @Body() newPost: CreatePostDto) {
    return this.postService.update(userID, newPost);
  }


}