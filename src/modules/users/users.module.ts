import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './Users.service';

@Module({
  controllers: [UsersController],
  components: [UsersService],
})
export class UsersModule {}
