import { DatePipe } from '@angular/common';
import { Component, OnInit,ChangeDetectorRef } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { TrainedInService } from '../../../../core/services/trained-in.service';
import { PhysicanService } from '../../../../core/services/physican.service';
import { physican } from '../../../../core/models/physican.model';
import { trainedInModel } from '../../../../core/models/trainedIn.model';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-physican-details',
  imports: [MatButtonModule,MatIconModule,RouterLink,DatePipe,MatTabsModule],
  templateUrl: './physican-details.component.html',
  styleUrl: './physican-details.component.css'
})
export class PhysicanDetails implements OnInit {
public physicianId:number= 0;
public idString:string='';
public  physicans: physican[] = [];
public  physican: physican[] = [];
public  trainedIn: trainedInModel[] = [];

 
constructor(private trainedInService:TrainedInService, private physicanService:PhysicanService,  private activatedRoute: ActivatedRoute, private cdRef:ChangeDetectorRef){}

ngOnInit(): void {
   this.idString = this.activatedRoute.snapshot.paramMap.get('id') || '';
   this.physicianId = parseInt(this.idString)
   this.getTrainedIn();
   this.getPhysican();
   this.getPhysicianById(this.physicianId);
  console.log(this.idString);
}

public  getPhysican() {
    this.physicanService.getPhysican().subscribe({
     next:data =>{
      this.physicans = data;
        this.cdRef.detectChanges();
      console.log("physician", this.physicans);
     } 
    });
  }

public  getTrainedIn() {
    this.trainedInService.getTrainedIns().subscribe({
      next: (data) => {
        this.trainedIn = data; 
        this.cdRef.detectChanges()
      console.log("trainedin", this.trainedIn);
      }  
    });
  }

  public getPhysicianById(id:number){
     this.physicanService.getPhysicianById(id).subscribe({
     next:data =>{
      this.physican = data;
        this.cdRef.detectChanges();
      console.log("physicianID", this.physican);
     } 
    });
  }

  

}
