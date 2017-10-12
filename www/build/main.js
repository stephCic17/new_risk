webpackJsonp([3],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(78);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ResultPage = (function () {
    function ResultPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.activeWelcomeContent = false;
        this.isInitialized = false;
        this.tableAnswer = navParams.get('userParams');
        this.resultRisk = 0;
        console.log("test");
        console.log(this.tableAnswer);
    }
    ResultPage.prototype.nextBegin = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    ResultPage.prototype.ngAfterViewInit = function () {
        console.log("ouéoué");
        this.slides.lockSwipes(false);
        this.slides.freeMode = true;
    };
    ResultPage.prototype.ngOnInit = function () {
        var self = this;
        setTimeout(function () {
            self.activeWelcomeContent = true;
        }, 250);
        this.slides.lockSwipes(false);
        console.log(this.tableAnswer);
        this.IMC = this.tableAnswer[27].answerUser / Math.pow(this.tableAnswer[26].answerUser / 100, 2);
        console.log(this.IMC);
        this.result = [];
        this.resultSlide = [];
        this.conseil = [];
        this.positif = [];
        this.resultPsycho1 = 0;
        if (this.tableAnswer[4].answerUser1 == true) {
            this.resultPsycho1 += 1;
            if (this.tableAnswer[4].answerUser3 <= 2 && this.tableAnswer[4].answerUser2 >= 0)
                this.resultPsycho1 += 1;
            else if (this.tableAnswer[4].answerUser2 > 2)
                this.resultPsycho1 += 2;
        }
        if (this.tableAnswer[4].answerUser3 == true)
            this.resultPsycho1 += 2;
        if (this.tableAnswer[4].answerUser2 == true)
            this.resultPsycho1 += 2;
        this.resultPsycho2 = 0;
        if (this.tableAnswer[17].answerUser1 == true)
            this.resultPsycho2 += 2;
        if (this.tableAnswer[17].answerUser2 == true)
            this.resultPsycho2 += 1;
        if (this.tableAnswer[17].answerUser3 == true)
            this.resultPsycho2 += 1;
        if (this.tableAnswer[17].answerUser4 == true)
            this.resultPsycho2 += 2;
        if (this.tableAnswer[17].answerUser5 == true)
            this.resultPsycho2 += 2;
        if (this.tableAnswer[17].answerUser6 == true)
            this.resultPsycho2 += 3;
        if (this.tableAnswer[17].answerUser7 == true)
            this.resultPsycho2 += 3;
        if (this.tableAnswer[17].answerUser8 == true)
            this.resultPsycho2 += 1;
        if (this.tableAnswer[17].answerUser9 == true)
            this.resultPsycho2 += 3;
        if (this.tableAnswer[17].answerUser10 == true)
            this.resultPsycho2 += 2;
        if (this.tableAnswer[17].answerUser11 == true)
            this.resultPsycho2 += 10;
        if (this.tableAnswer[17].answerUser12 == true)
            this.resultPsycho2 += 10;
        this.resultPsycho3 = 0;
        if (this.tableAnswer[16].answerUser1 == true)
            this.resultPsycho3 += 1;
        if (this.tableAnswer[16].answerUser2 == true)
            this.resultPsycho3 += 2;
        if (this.tableAnswer[16].answerUser3 == true)
            this.resultPsycho3 += 2;
        if (this.tableAnswer[16].answerUser4 == true)
            this.resultPsycho3 += 1;
        if (this.tableAnswer[16].answerUser5 == true)
            this.resultPsycho3 += 2;
        if (this.tableAnswer[16].answerUser6 == true)
            this.resultPsycho3 += 5;
        if (this.tableAnswer[16].answerUser7 == true)
            this.resultPsycho3 += 2;
        if (this.tableAnswer[16].answerUser8 == true)
            this.resultPsycho3 += 5;
        if (this.tableAnswer[16].answerUser9 == true)
            this.resultPsycho3 += 5;
        this.resultPsycho4 = 0;
        if (this.tableAnswer[32].answerUser1 == true)
            this.resultPsycho4 += 2;
        if (this.tableAnswer[32].answerUser2 == true)
            this.resultPsycho4 += 2;
        if (this.tableAnswer[32].answerUser3 == true)
            this.resultPsycho4 += 2;
        if (this.tableAnswer[32].answerUser4 == true)
            this.resultPsycho4 += 1;
        if (this.tableAnswer[32].answerUser5 == true)
            this.resultPsycho4 += 2;
        if (this.tableAnswer[32].answerUser6 == true)
            this.resultPsycho4 += 2;
        if (this.tableAnswer[32].answerUser7 == true)
            this.resultPsycho4 += 1;
        if (this.tableAnswer[32].answerUser8 == true)
            this.resultPsycho4 += 2;
        if (this.tableAnswer[32].answerUser9 == true)
            this.resultPsycho4 += 2;
        this.psycho = [];
        if (this.resultPsycho1 >= 2 || this.resultPsycho2 >= 5 || this.resultPsycho3 > 4 || this.resultPsycho4 >= 2) {
            this.psycho.push({
                title: "D'après vos antécédent vous présentez un risque de dépression du post-Partum"
            });
        }
        if (this.tableAnswer[0].answerUser > 42)
            this.resultRisk += 50;
        else if (this.tableAnswer[0].answerUser == 42)
            this.resultRisk += 20;
        else if (this.tableAnswer[0].answerUser > 38)
            this.resultRisk += 2;
        if (this.tableAnswer[18].answerUser > 10)
            this.resultRisk += 400;
        if (this.tableAnswer[5].answerUser == true)
            this.resultRisk += 2;
        if (this.tableAnswer[6].answerUser == true) {
            if (this.tableAnswer[14].answerUser == true)
                this.resultRisk += 2;
            if (this.tableAnswer[8].answerUser == true)
                this.resultRisk += 50;
            if (this.tableAnswer[10].answerUser == true)
                this.resultRisk += 50;
            if (this.tableAnswer[12].answerUser == true)
                this.resultRisk += 50;
            if (this.tableAnswer[13].answerUser == true)
                this.resultRisk += 2;
            if (this.tableAnswer[11].answerUser == true)
                this.resultRisk += 50;
        }
        if (this.tableAnswer[17].answerUser > 0)
            this.resultRisk += 2;
        if (this.tableAnswer[22].answerUser == true)
            this.resultRisk += 50;
        if (this.tableAnswer.epilepsy == true)
            this.resultRisk += 200;
        if (this.tableAnswer[21].answerUser == true)
            this.resultRisk += 2;
        if (this.tableAnswer[20].answerUser == true)
            this.resultRisk += 2;
        if (this.tableAnswer[23].answerUser == true) {
            if (this.tableAnswer.medicament1 == true)
                this.resultRisk += 200;
            if (this.tableAnswer.medicament2 == true)
                this.resultRisk += 200;
            if (this.tableAnswer.medicament3 == true)
                this.resultRisk += 2;
            if (this.tableAnswer.medicament4 == true)
                this.resultRisk += 200;
            if (this.tableAnswer.medicament5 == true)
                this.resultRisk += 2;
        }
        if (this.tableAnswer.IMC > 28)
            this.resultRisk += 50;
        if (this.tableAnswer.IMC > 22)
            this.resultRisk += 20;
        if (this.tableAnswer.IMC > 17)
            this.resultRisk += 0;
        if (this.tableAnswer.IMC < 17)
            this.resultRisk += 50;
        if (this.tableAnswer[27].answerUser == true) {
            if (this.tableAnswer[29].answerUser > 90)
                this.resultRisk += 2;
            if (this.tableAnswer[29].answerUser == true)
                this.resultRisk += 2;
            if (this.tableAnswer[28].answerUser > 10)
                this.resultRisk += 2;
        }
        if (this.resultRisk >= 200)
            this.riskAssessment = "D'après vos réponse vous présentez une grossesse à haut et devez être suivi dans une maternité de type 3.";
        else if (this.resultRisk >= 50)
            this.riskAssessment = "D'apres vos réponse vous présentez une grossesse à haut risque mais qui ne necessite pas un suivi dans une maternité de type 3";
        else if (this.resultRisk >= 20)
            this.riskAssessment = "D'apres vos réponses vous présentez une grossesse à risque.";
        else
            this.riskAssessment = "D'apres vos réponses vous ne présentez pas de risque particulier pour votre grossesse.";
        console.log("debut risk");
        if (this.tableAnswer[3].answerUser == true)
            this.resultSlide.push({
                type: "positif",
                title: "Félicitation vous êtes enceinte !"
            });
        if (this.tableAnswer[6].answerUser == 0 && this.tableAnswer[3].answerUser == true)
            this.resultSlide.push({
                type: "positif",
                title: "Félicitation vous allez avoir votre premier enfant"
            });
        if (this.tableAnswer[0].answerUser < 42 && this.tableAnswer[0].answerUser >= 38)
            this.resultSlide.push({
                type: "risk",
                title: "A votre Age, vous présentez un risque élevé d'anomalie chromosomique foetale"
            });
        else if (this.tableAnswer[0].answerUser > 42)
            this.resultSlide.push({
                type: "risk",
                title: "A votre Age, vous présentez un risque très élevé d'anomalie chromosomique foetale"
            });
        if (this.tableAnswer[0].answerUser < 38)
            this.resultSlide.push({
                type: "positif",
                title: "Vous avez le bon l'âge optimal pour faire un enfant"
            });
        else
            this.resultSlide.push({
                type: "positif",
                title: "Être plus âgée pour élever ses enfants est ausi un gage de maturité !"
            });
        if (this.tableAnswer[5].answerUser == true && this.tableAnswer[1].answerUser == true)
            this.resultSlide.push({
                type: "risk",
                title: "Vous fumez, ce qui peut entrainer de nombreuses complications."
            });
        if (this.tableAnswer[5].answerUser == true && this.tableAnswer[1].answerUser == true)
            this.resultSlide.push({
                type: "risk",
                title: "Vous fumez, ce qui peut entrainer de nombreuses complications."
            });
        else if (this.tableAnswer[5].answerUser == true)
            this.resultSlide.push({
                type: "risk",
                title: "Vous fumez, ce qui va entrainer de nombreuses complications lors d'une future grossesse."
            });
        if (this.tableAnswer[5].answerUser == true && this.tableAnswer[1].answerUser == true)
            this.resultSlide.push({
                type: "conseil",
                title: "Arrêtez de fumer !"
            });
        else if (this.tableAnswer[5].answerUser == true)
            this.resultSlide.push({
                type: "conseil",
                title: "Arrêtez de fumer avant d'entammer une grossesse !"
            });
        if (this.tableAnswer[8].answerUser == true)
            this.resultSlide.push({
                type: "risk",
                title: "Vous avez eus un enfant de + de 4kg, ce qui peut favoriser l'apparition du vous place dans un groupe à risque de développer un diabète de grossesse."
            });
        if (this.tableAnswer[8].answerUser == true && this.tableAnswer[13].answerUser == true)
            this.resultSlide.push({
                type: "conseil",
                title: "Effectuez un dépistage de diabète de grossesse"
            });
        else if (this.tableAnswer[8].answerUser == true)
            this.resultSlide.push({
                type: "conseil",
                title: "Effectuez un dépistage de diabète de grossesse."
            });
        if (this.tableAnswer[11].answerUser == false && this.tableAnswer[10].answerUser == true)
            this.resultSlide.push({
                type: "risk",
                title: "Vous avez eu un enfant de - de 2kg200 qui n'était pas prématuré, il s'agit donc d'un antécédent de retard de croissance intra-utérin qui vous expose à un risque de récidive d'environ 10 %"
            });
        if (this.tableAnswer[8].answerUser >= 3)
            this.resultSlide.push({
                type: "risk",
                title: "Vous avez un nombre élevé de fausse couches"
            });
        if (this.tableAnswer.IMG)
            this.resultSlide.push({
                type: "risk",
                title: "Vous avez déjà effectué une IMG et vous pourriez avoir un risque de récidive"
            });
        if (this.tableAnswer[19].answerUser < 10 && this.tableAnswer[19].answerUser > 0)
            this.resultSlide.push({
                type: "risk",
                title: "Vous consommez de l'alcool"
            });
        if (this.tableAnswer[19].answerUser < 10 && this.tableAnswer[19].answerUser > 0 && this.tableAnswer[1].answerUser == true)
            this.resultSlide.push({
                type: "risk",
                title: "Stoppez votre consommation d'alcool !"
            });
        if (this.tableAnswer[19].answerUser >= 10 && this.tableAnswer[1].answerUser == true)
            this.resultSlide.push({
                type: "risk",
                title: "Vous consommez une quantité d'alcool importante"
            });
        if (this.tableAnswer[20].answerUser == true)
            this.resultSlide.push({
                type: "risk",
                title: "Votre epilepsie"
            });
        if (this.tableAnswer[25].answerUser1 == true)
            this.resultSlide.push({
                type: "conseil",
                title: "Vous devez être prise en charge par une équipe spécialisée pour le choix des antiépileptiques et leur dosage ainsi que pour la mise en place d'une surveillance foetale adaptée."
            });
        if (this.tableAnswer[25].answerUser2 == true)
            this.resultSlide.push({
                type: "conseil",
                title: "Vous devez être prise en charge par une équipe spécialisée pour le choix des anticoagulent et leur dosage ainsi que pour la mise en place d'une surveillance foetale adaptée."
            });
        if (this.tableAnswer[21].answerUser == true)
            this.resultSlide.push({
                type: "risk",
                title: "Votre antécédent de phlébite"
            });
        if (this.tableAnswer[25].answerUser3 == true)
            this.resultSlide.push({
                type: "conseil",
                title: "Vous devez être prise en charge par une équipe spécialisée pour le choix des antihypertenseurs et leur dosage ainsi que pour la mise en place d'une surveillance foetale adaptée."
            });
        if (this.tableAnswer[22].answerUser == true)
            this.resultSlide.push({
                type: "risk",
                title: "Votre hypertension"
            });
        if (this.tableAnswer[25].answerUser4 == true)
            this.resultSlide.push({
                type: "conseil",
                title: "Vous devez être prise en charge par une équipe spécialisée pour le choix des antidiabetiques et leur dosage ainsi que pour la mise en place d'une surveillance foetale adaptée."
            });
        if (this.IMC < 18.5)
            this.resultSlide.push({
                type: "risk",
                title: "Votre MAIGREUR"
            });
        else if (this.IMC > 35 && this.IMC < 40)
            this.resultSlide.push({
                type: "risk",
                title: "Votre obésité"
            });
        else if (this.IMC > 40)
            this.resultSlide.push({
                type: "risk",
                title: "Votre obésité massive"
            });
        if (this.IMC < 18.5)
            this.resultSlide.push({
                type: "conseil",
                title: "Alimentez-vous correctement"
            });
        else if (this.IMC > 40)
            this.resultSlide.push({
                type: "conseil",
                title: "Vous devez être prise en charge dans un centre spécialisé."
            });
        if (this.tableAnswer[29].answerUser > 10 && this.tableAnswer[29].answerUser <= 12)
            this.resultSlide.push({
                type: "risk",
                title: "Votre nombre d'heure de travail est élevé."
            });
        if (this.tableAnswer[29].answerUser > 12)
            this.resultSlide.push({
                type: "risk",
                title: "Votre nombre d'heure de travail est vraiment très élevé"
            });
        if (this.tableAnswer[30].answerUser > 90)
            this.resultSlide.push({
                type: "risk",
                title: "Votre temps de trajet pour aller au travail est élevé"
            });
        if (this.tableAnswer[30].answerUser == true)
            this.resultSlide.push({
                type: "risk",
                title: "Vous travaillez debout plus de 6 heures par jour"
            });
        if (this.tableAnswer.IMG == true)
            this.resultSlide.push({
                type: "positif",
                title: "La plus grande partie des anomalies foetales sont des accidents et leur récidive est rare"
            });
        if (!this.tableAnswer[28].answerUser)
            this.resultSlide.push({
                type: "positif",
                title: "Vous ne travaillez pas, vous pouvez donc prendre le temps de vous occuper de vous et préparer la venue de votre enfant"
            });
        if (this.tableAnswer[29].answerUser > 10)
            this.resultSlide.push({
                type: "conseil",
                title: "Essayer d'aménager vos heures de travail"
            });
        if (this.tableAnswer[29].answerUser > 90)
            this.resultSlide.push({
                type: "conseil",
                title: "Essayer d'aménager vos heures de présence au travail pour diminuer les temps de trajets"
            });
        if (this.tableAnswer[29].answerUser == true)
            this.resultSlide.push({
                type: "conseil",
                title: "Nous vous conseillons de discuter dès à présent avec votre employeur de la possibilité d'aménager vos conditions de travail. Vous risquez d'être en difficulté pendant votre grossesse si vous restez debout plus de 6 heures par jour"
            });
        if (this.tableAnswer[18].answerUser >= 3)
            this.resultSlide.push({
                type: "conseil",
                title: "Effectuez un bilan de fausse couche à répétition et bénéficiez d'une prise en charge adaptée en fonction des résultats de ce bilan."
            });
        if (this.tableAnswer.IMG == true)
            this.resultSlide.push({
                type: "conseil",
                title: "Prenez rendez-vous pour une consultation spécialisée afin d'évaluer le risque de récidive de malformation foetale."
            });
        if (this.tableAnswer[19].answerUser >= 10 && this.tableAnswer[1].answerUser == true)
            this.resultSlide.push({
                type: "conseil",
                title: "Prenez rendez-vous dans un centre spécialisée pour vous aider à arrêter l'alcool"
            });
        if (this.tableAnswer[19].answerUser < 10 && this.tableAnswer[19].answerUser > 0 && this.tableAnswer[1].answerUser == true)
            this.resultSlide.push({
                type: "conseil",
                title: "Il sera nécessaire de stopper votre consommation d'alcool lorsque vous serez enceinte!"
            });
        this.answers = this.resultSlide.concat(this.psycho);
        console.log("risk:", this.resultSlide);
    };
    return ResultPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Slides */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Slides */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Slides */]) === "function" && _a || Object)
], ResultPage.prototype, "slides", void 0);
ResultPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-result',template:/*ion-inline-start:"/Users/kwame/Desktop/gitNew_risk/src/pages/result/result.html"*/'<ion-content>\n  <div class="result-info visible" >\n    <label>Résultats</label><i class="result-info-icon icon icon-gift"></i>\n  </div>\n  <ion-slides pager>\n    <ion-slide>\n\n      <div class="welcome">\n        <div class="slide-wrapper welcome-wrapper">\n          <div [ngClass]="{\'visible\': activeWelcomeContent, \'welcome-content\': true }">\n            <h1>Bravo !</h1>\n            <p>{{riskAssessment}}</p>\n          </div>\n        </div>\n      </div>\n\n    </ion-slide>\n    <ion-slide *ngFor="let answer of answers" class="risk">\n      <div *ngIf="answer.type == \'conseil\'">\n      <h1 class="conseil">{{answer.title}}</h1>\n      </div>\n      <div *ngIf="answer.type == \'risk\'">\n      <h1 class="risk">{{answer.title}}</h1>\n      </div>\n      <div *ngIf="answer.type == \'positif\'">\n      <h1 class="positif">{{answer.title}}</h1>\n      </div>\n    </ion-slide>\n    <ion-slide class="positif">\n      <h1>Et voilà !</h1>\n      <p>Pour recommencer, cliquez sur le bouton juste en dessous</p>\n      <button class="button touch" (click)="nextBegin()">Recommencer</button>\n    </ion-slide>\n\n  </ion-slides>\n\n</ion-content>\n'/*ion-inline-end:"/Users/kwame/Desktop/gitNew_risk/src/pages/result/result.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _c || Object])
], ResultPage);

