import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Step13Page } from '../step13/step13';
import { ResultPage } from '../result/result';
/**
 * Generated class for the PsychoTest4Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-psycho-test4',
  templateUrl: 'psycho-test4.html',
})
export class PsychoTest4Page {

	valueTestGyneco: any;
	QuestionText:any;

	@ViewChild('angoisseCrise') angoisseCrise;
	@ViewChild('boulimie') boulimie;
	@ViewChild('anorexie') anorexie;
	@ViewChild('TOC') TOC;
	@ViewChild('depression') depression;
	@ViewChild('phobie') phobie;
	@ViewChild('bipolaire') bipolaire;
	@ViewChild('HPtravel') HPtravel;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
 	this.valueTestGyneco = navParams.get('userParams');
    this.QuestionText = navParams.get('QuestionText');
 }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PsychoTest4Page');
  }

	goNextStep() {

		this.valueTestGyneco.psycho4 = [];
		this.valueTestGyneco.psycho4.result = 0;
		if (this.angoisseCrise.value) {
			this.valueTestGyneco.psycho4.angoisseCrise = 1;
			this.valueTestGyneco.psycho4 += 2;
		}
		if (this.boulimie.value) {
			this.valueTestGyneco.psycho4.boulimie = 1;
			this.valueTestGyneco.psycho4.result += 2;
		}
		if (this.anorexie.value) {
			this.valueTestGyneco.psycho4.anorexie = 1;
			this.valueTestGyneco.psycho4.result += 2;
		}
		if (this.TOC.value) {
			this.valueTestGyneco.psycho4.TOC = 1;
			this.valueTestGyneco.psycho4.result += 1;
		}
		if (this.depression.value) {
			this.valueTestGyneco.psycho4.depression = 1;
			this.valueTestGyneco.psycho4.result += 2;
		}
		if (this.phobie.value) {
			this.valueTestGyneco.psycho4.phobie = 1;
			this.valueTestGyneco.psycho4.result += 1;
		}
		if (this.bipolaire.value) {
			this.valueTestGyneco.psycho4.bipolaire = 1;
			this.valueTestGyneco.psycho4.result += 2;
		}
		if (this.HPtravel.value) {
			this.valueTestGyneco.psycho4.HPtravel = 1;
			this.valueTestGyneco.psycho4.result += 2;
		}

 	 	this.navCtrl.push(ResultPage, {
              userParams: this.valueTestGyneco,
              QuestionText: this.QuestionText
          });  
         
  }
}
