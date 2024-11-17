import { Component, ElementRef, Renderer2 } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  loginData = { username: '', password: '' };
  loginError = false; 
  registerData = { username: '', email: '', password: '' };

  constructor(private authService: AuthService, private router: Router  ,  private elRef: ElementRef,
    private renderer: Renderer2) {}
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



  onRegister() {
    this.authService.register(this.registerData.username, this.registerData.email, this.registerData.password).subscribe(
      (response) => {
        console.log('Registration successful:', response);
        this.closeSignUpModal();
        this.openLoginModal();
      },
      (error) => {
        console.error('Registration error:', error);
      }
    );
  }

  closeSignUpModal() {
    const modalElement = this.elRef.nativeElement.querySelector('#exampleModal2');
    if (modalElement) {
      // Remove Bootstrap modal classes and attributes to close it
      this.renderer.removeClass(modalElement, 'show');
      this.renderer.setAttribute(modalElement, 'aria-hidden', 'true');
      this.renderer.setStyle(modalElement, 'display', 'none');
    }
  }

  openLoginModal() {
    const modalElement = this.elRef.nativeElement.querySelector('#exampleModal');
    if (modalElement) {
      // Add Bootstrap modal classes to make it visible
      this.renderer.addClass(modalElement, 'show');
      this.renderer.setStyle(modalElement, 'display', 'block');
      this.renderer.setAttribute(modalElement, 'aria-hidden', 'false');
      this.renderer.setStyle(modalElement, 'opacity', '1');
    }
  }
}