var _a, _b, _c;
//# sourceMappingURL=result.js.map

/***/ }),

/***/ 109:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 109;

/***/ }),

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/ivg-info/ivg-info.module": [
		270,
		2
	],
	"../pages/menstruation/menstruation.module": [
		271,
		1
	],
	"../pages/result/result.module": [
		272,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 150;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IvgInfoPage; });
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
 * Generated class for the IvgInfoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var IvgInfoPage = (function () {
    function IvgInfoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tableAnswer = navParams.get('userParams');
    }
    IvgInfoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad IvgInfoPage');
        this.tableAnswer[33].answerUser = Math.round(((new Date().getTime() - this.tableAnswer[2].answerUser.getTime()) / (1000 * 60 * 60 * 24)) / 7);
        this.tableAnswer[34].answerUser = 14 - this.tableAnswer[33].answerUser;
        this.result = 14 - this.tableAnswer[33].answerUser;
    };
    return IvgInfoPage;
}());
IvgInfoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-ivg-info',template:/*ion-inline-start:"/Users/kwame/Desktop/gitNew_risk/src/pages/ivg-info/ivg-info.html"*/'<!--\n  Generated template for the IvgInfoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n	<ion-navbar>\n		<ion-title>ivgInfo</ion-title>\n	</ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<p>\n		Prenez le temps de la réflexion et pour se faire allez surfer sur \n		<a href="http://ivg.org">\n			IVG.org\n		</a>\n	</p>\n	<p>\n		Il vous reste {{result}} semaine pour vous décider\n	</p>\n</ion-content>\n'/*ion-inline-end:"/Users/kwame/Desktop/gitNew_risk/src/pages/ivg-info/ivg-info.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object])
], IvgInfoPage);

