import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Community } from '../models/community.model';
import { InjectModel } from '@nestjs/mongoose';
import { Community as CommunityInterface } from '../interfaces/community.interface';

@Injectable()
export class CommunityService {
  constructor(
    @InjectModel('communities') private communityModel: Model<Community>,
  ) {}

  async getCommunity(obj = {}) {
    return this.communityModel.find(obj);
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
}
