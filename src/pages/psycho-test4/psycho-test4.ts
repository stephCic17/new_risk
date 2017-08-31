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

		if (this.angoisseCrise.value)
		this.valueTestGyneco.psycho4.angoisseCrise = this.angoisseCrise.value;
		if (this.boulimie.value)
		this.valueTestGyneco.psycho4.boulimie = this.boulimie.value;
		if (this.anorexie.value)
		this.valueTestGyneco.psycho4.anorexie = this.anorexie.value;
		if (this.TOC.value)
		this.valueTestGyneco.psycho4.TOC = this.TOC.value;
		if (this.depression.value)
		this.valueTestGyneco.psycho4.depression = this.depression.value;
		if (this.phobie.value)
		this.valueTestGyneco.psycho4.phobie = this.phobie.value;
		if (this.bipolaire.value)
		this.valueTestGyneco.psycho4.bipolaire = this.bipolaire.value;
		if (this.HPtravel.value)
		this.valueTestGyneco.psycho4.HPtravel = this.HPtravel.value;

 	 	this.navCtrl.push(ResultPage, {
              userParams: this.valueTestGyneco,
              QuestionText: this.QuestionText
          });  
         
  }
}
