import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./events/events.component').then(m => m.EventsComponent)
  }
];
