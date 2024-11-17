import { Component, OnInit } from '@angular/core';
import { TimeLogService } from '../services/time-log.service';
import { TimeLog } from '../Models/TimeLog.model';

@Component({
  selector: 'app-user-time-logs',
  templateUrl: './user-time-logs.component.html',
  styleUrls: ['./user-time-logs.component.css']
})
export class UserTimeLogsComponent implements OnInit {
  userTimeLogs: TimeLog[] = [];
  errorMessage: string | null = null;

  constructor(private timeLogService: TimeLogService) {}

  ngOnInit(): void {
    this.fetchUserTimeLogs();
  }

  // Fetch the user's time logs
  fetchUserTimeLogs(): void {
    this.timeLogService.getUserTimeLogs().subscribe(
      (data) => {
        this.userTimeLogs = data;
        this.errorMessage = null; // Reset error message if successful
      },
      (error) => {
        this.errorMessage = 'Error fetching user time logs';
        console.error('Error fetching user time logs:', error);
      }
    );
  }
}