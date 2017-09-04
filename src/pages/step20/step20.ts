import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Step21Page } from '../step21/step21';

/**
 * Generated class for the Step20Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-step20',
  templateUrl: 'step20.html',
})
export class Step20Page {

  valueTestGyneco: any;
  QuestionText:any;

  @ViewChild('medicament1') medicament1;
  @ViewChild('medicament2') medicament2;
  @ViewChild('medicament3') medicament3;
  @ViewChild('medicament4') medicament4;
  @ViewChild('medicament5') medicament5;

	constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  
  	this.valueTestGyneco = navParams.get('userParams');
    this.QuestionText = navParams.get('QuestionText');
  
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Step20Page');
  }
  goNextStep(){

      this.valueTestGyneco.medicament1 = this.medicament1.value;
      this.valueTestGyneco.medicament2 = this.medicament2.value;
      this.valueTestGyneco.medicament3 = this.medicament3.value;
      this.valueTestGyneco.medicament4 = this.medicament4.value;
      this.valueTestGyneco.medicament5 = this.medicament5.value;

      this.navCtrl.push(Step21Page, {
          userParams: this.valueTestGyneco,
          QuestionText: this.QuestionText
      });  
      
       }
}
