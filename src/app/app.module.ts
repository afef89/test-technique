import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WHOAREWE1Component } from './whoarewe1/whoarewe1.component';
import { WHOAREWE2Component } from './whoarewe2/whoarewe2.component';

@NgModule({
  declarations: [
    AppComponent,
    WHOAREWE1Component,
    WHOAREWE2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
