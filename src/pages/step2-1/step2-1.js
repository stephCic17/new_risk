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
import { IvgInfoPage } from '../ivg-info/ivg-info';
import { PsychoTest1Page } from '../psycho-test1/psycho-test1';
/**
 * Generated class for the Step2_1Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Step2_1Page = (function () {
    function Step2_1Page(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.valueTestGyneco = navParams.get('userParams');
        this.QuestionText = navParams.get('QuestionText');
    }
    Step2_1Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Step2_1Page');
        console.log(this.valueTestGyneco);
    };
    Step2_1Page.prototype.yesClick = function () {
        if (this.no.value == true || this.idn.value == true) {
            this.no.value = false;
            this.idn.value = false;
        }
    };
    Step2_1Page.prototype.noClick = function () {
        if (this.yes.value == true || this.idn.value == true) {
            this.yes.value = false;
            this.idn.value = false;
        }
    };
    Step2_1Page.prototype.idnClick = function () {
        if (this.no.value == true || this.yes.value == true) {
            this.no.value = false;
            this.yes.value = false;
        }
    };
    Step2_1Page.prototype.goNextStep = function () {
        if (this.yes.value == true)
            this.result = 1;
        else if (this.no.value == true)
            this.result = 0;
        else if (this.idn.value == true)
            this.result = 2;
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
            this.valueTestGyneco.feelingPregnant = this.result;
            if (this.result == 0) {
                this.navCtrl.push(IvgInfoPage, {
                    userParams: this.valueTestGyneco,
                    QuestionText: this.QuestionText
                });
            }
            else {
                this.navCtrl.push(PsychoTest1Page, {
                    userParams: this.valueTestGyneco,
                    QuestionText: this.QuestionText
                });
            }
        }
    };
    return Step2_1Page;
}());
__decorate([
    ViewChild('yes'),
    __metadata("design:type", Object)
], Step2_1Page.prototype, "yes", void 0);
__decorate([
    ViewChild('no'),
    __metadata("design:type", Object)
], Step2_1Page.prototype, "no", void 0);
__decorate([
    ViewChild('idn'),
    __metadata("design:type", Object)
], Step2_1Page.prototype, "idn", void 0);
Step2_1Page = __decorate([
    IonicPage(),
    Component({
        selector: 'page-step2-1',
        templateUrl: 'step2-1.html',
    }),
    __metadata("design:paramtypes", [NavController, NavParams, AlertController])
], Step2_1Page);
export { Step2_1Page };
//# sourceMappingURL=step2-1.js.map