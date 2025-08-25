import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';
import { AddMedicineComponent } from '../add-medicine.component/add-medicine.component';
import { Medicine } from '../../../models/physican.model';
import { MedicineService } from '../../../services/medicine.service';

@Component({
  selector: 'app-view-medicine.component',
  imports: [MatTableModule, MatButtonModule, MatDialogModule, MatIcon],
  templateUrl: './view-medicine.component.html',
  styleUrl: './view-medicine.component.css'
})
export class ViewMedicineComponent {
 displayedColumns: string[] = ['medicationId', 'name','brand', 'description', 'createdDate', 'action'];
   dataSource: Medicine[] = [];
 
   constructor(
     private medicineService: MedicineService,
     private cdRef: ChangeDetectorRef,
     private dialog: MatDialog
   ) {}
 
   ngOnInit(): void {
     this.getMedicine();
   }
 
   getMedicine() {
     this.medicineService.getMedicine().subscribe(data => {
       this.dataSource = data;
       this.cdRef.detectChanges();
       console.log("medicine", this.dataSource);
     });
   }

   openDialog(medicineData?:Medicine){

   }

   deleteMedicine(id:number){

   }
 
}
