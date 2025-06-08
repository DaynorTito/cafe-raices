import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  name: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  showError: boolean = false;
  showPasswordMismatch: boolean = false;

  register() {
    if (!this.name || !this.email || !this.password || !this.confirmPassword) {
      this.showError = true;
      this.showPasswordMismatch = false;
      return;
    }
    if (this.password !== this.confirmPassword) {
      this.showPasswordMismatch = true;
      this.showError = false;
      return;
    }
    this.showError = false;
    this.showPasswordMismatch = false;
    // Aquí iría la lógica real de registro
  }
}
