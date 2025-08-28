import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { physican } from '../../../../core/models/physican.model';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-add-physican-dialog',
  imports: [ReactiveFormsModule,MatDialogModule, MatFormFieldModule,MatInputModule,MatButtonModule],
  templateUrl: './add-physican-dialog.component.html',
  styleUrl: './add-physican-dialog.component.css'
})

export class AddPhysicanDialog {
public physicianForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<AddPhysicanDialog>,
    @Inject(MAT_DIALOG_DATA) public data: physican
  ) {
    this.physicianForm = this.fb.group({
      name: [data?.name || '', Validators.required],
      position: [data?.position || '', Validators.required],
    });
  }

public save() {
  if (this.physicianForm.valid) {
    this.dialogRef.close({
      ...this.data,...this.physicianForm.value });
  }
}

 public close() {
    this.dialogRef.close();
  }
}
