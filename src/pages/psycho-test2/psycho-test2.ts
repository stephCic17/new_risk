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
  @ViewChild('TraumaExperiencePsy') TraumaExperiencePsy; 

  constructor(public navCtrl: NavController, public navParams: NavParams) {
 	 this.valueTestGyneco = navParams.get('userParams');
  	  this.QuestionText = navParams.get('QuestionText');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PsychoTest2Page');
  }
goNextStep(){
    this.valueTestGyneco.psycho2 = [];
    this.valueTestGyneco.psycho2.result = 0;

    if (this.IVG.value) {
      this.valueTestGyneco.psycho2.IVG = 1;
      this.valueTestGyneco.psycho2.result += 1;
    }
    if (this.GEU.value) {
      this.valueTestGyneco.psycho2.GEU = 1;
      this.valueTestGyneco.psycho2.result += 1;
    }
    if (this.DieInUtero.value) {
      this.valueTestGyneco.psycho2.DieInUtero = 1;
      this.valueTestGyneco.psycho2.result += 2;
    }
    if (this.IMG.value) {
      this.valueTestGyneco.psycho2.IMG = 1;
      this.valueTestGyneco.psycho2.result += 2;
    }
    if (this.ISG.value) {
      this.valueTestGyneco.psycho2.ISG = 1;
      this.valueTestGyneco.psycho2.result += 3;
    }
    if (this.ChildHandicap.value) {
      this.valueTestGyneco.psycho2.ChildHandicap = 1;
      this.valueTestGyneco.psycho2.result += 3;
    }
    if (this.ChildPrema.value) {
      this.valueTestGyneco.psycho2.ChildPrema = 1;
      this.valueTestGyneco.psycho2.result += 1;
    }
    if (this.ChildChroniqueSeek.value) {
      this.valueTestGyneco.psycho2.ChildChroniqueSeek = 1;
      this.valueTestGyneco.psycho2.result += 3;
    }
    if (this.DieBabyP.value) {
      this.valueTestGyneco.psycho2.DieBabyP = 1;
      this.valueTestGyneco.psycho2.result += 2;
    }
    if (this.PregnantTraumaPsy.value) {
      this.valueTestGyneco.psycho2.PregnantTraumaPsy = 1;
      this.valueTestGyneco.psycho2.result += 10;
    }
    if (this.TraumaExperiencePsy.value) {
      this.valueTestGyneco.psycho2.TraumaExperiencePsy = 1; 
      this.valueTestGyneco.psycho2.result += 10;
      }
        if (this.fausseCouche.value == true) {
          this.valueTestGyneco.fausseCouche = 1;
          this.valueTestGyneco.psycho2.result += 2;
          this.navCtrl.push(Step13Page, {
              userParams: this.valueTestGyneco,
              QuestionText: this.QuestionText
          });  
         }
         else
         this.navCtrl.push(Step14Page, {
              userParams: this.valueTestGyneco,
              QuestionText: this.QuestionText
          });  
    }
}
