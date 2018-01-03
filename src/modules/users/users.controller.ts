import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { User } from './interfaces/user.interface';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    return { 
      err: "An error occurred",
      user: createUserDto,
    }
  }

  @Get()
  async findAll(): Promise<User[]> {
    return this.userService.findAll();
  }
}