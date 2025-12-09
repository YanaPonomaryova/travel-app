import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.html',
  styleUrls: ['./header.css'],
  imports: [CommonModule, RouterModule]
})
export class HeaderComponent {

  constructor(public auth: AuthService) {}

  logout() {
    this.auth.logout();
    window.location.reload();
  }
}
