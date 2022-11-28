import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FixTopMenuComponent } from './shared/layouts/fix-top-menu/fix-top-menu.component';
@NgModule({
  declarations: [
    AppComponent,
    FixTopMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
 
}
