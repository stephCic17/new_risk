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
import { ResultPage } from '../result/result';
/**
 * Generated class for the PsychoTest4Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var PsychoTest4Page = (function () {
    function PsychoTest4Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.valueTestGyneco = navParams.get('userParams');
        this.QuestionText = navParams.get('QuestionText');
    }
    PsychoTest4Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PsychoTest4Page');
    };
    PsychoTest4Page.prototype.goNextStep = function () {
        this.valueTestGyneco.psycho4 = [];
        if (this.angoisseCrise.value)
            this.valueTestGyneco.psycho4.angoisseCrise = this.angoisseCrise.value;
        if (this.boulimie.value)
            this.valueTestGyneco.psycho4.boulimie = this.boulimie.value;
        if (this.anorexie.value)
            this.valueTestGyneco.psycho4.anorexie = this.anorexie.value;
        if (this.TOC.value)
            this.valueTestGyneco.psycho4.TOC = this.TOC.value;
        if (this.depression.value)
            this.valueTestGyneco.psycho4.depression = this.depression.value;
        if (this.phobie.value)
            this.valueTestGyneco.psycho4.phobie = this.phobie.value;
        if (this.bipolaire.value)
            this.valueTestGyneco.psycho4.bipolaire = this.bipolaire.value;
        if (this.HPtravel.value)
            this.valueTestGyneco.psycho4.HPtravel = this.HPtravel.value;
        this.navCtrl.push(ResultPage, {
            userParams: this.valueTestGyneco,
            QuestionText: this.QuestionText
        });
    };
    return PsychoTest4Page;
}());
__decorate([
    ViewChild('angoisseCrise'),
    __metadata("design:type", Object)
], PsychoTest4Page.prototype, "angoisseCrise", void 0);
__decorate([
    ViewChild('boulimie'),
    __metadata("design:type", Object)
], PsychoTest4Page.prototype, "boulimie", void 0);
__decorate([
    ViewChild('anorexie'),
    __metadata("design:type", Object)
], PsychoTest4Page.prototype, "anorexie", void 0);
__decorate([
    ViewChild('TOC'),
    __metadata("design:type", Object)
], PsychoTest4Page.prototype, "TOC", void 0);
__decorate([
    ViewChild('depression'),
    __metadata("design:type", Object)
], PsychoTest4Page.prototype, "depression", void 0);
__decorate([
    ViewChild('phobie'),
    __metadata("design:type", Object)
], PsychoTest4Page.prototype, "phobie", void 0);
__decorate([
    ViewChild('bipolaire'),
    __metadata("design:type", Object)
], PsychoTest4Page.prototype, "bipolaire", void 0);
__decorate([
    ViewChild('HPtravel'),
    __metadata("design:type", Object)
], PsychoTest4Page.prototype, "HPtravel", void 0);
PsychoTest4Page = __decorate([
    IonicPage(),
    Component({
        selector: 'page-psycho-test4',
        templateUrl: 'psycho-test4.html',
    }),
    __metadata("design:paramtypes", [NavController, NavParams])
], PsychoTest4Page);
export { PsychoTest4Page };
//# sourceMappingURL=psycho-test4.js.map