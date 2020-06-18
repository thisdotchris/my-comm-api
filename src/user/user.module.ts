import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from 'src/models/user.model';
import { UserService } from 'src/services/user.service';
import { PasswordService } from 'src/services/password.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'users', schema: UserSchema }])],
  controllers: [UserController],
  providers: [UserService, PasswordService],
})
export class UserModule {}