var _a, _b;
//# sourceMappingURL=ivg-info.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(215);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_result_result__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_ivg_info_ivg_info__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_storage__ = __webpack_require__(266);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_result_result__["a" /* ResultPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_ivg_info_ivg_info__["a" /* IvgInfoPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/ivg-info/ivg-info.module#IvgInfoPageModule', name: 'IvgInfoPage', segment: 'ivg-info', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/menstruation/menstruation.module#MenstruationPageModule', name: 'MenstruationPage', segment: 'menstruation', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/result/result.module#ResultPageModule', name: 'ResultPage', segment: 'result', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_9__ionic_storage__["a" /* IonicStorageModule */].forRoot()
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_result_result__["a" /* ResultPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_ivg_info_ivg_info__["a" /* IvgInfoPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 239:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var Questions = [
    {
        idTable: 0,
        id: 1,
        title: "Quel âge avez-vous ?",
        type: "number",
        answer: {
            label: "age en année",
            nextStep: 2
        },
        answerUser: -1
    },
    {
        idTable: 1,
        id: 2,
        answerUser: -1,
        title: "Êtes-vous enceinte ?",
        type: "yesNoIdn",
        answerYes: {
            label: "Oui",
            nextStep: 3
        },
        answerNo: {
            label: "Non",
            nextStep: 5
        },
        answerIdn: {
            label: "Je ne sais pas",
            nextStep: 3
        }
    },
    {
        idTable: 2,
        id: 3,
        answerUser: -1,
        title: "Quel est la date de vos dernière règle ?",
        type: "date",
        answer: {
            label: "jj/mm/aaaa",
            nextStep: 4
        }
    },
    {
        idTable: 3,
        id: 4,
        title: "Est-ce une bonne nouvelle ?",
        type: "yesNoIdn",
        answerUser: -1,
        answerYes: {
            label: "Oui",
            nextStep: 5
        },
        answerNo: {
            label: "Non",
            nextStep: 250
        },
        answerIdn: {
            label: "Je ne sais pas",
            nextStep: 30
        }
    },
    {
        idTable: 4,
        id: 5,
        title: "Vous et votre fertilité",
        type: "Psycho1",
        answerUser1: -1,
        answerUser2: -1,
        answerUser3: -1,
        answerUser4: -1,
        answerUser5: -1,
        answer1: {
            label: "recours à l'aide médicale à la procréation",
        },
        answer2: {
            label: "combien d'années avez vous passé entre le début du traitement et l'arrivée d'une grossesse",
        },
        answer3: {
            label: "combien de fois avez-vous eus recours à l'aide médicale à la procreation",
        },
        answer4: {
            label: "Bénéficié d'un don d'ovocyte",
        },
        answer5: {
            label: "Bénéficié d'un don de sperme",
        },
        nextStep: 6
    },
    {
        idTable: 5,
        id: 6,
        title: "Fumez-vous ?",
        type: "yesNo",
        answerUser: -1,
        answerYes: {
            label: "Oui",
            nextStep: 7
        },
        answerNo: {
            label: "Non",
            nextStep: 7
        }
    },
    {
        idTable: 6,
        id: 7,
        answerUser: -1,
        title: "Avez-vous des enfants ?",
        type: "yesNo",
        answerYes: {
            label: "Oui",
            nextStep: 8
        },
        answerNo: {
            label: "Non",
            nextStep: 18
        }
    },
    {
        idTable: 7,
        id: 8,
        answerUser: -1,
        title: "Combien avez-vous d'enfant ?",
        type: "number",
        answer: {
            label: "nombre d'enfant",
            nextStep: 9
        }
    },
    {
        idTable: 8,
        id: 9,
        answerUser: -1,
        title: "Avez-vous accouché d'enfants de plus de 4 kilos ?",
        type: "yesNo",
        answerYes: {
            label: "Oui",
            nextStep: 10
        },
        answerNo: {
            label: "Non",
            nextStep: 11
        }
    },
    {
        idTable: 9,
        id: 10,
        answerUser: -1,
        title: "Combien d'un enfant de plus de 4 kilos avez-vous eus ?",
        type: "number",
        answer: {
            label: "nombre d'enfants",
            nextStep: 11
        }
    },
    {
        idTable: 10,
        id: 11,
        answerUser: -1,
        title: "Avez-vous accouché d'enfant de moins de 2kg200 ?",
        type: "yesNo",
        answerYes: {
            label: "Oui",
            nextStep: 12
        },
        answerNo: {
            label: "Non",
            nextStep: 13
        }
    },
    {
        idTable: 11,
        id: 12,
        answerUser: -1,
        title: "Votre enfant était il prématuré ?",
        type: "yesNo",
        answerYes: {
            label: "Oui",
            nextStep: 13
        },
        answerNo: {
            label: "Non",
            nextStep: 13
        }
    },
    {
        idTable: 12,
        id: 13,
        answerUser: -1,
        title: "Avez-vous eu une prééclampsie ?",
        type: "yesNo",
        answerYes: {
            label: "Oui",
            nextStep: 14
        },
        answerNo: {
            label: "Non",
            nextStep: 14
        }
    },
    {
        idTable: 13,
        id: 14,
        answerUser: -1,
        title: "Avez-vous un antécedent de diabète de grossesse ?",
        type: "yesNo",
        answerYes: {
            label: "Oui",
            nextStep: 15
        },
        answerNo: {
            label: "Non",
            nextStep: 15
        }
    },
    {
        idTable: 14,
        id: 15,
        title: "Avez-vous eu une césariennes ?",
        type: "yesNo",
        answerYes: {
            label: "Oui",
            nextStep: 16
        },
        answerNo: {
            label: "Non",
            nextStep: 17
        }
    },
    {
        idTable: 15,
        id: 16,
        answerUser: -1,
        title: "Combien avez-vous eu de césarienne",
        type: "number",
        answer: {
            label: "nombre de cesarienne",
            nextStep: 17
        }
    },
    {
        idTable: 16,
        id: 17,
        title: "Vous et votre accouchement",
        type: "multipleChoice",
        answerUser1: -1,
        answerUser2: -1,
        answerUser3: -1,
        answerUser4: -1,
        answerUser5: -1,
        answerUser6: -1,
        answerUser7: -1,
        answerUser8: -1,
        answerUser9: -1,
        answer1: {
            label: "forceps",
        },
        answer2: {
            label: "ventouse",
        },
        answer3: {
            label: "césarienne en urgence",
        },
        answer4: {
            label: "anesthésie générale",
        },
        answer5: {
            label: "hémorragie",
        },
        answer6: {
            label: "Séparation avec le bébé à la naissance pendant plus de 6 heures",
        },
        answer7: {
            label: "penser que j'allais mourrir en accouchant",
        },
        answer8: {
            label: "penser que mon bébé allait mourrir",
        },
        answer9: {
            label: "j'ai subit un accouchement traumatique",
        },
        nextStep: 18
    },
    {
        idTable: 17,
        id: 18,
        title: "Avez-vous connu une de ces situation ?",
        type: "multipleChoice",
        answerUser1: -1,
        answerUser2: -1,
        answerUser3: -1,
        answerUser4: -1,
        answerUser5: -1,
        answerUser6: -1,
        answerUser7: -1,
        answerUser8: -1,
        answerUser9: -1,
        answerUser10: -1,
        answerUser11: -1,
        answerUser12: -1,
        answer1: {
            label: "Fauche couche",
        },
        answer2: {
            label: "Interruption volontaire de grossesse",
        },
        answer3: {
            label: "Grossesse extra utérine",
        },
        answer4: {
            label: "Mort foetale in utéro",
        },
        answer5: {
            label: "Interruption médical de la grossesse",
        },
        answer6: {
            label: "Interruption sélective de la grossesse",
        },
        answer7: {
            label: "Enfant porteur de handicap",
        },
        answer8: {
            label: "Enfant prématuré",
        },
        answer9: {
            label: "Enfant atteint d'une maladie chronique",
        },
        answer10: {
            label: "Mort d'un enfant",
        },
        answer11: {
            label: "Ces expériences ont été traumatiques",
        },
        answer12: {
            label: "en dehors des situation de grossesse j'ai connu des évènement que je qualifierais de traumatiques",
        },
        nextStep: 19
    },
    {
        idTable: 18,
        id: 19,
        answerUser: -1,
        title: "Combien de fausse couche avez-vous fait ?",
        type: "number",
        answer: {
            label: "nombre",
            nextStep: 20
        }
    },
    {
        idTable: 19,
        id: 20,
        title: "Combien de verres d'alcool buvez-vous par semaine ?",
        type: "number",
        answer: {
            label: "nombre par semaine",
            nextStep: 21
        },
        answerUser: -1,
    },
    {
        idTable: 20,
        id: 21,
        answerUser: -1,
        title: "Avez-vous une épilepsie ?",
        type: "yesNo",
        answerYes: {
            label: "Oui",
            nextStep: 22
        },
        answerNo: {
            label: "Non",
            nextStep: 22
        }
    },
    {
        idTable: 21,
        id: 22,
        answerUser: -1,
        title: "Avez-vous déjà eu une phlébite ?",
        type: "yesNo",
        answerYes: {
            label: "Oui",
            nextStep: 23
        },
        answerNo: {
            label: "Non",
            nextStep: 23
        }
    },
    {
        idTable: 22,
        id: 23,
        answerUser: -1,
        title: "Avez-vous de l'hypertension artérielle ?",
        type: "yesNo",
        answerYes: {
            label: "Oui",
            nextStep: 24
        },
        answerNo: {
            label: "Non",
            nextStep: 24
        }
    },
    {
        idTable: 23,
        id: 24,
        answerUser: -1,
        title: "Avez-vous du diabète ?",
        type: "yesNo",
        answerYes: {
            label: "Oui",
            nextStep: 25
        },
        answerNo: {
            label: "Non",
            nextStep: 25
        }
    },
    {
        idTable: 24,
        id: 25,
        answerUser: -1,
        title: "Prenez vous des médicaments ?",
        type: "yesNo",
        answerYes: {
            label: "Oui",
            nextStep: 26
        },
        answerNo: {
            label: "Non",
            nextStep: 27
        }
    },
    {
        idTable: 25,
        id: 26,
        title: "Selectionner les médicament que vous prennez",
        type: "multipleIf",
        answerUser1: -1,
        answerUser2: -1,
        answerUser3: -1,
        answerUser4: -1,
        answerUser5: -1,
        answerUser6: -1,
        answerUser7: -1,
        answerUser8: -1,
        answer1: {
            label: "Anti-Epileptique",
        },
        answer2: {
            label: "Anticoagulent",
        },
        answer3: {
            label: "Antihypertenseur",
        },
        answer4: {
            label: "Insuline",
        },
        answer5: {
            label: "Antidepresseur",
        },
        nextStep: 27
    },
    {
        idTable: 26,
        id: 27,
        answerUser: -1,
        title: "Quelle est votre taille (en cm) ?",
        type: "number",
        answer: {
            label: "en cm",
            nextStep: 28
        }
    },
    {
        idTable: 27,
        id: 28,
        title: "Quel est votre poids (en kg) ?",
        type: "number",
        answer: {
            label: "en kg",
            nextStep: 29
        }
    },
    {
        idTable: 28,
        id: 29,
        answerUser: -1,
        title: "Travaillez-vous ?",
        type: "yesNo",
        answerYes: {
            label: "Oui",
            nextStep: 30
        },
        answerNo: {
            label: "Non",
            nextStep: 33
        }
    },
    {
        idTable: 29,
        id: 30,
        answerUser: -1,
        title: "Combien d'heures de travail effectuez-vous par jour ?",
        type: "number",
        answer: {
            label: "en heure",
            nextStep: 31
        }
    },
    {
        idTable: 30,
        id: 31,
        answerUser: -1,
        title: "Quel est votre temps de trajet par jour (en minute) ?",
        type: "number",
        answer: {
            label: "en minute",
            nextStep: 32
        }
    },
    {
        idTable: 31,
        id: 32,
        answerUser: -1,
        title: "Travaillez-vous debout plus de 6 heures par jour ?",
        type: "yesNo",
        answerYes: {
            label: "Oui",
            nextStep: 33
        },
        answerNo: {
            label: "Non",
            nextStep: 33
        }
    },
    {
        idTable: 32,
        id: 33,
        title: "Vous et votre psychologie",
        type: "multipleChoice",
        answerUser1: -1,
        answerUser2: -1,
        answerUser3: -1,
        answerUser4: -1,
        answerUser5: -1,
        answerUser6: -1,
        answerUser7: -1,
        answerUser8: -1,
        answer1: {
            label: "Crises d'angoisse",
        },
        answer2: {
            label: "Boulimie",
        },
        answer3: {
            label: "Anorexie",
        },
        answer4: {
            label: "Trouble Obsessionnels compulsif TOC",
        },
        answer5: {
            label: "Dépression",
        },
        answer6: {
            label: "Phobie",
        },
        answer7: {
            label: "trouble bipolaires",
        },
        answer8: {
            label: "hospitalisation dans un service psychiatrique",
        },
        nextStep: 99
    },
    {
        idTable: 33,
        id: 34,
        answerUser: -1,
        title: "Nombre de semaine de grossesse",
        type: "number",
        answer: {
            label: "en semaine",
            nextStep: 35
        }
    },
    {
        idTable: 34,
        id: 35,
        answerUser: -1,
        title: "Nombre de semaine restante",
        type: "number",
        answer: {
            label: "en semaine",
            nextStep: 35
        }
    }
];
/* harmony default export */ __webpack_exports__["a"] = (Questions);
//this.QuestionText.multipleChoiceTest1 = "Vous et votre fertilité";
//this.QuestionText.psychoTest1_1 = "recours à l'aide médicale à la procréation ";
//this.QuestionText.psychoTest1_2 = "combien d'années avez vous passé entre le début du traitement et l'arrivée d'une grossesse";
//this.QuestionText.psychoTest1_3 = "combien de fois avez-vous eus recours à l'aide médicale à la procreation";
//this.QuestionText.psychoTest1_4 = "Bénéficié d'un don d'ovocyte";
//this.QuestionText.psychoTest1_5 = "Bénéficié d'un don de sperme";
//this.QuestionText.psychoTest2 = "Avez-vous connu une de ces situation ?";
//this.QuestionText.psychoTest2_1 = "Fauche couche";
//this.QuestionText.psychoTest2_2 = "Interruption volontaire de grossesse";
//this.QuestionText.psychoTest2_3 = "Grossesse extra utérine";
//this.QuestionText.psychoTest2_4 = "Mort foetale in utéro";
//this.QuestionText.psychoTest2_5 = "Interruption médical de la grossesse";
//this.QuestionText.psychoTest2_6 = "Interruption sélective de la grossesse";
//this.QuestionText.psychoTest2_7 = "Enfant porteur de handicap";
//this.QuestionText.psychoTest2_8 = "Enfant prématuré";
//this.QuestionText.psychoTest2_9 = "Enfant atteint d'une maladie chronique";
//this.QuestionText.psychoTest2_10 = "Mort d'un enfant";
//this.QuestionText.psychoTest2_11 = "Ces expériences ont été traumatiques";
//this.QuestionText.psychoTest2_12 = "en dehors des situation de grossesse j'ai connu des évènement que je qualifierais de traumatiques";
//this.QuestionText.psychoTest4 = "Vous et votre psychologie";
//this.QuestionText.psychoTest4_1 = "Crises d'angoisse";
//this.QuestionText.psychoTest4_2 = "Boulimie";
//this.QuestionText.psychoTest4_3 = "Anorexie";
//this.QuestionText.psychoTest4_4 = "Trouble Obsessionnels compulsif TOC";
//this.QuestionText.psychoTest4_5 = "Dépression";
//this.QuestionText.psychoTest4_6 = "Phobie";
//this.QuestionText.psychoTest4_7 = "trouble bipolaires";
//this.QuestionText.psychoTest4_8 = "hospitalisation dans un service psychiatrique";
//# sourceMappingURL=questionFile.js.map

/***/ }),

