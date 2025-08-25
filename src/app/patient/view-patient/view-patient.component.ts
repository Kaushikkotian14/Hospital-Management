import { Component,ChangeDetectorRef, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Patient as patient } from '../../models/patient.model';
import { AddPatient } from '../add-patient/add-patient.component';
import { Patient } from '../../services/patient.service';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-view-patient',
  imports: [MatCardModule, MatGridListModule, MatButtonModule, MatDialogModule,MatIcon],
  templateUrl: './view-patient.component.html',
  styleUrl: './view-patient.component.css'
})
export class ViewPatient implements OnInit {
patients:patient[]=[];

constructor(
    private patientService: Patient,
     private cdRef: ChangeDetectorRef,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getPatient()
  }

getPatient(){
  this.patientService.getPatient().subscribe(data => {
      this.patients = data;
        this.cdRef.detectChanges();
      console.log("patient", this.patients);
    });
}

openDialog(patientData?:patient){
    const dialogRef = this.dialog.open(AddPatient, {
      width: '400px',
      data: patientData
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (patientData) {
          this.patientService.updatePatient(result).subscribe(() => {
            this.getPatient();
          });
        } else {
          this.patientService.addPatient(result).subscribe(() => {
            this.getPatient();
          });
        }
      }
    });
}

deletePatient(id: number): void {
  const patient = this.patients.find(patients => patients.patientId === id);
  
  if (!patient) return;
  this.patientService.deletePatient(patient).subscribe({
    next: () => {
      this.getPatient() ; 
    },
    error: (err) => {
      console.error('Error ', err);
    }
  });
}
}
