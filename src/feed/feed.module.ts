import { Module } from '@nestjs/common';
import { FeedController } from './feed.controller';
import { FeedSchema } from 'src/models/feed.model';
import { MongooseModule } from '@nestjs/mongoose';
import { FeedService } from 'src/services/feed.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'feeds', schema: FeedSchema }])],
  controllers: [FeedController],
  providers: [FeedService],
})
export class FeedModule {}
