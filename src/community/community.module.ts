import { Module } from '@nestjs/common';
import { CommunityController } from './community.controller';
import { CommunitySchema } from 'src/models/community.model';
import { MongooseModule } from '@nestjs/mongoose';
import { CommunityService } from 'src/community/community.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'communities', schema: CommunitySchema },
    ]),
  ],
  controllers: [CommunityController],
  providers: [CommunityService],
})
export class CommunityModule {}
