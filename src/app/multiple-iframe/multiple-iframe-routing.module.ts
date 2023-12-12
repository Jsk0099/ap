import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MultipleIframeComponent } from './multiple-iframe/multiple-iframe.component';

const routes: Routes = [
  { path: '', component: MultipleIframeComponent, data: { id: 'navmultipleiframe' } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MultipleIframeRoutingModule { }
