import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { mod2FeatComponent } from './mod2-feat.component';
import { Mod2FeatRoutingModule } from './mod2-feat-routing.module';


@NgModule({
  declarations: [
    mod2FeatComponent
  ],
  imports: [
    CommonModule,
    Mod2FeatRoutingModule
  ]
})
export class Mod2FeatModule { }
