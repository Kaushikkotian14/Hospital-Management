import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { nurse } from '../models/nurse.model';

@Injectable({
  providedIn: 'root'
})
export class Nurse {
  private apiUrl = 'https://gdtc-training-api.azurewebsites.net/api/hospital';

  constructor(private http: HttpClient) {}

  getNurse(): Observable<nurse[]> {
    return this.http.get<nurse[]>(`${this.apiUrl}/nurse`);
  }

  addNurse(n: nurse): Observable<nurse> {
    return this.http.post<nurse>(`${this.apiUrl}/nurse`, n);
  }

   updateNurse(n: nurse): Observable<nurse> {
    return this.http.put<nurse>(`${this.apiUrl}/nurse`, n);
  }

  deleteNurse(n: nurse): Observable<void> {
  return this.http.request<void>('delete', `${this.apiUrl}/nurse`, {
    body: n
  });
}
}
