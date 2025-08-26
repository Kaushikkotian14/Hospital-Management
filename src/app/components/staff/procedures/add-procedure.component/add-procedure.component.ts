import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { treatment } from '../../../../core/models/procedure.model';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';



@Component({
  selector: 'app-add-procedure.component',
  imports: [ReactiveFormsModule,MatDialogModule, MatFormFieldModule,MatInputModule,MatButtonModule],
  templateUrl: './add-procedure.component.html',
  styleUrl: './add-procedure.component.css'
})
export class AddProcedureComponent {
public procedureForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<AddProcedureComponent>,
    @Inject(MAT_DIALOG_DATA) public data: treatment
  ) {
    this.procedureForm = this.fb.group({
      name: [data?.name || '', Validators.required],
      cost: [data?.cost || '', Validators.required],
    });
  }

public  save() {
  if (this.procedureForm.valid) {
    this.dialogRef.close({
      ...this.data,...this.procedureForm.value });
  }
}

public  close() {
    this.dialogRef.close();
  }
}
