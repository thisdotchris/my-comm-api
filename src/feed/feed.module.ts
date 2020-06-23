import { Module } from '@nestjs/common';
import { FeedController } from './feed.controller';
import { FeedSchema } from 'src/models/feed.model';
import { MongooseModule } from '@nestjs/mongoose';
import { FeedService } from 'src/feed/feed.service';
import { UserSchema } from 'src/models/user.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'feeds', schema: FeedSchema },
      { name: 'users', schema: UserSchema },
    ]),
  ],
  controllers: [FeedController],
  providers: [FeedService],
})
export class FeedModule {}
