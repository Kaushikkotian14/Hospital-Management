import { Component, OnInit,signal } from '@angular/core';
import { Nurse } from '../../services/nurse.service';
import { nurse } from '../../models/nurse.model';
import {MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-view-nurse',
  imports: [MatTableModule],
  templateUrl: './view-nurse.component.html',
  styleUrl: './view-nurse.component.css'
})
export class ViewNurse implements OnInit {

constructor(private nurseService:Nurse){}
  displayedColumns: string[] = ['nurseId', 'name', 'position', 'registered','createdOn','action'];
  dataSource:nurse[]=[]
ngOnInit(): void {
  this.getNurse()
}

getNurse(){
  this.nurseService.getNurse().subscribe(data=>{
    this.dataSource=data;
    
 console.log("log",this.dataSource)
  })

}



  

  
}


