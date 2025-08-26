import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ViewNurse } from './components/staff/nurses/view-nurse/view-nurse.component';
import { ViewPatient } from './components/patient/view-patient/view-patient.component';
import { ViewPhysican } from './components/staff/physician/view-physican/view-physican.component';
import { Home } from './components/home/home.component';
import { Header } from './shared/header/header.component';
import { Footer } from './shared/footer/footer.component';

@Component({
  selector: 'app-root',

  imports: [RouterOutlet,Header,Footer,Home,ViewNurse,ViewPatient,ViewPhysican],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('hospital-management');
}
