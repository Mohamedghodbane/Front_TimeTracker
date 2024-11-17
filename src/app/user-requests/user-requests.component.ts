import { Component, OnInit } from '@angular/core';
import { LeaveRequest } from '../Models/leave-request.model';
import { LeaveRequestService } from '../services/leave-request.service';

@Component({
  selector: 'app-user-requests',
  templateUrl: './user-requests.component.html',
  styleUrls: ['./user-requests.component.css']
})
export class UserRequestsComponent implements OnInit {
  leaveRequests: LeaveRequest[] = [];

  constructor(private leaveRequestService: LeaveRequestService) {}

  ngOnInit(): void {
    this.fetchUserLeaveRequests();
  }

  fetchUserLeaveRequests(): void {
    this.leaveRequestService.getUserLeaveRequests().subscribe(
      (data) => {
        this.leaveRequests = data;
      },
      (error) => {
        console.error('Error fetching leave requests:', error);
      }
    );
  }
}