import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { User } from './interfaces/user.interface';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Post()
  create(@Body() userDto: CreateUserDto) {
    this.userService.create(userDto)
  }
  
  @Get("/:userId")
  async getById(@Param("userId") userId: string) {
    return this.userService.getById(userId)
  }
  
  @Get()
  async findAll(): Promise<User[]> {
    return this.userService.findAll();
  }
}