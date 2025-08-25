import { Component,ChangeDetectorRef, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { AddPhysican } from '../add-physican/add-physican.component';
import { PhysicanService } from '../../../services/physican.service';
import { physican, trainedin, treatment } from '../../../models/physican.model';
import { MatIcon } from '@angular/material/icon';



@Component({
  selector: 'app-view-physican',
  standalone: true,
  imports: [MatCardModule, MatGridListModule, MatButtonModule, MatDialogModule,MatIcon],
  templateUrl: './view-physican.component.html',
  styleUrl: './view-physican.component.css'
})
export class ViewPhysican implements OnInit {
  physicans: physican[] = [];
  trainedIn: trainedin[] = [];
  treatment: treatment[] = [];

  constructor(
    private PhysicanService: PhysicanService,
     private cdRef: ChangeDetectorRef,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getPhysican();
  }

  getPhysican() {
    this.PhysicanService.getPhysican().subscribe(data => {
      this.physicans = data;
        this.cdRef.detectChanges();
      console.log("physician", this.physicans);
    });
  }

  deletePhysican(id: number): void {
  const physician = this.physicans.find(physicans => physicans.physicianId === id);
  console.log("click",physician)
  if (!physician) return;
  this.PhysicanService.deletePhysician(physician).subscribe({
    next: () => {
      this.getPhysican() ; 
    },
    error: (err) => {
      console.error('Error ', err);
    }
  });
}

  getTrainedIn() {
    this.PhysicanService.getTrainedIn().subscribe(data => {
      this.trainedIn = data;
      this.getPhysican();
      this.getProcedure();
      console.log("trainedin", this.trainedIn);
    });
  }

  getProcedure() {
    this.PhysicanService.getProcedure().subscribe(data => {
      this.treatment = data;
      console.log("treatment", this.treatment);
    });
  }

  
  openDialog(physicianData?: physican) {
    console.log("dialog",physicianData);
    const dialogRef = this.dialog.open(AddPhysican, {
      width: '400px',
      data: physicianData
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (physicianData) {
          this.PhysicanService.updatePhysician(result).subscribe(() => {
            this.getPhysican();
          });
        } else {
          this.PhysicanService.addPhysician(result).subscribe(() => {
            this.getPhysican();
          });
        }
      }
    });
  }
  
}
