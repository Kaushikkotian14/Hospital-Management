import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import {  MatDialogModule } from '@angular/material/dialog';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [MatCardModule,MatCardModule,MatButtonModule,MatGridListModule,MatDialogModule,RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class Home {
 
}
