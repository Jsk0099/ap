import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CounterRoutingModule } from './counter-routing.module';
import { CounterComponent } from './counter/counter.component';
import { FormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
  declarations: [
    CounterComponent,
    SettingsComponent
  ],
  imports: [
    CommonModule,
    CounterRoutingModule,
    FormsModule,
    MatDialogModule
  ],
  entryComponents:[SettingsComponent]
})
export class CounterModule { }
