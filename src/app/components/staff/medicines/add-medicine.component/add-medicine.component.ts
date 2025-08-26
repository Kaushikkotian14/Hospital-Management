import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Medicine } from '../../../../core/models/medicine.model';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-add-medicine.component',
  imports: [ReactiveFormsModule,MatDialogModule, MatFormFieldModule,MatInputModule,MatButtonModule],
  templateUrl: './add-medicine.component.html',
  styleUrl: './add-medicine.component.css'
})
export class AddMedicineComponent {
public medicineForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<AddMedicineComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Medicine
  ) {
    this.medicineForm = this.fb.group({
      name: [data?.name || '', Validators.required],
      brand: [data?.brand || '', Validators.required],
      description: [data?.description || '', Validators.required],
    });
  }

public  save() {
  if (this.medicineForm.valid) {
    this.dialogRef.close({
      ...this.data,...this.medicineForm.value });
  }
}

public  close() {
    this.dialogRef.close();
  }
}
