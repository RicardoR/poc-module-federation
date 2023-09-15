import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: 'mod1feat', loadChildren: () => import('./mod1Feature/mod1-feat.module').then(m => m.Mod1FeatModule) },
  { path: 'mod1feat2', loadChildren: () => import('./mod1Feature2/mod1-feat2.module').then(m => m.Mod1Feat2Module) },
  { path: '', component: HomeComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
