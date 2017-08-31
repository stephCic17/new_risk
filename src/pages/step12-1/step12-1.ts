import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { PsychoTest3Page } from '../psycho-test3/psycho-test3';

/**
 * Generated class for the Step12_1Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-step12-1',
  templateUrl: 'step12-1.html',
})
export class Step12_1Page {

	valueTestGyneco: any;
	QuestionText:any;

	@ViewChild('nbCesarienne') nbCesarienne;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  	 this.valueTestGyneco = navParams.get('userParams');
  	  this.QuestionText = navParams.get('QuestionText');
   console.log(this.QuestionText);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Step12_1Page');
  }
	goNextStep(){

  	this.valueTestGyneco.nbCesarienne = this.nbCesarienne.value;

  	if (!this.nbCesarienne.value)
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
   		this.navCtrl.push(PsychoTest3Page, {
        userParams: this.valueTestGyneco,
        QuestionText: this.QuestionText
      });
   	}
   }
}
