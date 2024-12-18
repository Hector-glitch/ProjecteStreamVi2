import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';

@Injectable({
  providedIn: 'root',
})
export class SocketService {
  private socket: Socket;

  constructor() {
    this.socket = io('http://localhost:3000'); // Conectar al servidor
  }

  validateCode(code: string): Promise<boolean> {
    return new Promise((resolve) => {
      this.socket.emit('validateCode', code, (isValid: boolean) => {
        resolve(isValid);
      });
    });
  }
}
