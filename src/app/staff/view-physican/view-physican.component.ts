import { Component, OnInit } from '@angular/core';
import {  MatCardModule } from '@angular/material/card';
import { PhysicanService } from '../../services/physican.service';
import { physican,trainedin,treatment } from '../../models/physican.model';


@Component({
  selector: 'app-view-physican',
  imports: [MatCardModule],
  templateUrl: './view-physican.component.html',
  styleUrl: './view-physican.component.css'
})
export class ViewPhysican implements OnInit {
  physicans:physican[]=[]
  trainedIn:trainedin[]=[]
  treatment:treatment[]=[]
  constructor(private PhysicanService:PhysicanService){}

  ngOnInit(): void {
    
    this.getTrainedIn()
    
   
  }

  getPhysican(){
  this.PhysicanService.getPhysican().subscribe(data=>{
    this.physicans=data;    
 console.log("physician",this.physicans)
  })
}

getTrainedIn(){
    this.PhysicanService.getTrainedIn().subscribe(data=>{
      this.trainedIn=data;
      this.getPhysican();
      this.getProcedure();
      console.log("trainedin",this.trainedIn)
    })
  }

  getProcedure(){
     this.PhysicanService.getProcedure().subscribe(data=>{
      this.treatment=data;
      console.log("treatment",this.treatment)
    })
  }

  

}
