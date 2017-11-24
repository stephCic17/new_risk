webpackJsonp([2],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IvgInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(46);
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
    IvgInfoPage.prototype.nextBegin = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    return IvgInfoPage;
}());
IvgInfoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-ivg-info',template:/*ion-inline-start:"/Users/kwame/Desktop/gitSave/src/pages/ivg-info/ivg-info.html"*/'<!--\n  Generated template for the IvgInfoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n	<ion-navbar>\n		<ion-title>Info</ion-title>\n	</ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n<ion-slides>\n<ion-slide>\n<div class="form-wrapper" *ngIf="result >= 1">\n			<h3>Vous avez plusieurs possibilités :</h3>\n			<p> - Continuer votre grossesse et le garder<br/>\n			 - Continuer votre grossesse et considérer l\'adoption<br/>\n			 - Interrompre votre grossesse</p>\n				<p>\n				<i>Prenez le temps de la réflexion en allant surfer sur </i>\n				<br/>\n				<a href="http://ivg.org">\n					IVG.org\n				</a>\n				<br/>\n				<a href="http://www.adoption.gouv.fr/">\n					adoption.gouv\n				</a>\n			</p>\n			<p><b>Il vous reste {{result}} semaines pour vous décider</b></p>\n		\n			<button class="button button--line prev-button touch" (click)="nextBegin()">Recommencer</button>\n	</div>\n\n	<div class="form-wrapper" *ngIf="result < 0">\n\n				<h3>Le delai d\'avortement légal est dépassé</h3> \n				<p><b>Vous avez plusieurs possibilités :</b></p>\n			<p> - Continuer votre grossesse et le garder<br/>\n			 - Continuer votre grossesse et considérer l\'adoption</p>\n				<p>\n				<i>Prenez le temps de la réflexion en allant surfer sur </i>\n				<br/>\n				<a href="http://www.adoption.gouv.fr/">\n					adoption.gouv\n				</a>\n			</p>\n			<button class="button button--line prev-button touch" (click)="nextBegin()">Recommencer</button>\n	</div>\n	</ion-slide>\n	    \n        </ion-slides>\n</ion-content>\n'/*ion-inline-end:"/Users/kwame/Desktop/gitSave/src/pages/ivg-info/ivg-info.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], IvgInfoPage);

//# sourceMappingURL=ivg-info.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_statistique__ = __webpack_require__(152);
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
        __WEBPACK_IMPORTED_MODULE_3__app_statistique__["a" /* default */].push({
            id: 2,
            type: "resultBegin",
            title: "begin result",
            timestamp: Date.now()
        });
        this.tableAnswer = navParams.get('userParams');
        this.resultRisk = 0;
    }
    ResultPage.prototype.nextBegin = function () {
        __WEBPACK_IMPORTED_MODULE_3__app_statistique__["a" /* default */].push({
            id: 3,
            type: "end result",
            title: "clic return home",
            timestamp: Date.now()
        });
        console.log(__WEBPACK_IMPORTED_MODULE_3__app_statistique__["a" /* default */]);
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
        this.IMC = this.tableAnswer[27].answerUser / Math.pow(this.tableAnswer[26].answerUser / 100, 2);
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
                type: "psycho",
                title: "D'après vos antécédents vous présentez un risque de dépression post-partum"
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
            this.riskAssessment = "D'après vos réponses, vous présentez une grossesse à risque. Il serait préférable d'être suivie dans une maternité de type 3.";
        else if (this.resultRisk >= 50)
            this.riskAssessment = "D'après vos réponses, vous présentez une grossesse à risque. Veillez à effectuer un suivi régulier dans la maternité de votre choix.";
        else if (this.resultRisk >= 20)
            this.riskAssessment = "D'après vos réponses vous présentez une grossesse à risque. Veillez à effectuer un suivi régulier dans la maternité de votre choix.";
        else
            this.riskAssessment = "D'après vos réponses vous présentez une grossesse à bas risque.";
        console.log("debut risk");
        if (this.tableAnswer[6].answerUser == 0 && this.tableAnswer[3].answerUser == true)
            this.resultSlide.push({
                type: "positif",
                title: "Félicitations vous allez avoir votre premier enfant"
            });
        else if (this.tableAnswer[3].answerUser == true)
            this.resultSlide.push({
                type: "positif",
                title: "Félicitations vous êtes enceinte !"
            });
        if (this.tableAnswer[0].answerUser < 42 && this.tableAnswer[0].answerUser >= 38)
            this.resultSlide.push({
                type: "risk",
                title: "A votre âge, vous présentez un risque d'anomalie chromosomique foetale qui n'est pas négligeable."
            });
        else if (this.tableAnswer[0].answerUser > 42)
            this.resultSlide.push({
                type: "risk",
                title: "A votre âge, vous présentez un risque élevé d'anomalie chromosomique foetale."
            });
        if (this.tableAnswer[0].answerUser < 38)
            this.resultSlide.push({
                type: "positif",
                title: "Vous avez l'âge optimal pour faire un enfant."
            });
        else {
            this.resultSlide.push({
                type: "positif",
                title: "Être plus âgée pour élever ses enfants est aussi un gage de maturité !"
            });
            this.resultSlide.push({
                type: "conseil",
                title: "Nous vous conseillons d'effectuer les dépistages d'anomalies chromosiques foetale(s)."
            });
        }
        if (this.tableAnswer[5].answerUser == true && this.tableAnswer[1].answerUser == true)
            this.resultSlide.push({
                type: "risk",
                title: "Vous fumez, ce qui peut entrainer de nombreuses complications."
            });
        else if (this.tableAnswer[5].answerUser == true)
            this.resultSlide.push({
                type: "risk",
                title: "Vous fumez, ce qui peut entrainer de nombreuses complications lors d'une future grossesse."
            });
        if (this.tableAnswer[5].answerUser == true && this.tableAnswer[1].answerUser == true)
            this.resultSlide.push({
                type: "conseil",
                title: "Faites vous aider pour arrêter de fumer et prévenir d'éventuelles complication pour votre bébé."
            });
        else if (this.tableAnswer[5].answerUser == true)
            this.resultSlide.push({
                type: "conseil",
                title: "Avant de tomber enceinte faites vous aider pour arrêter de fumer et prévenir d'éventuelles complication pour votre bébé."
            });
        if (this.tableAnswer[8].answerUser == true)
            this.resultSlide.push({
                type: "risk",
                title: "Vous avez eu un enfant de + de 4kg, vous risquez de développer un diabète de grossesse."
            });
        if (this.tableAnswer[8].answerUser == true && this.tableAnswer[13].answerUser == true)
            this.resultSlide.push({
                type: "conseil",
                title: "Effectuez un dépistage de diabète de grossesse."
            });
        else if (this.tableAnswer[8].answerUser == true)
            this.resultSlide.push({
                type: "conseil",
                title: "Anticipez ! Effectuez un dépistage de diabète gestationnel dès le début de grossesse. "
            });
        if (this.tableAnswer[11].answerUser == false && this.tableAnswer[10].answerUser == true) {
            this.resultSlide.push({
                type: "risk",
                title: "Vous avez eu un enfant de - de 2kg200 qui n'était pas prématuré, il s'agit donc d'un antécédent de retard de croissance intra-utérin. "
            });
            this.resultSlide.push({
                type: "positif",
                title: "Vous avez 9 chances sur 10 d’avoir un bébé de poids normal cette fois ci !"
            });
        }
        if (this.tableAnswer[18].answerUser >= 3) {
            this.resultSlide.push({
                type: "risk",
                title: "Vous avez un nombre élevé de fausses couches"
            });
            this.resultSlide.push({
                type: "conseil",
                title: "Vos fausses couches à répétition vous angoissent certainement. Prenez RDV chez un spécialiste pour vous faire confirmer qu’elles sont accidentelles."
            });
        }
        if (this.tableAnswer.IMG)
            this.resultSlide.push({
                type: "risk",
                title: "Vous avez déjà subi une IMG mais votre risque de récidive est faible"
            });
        if (this.tableAnswer.IMG == true)
            this.resultSlide.push({
                type: "positif",
                title: "La plus grande partie des anomalies foetales sont des accidents et leur récidive est rare.Prenez rendez-vous pour une consultation spécialisée pour vous le faire confirmer."
            });
        if (this.tableAnswer[19].answerUser < 10 && this.tableAnswer[19].answerUser > 0)
            this.resultSlide.push({
                type: "risk",
                title: "Vous consommez de l'alcool"
            });
        if (this.tableAnswer[19].answerUser < 10 && this.tableAnswer[19].answerUser > 0 && this.tableAnswer[1].answerUser == true)
            this.resultSlide.push({
                type: "conseil",
                title: "Il sera nécessaire de stopper votre consommation d'alcool lorsque vous serez enceinte!"
            });
        if (this.tableAnswer[19].answerUser >= 10 && this.tableAnswer[1].answerUser == true)
            this.resultSlide.push({
                type: "risk",
                title: "Votre consommation est d’alcool est décidément trop élevée… votre bébé court des risques important de malformations et de retard mental."
            });
        if (this.tableAnswer[19].answerUser >= 10 && this.tableAnswer[1].answerUser == true)
            this.resultSlide.push({
                type: "conseil",
                title: "Profitez de votre grossesse annoncée pour vous motiver à stopper l’alcool ! Prenez rendez-vous dans un centre spécialisée pour vous aider."
            });
        if (this.tableAnswer[20].answerUser == true)
            this.resultSlide.push({
                type: "risk",
                title: "Votre épilepsie"
            });
        if (this.tableAnswer[25].answerUser1 == true)
            this.resultSlide.push({
                type: "conseil",
                title: "Votre grossesse pourrait déséquilibrer votre épilepsie, il serait préférable que vous soyez prise en charge par une équipe spécialisée pour le choix des antiépileptiques et leur dosage ainsi que pour la mise en place d'une surveillance foetale adaptée."
            });
        if (this.tableAnswer[21].answerUser == true)
            this.resultSlide.push({
                type: "risk",
                title: "Votre antécédent de phlébite"
            });
        if (this.tableAnswer[25].answerUser2 == true)
            this.resultSlide.push({
                type: "conseil",
                title: "Votre grossesse pourrait déséquilibrer votre traitement, il serait préférable que vous soyez prise en charge par une équipe spécialisée pour le choix des anticoagulents et leur dosage ainsi que pour la mise en place d'une surveillance foetale adaptée."
            });
        if (this.tableAnswer[22].answerUser == true)
            this.resultSlide.push({
                type: "risk",
                title: "Votre hypertension"
            });
        if (this.tableAnswer[25].answerUser3 == true)
            this.resultSlide.push({
                type: "conseil",
                title: "Votre grossesse pourrait déséquilibrer votre HTA, il serait préférable d’être prise en charge par une équipe spécialisée pour le choix des antihypertenseurs et leur dosage ainsi que pour la mise en place d'une surveillance foetale adaptée."
            });
        if (this.tableAnswer[22].answerUser == true)
            this.resultSlide.push({
                type: "risk",
                title: "Votre diabète"
            });
        if (this.tableAnswer[25].answerUser4 == true)
            this.resultSlide.push({
                type: "conseil",
                title: "Pendant la grossesse, votre diabète sera déséquilibré, vous devrez donc être prise en être prise en charge par une équipe spécialisée pour le choix des antidiabétiques et leur dosage ainsi que pour la mise en place d'une surveillance foetale adaptée."
            });
        if (this.IMC < 18.5)
            this.resultSlide.push({
                type: "risk",
                title: "Vous êtes en sous poids"
            });
        else if (this.IMC > 35 && this.IMC < 40)
            this.resultSlide.push({
                type: "risk",
                title: "Vous êtes en surpoids"
            });
        else if (this.IMC > 40)
            this.resultSlide.push({
                type: "risk",
                title: "Vous êtes en surpoids"
            });
        if (this.IMC < 18.5)
            this.resultSlide.push({
                type: "conseil",
                title: "Essayez de vous alimentez suffisamment"
            });
        else if (this.IMC > 40)
            this.resultSlide.push({
                type: "conseil",
                title: "Il serait préférable d'être prise en charge dans un centre spécialisé auprès de professionnels qui en ont l’ habitude et l’expertise."
            });
        if (this.tableAnswer[29].answerUser > 10 && this.tableAnswer[29].answerUser <= 12)
            this.resultSlide.push({
                type: "risk",
                title: "Vous travaillez beaucoup."
            });
        if (this.tableAnswer[29].answerUser > 12)
            this.resultSlide.push({
                type: "risk",
                title: "Votre nombre d'heures de travail est vraiment très élevé."
            });
        if (!this.tableAnswer[28].answerUser)
            this.resultSlide.push({
                type: "positif",
                title: "Prenez le temps de préparer la venue de votre enfant et de vous occuper de vous."
            });
        if (this.tableAnswer[29].answerUser > 10)
            this.resultSlide.push({
                type: "conseil",
                title: "Rapprochez-vous de votre direction pour un éventuel aménagement de vos horaires ou une mise en place de télétravail"
            });
        if (this.tableAnswer[30].answerUser > 90)
            this.resultSlide.push({
                type: "risk",
                title: "Votre temps de trajet pour aller travailler est élevé."
            });
        if (this.tableAnswer[30].answerUser > 90)
            this.resultSlide.push({
                type: "conseil",
                title: "Rapprochez-vous de votre direction pour une éventuelle mise en place de télétravail afin de diminuer les temps de trajets"
            });
        if (this.tableAnswer[30].answerUser == true)
            this.resultSlide.push({
                type: "risk",
                title: "Vous travaillez debout plus de 6 heures par jour."
            });
        if (this.tableAnswer[31].answerUser == true)
            this.resultSlide.push({
                type: "conseil",
                title: "Rapprochez-vous de votre direction pour un éventuel aménagement de vos conditions de travail. Vous risquez d'être en difficulté pendant votre grossesse si vous restez debout plus de 6 heures par jour et ce serait malin s'il acceptait ! Car qui ménage sa monture va loin"
            });
        this.answers = this.resultSlide.concat(this.psycho);
        console.log(this.answers);
    };
    return ResultPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Slides */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Slides */])
], ResultPage.prototype, "slides", void 0);
ResultPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-result',template:/*ion-inline-start:"/Users/kwame/Desktop/gitSave/src/pages/result/result.html"*/'<ion-content>\n  <div class="result-info visible" >\n    <label>Résultats</label><i class="result-info-icon icon icon-gift"></i>\n  </div>\n  <ion-slides pager>\n    <ion-slide>\n\n      <div class="welcome">\n        <div class="slide-wrapper welcome-wrapper">\n          <div [ngClass]="{\'visible\': activeWelcomeContent, \'welcome-content\': true }">\n            <h4>{{riskAssessment}}</h4>\n          </div>\n        </div>\n      </div>\n\n    </ion-slide>\n    <ion-slide *ngFor="let answer of answers" class="risk">\n      <div *ngIf="answer.type == \'conseil\'">\n      <h1 class="conseil">{{answer.title}}</h1>\n      </div>\n      <div *ngIf="answer.type == \'risk\'">\n      <h1 class="risk">{{answer.title}}</h1>\n      </div>\n      <div *ngIf="answer.type == \'positif\'">\n      <h1 class="positif">{{answer.title}}</h1>\n      </div>\n      <div *ngIf="answer.type == \'psycho\'">\n      <h1>{{answer.title}}</h1>\n      </div>\n    </ion-slide>\n    <ion-slide class="positif">\n      <h1>Et voilà !</h1>\n      <p>Pour recommencer, cliquez sur le bouton juste en dessous</p>\n      <button class="button touch" (click)="nextBegin()">Recommencer</button>\n    </ion-slide>\n\n  </ion-slides>\n\n</ion-content>\n'/*ion-inline-end:"/Users/kwame/Desktop/gitSave/src/pages/result/result.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], ResultPage);

