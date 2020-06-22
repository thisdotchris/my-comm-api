import { Injectable } from '@nestjs/common';
import { User } from 'src/models/user.model';
import { User as UserInterface } from '../interfaces/user.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PasswordService } from './password.service';

@Injectable()
export class UserService {
  constructor(
    @InjectModel('users') private userModel: Model<User>,
    private passwordService: PasswordService,
  ) {}

  async getUser(obj = {}) {
    return this.userModel.find(obj).populate({
      path: 'communities',
      populate: {
        path: 'creator',
      },
    });
  }

  async addUser(user: UserInterface) {
    user.password = await this.passwordService.generatePassword(user.password);
    return this.userModel.create(user);
  }

  async updateUser(user: UserInterface) {
    return this.userModel.updateOne({ _id: user._id }, user);
  }

  async removeUser(_id: string) {
    return this.userModel.deleteOne({ _id });
  }
}
