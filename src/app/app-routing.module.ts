import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MainComponent } from './core/components/main/main.component';

// Add routes with labels to display in the menu
const routes: Routes = [
  {
    path: 'state/articles/:id',
    loadComponent: () => import('./modules/patterns/state/article-detail.component').then(m => m.default)
  },
  {
    path: 'state/articles',
    loadComponent: () => import('./modules/patterns/state/state.component').then(m => m.default),
    data: { label: 'State' }
  },
  { 
    path: 'composition', 
    loadComponent: () => import('./modules/patterns/composition/composition.component').then(m => m.CompositionComponent),
    data: { label: 'Composition' }
  },
  { 
    path: 'standalone', 
    loadComponent: () => import('./modules/patterns/standalone/standalone.component').then(m => m.StandaloneComponent), 
    data: { label: 'Standalone' } 
  },
  { 
    path: 'bridge', 
    loadComponent: () => import('./modules/patterns/bridge/view.component').then(m => m.ViewComponent), 
    data: { label: 'Bridge' } 
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
