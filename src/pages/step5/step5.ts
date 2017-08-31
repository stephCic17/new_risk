import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Step6Page } from '../step6/step6';

/**
 * Generated class for the Step5Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-step5',
  templateUrl: 'step5.html',
})
export class Step5Page {
	
  @ViewChild('nbChild') nbChild;
	
  valueTestGyneco: any;
  QuestionText:any;

  
	constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  
  	this.valueTestGyneco = navParams.get('userParams');
    this.QuestionText = navParams.get('QuestionText');
  
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Step5Page');
  }
	goNextStep(){
  	
    this.valueTestGyneco = [];
  	this.valueTestGyneco.nbChild = this.nbChild.value;

  	if (!this.nbChild.value || this.nbChild.value == 0)
  	{
  		let alert = this.alertCtrl.create({
  			title: 'Rentrez le nombre d\'enfant',
  			subTitle: 'Nous avons besoin de toutes les informations qui vous sont demandé pour établir votre profil',
  			buttons: ['OK']
  		});
  		alert.present();		
   	}
   	else
   	{
       if (this.nbChild.value > 1)
       {
           this.QuestionText.step6 = "Avez-vous accouché d'un ou plusieurs enfants de plus de 4 kilos ?";
           this.QuestionText.step8 = "Avez-vous accouché d'un ou plusieurs enfants de moins de 2kg200 ?";
           this.QuestionText.step12 = "Avez-vous eu une ou des césariennes ?";
       }
   		this.navCtrl.push(Step6Page, {
	        userParams: this.valueTestGyneco,
            QuestionText: this.QuestionText
      });
   	}
  }
}
