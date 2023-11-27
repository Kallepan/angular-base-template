import { Routes } from '@angular/router';
import { HomeComponent } from './core/components/home/home.component';

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
    loadComponent: () => import('./modules/composition/components/composition.component').then(m => m.CompositionComponent),
    data: { label: 'Composition' }
  },
  {
    path: 'bridge',
    loadComponent: () => import('./modules/bridge/view.component').then(m => m.ViewComponent),
    data: { label: 'Bridge' },
  },
  {
    path: 'standalone',
    loadChildren: () => import('./modules/standalone/standalone.routes').then(m => m.routes),
  },
  { path: '', component: HomeComponent, title: 'Home' },
  { path: '**', redirectTo: '' },
];
