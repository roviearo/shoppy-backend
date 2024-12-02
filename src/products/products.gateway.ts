import { Server } from 'socket.io';
import { WebSocketGateway, WebSocketServer } from '@nestjs/websockets';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class ProductGateway {
  @WebSocketServer()
  private readonly server: Server;

  handleProductUpdated() {
    this.server.emit('poductUpdated');
  }
}
