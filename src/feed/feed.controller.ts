import {
  Controller,
  Get,
  UnauthorizedException,
  Post,
  Body,
  Put,
  Delete,
  Param,
} from '@nestjs/common';
import { FeedService } from 'src/services/feed.service';
import { Feed } from 'src/interfaces/feed.interface';

@Controller('v1/feeds')
export class FeedController {
  constructor(private readonly feedService: FeedService) {}

  @Get()
  async getFeed() {
    try {
      return this.feedService.getFeed({});
    } catch (error) {
      throw new UnauthorizedException(error);
    }
  }

  @Post()
  async createFeed(@Body() feed: Feed) {
    try {
      return this.feedService.addFeed(feed);
    } catch (error) {
      throw new UnauthorizedException(error);
    }
  }

  @Put()
  async updateFeed(@Body() feed: Feed) {
    try {
      return this.feedService.updateFeed(feed);
    } catch (error) {
      throw new UnauthorizedException(error);
    }
  }

  @Delete(':_id')
  async removeFeed(@Param('_id') _id: string) {
    try {
      return this.feedService.removeFeed(_id);
    } catch (error) {
      throw new UnauthorizedException(error);
    }
  }
}
