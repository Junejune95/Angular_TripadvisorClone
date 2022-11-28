import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FixTopMenuComponent } from 'src/app/shared/layouts/fix-top-menu/fix-top-menu.component';


const componets=[
  FixTopMenuComponent
]
@NgModule({
  declarations: [
    componets
  ],
  imports: [
    CommonModule
  ],
  exports:[
    componets
  ]
})
export class SharedModule { }
