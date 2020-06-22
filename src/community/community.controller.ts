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
import { CommunityService } from 'src/community/community.service';
import { Community } from 'src/interfaces/community.interface';
import { UserService } from 'src/user/user.service';

@Controller('v1/communities')
export class CommunityController {
  constructor(
    private readonly commutyService: CommunityService,
    private readonly userService: UserService,
  ) {}

  @Get()
  async getCommunity() {
    try {
      return this.commutyService.getCommunity({});
    } catch (error) {
      throw new UnauthorizedException(error);
    }
  }

  @Get('/user/:_id')
  async getCommunitiesByUser(@Param('_id') _id: string) {
    try {
      return this.commutyService.getCommunitiesByUser(_id);
    } catch (error) {
      throw new UnauthorizedException(error);
    }
  }

  @Get('/available/:_id')
  async getAvailableCommunitiesForSpecificUser(@Param('_id') _id: string) {
    try {
      const user = await this.userService.getUser({ _id });
      const communities = await this.commutyService.getCommunity({
        _id: {
          $nin: user[0].communities.map(comm => comm._id),
        },
      });

      return communities;
    } catch (error) {
      throw new UnauthorizedException(error);
    }
  }

  @Post()
  async addCommunity(@Body() community: Community) {
    try {
      return this.commutyService.addCommunity(community);
    } catch (error) {
      throw new UnauthorizedException(error);
    }
  }

  @Put()
  async updateCommunity(@Body() community: Community) {
    try {
      return this.commutyService.updateCommunity(community);
    } catch (error) {
      throw new UnauthorizedException(error);
    }
  }

  @Delete(':_id')
  async removeCommunity(@Param('_id') _id: string) {
    try {
      return this.commutyService.removeCommunity(_id);
    } catch (error) {
      throw new UnauthorizedException(error);
    }
  }
}
