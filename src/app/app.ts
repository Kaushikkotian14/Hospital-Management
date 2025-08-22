import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddNurse } from './staff/add-nurse/add-nurse.component';
import { ViewNurse } from './staff/view-nurse/view-nurse.component';
import { AddPatient } from './patient/add-patient/add-patient.component';
import { ViewPatient } from './patient/view-patient/view-patient.component';
import { AddPhysican } from './staff/add-physican/add-physican.component';
import { ViewPhysican } from './staff/view-physican/view-physican.component';
import { Home } from './home/home.component';
import { Header } from './header/header.component';
import { Footer } from './footer/footer.component';

@Component({
  selector: 'app-root',

  imports: [RouterOutlet,Header,Footer,Home,AddNurse,ViewNurse,AddPatient,ViewPatient,AddPhysican,ViewPhysican],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('hospital-management');
}
