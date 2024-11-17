import { Component } from '@angular/core';
import { TimeLogService } from '../services/time-log.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-time-tracker',
  templateUrl: './time-tracker.component.html',
  styleUrls: ['./time-tracker.component.css']
})
export class TimeTrackerComponent {
  message = '';

  constructor(private timeLogService : TimeLogService,private authService: AuthService, private router: Router) {}

  clockIn() {
    this.timeLogService.clockIn().subscribe(
      (res) => this.message = 'Clocked in successfully!',
      (err) => this.message = 'Failed to clock in: ' + err.error.message
    );
  }

  clockOut() {
    this.timeLogService.clockOut().subscribe(
      (res) => this.message = 'Clocked out successfully!',
      (err) => this.message = 'Failed to clock out: ' + err.error.message
    );
  }


  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}

