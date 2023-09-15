

import { Component, Inject, OnInit, NgModule } from '@angular/core';

// this doesnt work
//import { SharedService } from 'moduleFederationShell/shared';

@Component({
  selector: 'app-mod1-feat',
  templateUrl: './mod1-feat.component.html',
  styles: [],
})
export class mod1FeatComponent implements OnInit {
  //sharedService = Inject(SharedService);

  ngOnInit(): void {
    //console.log(this.sharedService.getAmount());
  }
}
