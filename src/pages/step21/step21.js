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
import { Step22Page } from '../step22/step22';
/**
 * Generated class for the Step21Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Step21Page = (function () {
    function Step21Page(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.valueTestGyneco = navParams.get('userParams');
        this.QuestionText = navParams.get('QuestionText');
    }
    Step21Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Step21Page');
    };
    Step21Page.prototype.goNextStep = function () {
        this.valueTestGyneco.size = this.size.value;
        if (!this.size.value) {
            var alert_1 = this.alertCtrl.create({
                title: 'Rentrez votre taille',
                subTitle: 'Nous avons besoin de toutes les informations qui vous sont demandé pour établir votre profil',
                buttons: ['OK']
            });
            alert_1.present();
        }
        else {
            this.navCtrl.push(Step22Page, {
                userParams: this.valueTestGyneco,
                QuestionText: this.QuestionText
            });
        }
    };
    return Step21Page;
}());
__decorate([
    ViewChild('size'),
    __metadata("design:type", Object)
], Step21Page.prototype, "size", void 0);
Step21Page = __decorate([
    IonicPage(),
    Component({
        selector: 'page-step21',
        templateUrl: 'step21.html',
    }),
    __metadata("design:paramtypes", [NavController, NavParams, AlertController])
], Step21Page);
export { Step21Page };
//# sourceMappingURL=step21.js.map