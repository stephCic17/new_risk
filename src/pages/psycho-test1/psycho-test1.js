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
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Step3Page } from '../step3/step3';
/**
 * Generated class for the PsychoTest1Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var PsychoTest1Page = (function () {
    function PsychoTest1Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.valueTestGyneco = navParams.get('userParams');
        this.QuestionText = navParams.get('QuestionText');
    }
    PsychoTest1Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PsychoTest1Page');
        console.log(this.procreation.value);
    };
    PsychoTest1Page.prototype.goNextStep = function () {
        if (this.procreation.value) {
            this.valueTestGyneco.procreation = this.procreation.value;
            this.valueTestGyneco.yearsProcreation = this.yearsProcreation.value;
            this.valueTestGyneco.nbProcreation = this.nbProcreation.value;
        }
        if (this.oocyteDonation.value)
            this.valueTestGyneco.oocyteDonation = this.oocyteDonation.value;
        if (this.spermDonation.value)
            this.valueTestGyneco.spermDonation = this.spermDonation.value;
        this.navCtrl.push(Step3Page, {
            userParams: this.valueTestGyneco,
            QuestionText: this.QuestionText
        });
    };
    return PsychoTest1Page;
}());
__decorate([
    ViewChild('procreation'),
    __metadata("design:type", Object)
], PsychoTest1Page.prototype, "procreation", void 0);
__decorate([
    ViewChild('yearsProcreation'),
    __metadata("design:type", Object)
], PsychoTest1Page.prototype, "yearsProcreation", void 0);
__decorate([
    ViewChild('nbProcreation'),
    __metadata("design:type", Object)
], PsychoTest1Page.prototype, "nbProcreation", void 0);
__decorate([
    ViewChild('oocyteDonation'),
    __metadata("design:type", Object)
], PsychoTest1Page.prototype, "oocyteDonation", void 0);
__decorate([
    ViewChild('spermDonation'),
    __metadata("design:type", Object)
], PsychoTest1Page.prototype, "spermDonation", void 0);
PsychoTest1Page = __decorate([
    IonicPage(),
    Component({
        selector: 'page-psycho-test1',
        templateUrl: 'psycho-test1.html',
    }),
    __metadata("design:paramtypes", [NavController, NavParams])
], PsychoTest1Page);
export { PsychoTest1Page };
//# sourceMappingURL=psycho-test1.js.map