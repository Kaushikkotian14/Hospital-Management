import { Room } from "./room.model";

export interface Stay{
stayId:number,
startDateTime:string,
endDateTime:string,
room?:Room
}