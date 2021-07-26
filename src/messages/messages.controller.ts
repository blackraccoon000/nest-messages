import { Controller, Get, Post } from '@nestjs/common'

@Controller('messages') // ここで既に"/messages"ディレクトリが指定されている
export class MessagesController {
  @Get()
  listMessages() {}
  @Post()
  createMessage() {}
  @Get('/:id')
  getMessage() {}
}
