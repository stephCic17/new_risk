import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Step20Page } from '../step20/step20';
import { Step21Page } from '../step21/step21';

/**
 * Generated class for the Step19Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-step19',
  templateUrl: 'step19.html',
})
export class Step19Page {

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
    console.log('ionViewDidLoad Step19Page');
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
         this.valueTestGyneco.medicament = this.result;
         if (this.result == 1) {
            this.QuestionText.medicament1 = "Anti-Epileptique";
            this.QuestionText.medicament2 = "Anticoagulent";
            this.QuestionText.medicament3 = "Antihypertenseur";
            this.QuestionText.medicament4 = "Insuline";
            this.QuestionText.medicament5 = "Antidepresseur";

           this.navCtrl.push(Step20Page, {
               userParams: this.valueTestGyneco,
                QuestionText: this.QuestionText
             });  
         }
         else
            this.navCtrl.push(Step21Page, {
               userParams: this.valueTestGyneco,
                QuestionText: this.QuestionText
             });  
         
       }
     }
}
