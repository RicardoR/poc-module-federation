import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'moduleFederationShell';
  dataToStore = "Data para almacenar de ejemplo";

  storeData() {
    localStorage.setItem('whatever', this.dataToStore);
  }
}
