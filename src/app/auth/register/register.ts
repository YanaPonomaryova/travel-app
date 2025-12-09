import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-register',
  standalone: true,
  templateUrl: './register.html',
  styleUrls: ['./register.css'],
  imports: [FormsModule, CommonModule]
})
export class RegisterComponent {

  name = '';
  email = '';
  password = '';

  constructor(private auth: AuthService, private router: Router) {}

  register() {
    if (!this.name || !this.email || !this.password) {
      alert('Заповніть всі поля');
      return;
    }

    this.auth.register({
      name: this.name,
      email: this.email,
      password: this.password
    }).subscribe({
      next: () => {
        alert('Акаунт створений!');
        this.router.navigate(['/login']);
      },
      error: (err) => {
        console.error(err);
        alert('Помилка реєстрації');
      }
    });
  }
}
