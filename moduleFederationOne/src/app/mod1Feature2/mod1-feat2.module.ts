import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Mod1Feat2Component } from './mod1-feat2.component';
import { Mod1FeatRoutingModule } from './mod1-feat-routing.module';


@NgModule({
  declarations: [
    Mod1Feat2Component
  ],
  imports: [
    CommonModule,
    Mod1FeatRoutingModule
  ]
})
export class Mod1Feat2Module { }
