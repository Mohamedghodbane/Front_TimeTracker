import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map , tap  } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/auth'; 

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post<{ jwtToken: string, role: string }>(`${this.apiUrl}/login`, { username, password }).pipe(
      tap((res) => {
        // Save the JWT token and role in localStorage
        localStorage.setItem('token', res.jwtToken);
        localStorage.setItem('userRole', res.role); // Store the user role
      })
    );
  }
  getUserRole(): string | null {
    return localStorage.getItem('userRole'); // Retrieve user role from localStorage
  }

 
  register(username: string, email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, { username, email, password });
  }


  getToken(): string | null {
    return localStorage.getItem('token');
  }


  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('userRole');

    
   
  }
 
  isLoggedIn(): boolean {
    return !!this.getToken(); 
  }

  getAllUsers(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/users`);
  }
 
}
