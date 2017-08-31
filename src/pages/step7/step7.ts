import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Step8Page } from '../step8/step8';
/**
 * Generated class for the Step7Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-step7',
  templateUrl: 'step7.html',
})
export class Step7Page {

  valueTestGyneco: any;
  QuestionText:any;

  @ViewChild('nbBigChild') nbBigChild;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    
    this.valueTestGyneco = navParams.get('userParams');
    this.QuestionText = navParams.get('QuestionText');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Step7Page');
  }
  goNextStep(){
  	
    this.valueTestGyneco = [];
  	this.valueTestGyneco.age = this.nbBigChild.value;

  	if (!this.nbBigChild.value || this.nbBigChild.value == 0)
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
   		this.valueTestGyneco.nbBigChild = this.nbBigChild.value;
   		this.navCtrl.push(Step8Page, {
        userParams: this.valueTestGyneco,
        QuestionText: this.QuestionText
      });
   	}
  }
}
