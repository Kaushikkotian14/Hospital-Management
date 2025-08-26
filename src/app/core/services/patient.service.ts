import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Patient as patient} from '../models/patient.model';
import { Observable } from 'rxjs';
import { environment } from '../../environment/env';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private apiUrl =environment.apiUrl
    
  constructor(private http:HttpClient){}
  
      public getPatient(): Observable<patient[]> {
  return this.http.get<patient[]>(`${this.apiUrl}/patients`);   
    }

    public addPatient(patient: patient): Observable<patient> {
          return this.http.post<patient>(`${this.apiUrl}/patients`, patient);
        }

        public  updatePatient(patient: patient): Observable<patient> {
          return this.http.put<patient>(`${this.apiUrl}/patients`, patient);
        }
      
        public deletePatient(patient: patient): Observable<void> {
        return this.http.request<void>('delete', `${this.apiUrl}/patients`, {body: patient});
      }
}
