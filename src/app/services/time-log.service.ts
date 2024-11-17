import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { TimeLog } from '../Models/TimeLog.model';
@Injectable({
  providedIn: 'root',
})
export class TimeLogService {
  private apiUrl = 'http://localhost:3000/time-log';

  constructor(private http: HttpClient) {}

  private getAuthHeaders() {
    const token = localStorage.getItem('token');
    return {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`,
      }),
    };
  }

  clockIn() {
    return this.http.post(`${this.apiUrl}/time-in`, {}, this.getAuthHeaders());
  }

  clockOut() {
    return this.http.post(`${this.apiUrl}/time-out`, {}, this.getAuthHeaders());
  }

  getAllTimeLogs(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/all`, this.getAuthHeaders())
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: any): Observable<never> {
    console.error('An error occurred:', error); // Log to console for debugging
    return throwError(() => new Error('Something went wrong; please try again later.'));
  }

 

 
  getUserTimeLogs(): Observable<TimeLog[]> {
    return this.http.get<TimeLog[]>(`${this.apiUrl}/user/logs`, this.getAuthHeaders()).pipe(
      catchError(this.handleError)
    );
  }

  getTimeLogsByUser(userId: string) {
    return this.http.get(`/api/timelogs/daily/${userId}`);
  }
  
}
