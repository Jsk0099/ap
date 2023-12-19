import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard' , pathMatch: 'full'},
  { path: 'multiple-iframe', loadChildren: () => import('./multiple-iframe/multiple-iframe.module').then(m => m.MultipleIframeModule), data: { id: 'navmultipleiframe' } },
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule), data: { id: 'navdashboard' } },
  { path: 'counter', loadChildren: () => import('./counter/counter.module').then(m => m.CounterModule), data: { id: 'navcounter' } },
  { path: '**', redirectTo: 'dashboard' , pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
