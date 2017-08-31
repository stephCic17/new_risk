import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { IvgInfoPage } from '../ivg-info/ivg-info';
import { PsychoTest1Page } from '../psycho-test1/psycho-test1';
/**
 * Generated class for the Step2_1Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-step2-1',
  templateUrl: 'step2-1.html',
})
export class Step2_1Page {

	@ViewChild('yes') yes;
	@ViewChild('no') no;
	@ViewChild('idn') idn;

	valueTestGyneco:any;
	QuestionText:any;

  result: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl:AlertController) {
  
    this.valueTestGyneco = navParams.get('userParams');
    this.QuestionText = navParams.get('QuestionText');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Step2_1Page');
    console.log(this.valueTestGyneco);
  }
	yesClick() {
  		if (this.no.value == true || this.idn.value == true)
  		{
  			this.no.value = false;
  			this.idn.value = false;
  		}
  	}
  	noClick() {
  		if (this.yes.value == true || this.idn.value == true)
  		{
  			this.yes.value = false;
  			this.idn.value = false;
  		}
  	}
  	idnClick() {
  		if (this.no.value == true || this.yes.value == true)
  		{
  			this.no.value = false;
  			this.yes.value = false;
  		}
	}
	goNextStep(){
  		if (this.yes.value == true)
  			this.result = 1;
  		else if (this.no.value == true)
  			this.result = 0;
  		else if (this.idn.value == true)
  			this.result = 2;
  		else
  			this.result = -1;
  		
  		if (this.result == -1)
	  	{
  			let alert = this.alertCtrl.create({
  				title: 'Selectionnez au moins une des réponses',
  				subTitle: 'Nous avons besoin de toutes les informations qui vous sont demandé pour établir votre profil',
  				buttons: ['OK']
  			});
  			alert.present();		
	   	}
	   	else
	   	{
	   		this.valueTestGyneco.feelingPregnant = this.result;
	   		if (this.result == 0)
	   		{
	   			this.navCtrl.push(IvgInfoPage, {
	   				userParams: this.valueTestGyneco,
              QuestionText: this.QuestionText
	   			});
	   		}
	   		else
	   		{
	   		this.navCtrl.push(PsychoTest1Page, {
	   				userParams: this.valueTestGyneco,
              QuestionText: this.QuestionText
	   			});	
	   		}
	   	}
	   }
}
