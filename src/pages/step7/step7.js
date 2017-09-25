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
import { Step8Page } from '../step8/step8';
/**
 * Generated class for the Step7Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Step7Page = (function () {
    function Step7Page(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.valueTestGyneco = navParams.get('userParams');
        this.QuestionText = navParams.get('QuestionText');
    }
    Step7Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Step7Page');
    };
    Step7Page.prototype.goNextStep = function () {
        this.valueTestGyneco = [];
        this.valueTestGyneco.age = this.nbBigChild.value;
        if (!this.nbBigChild.value || this.nbBigChild.value == 0) {
            var alert_1 = this.alertCtrl.create({
                title: 'Rentrez votre age',
                subTitle: 'Nous avons besoin de toutes les informations qui vous sont demandé pour établir votre profil',
                buttons: ['OK']
            });
            alert_1.present();
        }
        else {
            this.valueTestGyneco.nbBigChild = this.nbBigChild.value;
            this.navCtrl.push(Step8Page, {
                userParams: this.valueTestGyneco,
                QuestionText: this.QuestionText
            });
        }
    };
    return Step7Page;
}());
__decorate([
    ViewChild('nbBigChild'),
    __metadata("design:type", Object)
], Step7Page.prototype, "nbBigChild", void 0);
Step7Page = __decorate([
    IonicPage(),
    Component({
        selector: 'page-step7',
        templateUrl: 'step7.html',
    }),
    __metadata("design:paramtypes", [NavController, NavParams, AlertController])
], Step7Page);
export { Step7Page };
//# sourceMappingURL=step7.js.map