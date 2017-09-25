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
import { Step7Page } from '../step7/step7';
import { Step8Page } from '../step8/step8';
import { Step11Page } from '../step11/step11';
/**
 * Generated class for the Step6Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Step6Page = (function () {
    function Step6Page(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.valueTestGyneco = navParams.get('userParams');
        this.QuestionText = navParams.get('QuestionText');
    }
    Step6Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Step6Page');
    };
    Step6Page.prototype.yesClick = function () {
        if (this.no.value == true)
            this.no.value = false;
    };
    Step6Page.prototype.noClick = function () {
        if (this.yes.value == true)
            this.yes.value = false;
    };
    Step6Page.prototype.goNextStep = function () {
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
            this.valueTestGyneco.bigChild = this.result;
            if (this.valueTestGyneco.nbChild == 1 && this.result == 1)
                this.navCtrl.push(Step11Page, {
                    userParams: this.valueTestGyneco,
                    QuestionText: this.QuestionText
                });
            else if (this.valueTestGyneco.nbChild > 1)
                this.navCtrl.push(Step7Page, {
                    userParams: this.valueTestGyneco,
                    QuestionText: this.QuestionText
                });
            else
                this.navCtrl.push(Step8Page, {
                    userParams: this.valueTestGyneco,
                    QuestionText: this.QuestionText
                });
        }
    };
    return Step6Page;
}());
__decorate([
    ViewChild('yes'),
    __metadata("design:type", Object)
], Step6Page.prototype, "yes", void 0);
__decorate([
    ViewChild('no'),
    __metadata("design:type", Object)
], Step6Page.prototype, "no", void 0);
Step6Page = __decorate([
    IonicPage(),
    Component({
        selector: 'page-step6',
        templateUrl: 'step6.html',
    }),
    __metadata("design:paramtypes", [NavController, NavParams, AlertController])
], Step6Page);
export { Step6Page };
//# sourceMappingURL=step6.js.map