import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  showError: boolean = false;

  login() {
    // Aquí iría la lógica real de autenticación
    if (this.email === '' || this.password === '') {
      this.showError = true;
    } else {
      this.showError = false;
      // Redirigir o mostrar mensaje de éxito
    }
  }
}
