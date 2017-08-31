import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { PsychoTest3Page } from '../psycho-test3/psycho-test3';
import { Step12_1Page } from '../step12-1/step12-1';
/**
 * Generated class for the Step12Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-step12',
  templateUrl: 'step12.html',
})
export class Step12Page {

  valueTestGyneco: any;
  QuestionText:any;

  @ViewChild('yes') yes;
  @ViewChild('no') no;

  result:number;


	constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  
  	this.valueTestGyneco = navParams.get('userParams');
    this.QuestionText = navParams.get('QuestionText');
  
    }
  ionViewDidLoad() {
    console.log('ionViewDidLoad Step12Page');
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
         this.valueTestGyneco.Cesarienne = this.result;
         if (this.valueTestGyneco.child == 1)
         this.navCtrl.push(PsychoTest3Page, {
              userParams: this.valueTestGyneco,
              QuestionText: this.QuestionText
          });  
         else
           this.navCtrl.push(Step12_1Page, {
              userParams: this.valueTestGyneco,
              QuestionText: this.QuestionText
          });  
       }
     }
}
