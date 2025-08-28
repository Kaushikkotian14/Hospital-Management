import { Component,ChangeDetectorRef, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { AddPhysicanDialog } from '../add-physican-dialog/add-physican-dialog.component';
import { PhysicanService } from '../../../../core/services/physican.service';
import { physican } from '../../../../core/models/physican.model';
import { treatment } from '../../../../core/models/procedure.model';
import { MatIcon } from '@angular/material/icon';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';



@Component({
  selector: 'app-view-physican',
  standalone: true,
  imports: [MatCardModule, MatGridListModule, MatButtonModule, MatDialogModule,MatIcon,DatePipe,],
  templateUrl: './view-physican.component.html',
  styleUrl: './view-physican.component.css'
})
export class ViewPhysican implements OnInit {
public  physicans: physican[] = [];
public  treatment: treatment[] = [];

  constructor(
    private PhysicanService: PhysicanService,
     private cdRef: ChangeDetectorRef,
    private dialog: MatDialog,
    private route:Router
  ) {}

  ngOnInit(): void {
    this.getPhysican();
  }

public  getPhysican() {
    this.PhysicanService.getPhysican().subscribe(data => {
      this.physicans = data;
        this.cdRef.detectChanges();
      console.log("physician", this.physicans);
    });
  }

public  deletePhysican(id: number): void {
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




  
public  openDialog(physicianData?: physican) {
    console.log("dialog",physicianData);
    const dialogRef = this.dialog.open(AddPhysicanDialog, {
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

  public physicianDetails(id:number){
    let physicianId = id.toString()
    this.route.navigate(['/view-physican/',physicianId]);
  }
  
}
