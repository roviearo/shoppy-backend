import { Server, Socket } from 'socket.io';
import {
  WebSocketGateway,
  WebSocketServer,
  WsException,
} from '@nestjs/websockets';
import { AuthService } from 'src/auth/auth.service';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class ProductGateway {
  constructor(private readonly authService: AuthService) {}
  @WebSocketServer()
  private readonly server: Server;

  handleProductUpdated() {
    this.server.emit('poductUpdated');
  }

  handleConnection(client: Socket) {
    try {
      this.authService.verifyToken(client.handshake.auth.Authentication.value);
    } catch (err) {
      throw new WsException('Unauthorized.');
    }
  }
}
