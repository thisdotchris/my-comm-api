import { Module } from '@nestjs/common';
import { MessageController } from './message.controller';
import { MessageSchema } from 'src/models/message.model';
import { MongooseModule } from '@nestjs/mongoose';
import { MessageService } from 'src/message/message.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'messages', schema: MessageSchema }]),
  ],
  controllers: [MessageController],
  providers: [MessageService],
})
export class MessageModule {}
