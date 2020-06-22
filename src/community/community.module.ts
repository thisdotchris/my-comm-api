import { Module } from '@nestjs/common';
import { CommunityController } from './community.controller';
import { CommunitySchema } from 'src/models/community.model';
import { MongooseModule } from '@nestjs/mongoose';
import { CommunityService } from 'src/community/community.service';
import { UserService } from 'src/user/user.service';
import { UserSchema } from 'src/models/user.model';
import { PasswordService } from 'src/user/password.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'communities', schema: CommunitySchema },
      { name: 'users', schema: UserSchema },
    ]),
  ],
  controllers: [CommunityController],
  providers: [CommunityService, UserService, PasswordService],
})
export class CommunityModule {}
