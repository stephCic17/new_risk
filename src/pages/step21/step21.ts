import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Step22Page } from '../step22/step22';

/**
 * Generated class for the Step21Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-step21',
  templateUrl: 'step21.html',
})
export class Step21Page {

  valueTestGyneco: any;
  QuestionText:any;

  @ViewChild('size') size;

  	constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  
  	this.valueTestGyneco = navParams.get('userParams');
    this.QuestionText = navParams.get('QuestionText');
  
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Step21Page');
  }
  goNextStep(){
  this.valueTestGyneco.size = this.size.value;

    if (!this.size.value)
    {
      let alert = this.alertCtrl.create({
        title: 'Rentrez votre taille',
        subTitle: 'Nous avons besoin de toutes les informations qui vous sont demandé pour établir votre profil',
        buttons: ['OK']
      });
      alert.present();    
     }
     else
     {
       this.navCtrl.push(Step22Page, {
        userParams: this.valueTestGyneco,
        QuestionText: this.QuestionText
      });
     }
  }
}
