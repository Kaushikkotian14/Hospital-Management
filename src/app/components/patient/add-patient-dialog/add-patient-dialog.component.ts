import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Patient as patient } from '../../../core/models/patient.model';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-add-patient-dialog',
  imports: [ReactiveFormsModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatCheckboxModule, MatButtonModule],
  templateUrl: './add-patient-dialog.component.html',
  styleUrl: './add-patient-dialog.component.css'
})
export class AddPatientDialog {
  public patientForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<AddPatientDialog>,
    @Inject(MAT_DIALOG_DATA) public data: patient
  ) {
    this.patientForm = this.fb.group({
      name: [data?.name || '', Validators.required],
      address: [data?.address || '', Validators.required],
      phone: [data?.phone || '', Validators.required],
    });
  }

  public save() {
    if (this.patientForm.valid) {
      this.dialogRef.close({
        ...this.data, ...this.patientForm.value
      });
    }

  }

  public close() {
    this.dialogRef.close();
  }
}
