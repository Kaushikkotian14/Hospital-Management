import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Patient as patient} from '../models/patient.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Patient {
  private apiUrl ='https://gdtc-training-api.azurewebsites.net/api/hospital/'
    
  constructor(private http:HttpClient){}
  
      getPatient(): Observable<patient[]> {
  return this.http.get<patient[]>(`${this.apiUrl}/patients`);   
    }

    addPatient(patient: patient): Observable<patient> {
          return this.http.post<patient>(`${this.apiUrl}/patients`, patient);
        }

         updatePatient(patient: patient): Observable<patient> {
          return this.http.put<patient>(`${this.apiUrl}/patients`, patient);
        }
      
        deletePatient(patient: patient): Observable<void> {
        return this.http.request<void>('delete', `${this.apiUrl}/patients`, {body: patient});
      }
}
