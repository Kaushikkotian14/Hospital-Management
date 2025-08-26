import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
       {
        path: 'home',
        loadComponent: () => import('./components/home/home.component').then(m => m.Home),
      },
      
     {
        path: 'view-patient',
        loadComponent: () => import('./components/patient/view-patient/view-patient.component').then(m => m.ViewPatient),
      },
           
     {
        path: 'view-physican',
        loadComponent: () => import('./components/staff/physician/view-physican/view-physican.component').then(m => m.ViewPhysican),
      },
                 
           {
        path: 'view-nurse',
        loadComponent: () => import('./components/staff/nurses/view-nurse/view-nurse.component').then(m => m.ViewNurse),
      },


       {
        path: 'procedures',
        loadComponent: () => import('./components/staff/procedures/view-procedure.component/view-procedure.component').then(m => m.ViewProcedureComponent),
      },
 
      {
        path: 'medicines',
        loadComponent: () => import('./components/staff/medicines/view-medicine.component/view-medicine.component').then(m => m.ViewMedicineComponent),
      },

       {
        path: 'rooms',
        loadComponent: () => import('./components/staff/rooms/rooms.component/rooms.component').then(m => m.RoomsComponent),
      }
];
