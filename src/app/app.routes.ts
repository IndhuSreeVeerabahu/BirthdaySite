import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./components/login/login').then(m => m.Login)
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./components/home/home').then(m => m.Home)
  },
  {
    path: 'messages',
    loadComponent: () =>
      import('./components/messages/messages').then(m => m.Messages)
  },
  {
    path: 'final',
    loadComponent: () =>
      import('./components/final/final').then(m => m.Final)
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];