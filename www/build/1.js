webpackJsonp([1],{

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenstruationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the MenstruationPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var MenstruationPage = (function () {
    function MenstruationPage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.valueTestGyneco = navParams.get('userParams');
        this.QuestionText = navParams.get('QuestionText');
    }
    MenstruationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MenstruationPage');
        console.log(this.valueTestGyneco);
    };
    MenstruationPage.prototype.goNextStep = function () {
        if (!this.menstruation.value) {
            var alert_1 = this.alertCtrl.create({
                title: 'Vous devez selectionner une date',
                subTitle: 'Si vous n\'êtes pas sur du resultat ??',
                buttons: ['OK']
            });
            alert_1.present();
        }
        else {
            this.menstruationDate = new Date(this.menstruation.value);
            this.numberWeek = Math.round(((new Date().getTime() - this.menstruationDate.getTime()) / (1000 * 60 * 60 * 24)) / 7);
            this.valueTestGyneco.menstruationDate = this.menstruationDate;
            this.valueTestGyneco.PregnantWeek = this.numberWeek;
        }
    };
    return MenstruationPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('menstruation'),
    __metadata("design:type", Object)
], MenstruationPage.prototype, "menstruation", void 0);
MenstruationPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-menstruation',template:/*ion-inline-start:"/Users/kwame/Desktop/gitNew_risk/src/pages/menstruation/menstruation.html"*/'<!--\n  Generated template for the MenstruationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>menstruation</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<h3 class="form-question-title">{{QuestionText.menstruation}}</h3>\n	\n	<ion-item>\n		<ion-label stacked>Date de vos derniere regles</ion-label>\n		<ion-input type="date" #menstruation></ion-input>\n	</ion-item>\n	<button ion-button (click)="goNextStep()">\n				Valider\n	</button>\n</ion-content>\n'/*ion-inline-end:"/Users/kwame/Desktop/gitNew_risk/src/pages/menstruation/menstruation.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], MenstruationPage);

//# sourceMappingURL=menstruation.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenstruationPageModule", function() { return MenstruationPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menstruation__ = __webpack_require__(195);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MenstruationPageModule = (function () {
    function MenstruationPageModule() {
    }
    return MenstruationPageModule;
}());
MenstruationPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__menstruation__["a" /* MenstruationPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__menstruation__["a" /* MenstruationPage */]),
        ],
    })
], MenstruationPageModule);

//# sourceMappingURL=menstruation.module.js.map

/***/ })

});
//# sourceMappingURL=1.js.map