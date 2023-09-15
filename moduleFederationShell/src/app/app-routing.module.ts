import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';

const routes: Routes = [
  {
    path: 'mod1Feat1',
    loadChildren: () => 
        loadRemoteModule({
          type: 'module',
          remoteEntry: 'http://localhost:4201/modFedOne.js',
          exposedModule: './Module'
        })
            .then(m => m.Mod1FeatModule)
    },
    {
    path: 'mod1Feat2',
    loadChildren: () => 
        loadRemoteModule({
          type: 'module',
          remoteEntry: 'http://localhost:4201/modFedOne.js',
          exposedModule: './Module2'
        })
            .then(m => m.Mod1Feat2Module)
    },
    {
    path: 'mod2Feat1',
    loadChildren: () => 
        loadRemoteModule({
          type: 'module',
          remoteEntry: 'http://localhost:4202/modFedTwo.js',
          exposedModule: './Module'
        })
        .then(m => m.Mod2FeatModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
