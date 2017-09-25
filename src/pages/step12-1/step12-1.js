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
import { PsychoTest3Page } from '../psycho-test3/psycho-test3';
/**
 * Generated class for the Step12_1Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Step12_1Page = (function () {
    function Step12_1Page(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.valueTestGyneco = navParams.get('userParams');
        this.QuestionText = navParams.get('QuestionText');
        console.log(this.QuestionText);
    }
    Step12_1Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Step12_1Page');
    };
    Step12_1Page.prototype.goNextStep = function () {
        this.valueTestGyneco.nbCesarienne = this.nbCesarienne.value;
        if (!this.nbCesarienne.value) {
            var alert_1 = this.alertCtrl.create({
                title: 'Rentrez votre age',
                subTitle: 'Nous avons besoin de toutes les informations qui vous sont demandé pour établir votre profil',
                buttons: ['OK']
            });
            alert_1.present();
        }
        else {
            this.navCtrl.push(PsychoTest3Page, {
                userParams: this.valueTestGyneco,
                QuestionText: this.QuestionText
            });
        }
    };
    return Step12_1Page;
}());
__decorate([
    ViewChild('nbCesarienne'),
    __metadata("design:type", Object)
], Step12_1Page.prototype, "nbCesarienne", void 0);
Step12_1Page = __decorate([
    IonicPage(),
    Component({
        selector: 'page-step12-1',
        templateUrl: 'step12-1.html',
    }),
    __metadata("design:paramtypes", [NavController, NavParams, AlertController])
], Step12_1Page);
export { Step12_1Page };
//# sourceMappingURL=step12-1.js.map