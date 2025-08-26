import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Room } from '../../../../core/models/room.model';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-add-rooms.component',
  imports: [ReactiveFormsModule,MatDialogModule, MatFormFieldModule,MatInputModule,MatButtonModule,MatCheckboxModule],
  templateUrl: './add-rooms.component.html',
  styleUrl: './add-rooms.component.css'
})
export class AddRoomsComponent {
public roomForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<AddRoomsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Room
  ) {
    this.roomForm = this.fb.group({
      roomNumber: [data?.roomNumber || '', Validators.required],
       blockId: [data?.block?.blockId || '', Validators.required],
      roomType: [data?.roomType || '', Validators.required],
      availability: [data?.availability ?? true],
    });
  }

public  save() {
  if (this.roomForm.valid) {
    this.dialogRef.close({
      ...this.data,...this.roomForm.value });
  }
}

public  close() {
    this.dialogRef.close();
  }
}
