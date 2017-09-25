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
import { Step15Page } from '../step15/step15';
/**
 * Generated class for the Step14Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Step14Page = (function () {
    function Step14Page(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.valueTestGyneco = navParams.get('userParams');
        this.QuestionText = navParams.get('QuestionText');
    }
    Step14Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Step14Page');
    };
    Step14Page.prototype.goNextStep = function () {
        this.valueTestGyneco.alcool = this.alcool.value;
        this.navCtrl.push(Step15Page, {
            userParams: this.valueTestGyneco,
            QuestionText: this.QuestionText
        });
    };
    return Step14Page;
}());
__decorate([
    ViewChild('alcool'),
    __metadata("design:type", Object)
], Step14Page.prototype, "alcool", void 0);
Step14Page = __decorate([
    IonicPage(),
    Component({
        selector: 'page-step14',
        templateUrl: 'step14.html',
    }),
    __metadata("design:paramtypes", [NavController, NavParams, AlertController])
], Step14Page);
export { Step14Page };
//# sourceMappingURL=step14.js.map