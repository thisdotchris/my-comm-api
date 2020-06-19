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
import { MessageService } from 'src/message/message.service';
import { Message } from 'src/interfaces/message.interface';

@Controller('v1/messages')
export class MessageController {
  constructor(private readonly messageService: MessageService) {}

  @Get()
  async getMessage() {
    try {
      return this.messageService.getMessage({});
    } catch (error) {
      throw new UnauthorizedException(error);
    }
  }

  @Post()
  async addMessage(@Body() message: Message) {
    try {
      return this.messageService.addMessage(message);
    } catch (error) {
      throw new UnauthorizedException(error);
    }
  }

  @Put()
  async updateMessage(@Body() message: Message) {
    try {
      return this.messageService.updateMessage(message);
    } catch (error) {
      throw new UnauthorizedException(error);
    }
  }

  @Delete(':_id')
  async removeMessage(@Param('_id') _id: string) {
    try {
      return this.messageService.removeMessage(_id);
    } catch (error) {
      throw new UnauthorizedException(error);
    }
  }
}
