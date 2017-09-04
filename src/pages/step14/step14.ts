import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Step15Page } from '../step15/step15';
/**
 * Generated class for the Step14Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-step14',
  templateUrl: 'step14.html',
})
export class Step14Page {

  valueTestGyneco: any;
  QuestionText:any;
  
  @ViewChild('alcool') alcool;

	constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  
  	this.valueTestGyneco = navParams.get('userParams');
    this.QuestionText = navParams.get('QuestionText');
  
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Step14Page');
  }

  goNextStep(){
    
    this.valueTestGyneco.alcool = this.alcool.value;
     this.navCtrl.push(Step15Page, {
              userParams: this.valueTestGyneco,
              QuestionText: this.QuestionText
          });
  }

}
