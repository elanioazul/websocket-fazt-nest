import { Module } from '@nestjs/common';
import { WebsocketGateway } from '../websockets/websocket-gateway/websocket-gateway';
@Module({
  providers: [WebsocketGateway],
})
export class WebsocketsModule {}
