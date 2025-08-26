import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { treatment } from '../models/procedure.model';
import { Observable } from 'rxjs';
import { environment } from '../../environment/env';


@Injectable({
  providedIn: 'root'
})
export class ProcedureService {
  private apiUrl =environment.apiUrl
  
constructor(private http:HttpClient){}
  public getProcedure():Observable<treatment[]> {
return this.http.get<treatment[]>(`${this.apiUrl}/procedure`);   
  }

  public addProcedure(treatment: treatment): Observable<treatment> {
            return this.http.post<treatment>(`${this.apiUrl}/procedure`, treatment);
          }
        
  public  updateProcedure(treatment: treatment): Observable<treatment> {
            return this.http.put<treatment>(`${this.apiUrl}/procedure`, treatment);
          }
        
  public deleteProcedure(treatment: treatment): Observable<void> {
          return this.http.request<void>('delete', `${this.apiUrl}/procedure`, {body: treatment});
        }
}
