import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PredictionService {
  private apiUrl = 'http://localhost:5000/predict'; 

  constructor(private http: HttpClient) { }

  predict(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }
}
