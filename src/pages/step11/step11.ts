import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Step12Page } from '../step12/step12';
/**
 * Generated class for the Step11Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-step11',
  templateUrl: 'step11.html',
})
export class Step11Page {

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
    console.log('ionViewDidLoad Step11Page');
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
         this.valueTestGyneco.pregnantDiabete = this.result;
           this.navCtrl.push(Step12Page, {
               userParams: this.valueTestGyneco,
                QuestionText: this.QuestionText
             });           
       }
     }
}
