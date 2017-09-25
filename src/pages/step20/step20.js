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
import { Step21Page } from '../step21/step21';
/**
 * Generated class for the Step20Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Step20Page = (function () {
    function Step20Page(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.valueTestGyneco = navParams.get('userParams');
        this.QuestionText = navParams.get('QuestionText');
    }
    Step20Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Step20Page');
    };
    Step20Page.prototype.goNextStep = function () {
        this.valueTestGyneco.medicament1 = this.medicament1.value;
        this.valueTestGyneco.medicament2 = this.medicament2.value;
        this.valueTestGyneco.medicament3 = this.medicament3.value;
        this.valueTestGyneco.medicament4 = this.medicament4.value;
        this.valueTestGyneco.medicament5 = this.medicament5.value;
        this.navCtrl.push(Step21Page, {
            userParams: this.valueTestGyneco,
            QuestionText: this.QuestionText
        });
    };
    return Step20Page;
}());
__decorate([
    ViewChild('medicament1'),
    __metadata("design:type", Object)
], Step20Page.prototype, "medicament1", void 0);
__decorate([
    ViewChild('medicament2'),
    __metadata("design:type", Object)
], Step20Page.prototype, "medicament2", void 0);
__decorate([
    ViewChild('medicament3'),
    __metadata("design:type", Object)
], Step20Page.prototype, "medicament3", void 0);
__decorate([
    ViewChild('medicament4'),
    __metadata("design:type", Object)
], Step20Page.prototype, "medicament4", void 0);
__decorate([
    ViewChild('medicament5'),
    __metadata("design:type", Object)
], Step20Page.prototype, "medicament5", void 0);
Step20Page = __decorate([
    IonicPage(),
    Component({
        selector: 'page-step20',
        templateUrl: 'step20.html',
    }),
    __metadata("design:paramtypes", [NavController, NavParams, AlertController])
], Step20Page);
export { Step20Page };
//# sourceMappingURL=step20.js.map