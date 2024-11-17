import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private apiUrl = 'http://localhost:3000/notifications'; // Adjust based on your backend API

  constructor(private http: HttpClient) {}

 
  getNotifications(userId: number): Observable<Notification[]> {
    return this.http.get<Notification[]>(`${this.apiUrl}/user/${userId}`);
  }

  // Create a new notification (Admin functionality)
  createNotification(userId: number, message: string, notificationType: string): Observable<Notification> {
    const notificationData = {
      userId,
      message,
      notificationType
    };
    return this.http.post<Notification>(this.apiUrl, notificationData);
  }
  markAsRead(notificationId: number): Observable<void> {
    return this.http.put<void>(`/api/notifications/${notificationId}/read`, {});  // Replace with your endpoint
  }
  
}
