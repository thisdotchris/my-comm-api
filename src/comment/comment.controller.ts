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
import { CommentService } from 'src/services/comment.service';
import { Comment } from './../interfaces/comment.interface';

@Controller('v1/comments')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Get()
  async getComment() {
    try {
      return await this.commentService.getComment({});
    } catch (error) {
      throw new UnauthorizedException(error);
    }
  }

  @Post()
  async addComment(@Body() comment: Comment) {
    try {
      return await this.commentService.addComment(comment);
    } catch (error) {
      throw new UnauthorizedException(error);
    }
  }

  @Put()
  async updateComment(@Body() comment: Comment) {
    try {
      return await this.commentService.updateComment(comment);
    } catch (error) {
      throw new UnauthorizedException(error);
    }
  }

  @Delete(':_id')
  async deleteComment(@Param('_id') _id: string) {
    try {
      return await this.commentService.removeComment(_id);
    } catch (error) {
      throw new UnauthorizedException(error);
    }
  }
}
