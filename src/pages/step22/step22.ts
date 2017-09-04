import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Step23Page } from '../step23/step23';

/**
 * Generated class for the Step22Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-step22',
  templateUrl: 'step22.html',
})
export class Step22Page {

  valueTestGyneco: any;
  QuestionText:any;

  @ViewChild('weight') weight;

	constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  
  	this.valueTestGyneco = navParams.get('userParams');
    this.QuestionText = navParams.get('QuestionText');
  
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Step22Page');
  }
goNextStep(){
  this.valueTestGyneco.weight = this.weight.value;
  this.valueTestGyneco.IMC = this.weight.value / Math.pow(this.valueTestGyneco.size/100, 2);
  console.log(this.valueTestGyneco.IMC);
    if (!this.weight.value)
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
       this.navCtrl.push(Step23Page, {
        userParams: this.valueTestGyneco,
        QuestionText: this.QuestionText
      });
     }
  }
}
