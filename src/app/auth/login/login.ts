import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
  imports: [FormsModule, RouterModule]
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(private auth: AuthService, private router: Router) {}

  login() {
    this.auth.login(this.email, this.password).subscribe({
      next: (user) => {
        if (user) {
          this.auth.saveToken('logged-in'); 
          alert('Вхід успішний!');
          this.router.navigate(['/']);  
        } else {
          alert('Невірний email або пароль');
        }
      },
      error: () => alert('Помилка при вході')
    });
  }
}
