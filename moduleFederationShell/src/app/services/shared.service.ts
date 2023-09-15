import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private amount = 0;

  increaseAmount(): void {
    this.amount = this.amount + 1;
  }

  getAmount(): number {
    return this.amount;
  }


}
