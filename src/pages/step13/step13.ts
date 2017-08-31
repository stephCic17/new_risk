import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Step14Page } from '../step14/step14';
/**
 * Generated class for the Step13Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-step13',
  templateUrl: 'step13.html',
})
export class Step13Page {

  valueTestGyneco: any;
  QuestionText:any;

  @ViewChild('nbFausseCouche') nbFausseCouche;

	constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  
  	this.valueTestGyneco = navParams.get('userParams');
    this.QuestionText = navParams.get('QuestionText');
  
    }
  ionViewDidLoad() {
    console.log('ionViewDidLoad Step13Page');
  }
 goNextStep(){
    
    this.valueTestGyneco.nbFausseCouche = this.nbFausseCouche.value;

    if (!this.nbFausseCouche.value)
    {
      let alert = this.alertCtrl.create({
        title: 'Rentrez le nombre de fausse couche',
        subTitle: 'Nous avons besoin de toutes les informations qui vous sont demandé pour établir votre profil',
        buttons: ['OK']
      });
      alert.present();    
     }
     else
     {
       this.navCtrl.push(Step14Page, {
        userParams: this.valueTestGyneco,
        QuestionText: this.QuestionText
      });
     }
  }
}
