import { Component, OnInit } from '@angular/core';
import { LeaveRequestService } from '../services/leave-request.service';
import { LeaveRequest } from '../Models/leave-request.model';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-user-request',
  templateUrl: './user-request.component.html',
  styleUrls: ['./user-request.component.css']
})
export class UserRequestComponent implements OnInit {
  leaveRequests: LeaveRequest[] = [];
  newRequest: LeaveRequest = { startDate: new Date(), endDate: new Date(), status: '', reason: '' };


  constructor(private leaveRequestService: LeaveRequestService, private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.fetchLeaveRequests();
  }

  // Fetches all leave requests
  fetchLeaveRequests(): void {
    this.leaveRequestService.getLeaveRequests().subscribe(
      (data) => {
        this.leaveRequests = data;
      },
      (error) => {
        console.error('Error fetching leave requests:', error);
      }
    );
  }

  // Adds a new leave request
  addRequest(): void {
    this.leaveRequestService.createLeaveRequest(this.newRequest).subscribe(
      (response) => {
        this.leaveRequests.push(response);  // Update table after adding
        this.newRequest =  { startDate: new Date(), endDate: new Date(), status: '', reason: '' };
      },
      (error) => {
        console.error('Error creating leave request:', error);
      }
    );
  }

 

  // Deletes a leave request
  deleteRequest(id: number): void {
    this.leaveRequestService.deleteLeaveRequest(id).subscribe(
      (response) => {
        this.leaveRequests = this.leaveRequests.filter((req) => req.id !== id);
      },
      (error) => {
        console.error('Error deleting leave request:', error);
      }
    );
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
