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
import { Step14Page } from '../step14/step14';
/**
 * Generated class for the PsychoTest2Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var PsychoTest2Page = (function () {
    function PsychoTest2Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.valueTestGyneco = navParams.get('userParams');
        this.QuestionText = navParams.get('QuestionText');
    }
    PsychoTest2Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PsychoTest2Page');
    };
    PsychoTest2Page.prototype.goNextStep = function () {
        this.valueTestGyneco.psycho2 = [];
        if (this.fausseCouche.value)
            this.valueTestGyneco.psycho2.fausseCouche = this.fausseCouche.value;
        if (this.IVG.value)
            this.valueTestGyneco.psycho2.IVG = this.IVG.value;
        if (this.GEU.value)
            this.valueTestGyneco.psycho2.GEU = this.GEU.value;
        if (this.DieInUtero.value)
            this.valueTestGyneco.psycho2.DieInUtero = this.DieInUtero.value;
        if (this.IMG.value)
            this.valueTestGyneco.psycho2.IMG = this.IMG.value;
        if (this.ISG.value)
            this.valueTestGyneco.psycho2.ISG = this.ISG.value;
        if (this.ChildHandicap.value)
            this.valueTestGyneco.psycho2.ChildHandicap = this.ChildHandicap.value;
        if (this.ChildPrema.value)
            this.valueTestGyneco.psycho2.ChildPrema = this.ChildPrema.value;
        if (this.ChildChroniqueSeek.value)
            this.valueTestGyneco.psycho2.ChildChroniqueSeek = this.ChildChroniqueSeek.value;
        if (this.DieBabyP.value)
            this.valueTestGyneco.psycho2.DieBabyP = this.DieBabyP.value;
        if (this.PregnantTraumaPsy.value)
            this.valueTestGyneco.psycho2.PregnantTraumaPsy = this.PregnantTraumaPsy.value;
        if (this.TraumaExperiencePsy.value)
            this.valueTestGyneco.psycho2.TraumaExperiencePsy = this.TraumaExperiencePsy.value;
        if (this.fausseCouche.value == true)
            this.navCtrl.push(Step13Page, {
                userParams: this.valueTestGyneco,
                QuestionText: this.QuestionText
            });
        else
            this.navCtrl.push(Step14Page, {
                userParams: this.valueTestGyneco,
                QuestionText: this.QuestionText
            });
    };
    return PsychoTest2Page;
}());
__decorate([
    ViewChild('fausseCouche'),
    __metadata("design:type", Object)
], PsychoTest2Page.prototype, "fausseCouche", void 0);
__decorate([
    ViewChild('IVG'),
    __metadata("design:type", Object)
], PsychoTest2Page.prototype, "IVG", void 0);
__decorate([
    ViewChild('GEU'),
    __metadata("design:type", Object)
], PsychoTest2Page.prototype, "GEU", void 0);
__decorate([
    ViewChild('DieInUtero'),
    __metadata("design:type", Object)
], PsychoTest2Page.prototype, "DieInUtero", void 0);
__decorate([
    ViewChild('IMG'),
    __metadata("design:type", Object)
], PsychoTest2Page.prototype, "IMG", void 0);
__decorate([
    ViewChild('ISG'),
    __metadata("design:type", Object)
], PsychoTest2Page.prototype, "ISG", void 0);
__decorate([
    ViewChild('ChildHandicap'),
    __metadata("design:type", Object)
], PsychoTest2Page.prototype, "ChildHandicap", void 0);
__decorate([
    ViewChild('ChildPrema'),
    __metadata("design:type", Object)
], PsychoTest2Page.prototype, "ChildPrema", void 0);
__decorate([
    ViewChild('ChildChroniqueSeek'),
    __metadata("design:type", Object)
], PsychoTest2Page.prototype, "ChildChroniqueSeek", void 0);
__decorate([
    ViewChild('DieBabyP'),
    __metadata("design:type", Object)
], PsychoTest2Page.prototype, "DieBabyP", void 0);
__decorate([
    ViewChild('PregnantTraumaPsy'),
    __metadata("design:type", Object)
], PsychoTest2Page.prototype, "PregnantTraumaPsy", void 0);
__decorate([
    ViewChild('TraumaExperiencePsy'),
    __metadata("design:type", Object)
], PsychoTest2Page.prototype, "TraumaExperiencePsy", void 0);
PsychoTest2Page = __decorate([
    IonicPage(),
    Component({
        selector: 'page-psycho-test2',
        templateUrl: 'psycho-test2.html',
    }),
    __metadata("design:paramtypes", [NavController, NavParams])
], PsychoTest2Page);
export { PsychoTest2Page };
//# sourceMappingURL=psycho-test2.js.map