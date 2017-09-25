import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Step13Page } from '../step13/step13';

/**
 * Generated class for the PsychoTest3Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-psycho-test3',
  templateUrl: 'psycho-test3.html',
})

export class PsychoTest3Page {

	valueTestGyneco: any;
	QuestionText:any;

  @ViewChild('forceps') forceps;
  @ViewChild('ventouse') ventouse;
  @ViewChild('cesarienneUrgence') cesarienneUrgence;
  @ViewChild('generalAnest') generalAnest;
  @ViewChild('hemorragie') hemorragie;
  @ViewChild('babySeparation') babySeparation;
  @ViewChild('dieDelivery') dieDelivery;
  @ViewChild('psyDieBaby') psyDieBaby;
  @ViewChild('traumaDelivery') traumaDelivery;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.valueTestGyneco = navParams.get('userParams');
      this.QuestionText = navParams.get('QuestionText');
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PsychoTest3Page');
  }

  goNextStep() {

    this.valueTestGyneco.psycho3 =[];
    this.valueTestGyneco.psycho3.result = 0;

    if (this.forceps.value) {
   	  this.valueTestGyneco.psycho3.forceps = 1;
      this.valueTestGyneco.psycho3.result += 1;
    }
    if (this.ventouse.value) {
  	  this.valueTestGyneco.psycho3.ventouse = 1;
      this.valueTestGyneco.psycho3.result += 2;
    }
    if (this.cesarienneUrgence.value) {
  	  this.valueTestGyneco.psycho3.cesarienneUrgence = 1;
      this.valueTestGyneco.psycho3.result += 2;
    }
    if(this.generalAnest.value) {
  	  this.valueTestGyneco.psycho3.generalAnest = 1;
      this.valueTestGyneco.psycho3.result += 1;
    }
    if(this.hemorragie.value) {
  	   this.valueTestGyneco.psycho3.hemorragie = 1;
      this.valueTestGyneco.psycho3.result += 2;
     }
    if(this.babySeparation.value) {
  	  this.valueTestGyneco.psycho3.babySeparation = 1;
      this.valueTestGyneco.psycho3.result += 5;
    }
    if(this.dieDelivery.value) {
  	  this.valueTestGyneco.psycho3.dieDelivery = 1;
      this.valueTestGyneco.psycho3.result += 2;
    }
    if(this.psyDieBaby.value) {
  	  this.valueTestGyneco.psycho3.psyDieBaby = 1;
      this.valueTestGyneco.psycho3.result += 5;
    }
    if(this.traumaDelivery.value) {
  	  this.valueTestGyneco.psycho3.traumaDelivery = 1;
      this.valueTestGyneco.psycho3.result += 5;
    }

  	this.navCtrl.push(Step13Page, {
              userParams: this.valueTestGyneco,
              QuestionText: this.QuestionText
          });  
         
  }

}
