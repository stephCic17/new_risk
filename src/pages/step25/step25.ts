import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Step26Page } from '../step26/step26';

/**
 * Generated class for the Step25Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-step25',
  templateUrl: 'step25.html',
})
export class Step25Page {

  valueTestGyneco: any;
  QuestionText:any;

  @ViewChild('timeTravel') timeTravel;

	constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  
  	this.valueTestGyneco = navParams.get('userParams');
    this.QuestionText = navParams.get('QuestionText');
  
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Step25Page');
  }
goNextStep(){
  this.valueTestGyneco.timeTravel = this.timeTravel.value;

    if (!this.timeTravel.value)
    {
      let alert = this.alertCtrl.create({
        title: 'Rentrez votre poids',
        subTitle: 'Nous avons besoin de toutes les informations qui vous sont demandé pour établir votre profil',
        buttons: ['OK']
      });
      alert.present();    
     }
     else
     {
       this.navCtrl.push(Step26Page, {
        userParams: this.valueTestGyneco,
        QuestionText: this.QuestionText
      });
     }
  }
}
