import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Step5Page } from '../step5/step5';
import { PsychoTest2Page } from '../psycho-test2/psycho-test2';
/**
 * Generated class for the Step4Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-step4',
  templateUrl: 'step4.html',
})
export class Step4Page {

	@ViewChild('yes') yes;
	@ViewChild('no') no;
	@ViewChild('idn') idn;

	valueTestGyneco:any;
  QuestionText:any;
  
	result: number;

   constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  
    this.valueTestGyneco = navParams.get('userParams');
    this.QuestionText = navParams.get('QuestionText');
  
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Step4Page');
  }
	yesClick() {
  		if ( this.no.value == true)
  		{
  			this.no.value = false;
  		}
  	}
  	noClick() {
  		if (this.yes.value == true)
  		{
  			this.yes.value = false;
  		}
  	}
  	
	goNextStep(){
  		if (this.yes.value == true)
  			this.result = 1;
  		else if (this.no.value == true)
  			this.result = 0;
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
	   		this.valueTestGyneco.child = this.result;
	   		if (this.result == 1)
	   		{
           this.QuestionText.psychoTest3 = "Vous et votre accouchement";
           this.QuestionText.psychoTest3_1 = "forceps";
           this.QuestionText.psychoTest3_2 = "ventouse";
           this.QuestionText.psychoTest3_3 = "césarienne en urgence";
           this.QuestionText.psychoTest3_4 = "anesthésie générale";
           this.QuestionText.psychoTest3_5 = "hémorragie";
           this.QuestionText.psychoTest3_6 = "Séparation avec le bébé à la naissance pendant plus de 6 heures";
           this.QuestionText.psychoTest3_7 = "penser que j'allais mourrir en accouchant";
           this.QuestionText.psychoTest3_8 = "penser que mon bébé allait mourrir";
           this.QuestionText.psychoTest3_9 = "j'ai subit un accouchement traumatique";
           
		   		this.navCtrl.push(Step5Page, {
	   				userParams: this.valueTestGyneco,
              QuestionText: this.QuestionText
	   			});	
			}
			else
			{
				this.navCtrl.push(PsychoTest2Page, {
	   				userParams: this.valueTestGyneco,
              QuestionText: this.QuestionText
	   			});
			}
	   	}
	   }
}
