import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Nurse } from '../../services/nurse.service';
import { nurse } from '../../models/nurse.model';
import { AddNurse } from '../add-nurse/add-nurse.component';

@Component({
  selector: 'app-view-nurse',
  standalone: true,
  imports: [MatTableModule, MatButtonModule, MatDialogModule, AddNurse],
  templateUrl: './view-nurse.component.html',
  styleUrl: './view-nurse.component.css'
})
export class ViewNurse implements OnInit {
  displayedColumns: string[] = ['nurseId', 'name', 'position', 'registered', 'createdOn', 'action'];
  dataSource: nurse[] = [];

  constructor(
    private nurseService: Nurse,
    private cdRef: ChangeDetectorRef,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getNurse();
  }

  getNurse() {
    this.nurseService.getNurse().subscribe(data => {
      this.dataSource = data;
      this.cdRef.detectChanges();
      console.log("log", this.dataSource);
    });
  }

  openDialog(nurseData?: nurse) {
  const dialogRef = this.dialog.open(AddNurse, {
    width: '400px',
    data: nurseData || null
  });

  dialogRef.afterClosed().subscribe(result => {
    if (result) {
      if (nurseData) {
        this.nurseService.updateNurse(result).subscribe(() => {
          this.getNurse();
        });
      } else {
        this.nurseService.addNurse(result).subscribe(() => {
          this.getNurse();
        });
      }
    }
  });
}

deleteNurse(id: number): void {
  const nurse = this.dataSource.find(n => n.nurseId === id);
  if (!nurse) return;

  this.nurseService.deleteNurse(nurse).subscribe({
    next: () => {
      this.getNurse() ;
     
    },
    error: (err) => {
      console.error('Error ', err);
    }
  });
}



}
