import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the IvgInfoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

 @IonicPage()
 @Component({
 	selector: 'page-ivg-info',
 	templateUrl: 'ivg-info.html',
 })
 export class IvgInfoPage {
 	tableAnswer:any;
 	last:any;
 	result:any;
 	constructor(public navCtrl: NavController, public navParams: NavParams) {
 		this.tableAnswer = navParams.get('userParams');


 	}

 	ionViewDidLoad() {
 		console.log('ionViewDidLoad IvgInfoPage');
 		this.tableAnswer[33].answerUser =  Math.round((( new Date().getTime() - this.tableAnswer[2].answerUser.getTime() ) / (1000 * 60 * 60 * 24 )) / 7);
 		this.tableAnswer[34].answerUser = 14 - this.tableAnswer[33].answerUser;

 		this.result = 14 - this.tableAnswer[33].answerUser;
 	}

    nextBegin(){
        this.navCtrl.push(HomePage);
    }
 }