/***/ 257:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(78);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/kwame/Desktop/gitNew_risk/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/kwame/Desktop/gitNew_risk/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__result_result__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ivg_info_ivg_info__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__questionFile__ = __webpack_require__(239);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomePage = (function () {
    function HomePage(renderer, navCtrl, navParams, alertCtrl) {
        this.renderer = renderer;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.Questions = [];
        this.Answers = [];
        this.totalStep = 0;
        this.currentStep = 0;
        this.activeLogo = false;
        this.activeLogoWrapper = false;
        this.activeWelcomeContent = false;
        this.isInitialized = false;
        this.changing = false;
    }
    HomePage.prototype.ngOnInit = function () {
        var self = this;
        this.activeLogoWrapper = true;
        setTimeout(function () {
            self.activeLogo = true;
        }, 500);
        setTimeout(function () {
            self.activeLogoWrapper = false;
            self.activeWelcomeContent = true;
        }, 2500);
        this.answer = [];
        this.Questions = __WEBPACK_IMPORTED_MODULE_4__questionFile__["a" /* default */];
        console.log(this.Questions);
        // type 1 = number
        // type 2 = Oui non
        // type 3 = oui non je ne sais pas
        // type 4 = select
        // type 5 = date
    };
    HomePage.prototype.init = function () {
        this.isInitialized = true;
        this.currentStep = this.sliderOne.getActiveIndex();
        this.totalStep = this.sliderOne.length();
        this.sliderOne.lockSwipeToPrev(true);
        // this.sliderOne.lockSwipes(true);
    };
    HomePage.prototype.ionSlideDidChange = function () {
        this.changing = false;
    };
    HomePage.prototype.ionSlideWillChange = function () {
        this.changing = true;
    };
    HomePage.prototype.slideChanged = function () {
        this.currentStep = this.sliderOne.getActiveIndex();
    };
    HomePage.prototype.ngAfterViewInit = function () {
    };
    HomePage.prototype.handleNext = function () {
        var _this = this;
        console.log(this.renderer);
        var mouseclick = new MouseEvent('click', { bubbles: false });
        setTimeout(function () {
            _this.renderer.invokeElementMethod(_this.realFormButton.nativeElement, 'dispatchEvent', [mouseclick]);
        }, 10);
    };
    HomePage.prototype.nextForm = function (question) {
        console.log("before", question);
        this.questionForm = question;
        if (this.questionForm.type == "number") {
            console.log(this.number);
            if (this.number) {
                this.currentStep = this.questionForm.answer.nextStep;
                this.Questions[this.questionForm.idTable].answerUser = this.number;
                this.sliderOne.slideTo(this.currentStep, 350);
            }
            else {
                var alert = this.alertCtrl.create({
                    title: 'Rentrez une réponse',
                    subTitle: 'Nous avons besoin de toutes les informations qui vous sont demandé pour établir votre profil',
                    buttons: ['OK']
                });
                alert.present();
            }
        }
        else if (this.questionForm.type == "yesNoIdn") {
            if (this.yes) {
                this.currentStep = this.questionForm.answerYes.nextStep;
                this.Questions[this.questionForm.idTable].answerUser = 1;
                this.sliderOne.slideTo(this.currentStep, 350);
            }
            else if (this.no) {
                this.currentStep = this.questionForm.answerNo.nextStep;
                this.Questions[this.questionForm.idTable].answerUser = 0;
                if (this.currentStep == 250)
                    this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__ivg_info_ivg_info__["a" /* IvgInfoPage */], {
                        userParams: this.Questions
                    });
                this.sliderOne.slideTo(this.currentStep, 350);
            }
            else if (this.idn) {
                this.currentStep = this.questionForm.answerIdn.nextStep;
                this.Questions[this.questionForm.idTable].answerUser = 2;
                if (this.currentStep == 250)
                    this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__ivg_info_ivg_info__["a" /* IvgInfoPage */], {
                        userParams: this.Questions
                    });
                this.sliderOne.slideTo(this.currentStep, 350);
            }
            else {
                var alert = this.alertCtrl.create({
                    title: 'Selectionnez au moins une des réponses',
                    subTitle: 'Nous avons besoin de toutes les informations qui vous sont demandé pour établir votre profil',
                    buttons: ['OK']
                });
                alert.present();
            }
        }
        else if (this.questionForm.type == "yesNo") {
            if (this.yes) {
                this.currentStep = this.questionForm.answerYes.nextStep;
                this.Questions[this.questionForm.idTable].answerUser = 1;
                this.sliderOne.slideTo(this.currentStep, 350);
            }
            else if (this.no) {
                this.currentStep = this.questionForm.answerNo.nextStep;
                this.Questions[this.questionForm.idTable].answerUser = 0;
                this.sliderOne.slideTo(this.currentStep, 350);
            }
            else {
                var alert = this.alertCtrl.create({
                    title: 'Selectionnez au moins une des réponses',
                    subTitle: 'Nous avons besoin de toutes les informations qui vous sont demandé pour établir votre profil',
                    buttons: ['OK']
                });
                alert.present();
            }
        }
        else if (this.questionForm.type == "date") {
            if (this.date) {
                this.currentStep = this.questionForm.answer.nextStep;
                this.Questions[this.questionForm.idTable].answerUser = new Date(this.date);
                this.sliderOne.slideTo(this.currentStep, 350);
            }
            else {
                var alert = this.alertCtrl.create({
                    title: 'Selectionnez au moins une des réponses',
                    subTitle: 'Nous avons besoin de toutes les informations qui vous sont demandé pour établir votre profil',
                    buttons: ['OK']
                });
                alert.present();
            }
        }
        else if (this.questionForm.type == "multipleChoice"
            || this.questionForm.type == "multipleIf"
            || this.questionForm.type == "Psycho1") {
            if (this.questionForm.id == 18 && !this.answer.one)
                this.questionForm.nextStep = 20;
            this.currentStep = this.questionForm.nextStep;
            this.Questions[this.questionForm.idTable].answerUser1 = this.answer.one;
            this.Questions[this.questionForm.idTable].answerUser2 = this.answer.two;
            this.Questions[this.questionForm.idTable].answerUser3 = this.answer.three;
            this.Questions[this.questionForm.idTable].answerUser4 = this.answer.four;
            this.Questions[this.questionForm.idTable].answerUser5 = this.answer.five;
            this.Questions[this.questionForm.idTable].answerUser6 = this.answer.six;
            this.Questions[this.questionForm.idTable].answerUser7 = this.answer.seven;
            this.Questions[this.questionForm.idTable].answerUser8 = this.answer.eight;
            this.Questions[this.questionForm.idTable].answerUser9 = this.answer.nine;
            this.Questions[this.questionForm.idTable].answerUser10 = this.answer.ten;
            this.Questions[this.questionForm.idTable].answerUser11 = this.answer.eleven;
            this.Questions[this.questionForm.idTable].answerUser12 = this.answer.twelve;
            this.sliderOne.slideTo(this.currentStep, 350);
        }
        this.number = false;
        this.yes = false;
        this.no = false;
        this.idn = false;
        this.date = 0;
        this.answer.one = false;
        this.answer.two = false;
        this.answer.three = false;
        this.answer.four = false;
        this.answer.five = false;
        this.answer.six = false;
        this.answer.seven = false;
        this.answer.eight = false;
        this.answer.nine = false;
        this.answer.ten = false;
        this.answer.eleven = false;
        this.answer.twelve = false;
        console.log("after", question);
        console.log("questions", this.Questions);
        if (this.currentStep == 99) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__result_result__["a" /* ResultPage */], {
                userParams: this.Questions
            });
        }
    };
    HomePage.prototype.next = function () {
        if (!this.isInitialized)
            this.init();
        this.currentStep++;
        this.sliderOne.slideTo(this.currentStep, 350);
    };
    HomePage.prototype.prev = function () {
        this.currentStep--;
        this.sliderOne.slideTo(this.currentStep, 350);
    };
    return HomePage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('sliderOne'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Slides */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Slides */]) === "function" && _a || Object)
], HomePage.prototype, "sliderOne", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('realFormButton'),
    __metadata("design:type", Object)
], HomePage.prototype, "realFormButton", void 0);
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/kwame/Desktop/gitNew_risk/src/pages/home/home.html"*/'<!-- <ion-header>\n<ion-navbar>\n<ion-title>Ciconia</ion-title>\n</ion-navbar>\n</ion-header> -->\n\n<ion-content>\n  <div [ngClass]="{\'visible\': currentStep != 0, counter: true }">\n    {{ currentStep }} / {{ totalStep }}\n  </div>\n  <div class="result-info">\n    <label>Résultats</label><i class="result-info-icon icon icon-gift"></i>\n  </div>\n  <div [ngClass]="{\'visible\': currentStep != 0, progress: true }">\n    <div class="bar" ng-change="totalStep" [ngStyle]="{\'width\': (100 / totalStep) * currentStep + \'%\'}" ></div>\n  </div>\n  <div class="modal">\n    <div class="modal-overlay"></div>\n    <div class="modal-label">Fiche info</div>\n    <div class="modal-close-button touch"><i class="icon icon-cross"></i></div>\n    <div class="modal-content">\n      <h3>Alcool</h3>\n      <p>Comme on ignore si de petites doses sont toxiques, on préfère dire que <b>toute consommation est déconseillée</b>. Une prise de boissons alcoolisées, <b>même en petite quantité</b> ou <b>même une seule fois en grande quantité</b>, pourrait être <b>nocive</b> pour le foetus.</p>\n      <p>En cas de besoin, vous pouvez joindre <b>Ecoute Alcool</b> au <a href="tel:05454545">0811 91 30 30</a>.</p>\n    </div>\n  </div>\n  <!-- <div [ngClass]="{\'visible\': currentStep != 0, next: true }" >\n    <button class="button back-button touch" (click)="prev()"><i class="icon icon-chevron-left"></i>Retour</button>\n    <button class="button next-button touch" (click)="handleNext()">Suivant</button>\n  </div> -->\n  <ion-slides #sliderOne (slider)="false" (centeredSlides)="false" (zoom)="false" (ionSlideDidChange)="ionSlideDidChange()" (ionSlideWillChange)="ionSlideWillChange()">\n\n    <ion-slide>\n\n      <div class="welcome">\n        <div [ngClass]="{\'visible\': activeLogoWrapper, \'slide-wrapper logo-wrapper\': true }">\n          <div [ngClass]="{\'logo--active\': activeLogo, logo: true }"></div>\n        </div>\n        <div class="slide-wrapper welcome-wrapper">\n          <div [ngClass]="{\'visible\': activeWelcomeContent, \'welcome-content\': true }">\n            <h2>Bienvenue !</h2>\n            <p><b>Ciconia</b> est une application de sante dediée à la <b>grossesse en cours</b> ou <b>future</b>. Elle <b>évalue</b> si vous êtes à bas risque ou à haut risque.  Elle calcule aussi si vous etes éxposée à faire une depression post natale. </p>\n            <button class="button touch" (click)="next()">Commencer</button>\n            <div class="swipe-helper"><i class="icon icon-fingers-scroll-horizontal"></i></div>\n          </div>\n        </div>\n      </div>\n\n    </ion-slide>\n    <div class="form-wrapper" *ngFor="let question of Questions; let i of index">\n      <form id={{question.idForm}} [ngClass]="{\'form-wrapper--hidden\': changing, \'form-wrapper\': true }" novalidate>\n        <ion-slide *ngIf="question.type == \'number\'">\n          <h3>{{question.title}}</h3>\n          <input type="number" name="number" [(ngModel)]="number" required>\n        </ion-slide>\n        <ion-slide *ngIf="question.type == \'yesNoIdn\'">\n          <h3>{{question.title}}</h3>\n          <div class="checkbox">\n            <input id="radio{{i}}-1" type="checkbox" name="radio{{i}}-1" [(ngModel)]="yes">\n            <label for="radio{{i}}-1">Oui</label>\n          </div>\n          <div class="checkbox">\n            <input id="radio{{i}}-2" type="checkbox" name="radio{{i}}-2" [(ngModel)]="no">\n            <label for="radio{{i}}-2">Non</label>\n          </div>\n          <div class="checkbox checkbox--large">\n            <input id="radio{{i}}-3" type="checkbox" name="radio{{i}}-3" [(ngModel)]="idn">\n            <label for="radio{{i}}-3">Je ne sais pas</label>\n          </div>\n        </ion-slide>\n        <ion-slide *ngIf="question.type == \'yesNo\'">\n          <h3>{{question.title}}</h3>\n          <div class="checkbox">\n            <input id="radio{{i}}-1" type="checkbox" name="checkbox{{i}}-1" [(ngModel)]="yes">\n            <label for="radio{{i}}-1">Oui</label>\n          </div>\n          <div class="checkbox">\n            <input id="radio{{i}}-2" type="checkbox" name="checkbox{{i}}-2" [(ngModel)]="no">\n            <label for="radio{{i}}-2">Non</label>\n          </div>\n        </ion-slide>\n        <ion-slide *ngIf="question.type == \'Psycho1\'">\n          <h3>{{question.title}}</h3>\n          <div class="checkbox">\n            <input id="Psycho1{{i}}-1" type="checkbox" name="Psycho1{{i}}-1" [(ngModel)]="answer.one">\n            <label for="Psycho1{{i}}-1">{{question.answer1.label}}</label>\n          </div>\n          <div *ngIf="answer.one">\n          <input type="number" name="Psycho1{{i}}-2" [(ngModel)]="answer.two">\n            <label for="Psycho1{{i}}-2">{{question.answer2.label}}</label>\n            <input type="number" name="Psycho1{{i}}-3" [(ngModel)]="answer.three">\n            <label for="Psycho1{{i}}-3">{{question.answer3.label}}</label>\n          </div>\n          <div class="checkbox">\n            <input id="Psycho1{{i}}-4" type="checkbox" name="Psycho1{{i}}-4" [(ngModel)]="answer.four">\n            <label for="Psycho1{{i}}-4">{{question.answer4.label}}</label>\n          </div>\n          <div class="checkbox">\n            <input id="Psycho1{{i}}-5" type="checkbox" name="Psycho1{{i}}-5" [(ngModel)]="answer.five">\n            <label for="Psycho1{{i}}-5">{{question.answer5.label}}</label>\n          </div>\n        </ion-slide>\n        <ion-slide *ngIf="question.type == \'multipleIf\'">\n          <h3>{{question.title}}</h3>\n          <div class="checkbox" *ngIf="Questions[20].answerUser == \'1\'">\n            <input id="multipleIf{{i}}-1" type="checkbox" name="multipleIf{{i}}-1" [(ngModel)]="answer.one">\n            <label for="multipleIf{{i}}-1">{{question.answer1.label}}</label>\n          </div>\n          <div class="checkbox" *ngIf="Questions[21].answerUser == \'1\'">\n          <input id="multipleIf{{i}}-2" type="checkbox" name="multipleIf{{i}}-2" [(ngModel)]="answer.two">\n            <label for="multipleIf{{i}}-2">{{question.answer2.label}}</label>\n          </div>\n          <div class="checkbox" *ngIf="Questions[22].answerUser == \'1\'">\n            <input id="multipleIf{{i}}-3" type="checkbox" name="multipleIf{{i}}-3" [(ngModel)]="answer.three">\n            <label for="multipleIf{{i}}-3">{{question.answer3.label}}</label>\n          </div>\n          <div class="checkbox" *ngIf="Questions[23].answerUser == \'1\'">\n            <input id="multipleIf{{i}}-4" type="checkbox" name="multipleIf{{i}}-4" [(ngModel)]="answer.four">\n            <label for="multipleIf{{i}}-4">{{question.answer4.label}}</label>\n          </div>\n          <div class="checkbox">\n            <input id="multipleIf{{i}}-5" type="checkbox" name="multipleIf{{i}}-5" [(ngModel)]="answer.five">\n            <label for="multipleIf{{i}}-5">{{question.answer5.label}}</label>\n          </div>\n        </ion-slide>\n        <ion-slide class="scrollable-slide" *ngIf="question.type == \'multipleChoice\'">\n          <h3>{{question.title}}</h3>\n          <div class="checkbox checkbox--large">\n            <input id="multiple{{i}}-1" type="checkbox" name="multiple{{i}}-1" [(ngModel)]="answer.one">\n            <label for="multiple{{i}}-1">{{question.answer1.label}}</label>\n          </div>\n          <div class="checkbox checkbox--large" *ngIf="question.answer2">\n          <input id="multiple{{i}}-2" type="checkbox" name="multiple{{i}}-2" [(ngModel)]="answer.two">\n            <label for="multiple{{i}}-2">{{question.answer2.label}}</label>\n          </div>\n          <div class="checkbox checkbox--large" *ngIf="question.answer3">\n            <input id="multiple{{i}}-3" type="checkbox" name="multiple{{i}}-3" [(ngModel)]="answer.three">\n            <label for="multiple{{i}}-3">{{question.answer3.label}}</label>\n          </div>\n          <div class="checkbox checkbox--large" *ngIf="question.answer4">\n            <input id="multiple{{i}}-4" type="checkbox" name="multiple{{i}}-4" [(ngModel)]="answer.four">\n            <label for="multiple{{i}}-4">{{question.answer4.label}}</label>\n          </div>\n          <div class="checkbox checkbox--large" *ngIf="question.answer5">\n            <input id="multiple{{i}}-5" type="checkbox" name="multiple{{i}}-5" [(ngModel)]="answer.five">\n            <label for="multiple{{i}}-5">{{question.answer5.label}}</label>\n          </div>\n          <div class="checkbox checkbox--large" *ngIf="question.answer6">\n            <input id="multiple{{i}}-6" type="checkbox" name="multiple{{i}}-6" [(ngModel)]="answer.six">\n            <label for="multiple{{i}}-6">{{question.answer6.label}}</label>\n          </div>\n          <div class="checkbox checkbox--large" *ngIf="question.answer7">\n            <input id="multiple{{i}}-7" type="checkbox" name="multiple{{i}}-7" [(ngModel)]="answer.seven">\n            <label for="multiple{{i}}-7">{{question.answer7.label}}</label>\n          </div>\n          <div class="checkbox checkbox--large" *ngIf="question.answer8">\n            <input id="multiple{{i}}-8" type="checkbox" name="multiple{{i}}-8" [(ngModel)]="answer.eight">\n            <label for="multiple{{i}}-8">{{question.answer8.label}}</label>\n          </div>\n          <div class="checkbox checkbox--large" *ngIf="question.answer9">\n            <input id="multiple{{i}}-9" type="checkbox" name="multiple{{i}}-9" [(ngModel)]="answer.nine">\n            <label for="multiple{{i}}-9">{{question.answer9.label}}</label>\n          </div>\n          <div class="checkbox checkbox--large" *ngIf="question.answer10">\n            <input id="multiple{{i}}-10" type="checkbox" name="multiple{{i}}-10" [(ngModel)]="answer.ten">\n            <label for="multiple{{i}}-10">{{question.answer10.label}}</label>\n          </div>\n          <div class="checkbox checkbox--large" *ngIf="question.answer11">\n            <input id="multiple{{i}}-11" type="checkbox" name="multiple{{i}}-11" [(ngModel)]="answer.eleven">\n            <label for="multiple{{i}}-11">{{question.answer11.label}}</label>\n          </div>\n          <div class="checkbox checkbox--large" *ngIf="question.answer12">\n            <input id="multiple{{i}}-12" type="checkbox" name="multiple{{i}}-12" [(ngModel)]="answer.twelve">\n            <label for="multiple{{i}}-12">{{question.answer12.label}}</label>\n          </div>\n        </ion-slide>\n\n        <ion-slide *ngIf="question.type == \'date\'">\n          <h3>{{question.title}}</h3>\n          <input type="date" name="date" [(ngModel)]="date">\n        </ion-slide>\n        <div [ngClass]="{\'visible\': currentStep != 0, next: true }" >\n          <button #realFormButton class="button next-button touch" (click)="nextForm(question)">Suivant</button>\n        </div>\n      </form>\n\n    </div>\n\n\n  </ion-slides>\n\n</ion-content>\n'/*ion-inline-end:"/Users/kwame/Desktop/gitNew_risk/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Renderer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Renderer */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _e || Object])
], HomePage);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=home.js.map

/***/ })

},[196]);
//# sourceMappingURL=main.js.map