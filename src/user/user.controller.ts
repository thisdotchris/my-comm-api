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
import { UserService } from 'src/user/user.service';
import { User } from 'src/interfaces/user.interface';

@Controller('v1/users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getUser() {
    try {
      return this.userService.getUser({});
    } catch (error) {
      throw new UnauthorizedException(error);
    }
  }

  @Get(':_id')
  async getUserById(@Param('_id') _id: string) {
    try {
      return this.userService.getUser({ _id });
    } catch (error) {
      throw new UnauthorizedException(error);
    }
  }

  @Post()
  async addUser(@Body() user: User) {
    try {
      return this.userService.addUser(user);
    } catch (error) {
      throw new UnauthorizedException(error);
    }
  }

  @Put()
  async updateUser(@Body() user: User) {
    try {
      return this.userService.updateUser(user);
    } catch (error) {
      throw new UnauthorizedException(error);
    }
  }

  @Delete(':_id')
  async removeUser(@Param('_id') _id: string) {
    try {
      return this.userService.removeUser(_id);
    } catch (error) {
      throw new UnauthorizedException(error);
    }
  }
}
