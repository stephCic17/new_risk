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
import { Step6Page } from '../step6/step6';
/**
 * Generated class for the Step5Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Step5Page = (function () {
    function Step5Page(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.valueTestGyneco = navParams.get('userParams');
        this.QuestionText = navParams.get('QuestionText');
    }
    Step5Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Step5Page');
    };
    Step5Page.prototype.goNextStep = function () {
        this.valueTestGyneco = [];
        this.valueTestGyneco.nbChild = this.nbChild.value;
        if (!this.nbChild.value || this.nbChild.value == 0) {
            var alert_1 = this.alertCtrl.create({
                title: 'Rentrez le nombre d\'enfant',
                subTitle: 'Nous avons besoin de toutes les informations qui vous sont demandé pour établir votre profil',
                buttons: ['OK']
            });
            alert_1.present();
        }
        else {
            if (this.nbChild.value > 1) {
                this.QuestionText.step6 = "Avez-vous accouché d'un ou plusieurs enfants de plus de 4 kilos ?";
                this.QuestionText.step8 = "Avez-vous accouché d'un ou plusieurs enfants de moins de 2kg200 ?";
                this.QuestionText.step12 = "Avez-vous eu une ou des césariennes ?";
            }
            this.navCtrl.push(Step6Page, {
                userParams: this.valueTestGyneco,
                QuestionText: this.QuestionText
            });
        }
    };
    return Step5Page;
}());
__decorate([
    ViewChild('nbChild'),
    __metadata("design:type", Object)
], Step5Page.prototype, "nbChild", void 0);
Step5Page = __decorate([
    IonicPage(),
    Component({
        selector: 'page-step5',
        templateUrl: 'step5.html',
    }),
    __metadata("design:paramtypes", [NavController, NavParams, AlertController])
], Step5Page);
export { Step5Page };
//# sourceMappingURL=step5.js.map