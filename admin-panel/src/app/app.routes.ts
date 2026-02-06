import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./layout/layout.component').then(m => m.LayoutComponent),
    children: [
      { path: '', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) },
      { path: 'registro', loadComponent: () => import('./pages/registro/registro.component').then(m => m.RegistroComponent) },
      { path: 'usuarios', loadComponent: () => import('./pages/usuarios/usuarios-list.component').then(m => m.UsuariosListComponent) }
    ]
  },
  { path: '**', redirectTo: '' }
];
