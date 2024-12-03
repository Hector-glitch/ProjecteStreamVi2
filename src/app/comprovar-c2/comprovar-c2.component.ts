import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {SocketService} from './socket.service';

@Component({
  selector: 'app-comprovar-c2',
  imports: [
    FormsModule
  ],
  templateUrl: './comprovar-c2.component.html',
  standalone: true,
  styleUrl: './comprovar-c2.component.css'
})
export class ComprovarC2Component {
  inputCode: string = ''; // Vinculado al input de HTML
  message: string = ''; // Mensaje para mostrar al usuario

  constructor(private socketService: SocketService) {}

  async confirmCode() {
    if (!this.inputCode.trim()) {
      this.message = 'Por favor, introduce un código.';
      return;
    }

    const isValid = await this.socketService.validateCode(this.inputCode);
    if (isValid) {
      this.message = '¡Código correcto! Redirigiendo al vídeo...';
      setTimeout(() => {
        window.location.href = 'http://localhost:4200'; // Redirige al proyecto principal
      }, 2000);
    } else {
      this.message = 'Código incorrecto. Inténtalo de nuevo.';
    }
  }
}
