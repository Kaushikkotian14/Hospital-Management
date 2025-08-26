import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { nurse } from '../models/nurse.model';
import { environment } from '../../environment/env';

@Injectable({
  providedIn: 'root'
})
export class NurseService {
  private apiUrl =environment.apiUrl
  constructor(private http: HttpClient) {}

  public getNurse(): Observable<nurse[]> {
    return this.http.get<nurse[]>(`${this.apiUrl}/nurse`);
  }

  public addNurse(nurse: nurse): Observable<nurse> {
    return this.http.post<nurse>(`${this.apiUrl}/nurse`, nurse);
  }

  public updateNurse(nurse: nurse): Observable<nurse> {
    return this.http.put<nurse>(`${this.apiUrl}/nurse`, nurse);
  }

  public deleteNurse(nurse: nurse): Observable<void> {
  return this.http.request<void>('delete', `${this.apiUrl}/nurse`, {body: nurse});
}
}
