var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Step2Page } from '../step2/step2';
/**
 * Generated class for the Step1Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Step1Page = (function () {
    function Step1Page(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.QuestionText = navParams.get('QuestionText');
    }
    Step1Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Step1Page');
    };
    Step1Page.prototype.goNextStep = function () {
        this.valueTestGyneco = [];
        this.valueTestGyneco.age = this.age.value;
        if (!this.age.value) {
            var alert_1 = this.alertCtrl.create({
                title: 'Rentrez votre age',
                subTitle: 'Nous avons besoin de toutes les informations qui vous sont demandé pour établir votre profil',
                buttons: ['OK']
            });
            alert_1.present();
        }
        else {
            this.navCtrl.push(Step2Page, {
                userParams: this.valueTestGyneco,
                QuestionText: this.QuestionText
            });
        }
    };
    return Step1Page;
}());
__decorate([
    ViewChild('age'),
    __metadata("design:type", Object)
], Step1Page.prototype, "age", void 0);
Step1Page = __decorate([
    IonicPage(),
    Component({
        selector: 'page-step1',
        templateUrl: 'step1.html',
    }),
    __metadata("design:paramtypes", [NavController, NavParams, AlertController])
], Step1Page);
export { Step1Page };
//# sourceMappingURL=step1.js.map