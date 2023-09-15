import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { mod1FeatComponent } from './mod1-feat.component';
import { Mod1FeatRoutingModule } from './mod1-feat-routing.module';
import { InvoicesComponent } from './components/invoices/invoices.component';
import { RouterLinkWithHref } from '@angular/router';


@NgModule({
  declarations: [
    mod1FeatComponent,
    InvoicesComponent
  ],
    imports: [
        CommonModule,
        Mod1FeatRoutingModule,
        RouterLinkWithHref
    ]
})
export class Mod1FeatModule { }
