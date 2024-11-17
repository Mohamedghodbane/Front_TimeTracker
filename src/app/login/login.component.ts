import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginData = { username: '', password: '' };
  loginError = false; 

  constructor(private authService: AuthService, private router: Router) {}
  onLogin() {
    this.authService.login(this.loginData.username, this.loginData.password).subscribe(
      () => {
        console.log('Login successful');
        
        // Retrieve user role after successful login
        const userRole = this.authService.getUserRole();
        console.log('User role:', userRole); // Log the role for debugging

        // Redirect based on role
        if (userRole === 'admin') {
          this.router.navigate(['/admintime']);
        } else {
          this.router.navigate(['/time-tracker']);
        }
      },
      (error) => {
        console.error('Login failed', error);
      }
    );
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
