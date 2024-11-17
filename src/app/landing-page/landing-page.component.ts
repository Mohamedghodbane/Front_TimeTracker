import { Component, ViewChild, ElementRef } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {

  @ViewChild('loginModal') loginModal!: ElementRef;

  loginData = { username: '', password: '' };
  loginError: string | null = null;
  isLoading = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private modalService: NgbModal
  ) {}

  openModal() {
    this.modalService.open(this.loginModal, { centered: true });
  }

  closeModal() {
    this.modalService.dismissAll();
  }

  onLogin() {
    this.isLoading = true;
    this.loginError = null;

    this.authService.login(this.loginData.username, this.loginData.password).subscribe({
      next: () => {
        console.log('Login successful');
        const userRole = this.authService.getUserRole();
        console.log('User role:', userRole);

        if (userRole === 'admin') {
          this.router.navigate(['/admintime']);
        } else {
          this.router.navigate(['/time-tracker']);
        }

        this.closeModal();
      },
      error: (error) => {
        console.error('Login failed', error);
        this.loginError = 'Invalid username or password. Please try again.';
      },
      complete: () => {
        this.isLoading = false;
      }
    });
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
