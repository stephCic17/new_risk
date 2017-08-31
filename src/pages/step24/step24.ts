import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Step25Page } from '../step25/step25';

/**
 * Generated class for the Step24Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-step24',
  templateUrl: 'step24.html',
})
export class Step24Page {

  valueTestGyneco: any;
  QuestionText:any;

  @ViewChild('nbWork') nbWork;

	constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  
  	this.valueTestGyneco = navParams.get('userParams');
    this.QuestionText = navParams.get('QuestionText');
  
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Step24Page');
  }
goNextStep(){
  this.valueTestGyneco.nbWork = this.nbWork.value;

    if (!this.nbWork.value)
    {
      let alert = this.alertCtrl.create({
        title: 'Rentrez le nombre d\'heure de travail',
        subTitle: 'Nous avons besoin de toutes les informations qui vous sont demandé pour établir votre profil',
        buttons: ['OK']
      });
      alert.present();    
     }
     else
     {
       this.navCtrl.push(Step25Page, {
        userParams: this.valueTestGyneco,
        QuestionText: this.QuestionText
      });
     }

  }
}
