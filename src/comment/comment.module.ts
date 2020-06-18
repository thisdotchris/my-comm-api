import { CommentService } from './../services/comment.service';
import { Module } from '@nestjs/common';
import { CommentController } from './comment.controller';
import { CommnentSchema } from 'src/models/comment.model';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'comments', schema: CommnentSchema }]),
  ],
  controllers: [CommentController],
  providers: [CommentService],
})
export class CommentModule {}
