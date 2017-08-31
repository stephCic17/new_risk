import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { PsychoTest1Page } from '../psycho-test1/psycho-test1';
import { Step11Page } from '../step11/step11';
/**
 * Generated class for the Step10Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-step10',
  templateUrl: 'step10.html',
})
export class Step10Page {

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
    console.log('ionViewDidLoad Step10Page');
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
         this.valueTestGyneco.preEclampsy = this.result;
         if (this.valueTestGyneco.child == 1)
         this.navCtrl.push(PsychoTest1Page, {
              userParams: this.valueTestGyneco,
              QuestionText: this.QuestionText
          });  
         else
           this.navCtrl.push(Step11Page, {
              userParams: this.valueTestGyneco,
              QuestionText: this.QuestionText
          });  
       }
     }
}
