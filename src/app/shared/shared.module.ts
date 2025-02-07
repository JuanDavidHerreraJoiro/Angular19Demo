import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './directives/material.module';
import { AtomCardComponent } from './components/atom-card/atom-card.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModule
  ],
})

export class SharedModule { }
