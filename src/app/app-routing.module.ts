import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';

const routes: Routes = [
  { path: 'example', loadChildren: () => import('./pages/example/example.module').then(m => m.ExampleModule) },
  { path: '', component: HomeComponent },
  { path: 'home', redirectTo: '' },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
