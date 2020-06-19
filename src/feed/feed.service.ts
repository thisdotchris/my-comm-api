import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Feed } from '../models/feed.model';
import { InjectModel } from '@nestjs/mongoose';
import { Feed as FeedInterface } from '../interfaces/feed.interface';

@Injectable()
export class FeedService {
  constructor(@InjectModel('feeds') private feedModel: Model<Feed>) {}

  async getFeed(obj = {}) {
    return this.feedModel
      .find(obj)
      .populate('community')
      .populate('user');
  }

  async addFeed(feed: FeedInterface) {
    return this.feedModel.create(feed);
  }

  async updateFeed(feed: FeedInterface) {
    return this.feedModel.updateOne({ _id: feed._id }, feed);
  }

  async removeFeed(_id: string) {
    return this.feedModel.deleteOne({ _id });
  }
}
