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
import { PsychoTest4Page } from '../psycho-test4/psycho-test4';
/**
 * Generated class for the Step26Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Step26Page = (function () {
    function Step26Page(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.valueTestGyneco = navParams.get('userParams');
        this.QuestionText = navParams.get('QuestionText');
    }
    Step26Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Step26Page');
    };
    Step26Page.prototype.yesClick = function () {
        if (this.no.value == true) {
            this.no.value = false;
        }
    };
    Step26Page.prototype.noClick = function () {
        if (this.yes.value == true) {
            this.yes.value = false;
        }
    };
    Step26Page.prototype.goNextStep = function () {
        if (this.yes.value == true)
            this.result = 1;
        else if (this.no.value == true)
            this.result = 0;
        else
            this.result = -1;
        if (this.result == -1) {
            var alert_1 = this.alertCtrl.create({
                title: 'Selectionnez au moins une des réponses',
                subTitle: 'Nous avons besoin de toutes les informations qui vous sont demandé pour établir votre profil',
                buttons: ['OK']
            });
            alert_1.present();
        }
        else {
            this.valueTestGyneco.standingWork = this.result;
            this.navCtrl.push(PsychoTest4Page, {
                userParams: this.valueTestGyneco,
                QuestionText: this.QuestionText
            });
        }
    };
    return Step26Page;
}());
__decorate([
    ViewChild('yes'),
    __metadata("design:type", Object)
], Step26Page.prototype, "yes", void 0);
__decorate([
    ViewChild('no'),
    __metadata("design:type", Object)
], Step26Page.prototype, "no", void 0);
Step26Page = __decorate([
    IonicPage(),
    Component({
        selector: 'page-step26',
        templateUrl: 'step26.html',
    }),
    __metadata("design:paramtypes", [NavController, NavParams, AlertController])
], Step26Page);
export { Step26Page };
//# sourceMappingURL=step26.js.map