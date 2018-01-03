import { Model } from 'mongoose';
import { Component, Inject } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { User } from './interfaces/user.interface';
import { CreateUserDto } from './dto/create-user.dto';
import { UserSchema } from './schemas/user.schema';

@Component()
export class UsersService {
  constructor(@InjectModel(UserSchema) private readonly userModel: Model<User>) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const createduser = new this.userModel(createUserDto);
    return await createduser.save();
  }

  async findAll(): Promise<User[]> {
    return await this.userModel.find().exec();
  }
}
