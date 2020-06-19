import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Comment } from '../models/comment.model';
import { Model } from 'mongoose';
import { Comment as CommentInterface } from '../interfaces/comment.interface';

@Injectable()
export class CommentService {
  constructor(@InjectModel('comments') private commentModel: Model<Comment>) {}

  async getComment(obj = {}) {
    return this.commentModel
      .find(obj)
      .populate('feed')
      .populate('user');
  }

  async addComment(comment: CommentInterface) {
    return this.commentModel.create(comment);
  }

  async updateComment(comment: CommentInterface) {
    return this.commentModel.updateOne({ _id: comment._id }, comment);
  }

  async removeComment(_id: string) {
    return this.commentModel.deleteOne({ _id });
  }
}
