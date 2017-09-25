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
import { Step23Page } from '../step23/step23';
/**
 * Generated class for the Step22Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Step22Page = (function () {
    function Step22Page(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.valueTestGyneco = navParams.get('userParams');
        this.QuestionText = navParams.get('QuestionText');
    }
    Step22Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Step22Page');
    };
    Step22Page.prototype.goNextStep = function () {
        this.valueTestGyneco.weight = this.weight.value;
        this.valueTestGyneco.IMC = this.weight.value / Math.pow(this.valueTestGyneco.size / 100, 2);
        console.log(this.valueTestGyneco.IMC);
        if (!this.weight.value) {
            var alert_1 = this.alertCtrl.create({
                title: 'Rentrez votre poids',
                subTitle: 'Nous avons besoin de toutes les informations qui vous sont demandé pour établir votre profil',
                buttons: ['OK']
            });
            alert_1.present();
        }
        else {
            this.navCtrl.push(Step23Page, {
                userParams: this.valueTestGyneco,
                QuestionText: this.QuestionText
            });
        }
    };
    return Step22Page;
}());
__decorate([
    ViewChild('weight'),
    __metadata("design:type", Object)
], Step22Page.prototype, "weight", void 0);
Step22Page = __decorate([
    IonicPage(),
    Component({
        selector: 'page-step22',
        templateUrl: 'step22.html',
    }),
    __metadata("design:paramtypes", [NavController, NavParams, AlertController])
], Step22Page);
export { Step22Page };
//# sourceMappingURL=step22.js.map