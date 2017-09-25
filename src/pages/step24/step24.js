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
import { Step25Page } from '../step25/step25';
/**
 * Generated class for the Step24Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Step24Page = (function () {
    function Step24Page(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.valueTestGyneco = navParams.get('userParams');
        this.QuestionText = navParams.get('QuestionText');
    }
    Step24Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Step24Page');
    };
    Step24Page.prototype.goNextStep = function () {
        this.valueTestGyneco.nbWork = this.nbWork.value;
        if (!this.nbWork.value) {
            var alert_1 = this.alertCtrl.create({
                title: 'Rentrez le nombre d\'heure de travail',
                subTitle: 'Nous avons besoin de toutes les informations qui vous sont demandé pour établir votre profil',
                buttons: ['OK']
            });
            alert_1.present();
        }
        else {
            this.navCtrl.push(Step25Page, {
                userParams: this.valueTestGyneco,
                QuestionText: this.QuestionText
            });
        }
    };
    return Step24Page;
}());
__decorate([
    ViewChild('nbWork'),
    __metadata("design:type", Object)
], Step24Page.prototype, "nbWork", void 0);
Step24Page = __decorate([
    IonicPage(),
    Component({
        selector: 'page-step24',
        templateUrl: 'step24.html',
    }),
    __metadata("design:paramtypes", [NavController, NavParams, AlertController])
], Step24Page);
export { Step24Page };
//# sourceMappingURL=step24.js.map