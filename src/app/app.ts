import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddNurse } from './staff/add-nurse/add-nurse';
import { ViewNurse } from './staff/view-nurse/view-nurse';
import { AddPatient } from './patient/add-patient/add-patient';
import { ViewPatient } from './patient/view-patient/view-patient';
import { AddPhysican } from './staff/add-physican/add-physican';
import { ViewPhysican } from './staff/view-physican/view-physican';
import { Home } from './home/home';
import { Header } from './header/header';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Header,Footer,Home,AddNurse,ViewNurse,AddPatient,ViewPatient,AddPhysican,ViewPhysican],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('hospital-management');
}
