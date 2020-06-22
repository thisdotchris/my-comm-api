import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Community } from '../models/community.model';
import { InjectModel } from '@nestjs/mongoose';
import { Community as CommunityInterface } from '../interfaces/community.interface';
import { User } from '../models/user.model';

@Injectable()
export class CommunityService {
  constructor(
    @InjectModel('communities') private communityModel: Model<Community>,
    @InjectModel('users') private userModel: Model<User>,
  ) {}

  async getCommunity(obj = {}) {
    return this.communityModel.find(obj).populate('creator');
  }

  async addCommunity(community: CommunityInterface) {
    return this.communityModel.create(community);
  }

  async updateCommunity(community: CommunityInterface) {
    return this.communityModel.updateOne({ _id: community._id }, community);
  }

  async removeCommunity(_id: string) {
    return this.communityModel.deleteOne({ _id });
  }

  async getCommunitiesByUser(_id: string) {
    const user = await this.userModel.findOne({ _id });
    const user_communities = await this.communityModel
      .find({
        _id: { $in: user.communities },
      })
      .populate('creator');
    const available_communities = await this.communityModel
      .find({
        _id: { $nin: user.communities },
      })
      .populate('creator');
    return {
      user,
      user_communities,
      available_communities,
    };
  }
}
