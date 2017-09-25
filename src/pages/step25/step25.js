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
import { Step26Page } from '../step26/step26';
/**
 * Generated class for the Step25Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Step25Page = (function () {
    function Step25Page(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.valueTestGyneco = navParams.get('userParams');
        this.QuestionText = navParams.get('QuestionText');
    }
    Step25Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Step25Page');
    };
    Step25Page.prototype.goNextStep = function () {
        this.valueTestGyneco.timeTravel = this.timeTravel.value;
        if (!this.timeTravel.value) {
            var alert_1 = this.alertCtrl.create({
                title: 'Rentrez votre poids',
                subTitle: 'Nous avons besoin de toutes les informations qui vous sont demandé pour établir votre profil',
                buttons: ['OK']
            });
            alert_1.present();
        }
        else {
            this.navCtrl.push(Step26Page, {
                userParams: this.valueTestGyneco,
                QuestionText: this.QuestionText
            });
        }
    };
    return Step25Page;
}());
__decorate([
    ViewChild('timeTravel'),
    __metadata("design:type", Object)
], Step25Page.prototype, "timeTravel", void 0);
Step25Page = __decorate([
    IonicPage(),
    Component({
        selector: 'page-step25',
        templateUrl: 'step25.html',
    }),
    __metadata("design:paramtypes", [NavController, NavParams, AlertController])
], Step25Page);
export { Step25Page };
//# sourceMappingURL=step25.js.map