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
import { CommunityService } from 'src/services/community.service';
import { Community } from 'src/interfaces/community.interface';

@Controller('v1/communities')
export class CommunityController {
  constructor(private readonly commutyService: CommunityService) {}

  @Get()
  async getCommunity() {
    try {
      return this.commutyService.getCommunity({});
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
