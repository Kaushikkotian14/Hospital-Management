import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { nurse } from '../../models/nurse.model';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-add-nurse',
  imports: [
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule
  ],
  templateUrl: './add-nurse.component.html',
  styleUrl: './add-nurse.component.css'
})
export class AddNurse {
  nurseForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<AddNurse>,
    @Inject(MAT_DIALOG_DATA) public data: nurse
  ) {
    this.nurseForm = this.fb.group({
      name: [data?.name || '', Validators.required],
      position: [data?.position || '', Validators.required],
      registered: [data?.registered ?? true],
    });
  }

  save() {
  if (this.nurseForm.valid) {
    this.dialogRef.close({
      ...this.data,...this.nurseForm.value });
  }
}


  close() {
    this.dialogRef.close();
  }
}
