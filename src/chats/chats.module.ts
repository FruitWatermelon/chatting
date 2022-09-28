import { SocketSchema, Socket as SocketModel } from './model/socket.model';
import { Chatting, ChattingSchema } from './model/chatting.model';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { ChatsGateway } from './chats.gateway';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Chatting.name, schema: ChattingSchema },
      { name: SocketModel.name, schema: SocketSchema },
    ]),
  ],
  providers: [ChatsGateway],
})
export class ChatsModule {}
