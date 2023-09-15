import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { mod1FeatComponent } from './mod1-feat.component';
import { InvoicesComponent } from './components/invoices/invoices.component';

const routes: Routes = [
    { path: '', component: mod1FeatComponent },
    { path: 'invoices', component: InvoicesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Mod1FeatRoutingModule { }
