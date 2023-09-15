import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { mod2FeatComponent } from './mod2-feat.component';

const routes: Routes = [{ path: '', component: mod2FeatComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Mod2FeatRoutingModule { }
