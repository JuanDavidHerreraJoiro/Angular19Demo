import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './directives/material.module';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports:[
    
  ]
})

export class SharedModule { }
