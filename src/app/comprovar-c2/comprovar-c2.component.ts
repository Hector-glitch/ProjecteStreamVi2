import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SocketService } from './socket.service';

@Component({
  selector: 'app-comprovar-c2',
  imports: [FormsModule],
  templateUrl: './comprovar-c2.component.html',
  standalone: true,
  styleUrls: ['./comprovar-c2.component.css'],
})
export class ComprovarC2Component {
  inputCode: string = '';
  message: string = '';

  constructor(private socketService: SocketService) {}

  async confirmCode() {
    if (!this.inputCode.trim()) {
      this.message = 'Por favor, introduce un código.';
      return;
    }

    const isValid = await this.socketService.validateCode(this.inputCode);
    this.message = isValid
      ? '¡Código correcto! Redirigiendo al vídeo...'
      : 'Código incorrecto. Inténtalo de nuevo.';

    if (isValid) {
      setTimeout(() => {
        window.location.href = 'http://localhost:4200';
      }, 2000);
    }
  }
}
