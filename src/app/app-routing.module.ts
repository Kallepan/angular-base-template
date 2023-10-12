import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';

const routes: Routes = [
  { path: 'composition', loadChildren: () => import('./pages/composition/composition.module').then(m => m.CompositionModule) },
  { path: 'standalone', loadComponent: () => import('./pages/standalone/standalone.component').then(m => m.StandaloneComponent) },
  { path: '', component: HomeComponent },
  { path: 'home', redirectTo: '' },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
