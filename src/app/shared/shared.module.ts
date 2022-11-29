import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FixTopMenuComponent } from 'src/app/shared/layouts/fix-top-menu/fix-top-menu.component';
import { CategoryFilterMenuComponent } from './layouts/category-filter-menu/category-filter-menu.component';
import { CarouselModule } from 'ngx-owl-carousel-o';



const componets=[
  FixTopMenuComponent,
  CategoryFilterMenuComponent
]
@NgModule({
  declarations: [
    componets,

  ],
  imports: [
    CommonModule,
    CarouselModule,

  ],
  exports:[
    componets
  ]
})
export class SharedModule { }
