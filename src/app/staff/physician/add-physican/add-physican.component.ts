import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { physican, trainedin, treatment } from '../../../models/physican.model';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-add-physican',
  imports: [ReactiveFormsModule,MatDialogModule, MatFormFieldModule,MatInputModule,MatCheckboxModule,MatButtonModule],
  templateUrl: './add-physican.component.html',
  styleUrl: './add-physican.component.css'
})
export class AddPhysican {
physicianForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<AddPhysican>,
    @Inject(MAT_DIALOG_DATA) public data: physican
  ) {
    this.physicianForm = this.fb.group({
      name: [data?.name || '', Validators.required],
      position: [data?.position || '', Validators.required],
    });
  }

  save() {
  if (this.physicianForm.valid) {
    this.dialogRef.close({
      ...this.data,...this.physicianForm.value });
  }
}

  close() {
    this.dialogRef.close();
  }
}