//# sourceMappingURL=result.js.map

/***/ }),

/***/ 110:
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
webpackEmptyAsyncContext.id = 110;

/***/ }),

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/ivg-info/ivg-info.module": [
		270,
		1
	],
	"../pages/result/result.module": [
		271,
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
webpackAsyncContext.id = 151;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var Stat = [
    {
        id: 0,
        title: "first",
        type: "launchApp",
        timestamp: Date.now()
    }
];
/* harmony default export */ __webpack_exports__["a"] = (Stat);
//# sourceMappingURL=statistique.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(215);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
console.log(this.Stat);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_result_result__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_ivg_info_ivg_info__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(195);
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
        prevStep: 0,
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
        prevStep: 0,
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
        prevStep: 0,
        title: "Quelle est la date de vos dernières règles ?",
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
        prevStep: 0,
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
            nextStep: 250
        }
    },
    {
        idTable: 4,
        id: 5,
        title: "Avez vous déjà eu recours à ces procédés ?",
        type: "Psycho1",
        answerUser1: -1,
        answerUser2: -1,
        answerUser3: -1,
        answerUser4: -1,
        answerUser5: -1,
        prevStep: 0,
        answer1: {
            label: "Procréation médicalement assistée",
        },
        answer2: {
            label: "Depuis combien de temps avez-vous commencé ?",
        },
        answer3: {
            label: "Combien de tentatives avez-vous faites ?",
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
        prevStep: 0,
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
        prevStep: 0,
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
        prevStep: 0,
        title: "Combien avez-vous d'enfant(s) ?",
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
        prevStep: 0,
        title: "Avez-vous accouché d'enfant(s) de plus de 4 kilos ?",
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
        prevStep: 0,
        title: "Combien d'enfant(s) de plus de 4 kilos avez-vous eu ?",
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
        prevStep: 0,
        title: "Avez-vous accouché d'enfant(s) de moins de 2kg200 ?",
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
        prevStep: 0,
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
        prevStep: 0,
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
        prevStep: 0,
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
        title: "Avez-vous déjà eu une césarienne ?",
        type: "yesNo",
        prevStep: 0,
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
        prevStep: 0,
        title: "Combien de césarienne(s) avez-vous eu ?",
        type: "number",
        answer: {
            label: "nombre de cesarienne",
            nextStep: 17
        }
    },
    {
        idTable: 16,
        id: 17,
        title: "Avez-vous déjà été confrontée à une de ces situations ?",
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
        prevStep: 0,
        answer1: {
            label: "Forceps",
        },
        answer2: {
            label: "Ventouse",
        },
        answer3: {
            label: "Césarienne en urgence",
        },
        answer4: {
            label: "Anesthésie générale",
        },
        answer5: {
            label: "Hémorragie",
        },
        answer6: {
            label: "Séparation avec le bébé à la naissance pendant plus de 6 heures",
        },
        answer7: {
            label: "Peur de mourrir en accouchant",
        },
        answer8: {
            label: "Peur de perdre mon bébé ",
        },
        answer9: {
            label: "J'ai subit un accouchement traumatique",
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
        prevStep: 0,
        answer1: {
            label: "Fausse couche",
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
            label: "Interruption médicale de la grossesse",
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
            label: "En dehors des situations de grossesse(s) j'ai connu des évènements que je qualifierais de traumatiques",
        },
        nextStep: 19
    },
    {
        idTable: 18,
        id: 19,
        answerUser: -1,
        prevStep: 0,
        title: "Combien de fausses couches avez-vous fait ?",
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
        prevStep: 0,
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
        prevStep: 0,
        title: "Etes-vous sujette aux crises d'épilepsie ?",
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
        prevStep: 0,
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
        prevStep: 0,
        title: "Avez-vous de l'hypertension artérielle ?",
        type: "yesNoIdn",
        answerYes: {
            label: "Oui",
            nextStep: 24
        },
        answerNo: {
            label: "Non",
            nextStep: 24
        },
        answerIdn: {
            label: "Je ne sais pas",
            nextStep: 24
        }
    },
    {
        idTable: 23,
        id: 24,
        answerUser: -1,
        prevStep: 0,
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
        prevStep: 0,
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
        title: "Selectionnez les médicaments que vous prenez",
        type: "multipleIf",
        answerUser1: -1,
        answerUser2: -1,
        answerUser3: -1,
        answerUser4: -1,
        answerUser5: -1,
        answerUser6: -1,
        answerUser7: -1,
        answerUser8: -1,
        prevStep: 0,
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
        prevStep: 0,
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
        prevStep: 0,
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
        prevStep: 0,
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
        prevStep: 0,
        title: "Quel est votre temps de trajet par jour (en minutes) ?",
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
        prevStep: 0,
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
        title: "Etes-vous concernée par les éléments ci-dessous ?",
        type: "multipleChoice",
        answerUser1: -1,
        prevStep: 0,
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
            label: "Trouble obsessionnels compulsif TOC",
        },
        answer5: {
            label: "Dépression",
        },
        answer6: {
            label: "Phobie",
        },
        answer7: {
            label: "Troubles bipolaires",
        },
        answer8: {
            label: "Hospitalisation dans un service psychiatrique",
        },
        nextStep: 99
    },
    {
        idTable: 33,
        id: 34,
        answerUser: -1,
        title: "Nombre de semaines de grossesse",
        type: "number",
        prevStep: 0,
        answer: {
            label: "en semaine",
            nextStep: 35
        }
    },
    {
        idTable: 34,
        id: 35,
        answerUser: -1,
        prevStep: 0,
        title: "Nombre de semaines restantes",
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(46);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/kwame/Desktop/gitSave/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/kwame/Desktop/gitSave/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__result_result__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ivg_info_ivg_info__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__questionFile__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_statistique__ = __webpack_require__(152);
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
    };
    HomePage.prototype.init = function () {
        this.isInitialized = true;
        this.currentStep = this.sliderOne.getActiveIndex();
        this.totalStep = this.sliderOne.length();
        //		this.sliderOne.lockSwipeToPrev(true);
        this.sliderOne.lockSwipes(true);
        // setTimeout(function(){
        // }, 500);
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
        __WEBPACK_IMPORTED_MODULE_5__app_statistique__["a" /* default */].push({
            id: question.id,
            type: question.type,
            title: "clic next",
            timestamp: Date.now()
        });
        console.log(__WEBPACK_IMPORTED_MODULE_5__app_statistique__["a" /* default */]);
        this.questionForm = question;
        if (this.questionForm.type == "number") {
            this.currentStep = this.questionForm.answer.nextStep;
            this.Questions[this.questionForm.idTable].prevStep = this.questionForm.idTable;
            this.Questions[this.questionForm.idTable].answerUser = this.number;
            this.manageSlideTo();
        }
        else if (this.questionForm.type == "yesNoIdn") {
            if (this.yes) {
                this.currentStep = this.questionForm.answerYes.nextStep;
                this.Questions[this.questionForm.idTable].answerUser = 1;
                this.manageSlideTo();
            }
            else if (this.no) {
                this.currentStep = this.questionForm.answerNo.nextStep;
                this.Questions[this.questionForm.idTable].answerUser = 0;
                if (this.currentStep == 250) {
                    this.yes = false;
                    this.no = false;
                    this.idn = false;
                    this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__ivg_info_ivg_info__["a" /* IvgInfoPage */], {
                        userParams: this.Questions
                    });
                }
                this.manageSlideTo();
            }
            else if (this.idn) {
                this.currentStep = this.questionForm.answerIdn.nextStep;
                this.Questions[this.questionForm.idTable].answerUser = 2;
                if (this.currentStep == 250)
                    this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__ivg_info_ivg_info__["a" /* IvgInfoPage */], {
                        userParams: this.Questions
                    });
                this.manageSlideTo();
            }
            else {
                var alert_1 = this.alertCtrl.create({
                    title: 'Selectionnez au moins une des réponses',
                    subTitle: 'Nous avons besoin de toutes les informations qui vous sont demandées pour établir votre profil',
                    buttons: ['OK']
                });
                alert_1.present();
            }
        }
        else if (this.questionForm.type == "yesNo") {
            if (this.yes) {
                this.currentStep = this.questionForm.answerYes.nextStep;
                this.Questions[this.questionForm.idTable].answerUser = 1;
                this.manageSlideTo();
            }
            else if (this.no) {
                this.currentStep = this.questionForm.answerNo.nextStep;
                this.Questions[this.questionForm.idTable].answerUser = 0;
                this.manageSlideTo();
            }
            else {
                var alert_2 = this.alertCtrl.create({
                    title: 'Selectionnez au moins une des réponses',
                    subTitle: 'Nous avons besoin de toutes les informations qui vous sont demandées pour établir votre profil',
                    buttons: ['OK']
                });
                alert_2.present();
            }
        }
        else if (this.questionForm.type == "date") {
            console.log(this.Questions[2]);
            if (this.Questions[1].answerUser == 2)
                this.Questions[3].title = "Désireriez-vous cette grossesse ?";
            if (this.date) {
                this.currentStep = this.questionForm.answer.nextStep;
                this.Questions[this.questionForm.idTable].answerUser = new Date(this.date);
                this.manageSlideTo();
            }
            else {
                var alert_3 = this.alertCtrl.create({
                    title: 'Selectionnez au moins une des réponses',
                    subTitle: 'Nous avons besoin de toutes les informations qui vous sont demandées pour établir votre profil',
                    buttons: ['OK']
                });
                alert_3.present();
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
            this.manageSlideTo();
        }
        if (this.currentStep == 99) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__result_result__["a" /* ResultPage */], {
                userParams: this.Questions
            });
        }
        if (this.Questions[this.currentStep - 1])
            this.Questions[this.currentStep - 1].prevStep = this.questionForm.id;
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
        console.log("questions", this.Questions);
    };
    HomePage.prototype.manageSlideTo = function () {
        console.log("mange");
        this.sliderOne.lockSwipes(false);
        if (this.currentStep == 99) {
            console.log("next == 99");
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__result_result__["a" /* ResultPage */], {
                userParams: this.Questions
            });
        }
        else
            this.sliderOne.slideTo(this.currentStep, 350);
        this.sliderOne.lockSwipes(true);
    };
    HomePage.prototype.next = function () {
        console.log("next");
        __WEBPACK_IMPORTED_MODULE_5__app_statistique__["a" /* default */].push({
            id: 1,
            type: "begin",
            title: "clic next after begin",
            timestamp: Date.now()
        });
        if (!this.isInitialized)
            this.init();
        this.currentStep++;
        this.manageSlideTo();
    };
    HomePage.prototype.prev = function () {
        console.log("prev");
        this.currentStep--;
        this.manageSlideTo();
    };
    HomePage.prototype.prevStepFunction = function (question) {
        __WEBPACK_IMPORTED_MODULE_5__app_statistique__["a" /* default */].push({
            id: question.id,
            type: question.type,
            title: "clic prev",
            timestamp: Date.now()
        });
        console.log("prevStepFunction");
        this.currentStep = question.prevStep;
        this.manageSlideTo();
    };
    HomePage.prototype.testCheck = function (answer) {
        if (answer == "yes") {
            if (this.yes == false) {
                __WEBPACK_IMPORTED_MODULE_5__app_statistique__["a" /* default */].push({
                    id: this.currentStep,
                    type: "yes",
                    title: "question",
                    timestamp: Date.now()
                });
                console.log(__WEBPACK_IMPORTED_MODULE_5__app_statistique__["a" /* default */]);
                this.no = false;
                this.idn = false;
                this.yes = true;
            }
        }
        else if (answer == "no") {
            __WEBPACK_IMPORTED_MODULE_5__app_statistique__["a" /* default */].push({
                id: this.currentStep,
                type: "no",
                title: "question",
                timestamp: Date.now()
            });
            console.log(__WEBPACK_IMPORTED_MODULE_5__app_statistique__["a" /* default */]);
            if (this.no == false) {
                this.yes = false;
                this.idn = false;
                this.no = true;
            }
        }
        else {
            if (this.idn == false) {
                __WEBPACK_IMPORTED_MODULE_5__app_statistique__["a" /* default */].push({
                    id: this.currentStep,
                    type: "idn",
                    title: "question",
                    timestamp: Date.now()
                });
                console.log(__WEBPACK_IMPORTED_MODULE_5__app_statistique__["a" /* default */]);
                this.no = false;
                this.yes = false;
                this.idn = true;
            }
        }
    };
    return HomePage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('sliderOne'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Slides */])
], HomePage.prototype, "sliderOne", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('realFormButton'),
    __metadata("design:type", Object)
], HomePage.prototype, "realFormButton", void 0);
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/kwame/Desktop/gitSave/src/pages/home/home.html"*/'<!-- <ion-header>\n<ion-navbar>\n<ion-title>Ciconia</ion-title>\n</ion-navbar>\n</ion-header> -->\n\n<ion-content>\n  <div [ngClass]="{\'visible\': currentStep != 0, counter: true }">\n    {{ currentStep }} / {{ totalStep }}\n  </div>\n  <div class="result-info">\n    <label>Résultats</label><i class="result-info-icon icon icon-gift"></i>\n  </div>\n  <div [ngClass]="{\'visible\': currentStep != 0, progress: true }">\n    <div class="bar" ng-change="totalStep" [ngStyle]="{\'width\': (100 / totalStep) * currentStep + \'%\'}" ></div>\n  </div>\n  <div class="modal">\n    <div class="modal-overlay"></div>\n    <div class="modal-label">Fiche info</div>\n    <div class="modal-close-button touch"><i class="icon icon-cross"></i></div>\n    <div class="modal-content">\n      <h3>Alcool</h3>\n      <p>Comme nous ne savons pas si de petites doses sont toxiques, il est préférable de <b>déconseiller toute consommation</b>. Une prise de boissons alcoolisées, <b>même en petite quantité</b> ou <b>même une seule fois en grande quantité</b>, pourrait être <b>nocive</b> pour le foetus.</p>\n      <p>En cas de besoin, vous pouvez joindre <b>Ecoute Alcool</b> au <a href="tel:05454545">0811 91 30 30</a>.</p>\n    </div>\n  </div>\n  <!-- <div [ngClass]="{\'visible\': currentStep != 0, next: true }" >\n    <button class="button back-button touch" (click)="prev()"><i class="icon icon-chevron-left"></i>Retour</button>\n    <button class="button next-button touch" (click)="handleNext()">Suivant</button>\n  </div> -->\n  <ion-slides #sliderOne (slider)="false" (centeredSlides)="false" (zoom)="false" (ionSlideDidChange)="ionSlideDidChange()" (ionSlideWillChange)="ionSlideWillChange()">\n\n    <ion-slide>\n\n      <div class="welcome">\n        <div [ngClass]="{\'visible\': activeLogoWrapper, \'slide-wrapper logo-wrapper\': true }">\n          <div [ngClass]="{\'logo--active\': activeLogo, logo: true }"></div>\n        </div>\n        <div class="slide-wrapper welcome-wrapper">\n          <div [ngClass]="{\'visible\': activeWelcomeContent, \'welcome-content\': true }">\n            <h2>Bienvenue !</h2>\n            <p><b>Ciconia</b> est une application de santé dediée à la <b>grossesse</b>, développée en collaboration avec ses <b>médecins</b>. </p><p> Grâce à leurs expertises, <b>Ciconia</b> vous apportera ses conseils afin de mieux vous préparer à cet événement.</p>\n            <button class="button touch" (click)="next()">Commencer</button>\n          </div>\n        </div>\n      </div>\n\n    </ion-slide>\n    <div class="form-wrapper" *ngFor="let question of Questions; let i of index">\n      <form id={{question.idForm}} [ngClass]="{\'form-wrapper--hidden\': changing, \'form-wrapper\': true }" novalidate>\n        <ion-slide *ngIf="question.type == \'number\'">\n          <h3>{{question.title}}</h3>\n          <input type="number" name="number" [(ngModel)]="number" required>\n        </ion-slide>\n        <ion-slide *ngIf="question.type == \'yesNoIdn\'">\n          <h3>{{question.title}}</h3>\n          <div class="checkbox">\n            <input id="radio{{i}}-1" type="checkbox" name="radio{{i}}-1" [(ngModel)]="yes" (click)="testCheck(\'yes\')">\n            <label for="radio{{i}}-1">Oui</label>\n          </div>\n          <div class="checkbox">\n            <input id="radio{{i}}-2" type="checkbox" name="radio{{i}}-2" [(ngModel)]="no" (click)="testCheck(\'no\')">\n            <label for="radio{{i}}-2">Non</label>\n          </div>\n          <div class="checkbox checkbox--large">\n            <input id="radio{{i}}-3" type="checkbox" name="radio{{i}}-3" [(ngModel)]="idn" (click)="testCheck(\'idn\')">\n            <label for="radio{{i}}-3">Je ne sais pas</label>\n          </div>\n        </ion-slide>\n        <ion-slide *ngIf="question.type == \'yesNo\'">\n          <h3>{{question.title}}</h3>\n          <div class="checkbox">\n            <input id="radio{{i}}-1" type="checkbox" name="checkbox{{i}}-1" [(ngModel)]="yes" (click)="testCheck(\'yes\')">\n            <label for="radio{{i}}-1">Oui</label>\n          </div>\n          <div class="checkbox">\n            <input id="radio{{i}}-2" type="checkbox" name="checkbox{{i}}-2" [(ngModel)]="no" (click)="testCheck(\'no\')">\n            <label for="radio{{i}}-2">Non</label>\n          </div>\n        </ion-slide>\n        <ion-slide *ngIf="question.type == \'Psycho1\'">\n\n            <h3>{{question.title}}</h3>\n            <p><i>Cochez la ou les cases correspondant à votre situation</i></p>\n         <div class="psycho">\n            <div class="checkbox">\n              <input id="Psycho1{{i}}-1" type="checkbox" name="Psycho1{{i}}-1" [(ngModel)]="answer.one">\n              <label for="Psycho1{{i}}-1">{{question.answer1.label}}</label>\n            </div>\n            <div class="psycho1" *ngIf="answer.one">\n              <label for="Psycho1{{i}}-2">{{question.answer2.label}}</label>\n              <br/>\n               <select name="Psycho1{{i}}-3" [(ngModel)]="answer.two">\n              <option value=0>- 1 an </option>\n              <option value=1>Entre 1 an et 2 ans</option>\n              <option value=3>Plus de 2 ans</option>\n              </select>\n              <br/>\n              <label for="Psycho1{{i}}-3">{{question.answer3.label}}</label>\n                         <input type="number" name="Psycho1{{i}}-3" [(ngModel)]="answer.three">\n            </div>\n            <div class="checkbox">\n              <input id="Psycho1{{i}}-4" type="checkbox" name="Psycho1{{i}}-4" [(ngModel)]="answer.four">\n              <label for="Psycho1{{i}}-4">{{question.answer4.label}}</label>\n            </div>\n            <div class="checkbox">\n              <input id="Psycho1{{i}}-5" type="checkbox" name="Psycho1{{i}}-5" [(ngModel)]="answer.five">\n              <label for="Psycho1{{i}}-5">{{question.answer5.label}}</label>\n            </div>\n          </div>\n        </ion-slide>\n        <ion-slide *ngIf="question.type == \'multipleIf\'">\n          <h3>{{question.title}}</h3>\n          <p><i>Cochez la ou les cases correspondant à votre situation</i></p>\n          <div class="psycho">\n            <div class="checkbox" *ngIf="Questions[20].answerUser == \'1\'">\n              <input id="multipleIf{{i}}-1" type="checkbox" name="multipleIf{{i}}-1" [(ngModel)]="answer.one">\n              <label for="multipleIf{{i}}-1">{{question.answer1.label}}</label>\n            </div>\n            <div class="checkbox" *ngIf="Questions[21].answerUser == \'1\'">\n              <input id="multipleIf{{i}}-2" type="checkbox" name="multipleIf{{i}}-2" [(ngModel)]="answer.two">\n              <label for="multipleIf{{i}}-2">{{question.answer2.label}}</label>\n            </div>\n            <div class="checkbox" *ngIf="Questions[22].answerUser == \'1\'">\n              <input id="multipleIf{{i}}-3" type="checkbox" name="multipleIf{{i}}-3" [(ngModel)]="answer.three">\n              <label for="multipleIf{{i}}-3">{{question.answer3.label}}</label>\n            </div>\n            <div class="checkbox" *ngIf="Questions[23].answerUser == \'1\'">\n              <input id="multipleIf{{i}}-4" type="checkbox" name="multipleIf{{i}}-4" [(ngModel)]="answer.four">\n              <label for="multipleIf{{i}}-4">{{question.answer4.label}}</label>\n            </div>\n            <div class="checkbox">\n              <input id="multipleIf{{i}}-5" type="checkbox" name="multipleIf{{i}}-5" [(ngModel)]="answer.five">\n              <label for="multipleIf{{i}}-5">{{question.answer5.label}}</label>\n            </div>\n          </div>\n        </ion-slide>\n        <ion-slide class="scrollable-slide" *ngIf="question.type == \'multipleChoice\'">\n          <h3>{{question.title}}</h3>\n          <p><i>Cochez la ou les cases correspondant à votre situation</i></p>\n          <div class="psycho">\n            <div class="checkbox checkbox--large">\n              <input id="multiple{{i}}-1" type="checkbox" name="multiple{{i}}-1" [(ngModel)]="answer.one">\n              <label for="multiple{{i}}-1">{{question.answer1.label}}</label>\n            </div>\n            <div class="checkbox checkbox--large" *ngIf="question.answer2">\n              <input id="multiple{{i}}-2" type="checkbox" name="multiple{{i}}-2" [(ngModel)]="answer.two">\n              <label for="multiple{{i}}-2">{{question.answer2.label}}</label>\n            </div>\n            <div class="checkbox checkbox--large" *ngIf="question.answer3">\n              <input id="multiple{{i}}-3" type="checkbox" name="multiple{{i}}-3" [(ngModel)]="answer.three">\n              <label for="multiple{{i}}-3">{{question.answer3.label}}</label>\n            </div>\n            <div class="checkbox checkbox--large" *ngIf="question.answer4">\n              <input id="multiple{{i}}-4" type="checkbox" name="multiple{{i}}-4" [(ngModel)]="answer.four">\n              <label for="multiple{{i}}-4">{{question.answer4.label}}</label>\n            </div>\n            <div class="checkbox checkbox--large" *ngIf="question.answer5">\n              <input id="multiple{{i}}-5" type="checkbox" name="multiple{{i}}-5" [(ngModel)]="answer.five">\n              <label for="multiple{{i}}-5">{{question.answer5.label}}</label>\n            </div>\n            <div class="checkbox checkbox--large" *ngIf="question.answer6">\n              <input id="multiple{{i}}-6" type="checkbox" name="multiple{{i}}-6" [(ngModel)]="answer.six">\n              <label for="multiple{{i}}-6">{{question.answer6.label}}</label>\n            </div>\n            <div class="checkbox checkbox--large" *ngIf="question.answer7">\n              <input id="multiple{{i}}-7" type="checkbox" name="multiple{{i}}-7" [(ngModel)]="answer.seven">\n              <label for="multiple{{i}}-7">{{question.answer7.label}}</label>\n            </div>\n            <div class="checkbox checkbox--large" *ngIf="question.answer8">\n              <input id="multiple{{i}}-8" type="checkbox" name="multiple{{i}}-8" [(ngModel)]="answer.eight">\n              <label for="multiple{{i}}-8">{{question.answer8.label}}</label>\n            </div>\n            <div class="checkbox checkbox--large" *ngIf="question.answer9">\n              <input id="multiple{{i}}-9" type="checkbox" name="multiple{{i}}-9" [(ngModel)]="answer.nine">\n              <label for="multiple{{i}}-9">{{question.answer9.label}}</label>\n            </div>\n            <div class="checkbox checkbox--large" *ngIf="question.answer10">\n              <input id="multiple{{i}}-10" type="checkbox" name="multiple{{i}}-10" [(ngModel)]="answer.ten">\n              <label for="multiple{{i}}-10">{{question.answer10.label}}</label>\n            </div>\n            <div class="checkbox checkbox--large" *ngIf="question.answer11">\n              <input id="multiple{{i}}-11" type="checkbox" name="multiple{{i}}-11" [(ngModel)]="answer.eleven">\n              <label for="multiple{{i}}-11">{{question.answer11.label}}</label>\n            </div>\n            <div class="checkbox checkbox--large" *ngIf="question.answer12">\n              <input id="multiple{{i}}-12" type="checkbox" name="multiple{{i}}-12" [(ngModel)]="answer.twelve">\n              <label for="multiple{{i}}-12">{{question.answer12.label}}</label>\n            </div>\n          </div>\n        </ion-slide>\n\n        <ion-slide *ngIf="question.type == \'date\'">\n          <h3>{{question.title}}</h3>\n          <input type="date" name="date" [(ngModel)]="date">\n        </ion-slide>\n\n        <div [ngClass]="{\'visible\': currentStep != 0, next: true }" >\n          <button #realFormButton class="button next-button touch" (click)="nextForm(question)">Suivant</button>\n          <button class="button button--line prev-button touch" (click)="prevStepFunction(question)">Precedent</button>\n          \n        </div>\n      </form>\n\n    </div>\n\n\n  </ion-slides>\n\n</ion-content>\n'/*ion-inline-end:"/Users/kwame/Desktop/gitSave/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Renderer */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ })

},[196]);
//# sourceMappingURL=main.js.map