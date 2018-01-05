import { Module, NestModule, MiddlewaresConsumer } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { LoggerMiddleware } from "./common/middlewares/logger.middleware";
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { UsersController } from './users/users.controller';
import { UserSchema } from './users/schemas/user.schema';

@Module({
  modules: [
    MongooseModule.forRoot('mongodb://127.0.0.1/nest', [
      { name: 'User', schema: UserSchema },
    ]),
    UsersModule,
  ],
})
export class ApplicationModule implements NestModule {
  configure(consumer: MiddlewaresConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes(UsersController)
  }
}
