import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MultipleIframeRoutingModule } from './multiple-iframe-routing.module';
import { MultipleIframeComponent } from './multiple-iframe/multiple-iframe.component';


@NgModule({
  declarations: [
    MultipleIframeComponent
  ],
  imports: [
    CommonModule,
    MultipleIframeRoutingModule
  ]
})
export class MultipleIframeModule { }
