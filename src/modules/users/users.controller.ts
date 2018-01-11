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
  async getAll(): Promise<User[]> {
    return this.userService.getAll();
  }
  
  @Post("/edit/:userID")
  async update(@Param("userID") userID: string, @Body() newUser: CreateUserDto ): Promise<User> {
    return this.userService.update(userID, newUser);
  }

  @Post("/remove/:userID")
  async remove(@Param("userID") userID: string): Promise<User> {
    return this.userService.remove(userID);
  }
}