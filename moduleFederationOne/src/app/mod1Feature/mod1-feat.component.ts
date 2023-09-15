import { Component } from '@angular/core';


@Component({
  selector: 'app-mod1-feat',
  templateUrl: './mod1-feat.component.html',
  styles: [
  ]
})
export class mod1FeatComponent  {
  data!: string;

  getDataFromLocalStorage() {
    this.data = localStorage.getItem('whatever') ?? '';
  }


}
