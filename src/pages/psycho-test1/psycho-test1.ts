import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Step3Page } from '../step3/step3';
/**
 * Generated class for the PsychoTest1Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-psycho-test1',
  templateUrl: 'psycho-test1.html',
})
export class PsychoTest1Page {

	valueTestGyneco: any;
	QuestionText:any;

  @ViewChild('procreation') procreation;
  @ViewChild('yearsProcreation') yearsProcreation;
  @ViewChild('nbProcreation') nbProcreation;
  @ViewChild('oocyteDonation') oocyteDonation;
  @ViewChild('spermDonation') spermDonation;



  constructor(public navCtrl: NavController, public navParams: NavParams) {

 	     this.valueTestGyneco = navParams.get('userParams');
  	  this.QuestionText = navParams.get('QuestionText');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PsychoTest1Page');
    console.log(this.procreation.value);
  }

  goNextStep(){

    this.valueTestGyneco.psycho1 = [];
    this.valueTestGyneco.psycho1.result = 0;

      if (this.procreation.value)
      {
        this.valueTestGyneco.psycho1.result += 1;
        this.valueTestGyneco.psycho1.procreation = this.procreation.value;
        this.valueTestGyneco.psycho1.yearsProcreation = this.yearsProcreation.value;
        this.valueTestGyneco.psycho1.nbProcreation = this.nbProcreation.value;
        if (this.yearsProcreation.value <= 2)
          this.valueTestGyneco.psycho1.result += 1;
        else if (this.yearsProcreation.value > 2)
          this.valueTestGyneco.psycho1.result += 2;
      }
      if (this.oocyteDonation.value) {
        this.valueTestGyneco.psycho1.oocyteDonation = this.oocyteDonation.value;
        this.valueTestGyneco.psycho1.result += 2;

      }
      if (this.spermDonation.value) {
        this.valueTestGyneco.psycho1.spermDonation = this.spermDonation.value;
        this.valueTestGyneco.psycho1.result += 2;
      }

      this.navCtrl.push(Step3Page, {
            userParams: this.valueTestGyneco,
            QuestionText: this.QuestionText
      });  
         
       }
}
