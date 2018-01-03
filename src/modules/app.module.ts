import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { UsersModule } from './users/users.module';
import { UserSchema } from './users/schemas/user.schema';

@Module({
  modules: [
    MongooseModule.forRoot('mongodb://127.0.0.1/nest', [
      { name: 'User', schema: UserSchema },
    ]),
    UsersModule,
  ],
})
export class ApplicationModule {}
