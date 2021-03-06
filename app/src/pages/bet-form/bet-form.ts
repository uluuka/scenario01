import { Component } from '@angular/core';
import { IonicPage, ViewController } from 'ionic-angular';

@IonicPage({
  name : 'bet-form'
})
@Component({
  templateUrl: 'bet-form.html',
})
export class BetFormPage {

  tip:any;
  amount:string;

  constructor(public viewController: ViewController) {
  }

  ionViewDidLoad() {
  }

  close() {

    try {
      this.amount = this.amount.replace(',','.');

      this.viewController.dismiss({
        tip    : this.tip ,
        amount : parseFloat(this.amount)
      });
    } catch (e) {
      this.amount = '';
      console.error(e);
    }
    
  }

}
