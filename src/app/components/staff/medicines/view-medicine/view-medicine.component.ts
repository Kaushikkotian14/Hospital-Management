import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';
import { AddMedicineDialog } from '../add-medicine-dialog/add-medicine-dialog.component';
import { Medicine } from '../../../../core/models/medicine.model';
import { MedicineService } from '../../../../core/services/medicine.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-view-medicine.component',
  imports: [MatTableModule, MatButtonModule, MatDialogModule, MatIcon,DatePipe],
  templateUrl: './view-medicine.component.html',
  styleUrl: './view-medicine.component.css'
})
export class ViewMedicineComponent implements OnInit{
public displayedColumns: string[] = ['medicationId', 'name','brand', 'description', 'createdDate', 'action'];
  public medicines: Medicine[] = [];
 
   constructor(
     private medicineService: MedicineService,
     private cdRef: ChangeDetectorRef,
     private dialog: MatDialog
   ) {}
 
   ngOnInit(): void {
     this.getMedicine();
   }
 
   public getMedicine() {
     this.medicineService.getMedicine().subscribe(data => {
       this.medicines = data;
       this.cdRef.detectChanges();
       console.log("medicine", this.medicines);
     });
   }

  public openDialog(medicineData?:Medicine){
  console.log("dialog",medicineData);
         const dialogRef = this.dialog.open(AddMedicineDialog, {
           width: '400px',
           data: medicineData
         });
       
         dialogRef.afterClosed().subscribe(result => {
           if (result) {
             if (medicineData) {
               this.medicineService.updateMedicine(result).subscribe(() => {
                 this.getMedicine();
               });
             } else {
               this.medicineService.addMedicine(result).subscribe(() => {
                 this.getMedicine();
               });
             }
           }
         });
   }

  public deleteMedicine(id:number){
const medicine = this.medicines.find(medicines => medicines.medicationId === id);
  console.log("click",medicine)
  if (!medicine) return;
  this.medicineService.deleteMedicine(medicine).subscribe({
    next: () => {
      this.getMedicine() ; 
    },
    error: (err) => {
      console.error('Error ', err);
    }
  });
   }
}
 

