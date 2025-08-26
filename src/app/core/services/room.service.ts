import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Room } from '../models/room.model';
import { Observable } from 'rxjs';
import { environment } from '../../environment/env';


@Injectable({
  providedIn: 'root'
})
export class RoomService {
  
    private apiUrl =environment.apiUrl
  
constructor(private http:HttpClient){}

  public getRoom():Observable<Room[]> {
return this.http.get<Room[]>(`${this.apiUrl}/room`);   
  }

  public addRoom(room: Room): Observable<Room> {
              return this.http.post<Room>(`${this.apiUrl}/room`, room);
            }
          
             public updateRoom(room: Room): Observable<Room> {
              return this.http.put<Room>(`${this.apiUrl}/room`, room);
            }
          
           public  deleteRoom(room: Room): Observable<void> {
            return this.http.request<void>('delete', `${this.apiUrl}/room`, {body: room});
          }
}
