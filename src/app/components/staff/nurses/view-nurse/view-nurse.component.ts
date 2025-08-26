import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';
import { NurseService } from '../../../../core/services/nurse.service';
import { nurse } from '../../../../core/models/nurse.model';
import { AddNurse } from '../add-nurse/add-nurse.component';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-view-nurse',
  imports: [MatTableModule, MatButtonModule, MatDialogModule, MatIcon,DatePipe,MatCardModule,MatGridListModule],
  templateUrl: './view-nurse.component.html',
  styleUrl: './view-nurse.component.css'
})
export class ViewNurse implements OnInit {
public nurses: nurse[] = [];

  constructor(
    private nurseService: NurseService,
    private cdRef: ChangeDetectorRef,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getNurse();
  }

public  getNurse() {
    this.nurseService.getNurse().subscribe(data => {
      this.nurses = data;
      this.cdRef.detectChanges();
      console.log("log", this.nurses);
    });
  }

public  openDialog(nurseData?: nurse) {
    console.log(nurseData)
  const dialogRef = this.dialog.open(AddNurse, {
    width: '400px',
    data: nurseData
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

public deleteNurse(id: number): void {
  const nurse = this.nurses.find(nurse => nurse.nurseId === id);
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
