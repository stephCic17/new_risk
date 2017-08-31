import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Step13Page } from '../step13/step13';
import { Step14Page } from '../step14/step14';
/**
 * Generated class for the PsychoTest2Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-psycho-test2',
  templateUrl: 'psycho-test2.html',
})
export class PsychoTest2Page {

	valueTestGyneco:any;
	QuestionText:any;

  @ViewChild('fausseCouche') fausseCouche;
  @ViewChild('IVG') IVG;
  @ViewChild('GEU') GEU;
  @ViewChild('DieInUtero') DieInUtero;
  @ViewChild('IMG') IMG;
  @ViewChild('ISG') ISG;
  @ViewChild('ChildHandicap') ChildHandicap;
  @ViewChild('ChildPrema') ChildPrema;
  @ViewChild('ChildChroniqueSeek') ChildChroniqueSeek;
  @ViewChild('DieBabyP') DieBabyP;
  @ViewChild('PregnantTraumaPsy') PregnantTraumaPsy;
  @ViewChild('TraumaExperience') TraumaExperience; 

  constructor(public navCtrl: NavController, public navParams: NavParams) {
 	 this.valueTestGyneco = navParams.get('userParams');
  	  this.QuestionText = navParams.get('QuestionText');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PsychoTest2Page');
  }
goNextStep(){
  this.valueTestGyneco.psycho2 = [];

    if (this.fausseCouche.value)
      this.valueTestGyneco.psycho2.fausseCouche = this.fausseCouche.value;
    if (this.IVG.value)
      this.valueTestGyneco.psycho2.IVG = this.IVG.value;
    if (this.GEU.value)
      this.valueTestGyneco.psycho2.GEU = this.GEU.value;
    if (this.DieInUtero.value)
      this.valueTestGyneco.psycho2.DieInUtero = this.DieInUtero.value;
    if (this.IMG.value)
      this.valueTestGyneco.psycho2.IMG = this.IMG.value;
    if (this.ISG.value)
      this.valueTestGyneco.psycho2.ISG = this.ISG.value;
    if (this.ChildHandicap.value)
      this.valueTestGyneco.psycho2.ChildHandicap = this.ChildHandicap.value;
    if (this.ChildPrema.value)
      this.valueTestGyneco.psycho2.ChildPrema = this.ChildPrema.value;
    if (this.ChildChroniqueSeek.value)
      this.valueTestGyneco.psycho2.ChildChroniqueSeek = this.ChildChroniqueSeek.value;
    if (this.DieBabyP.value)
      this.valueTestGyneco.psycho2.DieBabyP = this.DieBabyP.value;
    if (this.PregnantTraumaPsy.value)
      this.valueTestGyneco.psycho2.PregnantTraumaPsy = this.PregnantTraumaPsy.value;
    if (this.TraumaExperience.value)
      this.valueTestGyneco.psycho2.TraumaExperience = this.TraumaExperience.value; 

        if (this.fausseCouche == true)
           this.navCtrl.push(Step13Page, {
              userParams: this.valueTestGyneco,
              QuestionText: this.QuestionText
          });  
         else
         this.navCtrl.push(Step14Page, {
              userParams: this.valueTestGyneco,
              QuestionText: this.QuestionText
          });  
         
       }
}
