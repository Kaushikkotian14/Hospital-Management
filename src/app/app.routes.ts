import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
       {
        path: 'home',
        loadComponent: () => import('./home/home.component').then(m => m.Home),
      },
       {
        path: 'add-patient',
        loadComponent: () => import('./patient/add-patient/add-patient.component').then(m => m.AddPatient),
      },
     {
        path: 'view-patient',
        loadComponent: () => import('./patient/view-patient/view-patient.component').then(m => m.ViewPatient),
      },
           {
        path: 'add-physican',
        loadComponent: () => import('./staff/add-physican/add-physican.component').then(m => m.AddPhysican),
      },
     {
        path: 'view-physican',
        loadComponent: () => import('./staff/view-physican/view-physican.component').then(m => m.ViewPhysican),
      },
                 {
        path: 'add-nurse',
        loadComponent: () => import('./staff/add-nurse/add-nurse.component').then(m => m.AddNurse),
      },

           {
        path: 'view-nurse',
        loadComponent: () => import('./staff/view-nurse/view-nurse.component').then(m => m.ViewNurse),
      },



];
