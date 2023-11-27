import { Routes } from '@angular/router';
import { HomeComponent } from './core/components/home/home.component';
import { importProvidersFrom } from '@angular/core';

// Add routes with labels to display in the menu
export const routes: Routes = [
  {
    path: 'state/articles/:id',
    loadComponent: () => import('./modules/state/article-detail.component').then(m => m.default)
  },
  {
    path: 'state/articles',
    loadComponent: () => import('./modules/state/state.component').then(m => m.default),
    data: { label: 'State' }
  },
  {
    path: 'composition',
    loadComponent: () => import('./modules/composition/composition.component').then(m => m.CompositionComponent),
    data: { label: 'Composition' }
  },
  {
    path: 'standalone',
    loadComponent: () => import('./modules/standalone/standalone.component').then(m => m.StandaloneComponent),
    data: { label: 'Standalone' },
  },
  {
    path: 'bridge',
    loadComponent: () => import('./modules/bridge/view.component').then(m => m.ViewComponent),
    data: { label: 'Bridge' },
  },
  { path: '', component: HomeComponent, title: 'Home' },
  { path: '**', redirectTo: '' },
];
