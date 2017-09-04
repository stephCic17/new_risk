import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ResultPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-result',
  templateUrl: 'result.html',
})
export class ResultPage {

	valueTestGyneco:any;
	resultRisk:number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	
  	this.valueTestGyneco = navParams.get('userParams');
  	this.resultRisk = 0;

    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultPage');

    console.log(this.valueTestGyneco);
    if ( this.valueTestGyneco.age > 42)
    	this.resultRisk += 50;
    else if (this.valueTestGyneco.age == 42)
    	this.resultRisk += 20;
    else if (this.valueTestGyneco.age > 38)
    	this.resultRisk += 2;

    if (this.valueTestGyneco.alcool > 10)
    	this.resultRisk += 400;
    if(this.valueTestGyneco.smoke == 1)
    	this.resultRisk += 2;
    if (this.valueTestGyneco.child == 1)
	{
		if (this.valueTestGyneco.Cesarienne == 1)
    		this.resultRisk += 2;
    	if (this.valueTestGyneco.BigChild == 1)
    		this.resultRisk += 50;
    	if (this.valueTestGyneco.lessChild == 1)
    		this.resultRisk += 50;
    	if (this.valueTestGyneco.preEclampsy == 1)
    		this.resultRisk += 50;
    	if (this.valueTestGyneco.pregnantDiabete == 1)
    		this.resultRisk += 2;
    	if (this.valueTestGyneco.premaChild == 1)
    		this.resultRisk += 50;

    }
    if (this.valueTestGyneco.nbFausseCouche > 0)
    	this.resultRisk += 2;
    if (this.valueTestGyneco.diabete == 1)
    	this.resultRisk += 50;
    if (this.valueTestGyneco.epilepsy == 1)
    	this.resultRisk += 200;
    if (this.valueTestGyneco.highBloodPresure == 1)
    	this.resultRisk += 2;
    if (this.valueTestGyneco.phlebite == 1)
    	this.resultRisk += 2;
    if (this.valueTestGyneco.medicament == 1)
    {
    	if (this.valueTestGyneco.medicament1 == 1)
    		this.resultRisk += 200;
    	if (this.valueTestGyneco.medicament2 == 1)
    		this.resultRisk += 200;
    	if (this.valueTestGyneco.medicament3 == 1)
    		this.resultRisk += 2;
    	if (this.valueTestGyneco.medicament4 == 1)
    		this.resultRisk += 200;
    	if (this.valueTestGyneco.medicament5 == 1)
    		this.resultRisk += 2;
    }
    if (this.valueTestGyneco.IMC > 28)
    	this.resultRisk += 50;
    if (this.valueTestGyneco.IMC > 22)
    	this.resultRisk += 20;
    if (this.valueTestGyneco.IMC > 17)
    	this.resultRisk += 0;
    if (this.valueTestGyneco.IMC < 17)
    	this.resultRisk += 50;

    if (this.valueTestGyneco.Work == 1)
    {
    	if (this.valueTestGyneco.timeTravel > 90)
    		this.resultRisk += 2;
    	if (this.valueTestGyneco.standingWork == 1)
    		this.resultRisk += 2;
    	if (this.valueTestGyneco.nbWork > 10)
    		this.resultRisk += 2;
    }
    console.log(this.resultRisk);
  }

}
