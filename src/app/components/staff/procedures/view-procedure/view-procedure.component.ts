import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';
import { AddProcedureDialog } from '../add-procedure/add-procedure-dialog.component';
import { treatment } from '../../../../core/models/procedure.model';
import { ProcedureService } from '../../../../core/services/procedure.service';
import { DatePipe,CurrencyPipe } from '@angular/common';


@Component({
  selector: 'app-view-procedure',
  imports: [MatTableModule, MatButtonModule, MatDialogModule, MatIcon,DatePipe,CurrencyPipe],
  templateUrl: './view-procedure.component.html',
  styleUrl: './view-procedure.component.css'
})
export class ViewProcedureComponent implements OnInit{
public displayedColumns: string[] = ['procedureId', 'name','cost', 'createdOn', 'action'];
public  procedures: treatment[] = [];
 
   constructor(
     private procedureService: ProcedureService,
     private cdRef: ChangeDetectorRef,
     private dialog: MatDialog
   ) {}
 
   ngOnInit(): void {
     this.getProcedure();
   }
 
public   getProcedure() {
     this.procedureService.getProcedure().subscribe(data => {
       this.procedures = data;
       this.cdRef.detectChanges();
       console.log("treatment", this.procedures);
     });
   }

public   openDialog(treatmentData?:treatment){
   console.log("dialog",treatmentData);
       const dialogRef = this.dialog.open(AddProcedureDialog, {
         width: '400px',
         data: treatmentData
       });
     
       dialogRef.afterClosed().subscribe(result => {
         if (result) {
           if (treatmentData) {
             this.procedureService.updateProcedure(result).subscribe(() => {
               this.getProcedure();
             });
           } else {
             this.procedureService.addProcedure(result).subscribe(() => {
               this.getProcedure();
             });
           }
         }
       });
     }
   

public   deleteProcedure(id:number){
const procedure = this.procedures.find(procedures => procedures.procedureId === id);
  console.log("click",procedure)
  if (!procedure) return;
  this.procedureService.deleteProcedure(procedure).subscribe({
    next: () => {
      this.getProcedure() ; 
    },
    error: (err) => {
      console.error('Error ', err);
    }
  });
   }
 
}
