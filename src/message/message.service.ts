import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Message } from '../models/message.model';
import { InjectModel } from '@nestjs/mongoose';
import { Message as MessageInterface } from '../interfaces/message.interface';

@Injectable()
export class MessageService {
  constructor(@InjectModel('messages') private messageModel: Model<Message>) {}

  async getMessage(obj = {}) {
    return this.messageModel
      .find(obj)
      .populate('community')
      .populate('user');
  }

  async addMessage(message: MessageInterface) {
    return this.messageModel.create(message);
  }

  async updateMessage(message: MessageInterface) {
    return this.messageModel.updateOne({ _id: message._id }, message);
  }

  async removeMessage(_id: string) {
    return this.messageModel.deleteOne({ _id });
  }
}
