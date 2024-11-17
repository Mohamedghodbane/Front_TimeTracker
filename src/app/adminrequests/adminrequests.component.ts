import { Component, OnInit } from '@angular/core';
import { LeaveRequestService } from '../services/leave-request.service';
import { LeaveRequestStatus } from '../Models/leave-request-status.enum';

@Component({
  selector: 'app-adminrequests',
  templateUrl: './adminrequests.component.html',
  styleUrls: ['./adminrequests.component.css']
})
export class AdminrequestsComponent implements OnInit {
  leaveRequests: any[] = [];
  selectedRequestId: number | null = null; // To track the selected request

  constructor(private leaveRequestService: LeaveRequestService) {}

  ngOnInit(): void {
    this.loadLeaveRequests();
  }

  loadLeaveRequests() {
    this.leaveRequestService.getAllLeaveRequests().subscribe(
      (data) => {
        console.log('Fetched leave requests:', data);
        this.leaveRequests = data;
      },
      (error) => {
        console.error('Error fetching leave requests', error);
      }
    );
  }

  // Select the request and store its ID
  selectRequest(id: number) {
    this.selectedRequestId = id;
  }

  approveRequest() {
    if (this.selectedRequestId) {
      this.leaveRequestService.updateLeaveRequestStatus(this.selectedRequestId, LeaveRequestStatus.ACCEPTED).subscribe(
        () => {
          console.log(`Request ${this.selectedRequestId} approved`);
          this.loadLeaveRequests(); // Reload to update status
          this.selectedRequestId = null; // Clear selection after action
        },
        (error) => {
          console.error(`Error approving request ${this.selectedRequestId}`, error);
        }
      );
    }
  }

  rejectRequest() {
    if (this.selectedRequestId) {
      this.leaveRequestService.updateLeaveRequestStatus(this.selectedRequestId, LeaveRequestStatus.REFUSED).subscribe(
        () => {
          console.log(`Request ${this.selectedRequestId} rejected`);
          this.loadLeaveRequests(); // Reload to update status
          this.selectedRequestId = null; // Clear selection after action
        },
        (error) => {
          console.error(`Error rejecting request ${this.selectedRequestId}`, error);
        }
      );
    }
  }
}