import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';

const routes: Routes = [
  { path: 'composition', loadComponent: () => import('./pages/composition/composition.component').then(m => m.CompositionComponent) },
  { path: 'standalone', loadComponent: () => import('./pages/standalone/standalone.component').then(m => m.StandaloneComponent) },
  { path: 'bridge', loadComponent: () => import('./pages/bridge/view.component').then(m => m.ViewComponent) },
  { path: '', component: HomeComponent },
  { path: 'home', redirectTo: '' },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
