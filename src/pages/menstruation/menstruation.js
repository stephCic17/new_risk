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
import { Step2_1Page } from '../step2-1/step2-1';
/**
 * Generated class for the MenstruationPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var MenstruationPage = (function () {
    function MenstruationPage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.valueTestGyneco = navParams.get('userParams');
        this.QuestionText = navParams.get('QuestionText');
    }
    MenstruationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MenstruationPage');
        console.log(this.valueTestGyneco);
    };
    MenstruationPage.prototype.goNextStep = function () {
        if (!this.menstruation.value) {
            var alert_1 = this.alertCtrl.create({
                title: 'Vous devez selectionner une date',
                subTitle: 'Si vous n\'êtes pas sur du resultat ??',
                buttons: ['OK']
            });
            alert_1.present();
        }
        else {
            this.menstruationDate = new Date(this.menstruation.value);
            this.numberWeek = Math.round(((new Date().getTime() - this.menstruationDate.getTime()) / (1000 * 60 * 60 * 24)) / 7);
            this.valueTestGyneco.menstruationDate = this.menstruationDate;
            this.valueTestGyneco.PregnantWeek = this.numberWeek;
            this.navCtrl.push(Step2_1Page, {
                userParams: this.valueTestGyneco,
                QuestionText: this.QuestionText
            });
        }
    };
    return MenstruationPage;
}());
__decorate([
    ViewChild('menstruation'),
    __metadata("design:type", Object)
], MenstruationPage.prototype, "menstruation", void 0);
MenstruationPage = __decorate([
    IonicPage(),
    Component({
        selector: 'page-menstruation',
        templateUrl: 'menstruation.html',
    }),
    __metadata("design:paramtypes", [NavController, NavParams, AlertController])
], MenstruationPage);
export { MenstruationPage };
//# sourceMappingURL=menstruation.js.map