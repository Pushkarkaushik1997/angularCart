import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadComponent } from './head/head.component';
import { MiddleComponent } from './middle/middle.component';
import { FootComponent } from './foot/foot.component';
import { Middle2Component } from './middle2/middle2.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    MiddleComponent,
    FootComponent,
    Middle2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
