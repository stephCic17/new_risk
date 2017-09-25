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
import { Step13Page } from '../step13/step13';
/**
 * Generated class for the PsychoTest3Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var PsychoTest3Page = (function () {
    function PsychoTest3Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.valueTestGyneco = navParams.get('userParams');
        this.QuestionText = navParams.get('QuestionText');
    }
    PsychoTest3Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PsychoTest3Page');
    };
    PsychoTest3Page.prototype.goNextStep = function () {
        if (this.forceps.value)
            this.valueTestGyneco.psycho3.forceps = this.forceps.value;
        if (this.ventouse.value)
            this.valueTestGyneco.psycho3.ventouse = this.ventouse.value;
        if (this.cesarienneUrgence.value)
            this.valueTestGyneco.psycho3.cesarienneUrgence = this.cesarienneUrgence.value;
        if (this.generalAnest.value)
            this.valueTestGyneco.psycho3.generalAnest = this.generalAnest.value;
        if (this.hemorragie.value)
            this.valueTestGyneco.psycho3.hemorragie = this.hemorragie.value;
        if (this.babySeparation.value)
            this.valueTestGyneco.psycho3.babySeparation = this.babySeparation.value;
        if (this.dieDelivery.value)
            this.valueTestGyneco.psycho3.dieDelivery = this.dieDelivery.value;
        if (this.psyDieBaby.value)
            this.valueTestGyneco.psycho3.psyDieBaby = this.psyDieBaby.value;
        if (this.traumaDelivery.value)
            this.valueTestGyneco.psycho3.traumaDelivery = this.traumaDelivery.value;
        this.navCtrl.push(Step13Page, {
            userParams: this.valueTestGyneco,
            QuestionText: this.QuestionText
        });
    };
    return PsychoTest3Page;
}());
__decorate([
    ViewChild('forceps'),
    __metadata("design:type", Object)
], PsychoTest3Page.prototype, "forceps", void 0);
__decorate([
    ViewChild('ventouse'),
    __metadata("design:type", Object)
], PsychoTest3Page.prototype, "ventouse", void 0);
__decorate([
    ViewChild('cesarienneUrgence'),
    __metadata("design:type", Object)
], PsychoTest3Page.prototype, "cesarienneUrgence", void 0);
__decorate([
    ViewChild('generalAnest'),
    __metadata("design:type", Object)
], PsychoTest3Page.prototype, "generalAnest", void 0);
__decorate([
    ViewChild('hemorragie'),
    __metadata("design:type", Object)
], PsychoTest3Page.prototype, "hemorragie", void 0);
__decorate([
    ViewChild('babySeparation'),
    __metadata("design:type", Object)
], PsychoTest3Page.prototype, "babySeparation", void 0);
__decorate([
    ViewChild('dieDelivery'),
    __metadata("design:type", Object)
], PsychoTest3Page.prototype, "dieDelivery", void 0);
__decorate([
    ViewChild('psyDieBaby'),
    __metadata("design:type", Object)
], PsychoTest3Page.prototype, "psyDieBaby", void 0);
__decorate([
    ViewChild('traumaDelivery'),
    __metadata("design:type", Object)
], PsychoTest3Page.prototype, "traumaDelivery", void 0);
PsychoTest3Page = __decorate([
    IonicPage(),
    Component({
        selector: 'page-psycho-test3',
        templateUrl: 'psycho-test3.html',
    }),
    __metadata("design:paramtypes", [NavController, NavParams])
], PsychoTest3Page);
export { PsychoTest3Page };
//# sourceMappingURL=psycho-test3.js.map