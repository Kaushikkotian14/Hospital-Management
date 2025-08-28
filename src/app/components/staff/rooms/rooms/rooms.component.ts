import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';
import { AddRoomsDialog } from '../add-rooms/add-rooms-dialog.component';
import { AddBlockDialog } from '../add-block/add-block-dialog.component';
import { Room } from '../../../../core/models/room.model';
import { Block } from '../../../../core/models/block.model';
import { RoomService } from '../../../../core/services/room.service';
import { BlockService } from '../../../../core/services/block.service';
import { DatePipe,CurrencyPipe } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-rooms',
  imports: [MatTableModule, MatButtonModule, MatDialogModule, MatIcon,DatePipe,CurrencyPipe,MatTabsModule],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.css'
})
export class RoomsComponent implements OnInit{
public displayedColumnsRoom: string[] = ['roomId', 'roomNumber','blockId','roomType','availability', 'createdOn', 'action'];
 public  dataRoom: Room[] = [];

  public  displayedColumnsBlock: string[] = ['blockId', 'blockCode','blockFloor', 'createdOn', 'action'];
  public dataBlock: Block[] = [];
 
   constructor(
     private roomService: RoomService,
     private blockService:BlockService,
     private cdRef: ChangeDetectorRef,
     private dialog: MatDialog
   ) {}
 
   ngOnInit(): void {
     this.getRoom();
     this.getBlock();
   }
 
  public getRoom() {
     this.roomService.getRoom().subscribe(data => {
       this.dataRoom = data;
       this.cdRef.detectChanges();
       console.log("room", this.dataRoom);
     });
   }

  public openDialogRoom(roomData?:Room){
 console.log("dialog",roomData);
         const dialogRef = this.dialog.open(AddRoomsDialog, {
           width: '400px',
           data: roomData
         });
       
         dialogRef.afterClosed().subscribe(result => {
           if (result) {
             if (roomData) {
               this.roomService.updateRoom(result).subscribe(() => {
                 this.getRoom();
               });
             } else {
               this.roomService.addRoom(result).subscribe(() => {
                 this.getRoom();
               });
             }
           }
         });
   }

  public deleteRoom(id:number){
const room = this.dataRoom.find(dataRoom => dataRoom.roomId === id);

  console.log("click",room)
  if (!room) return;
  this.roomService.deleteRoom(room).subscribe({
    next: () => {
      this.getRoom() ; 
    },
    error: (err) => {
      console.error('Error ', err);
    }
  });

   }

  public  getBlock() {
     this.blockService.getBlock().subscribe(data => {
       this.dataBlock = data;
       this.cdRef.detectChanges();
       console.log("block", this.dataBlock);
     });
   }

  public openDialogBlock(blockData?:Block){

   }

  public deleteBlock(id:number){


   }

  }
