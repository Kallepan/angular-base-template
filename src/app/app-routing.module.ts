import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';

// Add routes with labels to display in the menu
const routes: Routes = [
  { 
    path: 'composition', 
    loadComponent: () => import('./pages/composition/composition.component').then(m => m.CompositionComponent),
    data: { label: 'Composition' }
  },
  { 
    path: 'standalone', 
    loadComponent: () => import('./pages/standalone/standalone.component').then(m => m.StandaloneComponent), 
    data: { label: 'Standalone' } 
  },
  { 
    path: 'bridge', 
    loadComponent: () => import('./pages/bridge/view.component').then(m => m.ViewComponent), 
    data: { label: 'Bridge' } 
  },
  { path: '', component: HomeComponent },
  { path: 'home', redirectTo: '' },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
