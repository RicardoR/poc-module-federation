import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Mod2FeatModule } from './mod2Feature/mod2-feat.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Mod2FeatModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
