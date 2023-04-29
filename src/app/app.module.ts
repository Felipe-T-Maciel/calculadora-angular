import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { calcModule } from './calc/calc.Module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    calcModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
