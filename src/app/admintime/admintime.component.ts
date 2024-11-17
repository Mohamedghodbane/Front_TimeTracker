import { Component, OnInit } from '@angular/core';
import { TimeLogService } from 'src/app/services/time-log.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admintime',
  templateUrl: './admintime.component.html',
  styleUrls: ['./admintime.component.css']
})
export class AdmintimeComponent implements OnInit {
  timeLogs: any[] = []; 
  filteredLogs: any[] = []; 
  filterUsername: string = ''; 
  filterDate: string = '';

  constructor(private timeLogService: TimeLogService,private authService: AuthService,  private router: Router) {}

  ngOnInit(): void {
    this.loadTimeLogs();
   
  }

  loadTimeLogs(): void {
    this.timeLogService.getAllTimeLogs().subscribe({
      next: (data) => this.timeLogs = data,
      error: (err) => console.error('Error fetching time logs', err)
    });
  }
  filterLogs(): void {
    this.filteredLogs = this.timeLogs.filter(log => {
      const matchesUsername = this.filterUsername
        ? log.user.username.toLowerCase().includes(this.filterUsername.toLowerCase())
        : true;

      const matchesDate = this.filterDate
        ? new Date(log.timeIn).toISOString().split('T')[0] === this.filterDate ||
          (log.timeOut && new Date(log.timeOut).toISOString().split('T')[0] === this.filterDate)
        : true;

      return matchesUsername && matchesDate;
    });
  }
 



  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}