import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Step2Page } from '../step2/step2';

/**
 * Generated class for the Step1Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-step1',
  templateUrl: 'step1.html',
})

export class Step1Page {

	@ViewChild('age') age;
	
  valueTestGyneco: any;
  QuestionText:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {

    this.QuestionText = navParams.get('QuestionText');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Step1Page');
  }

  goNextStep(){
  	
    this.valueTestGyneco = [];
  	this.valueTestGyneco.age = this.age.value;

  	if (!this.age.value)
  	{
  		let alert = this.alertCtrl.create({
  			title: 'Rentrez votre age',
  			subTitle: 'Nous avons besoin de toutes les informations qui vous sont demandé pour établir votre profil',
  			buttons: ['OK']
  		});
  		alert.present();		
   	}
   	else
   	{
   		this.navCtrl.push(Step2Page, {
        userParams: this.valueTestGyneco,
        QuestionText: this.QuestionText
      });
   	}
  }
}
