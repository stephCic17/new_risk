import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Step2_1Page } from '../step2-1/step2-1';
/**
 * Generated class for the MenstruationPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menstruation',
  templateUrl: 'menstruation.html',
})
export class MenstruationPage {

	@ViewChild('menstruation') menstruation;

	valueTestGyneco:any;
	QuestionText:any;

	menstruationDate:any;
	numberWeek: any;

	constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {

	  	this.valueTestGyneco = navParams.get('userParams');
		this.QuestionText = navParams.get('QuestionText');

	}

	ionViewDidLoad() {
    	console.log('ionViewDidLoad MenstruationPage');
    	console.log(this.valueTestGyneco);
	}

	goNextStep() {

		if (!this.menstruation.value)
		{
			let alert = this.alertCtrl.create({
  			title: 'Vous devez selectionner une date',
  			subTitle: 'Si vous n\'êtes pas sur du resultat ??',
  			buttons: ['OK']
  		});
  		alert.present();	
		}
		else 
		{
			this.menstruationDate =  new Date(this.menstruation.value);
			this.numberWeek = Math.round((( new Date().getTime() - this.menstruationDate.getTime() ) / (1000 * 60 * 60 * 24 ) ) / 7);
			this.valueTestGyneco.menstruationDate = this.menstruationDate;
			this.valueTestGyneco.PregnantWeek = this.numberWeek;

			this.navCtrl.push(Step2_1Page, {
				userParams: this.valueTestGyneco,
            	QuestionText: this.QuestionText
			});
		}
	}

}
