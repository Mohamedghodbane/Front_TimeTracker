import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LeaveRequest } from '../Models/leave-request.model';
import { LeaveRequestStatus } from '../Models/leave-request-status.enum';

@Injectable({
  providedIn: 'root',
})
export class LeaveRequestService {
  private apiUrl = 'http://localhost:3000/request'; 

  constructor(private http: HttpClient) {}


  createLeaveRequest(leaveRequest: LeaveRequest): Observable<any> {
    return this.http.post(`${this.apiUrl}/create`, leaveRequest,this.getAuthHeaders());
  }

  getLeaveRequests(): Observable<LeaveRequest[]> {
    return this.http.get<LeaveRequest[]>(`${this.apiUrl}/get`);
  }


  updateLeaveRequestStatus(id: number, status: LeaveRequestStatus): Observable<any> {
    return this.http.patch(`${this.apiUrl}/${id}/status`, { status });
  }

  deleteLeaveRequest(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  getAuthHeaders() {
    const token = localStorage.getItem('token');
    return {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`,
      }),
    };
  }

  getAllLeaveRequests(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/getall`, this.getAuthHeaders());
  }
  getUserLeaveRequests(): Observable<LeaveRequest[]> {
    return this.http.get<LeaveRequest[]>(`${this.apiUrl}/get`, this.getAuthHeaders());
  }
}
