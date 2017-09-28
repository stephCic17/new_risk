webpackJsonp([35],{

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__step1_step1__ = __webpack_require__(133);
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
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.openStep1 = function () {
        this.QuestionText = [];
        this.QuestionText.step1 = "Quel âge avez-vous ?";
        this.QuestionText.step2 = "Êtes-vous enceinte ?";
        this.QuestionText.step3 = "Fumez-vous ?";
        this.QuestionText.step4 = "Avez-vous des enfants ?";
        this.QuestionText.step5 = "Combien avez-vous d'enfant ?";
        this.QuestionText.step6 = "Avez-vous accouché d'enfants de plus de 4 kilos ?";
        this.QuestionText.step7 = "Combien d'un enfant de plus de 4 kilos avez-vous eus ?";
        this.QuestionText.step8 = "Avez-vous accouché d'enfant de moins de 2kg200 ?";
        this.QuestionText.step9 = "Votre enfant était il prématuré ?";
        this.QuestionText.step10 = "Avez-vous eu une prééclampsie ?";
        this.QuestionText.step11 = "Avez-vous un antécedent de diabète de grossesse ?";
        this.QuestionText.step12 = "Avez-vous eu une césariennes ?";
        this.QuestionText.step12_1 = "Combien avez-vous eu de césarienne";
        this.QuestionText.step13 = "Combien de fausse couche avez-vous fait ?";
        this.QuestionText.step14 = "Combien de verres d'alcool buvez-vous par semaine ?";
        this.QuestionText.step15 = "Avez-vous une épilepsie ?";
        this.QuestionText.step16 = "Avez-vous déjà eu une phlébite ?";
        this.QuestionText.step17 = "Avez-vous de l'hypertension artérielle ?";
        this.QuestionText.step18 = "Avez-vous du diabète ?";
        this.QuestionText.step19 = "Prenez vous des médicaments ?";
        this.QuestionText.step20 = "Selectionnez les médicaments que vous prenez";
        this.QuestionText.step21 = "Quelle est votre taille (en cm) ?";
        this.QuestionText.step22 = "Quel est votre poids (en kg) ?";
        this.QuestionText.step23 = "Travaillez-vous ?";
        this.QuestionText.step24 = "Combien d'heures de travail effectuez-vous par jour ?";
        this.QuestionText.step25 = "Quel est votre temps de trajet par jour (en minute) ?";
        this.QuestionText.step26 = "Travaillez-vous debout plus de 6 heures par jour ?";
        this.QuestionText.step28 = "";
        this.QuestionText.step2_1 = "Est-ce une bonne nouvelle ?";
        this.QuestionText.menstruation = "Quel est la date de vos dernière règle ?";
        this.QuestionText.psychoTest1 = "Vous et votre fertilité";
        this.QuestionText.psychoTest1_1 = "recours à l'aide médicale à la procréation ";
        this.QuestionText.psychoTest1_2 = "combien d'années avez vous passé entre le début du traitement et l'arrivée d'une grossesse";
        this.QuestionText.psychoTest1_3 = "combien de fois avez-vous eus recours à l'aide médicale à la procreation";
        this.QuestionText.psychoTest1_4 = "Bénéficié d'un don d'ovocyte";
        this.QuestionText.psychoTest1_5 = "Bénéficié d'un don de sperme";
        this.QuestionText.psychoTest2 = "Avez-vous connu une de ces situation ?";
        this.QuestionText.psychoTest2_1 = "Fauche couche";
        this.QuestionText.psychoTest2_2 = "Interruption volontaire de grossesse";
        this.QuestionText.psychoTest2_3 = "Grossesse extra utérine";
        this.QuestionText.psychoTest2_4 = "Mort foetale in utéro";
        this.QuestionText.psychoTest2_5 = "Interruption médical de la grossesse";
        this.QuestionText.psychoTest2_6 = "Interruption sélective de la grossesse";
        this.QuestionText.psychoTest2_7 = "Enfant porteur de handicap";
        this.QuestionText.psychoTest2_8 = "Enfant prématuré";
        this.QuestionText.psychoTest2_9 = "Enfant atteint d'une maladie chronique";
        this.QuestionText.psychoTest2_10 = "Mort d'un enfant";
        this.QuestionText.psychoTest2_11 = "Ces expériences ont été traumatiques";
        this.QuestionText.psychoTest2_12 = "en dehors des situation de grossesse j'ai connu des évènement que je qualifierais de traumatiques";
        this.QuestionText.psychoTest4 = "Vous et votre psychologie";
        this.QuestionText.psychoTest4_1 = "Crises d'angoisse";
        this.QuestionText.psychoTest4_2 = "Boulimie";
        this.QuestionText.psychoTest4_3 = "Anorexie";
        this.QuestionText.psychoTest4_4 = "Trouble Obsessionnels compulsif TOC";
        this.QuestionText.psychoTest4_5 = "Dépression";
        this.QuestionText.psychoTest4_6 = "Phobie";
        this.QuestionText.psychoTest4_7 = "trouble bipolaires";
        this.QuestionText.psychoTest4_8 = "hospitalisation dans un service psychiatrique";
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__step1_step1__["a" /* Step1Page */], {
            QuestionText: this.QuestionText
        });
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/kwame/Desktop/gitNew_risk/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Ciconia</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <div class="slidebox">\n    <div class="slideWelcom">\n        <img class="logo" src="../../assets/img/logo.png"/>\n      <h2>Bienvenue !</h2>\n      <p><b>Ciconia</b> est une application de sante dediée à la <b>grossesse en cours</b> ou <b>future</b>. Elle <b>évalue</b> si vous êtes à bas risque ou à haut risque.  Elle calcule aussi si vous etes éxposée à faire une depression post natale. </p>\n    <button ion-button class="button touch" (click)="openStep1()">\n      Commencer\n    </button>\n    </div>\n </div>\n</ion-content>\n'/*ion-inline-end:"/Users/kwame/Desktop/gitNew_risk/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IvgInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
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
    }
    IvgInfoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad IvgInfoPage');
    };
    return IvgInfoPage;
}());
IvgInfoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-ivg-info',template:/*ion-inline-start:"/Users/kwame/Desktop/gitNew_risk/src/pages/ivg-info/ivg-info.html"*/'<!--\n  Generated template for the IvgInfoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>ivgInfo</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/kwame/Desktop/gitNew_risk/src/pages/ivg-info/ivg-info.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], IvgInfoPage);

//# sourceMappingURL=ivg-info.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
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
 * Generated class for the ResultPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ResultPage = (function () {
    function ResultPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.valueTestGyneco = navParams.get('userParams');
        this.resultRisk = 0;
    }
    ResultPage.prototype.ionViewDidLoad = function () {
        console.log(this.valueTestGyneco);
        this.result = [];
        this.risk = [];
        if (this.valueTestGyneco.age > 42)
            this.resultRisk += 50;
        else if (this.valueTestGyneco.age == 42)
            this.resultRisk += 20;
        else if (this.valueTestGyneco.age > 38)
            this.resultRisk += 2;
        if (this.valueTestGyneco.alcool > 10)
            this.resultRisk += 400;
        if (this.valueTestGyneco.smoke == 1)
            this.resultRisk += 2;
        if (this.valueTestGyneco.child == 1) {
            if (this.valueTestGyneco.Cesarienne == 1)
                this.resultRisk += 2;
            if (this.valueTestGyneco.BigChild == 1)
                this.resultRisk += 50;
            if (this.valueTestGyneco.lessChild == 1)
                this.resultRisk += 50;
            if (this.valueTestGyneco.preEclampsy == 1)
                this.resultRisk += 50;
            if (this.valueTestGyneco.pregnantDiabete == 1)
                this.resultRisk += 2;
            if (this.valueTestGyneco.premaChild == 1)
                this.resultRisk += 50;
        }
        if (this.valueTestGyneco.nbFausseCouche > 0)
            this.resultRisk += 2;
        if (this.valueTestGyneco.diabete == 1)
            this.resultRisk += 50;
        if (this.valueTestGyneco.epilepsy == 1)
            this.resultRisk += 200;
        if (this.valueTestGyneco.highBloodPresure == 1)
            this.resultRisk += 2;
        if (this.valueTestGyneco.phlebite == 1)
            this.resultRisk += 2;
        if (this.valueTestGyneco.medicament == 1) {
            if (this.valueTestGyneco.medicament1 == 1)
                this.resultRisk += 200;
            if (this.valueTestGyneco.medicament2 == 1)
                this.resultRisk += 200;
            if (this.valueTestGyneco.medicament3 == 1)
                this.resultRisk += 2;
            if (this.valueTestGyneco.medicament4 == 1)
                this.resultRisk += 200;
            if (this.valueTestGyneco.medicament5 == 1)
                this.resultRisk += 2;
        }
        if (this.valueTestGyneco.IMC > 28)
            this.resultRisk += 50;
        if (this.valueTestGyneco.IMC > 22)
            this.resultRisk += 20;
        if (this.valueTestGyneco.IMC > 17)
            this.resultRisk += 0;
        if (this.valueTestGyneco.IMC < 17)
            this.resultRisk += 50;
        if (this.valueTestGyneco.Work == 1) {
            if (this.valueTestGyneco.timeTravel > 90)
                this.resultRisk += 2;
            if (this.valueTestGyneco.standingWork == 1)
                this.resultRisk += 2;
            if (this.valueTestGyneco.nbWork > 10)
                this.resultRisk += 2;
        }
        if (this.resultRisk >= 200)
            this.result.riskAssment = "D'après vos réponse vous présentez une grossesse à haut et devez être suivi dans une maternité de type 3.";
        else if (this.resultRisk >= 50)
            this.result.riskAssment = "D'apres vos réponse vous présentez une grossesse à haut risque mais qui ne necessite pas un suivi dans une maternité de type 3";
        else if (this.resultRisk >= 20)
            this.result.riskAssment = "D'apres vos réponses vous présentez une grossesse à risque.";
        else
            this.result.riskAssment = "D'apres vos réponses vous ne présentez pas de risque particulier pour votre grossesse.";
        if (this.valueTestGyneco.age < 42)
            this.risk.push({ text: "A votre Age, vous présentez un risque élevé d'anomalie chromosomique foetale" });
        else if (this.valueTestGyneco.age > 42)
            this.risk.push({ text: "A votre Age, vous présentez un risque très élevé d'anomalie chromosomique foetale" });
        if (this.valueTestGyneco.smoke == 1 && this.valueTestGyneco.pregnant == 1)
            this.risk.push({ text: "Vous fumez, ce qui peut entrainer de nombreuses complications." });
        if (this.valueTestGyneco.smoke == 1 && this.valueTestGyneco.pregnant == 1)
            this.risk.push({ text: "Vous fumez, ce qui peut entrainer de nombreuses complications." });
        else if (this.valueTestGyneco.smoke == 1)
            this.risk.push({ text: "Vous fumez, ce qui va entrainer de nombreuses complications lors d'une future grossesse." });
        if (this.valueTestGyneco.bigChild == 1)
            this.risk.push({ text: "Vous avez eus un enfant de + de 4kg, ce qui peut favoriser l'apparition du vous place dans un groupe à risque de développer un diabète de grossesse." });
        if (this.valueTestGyneco.premaChild == 0 && this.valueTestGyneco.smallChild == 1)
            this.risk.push({ text: "Vous avez eu un enfant de - de 2kg200 qui n'était pas prématuré, il s'agit donc d'un antécédent de retard de croissance intra-utérin qui vous expose à un risque de récidive d'environ 10 %" });
        if (this.valueTestGyneco.nbFausseCouche >= 3)
            this.risk.push({ text: "Vous avez un nombre élevé de fausse couches" });
        if (this.valueTestGyneco.IMG)
            this.risk.push({ text: "Vous avez déjà effectué une IMG et vous pourriez avoir un risque de récidive" });
        if (this.valueTestGyneco.alcool < 10 && this.valueTestGyneco.alcool > 0)
            this.risk.push({ text: "Vous consommez de l'alcool" });
        if (this.valueTestGyneco.alcool < 10 && this.valueTestGyneco.alcool > 0 && this.valueTestGyneco.pregnant == 1)
            this.risk.push({ text: "Stoppez votre consommation d'alcool !" });
        if (this.valueTestGyneco.alcool >= 10 && this.valueTestGyneco.pregnant == 1)
            this.risk.push({ text: "Vous consommez une quantité d'alcool importante" });
        if (this.valueTestGyneco.epilepsy == 1)
            this.risk.push({ text: "Votre epilepsie" });
        if (this.valueTestGyneco.phlebite == 1)
            this.risk.push({ text: "Votre antécédent de phlébite" });
        if (this.valueTestGyneco.highBloodPresure == 1)
            this.risk.push({ text: "Votre hypertension" });
        if (this.valueTestGyneco.IMC < 18.5)
            this.risk.push({ text: "Votre MAIGREUR" });
        else if (this.valueTestGyneco.IMC > 35 && this.valueTestGyneco.IMC < 40)
            this.risk.push({ text: "Votre obésité" });
        else if (this.valueTestGyneco.IMC > 40)
            this.risk.push({ text: "Votre obésité massive" });
        if (this.valueTestGyneco.nbWork > 10 && this.valueTestGyneco.nbWork <= 12)
            this.risk.push({ text: "Votre nombre d'heure de travail est élevé." });
        if (this.valueTestGyneco.nbWork > 12)
            this.risk.push({ text: "Votre nombre d'heure de travail est vraiment très élevé" });
        if (this.valueTestGyneco.timeTravel > 90)
            this.risk.push({ text: "Votre temps de trajet pour aller au travail est élevé" });
        if (this.valueTestGyneco.standingWork == 1)
            this.risk.push({ text: "Vous travaillez debout plus de 6 heures par jour" });
        console.log(this.risk);
    };
    ResultPage.prototype.definePositif = function () {
        if (this.valueTestGyneco.feelingPregnant == 1)
            this.result.positif.push("Félicitation vous êtes enceinte !");
        if (this.valueTestGyneco.child == 0 && this.valueTestGyneco.feelingPregnant == 1)
            this.result.positif.push("Félicitation vous allez avoir votre premier enfant");
        if (this.valueTestGyneco.age < 38)
            this.result.positif.push("Vous avez le bon l'âge optimal pour faire un enfant");
        else
            this.result.positif.push("Être plus âgée pour élever ses enfants est ausi un gage de maturité !");
        if (this.valueTestGyneco.IMG == 1)
            this.result.positif.push("La plus grande partie des anomalies foetales sont des accidents et leur récidive est rare");
        if (!this.valueTestGyneco.work)
            this.result.positif.push("Vous ne travaillez pas, vous pouvez donc prendre le temps de vous occuper de vous et préparer la venue de votre enfant");
    };
    ResultPage.prototype.defineRisk = function () {
        if (this.valueTestGyneco.age < 42)
            this.risk.push("A votre Age, vous présentez un risque élevé d'anomalie chromosomique foetale");
        else if (this.valueTestGyneco.age > 42)
            this.risk.push("A votre Age, vous présentez un risque très élevé d'anomalie chromosomique foetale");
        if (this.valueTestGyneco.smoke == 1 && this.valueTestGyneco.pregnant == 1)
            this.risk.push("Vous fumez, ce qui peut entrainer de nombreuses complications.");
        if (this.valueTestGyneco.smoke == 1 && this.valueTestGyneco.pregnant == 1)
            this.risk.push("Vous fumez, ce qui peut entrainer de nombreuses complications.");
        else if (this.valueTestGyneco.smoke == 1)
            this.risk.push("Vous fumez, ce qui va entrainer de nombreuses complications lors d'une future grossesse.");
        if (this.valueTestGyneco.bigChild == 1)
            this.risk.push("Vous avez eus un enfant de + de 4kg, ce qui peut favoriser l'apparition du vous place dans un groupe à risque de développer un diabète de grossesse.");
        if (this.valueTestGyneco.premaChild == 0 && this.valueTestGyneco.smallChild == 1)
            this.risk.push("Vous avez eu un enfant de - de 2kg200 qui n'était pas prématuré, il s'agit donc d'un antécédent de retard de croissance intra-utérin qui vous expose à un risque de récidive d'environ 10 %");
        if (this.valueTestGyneco.nbFausseCouche >= 3)
            this.risk.push("Vous avez un nombre élevé de fausse couches");
        if (this.valueTestGyneco.IMG)
            this.risk.push("Vous avez déjà effectué une IMG et vous pourriez avoir un risque de récidive");
        if (this.valueTestGyneco.alcool < 10 && this.valueTestGyneco.alcool > 0)
            this.risk.push("Vous consommez de l'alcool");
        if (this.valueTestGyneco.alcool < 10 && this.valueTestGyneco.alcool > 0 && this.valueTestGyneco.pregnant == 1)
            this.risk.push("Stoppez votre consommation d'alcool !");
        if (this.valueTestGyneco.alcool >= 10 && this.valueTestGyneco.pregnant == 1)
            this.risk.push("Vous consommez une quantité d'alcool importante");
        if (this.valueTestGyneco.epilepsy == 1)
            this.risk.push("Votre epilepsie");
        if (this.valueTestGyneco.phlebite == 1)
            this.risk.push("Votre antécédent de phlébite");
        if (this.valueTestGyneco.highBloodPresure == 1)
            this.risk.push("Votre hypertension");
        if (this.valueTestGyneco.IMC < 18.5)
            this.risk.push("Votre MAIGREUR");
        else if (this.valueTestGyneco.IMC > 35 && this.valueTestGyneco.IMC < 40)
            this.risk.push("Votre obésité");
        else if (this.valueTestGyneco.IMC > 40)
            this.risk.push("Votre obésité massive");
        if (this.valueTestGyneco.nbWork > 10 && this.valueTestGyneco.nbWork <= 12)
            this.risk.push("Votre nombre d'heure de travail est élevé.");
        if (this.valueTestGyneco.nbWork > 12)
            this.risk.push("Votre nombre d'heure de travail est vraiment très élevé");
        if (this.valueTestGyneco.timeTravel > 90)
            this.risk.push("Votre temps de trajet pour aller au travail est élevé");
        if (this.valueTestGyneco.standingWork == 1)
            this.risk.push("Vous travaillez debout plus de 6 heures par jour");
    };
    ResultPage.prototype.defineConseil = function () {
        if (this.valueTestGyneco.smoke == 1 && this.valueTestGyneco.pregnant == 1)
            this.result.conseil.push("Arrêtez de fumer !");
        else if (this.valueTestGyneco.smoke == 1)
            this.result.conseil.push("Arrêtez de fumer avant d'entammer une grossesse !");
        if (this.valueTestGyneco.bigChild)
            this.result.conseil.push("Effectuez un dépistage de diabète de grossesse.");
        if (this.valueTestGyneco.bigChild == 1 && this.valueTestGyneco.pregnantDiabete == 1)
            this.result.conseil.push("Effectuez un dépistage de diabète de grossesse");
        if (this.valueTestGyneco.nbFausseCouche >= 3)
            this.result.conseil.push("Effectuez un bilan de fausse couche à répétition et bénéficiez d'une prise en charge adaptée en fonction des résultats de ce bilan.");
        if (this.valueTestGyneco.IMG == 1)
            this.result.conseil.push("Prenez rendez-vous pour une consultation spécialisée afin d'évaluer le risque de récidive de malformation foetale.");
        if (this.valueTestGyneco.alcool >= 10 && this.valueTestGyneco.pregnant == 1)
            this.result.conseil.push("Prenez rendez-vous dans un centre spécialisée pour vous aider à arrêter l'alcool");
        if (this.valueTestGyneco.alcool < 10 && this.valueTestGyneco.alcool > 0 && this.valueTestGyneco.pregnant == 1)
            this.result.conseil.push("Il sera nécessaire de stopper votre consommation d'alcool lorsque vous serez enceinte!");
        if (this.valueTestGyneco.medicament1 == 1)
            this.result.conseil.push("Vous devez être prise en charge par une équipe spécialisée pour le choix des antiépileptiques et leur dosage ainsi que pour la mise en place d'une surveillance foetale adaptée.");
        if (this.valueTestGyneco.medicament2 == 1)
            this.result.conseil.push("Vous devez être prise en charge par une équipe spécialisée pour le choix des anticoagulent et leur dosage ainsi que pour la mise en place d'une surveillance foetale adaptée.");
        if (this.valueTestGyneco.medicament3 == 1)
            this.result.conseil.push("Vous devez être prise en charge par une équipe spécialisée pour le choix des antihypertenseurs et leur dosage ainsi que pour la mise en place d'une surveillance foetale adaptée.");
        if (this.valueTestGyneco.medicament4 == 1)
            this.result.conseil.push("Vous devez être prise en charge par une équipe spécialisée pour le choix des antidiabetiques et leur dosage ainsi que pour la mise en place d'une surveillance foetale adaptée.");
        if (this.valueTestGyneco.medicament5 == 1)
            this.result.conseil.push("");
        if (this.valueTestGyneco.IMC < 18.5)
            this.result.conseil.push("Alimentez-vous correctement");
        else if (this.valueTestGyneco.IMC > 40)
            this.result.conseil.push("Vous devez être prise en charge dans un centre spécialisé.");
        if (this.valueTestGyneco.nbWork > 10)
            this.result.conseil.push("Essayer d'aménager vos heures de travail");
        if (this.valueTestGyneco.timeTravel > 90)
            this.result.conseil.push("Essayer d'aménager vos heures de présence au travail pour diminuer les temps de trajets");
        if (this.valueTestGyneco.standingWork == 1)
            this.result.conseil.push("Nous vous conseillons de discuter dès à présent avec votre employeur de la possibilité d'aménager vos conditions de travail. Vous risquez d'être en difficulté pendant votre grossesse si vous restez debout plus de 6 heures par jour");
    };
    return ResultPage;
}());
ResultPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-result',template:/*ion-inline-start:"/Users/kwame/Desktop/gitNew_risk/src/pages/result/result.html"*/'<!--\n  Generated template for the ResultPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>result</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n<ion-slides>\n	<ion-slide *ngFor="let r of risk">\n		<h1>{{r.text}}</h1>\n	</ion-slide>\n</ion-slides>\n\n</ion-content>\n'/*ion-inline-end:"/Users/kwame/Desktop/gitNew_risk/src/pages/result/result.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], ResultPage);

//# sourceMappingURL=result.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Step26Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__psycho_test4_psycho_test4__ = __webpack_require__(51);
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
 * Generated class for the Step26Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Step26Page = (function () {
    function Step26Page(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.valueTestGyneco = navParams.get('userParams');
        this.QuestionText = navParams.get('QuestionText');
    }
    Step26Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Step26Page');
    };
    Step26Page.prototype.yesClick = function () {
        if (this.no.value == true) {
            this.no.value = false;
        }
    };
    Step26Page.prototype.noClick = function () {
        if (this.yes.value == true) {
            this.yes.value = false;
        }
    };
    Step26Page.prototype.goNextStep = function () {
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
            this.valueTestGyneco.standingWork = this.result;
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__psycho_test4_psycho_test4__["a" /* PsychoTest4Page */], {
                userParams: this.valueTestGyneco,
                QuestionText: this.QuestionText
            });
        }
    };
    return Step26Page;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('yes'),
    __metadata("design:type", Object)
], Step26Page.prototype, "yes", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('no'),
    __metadata("design:type", Object)
], Step26Page.prototype, "no", void 0);
Step26Page = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-step26',template:/*ion-inline-start:"/Users/kwame/Desktop/gitNew_risk/src/pages/step26/step26.html"*/'<!--\n  Generated template for the Step26Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>step26</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<h3 class="form-question-title">{{QuestionText.step26}}</h3>\n	<ion-list>\n		<ion-item>\n			<ion-label>Oui</ion-label>\n			<ion-checkbox (click)="yesClick()" #yes></ion-checkbox>\n		</ion-item>\n		<ion-item>\n			<ion-label>	Non</ion-label>\n			<ion-checkbox (click)="noClick()" #no></ion-checkbox>\n		</ion-item>				\n	</ion-list>\n	<button ion-button (click)="goNextStep()">\n		Valider\n	</button>\n</ion-content>\n'/*ion-inline-end:"/Users/kwame/Desktop/gitNew_risk/src/pages/step26/step26.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], Step26Page);

//# sourceMappingURL=step26.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Step25Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__step26_step26__ = __webpack_require__(110);
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
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__step26_step26__["a" /* Step26Page */], {
                userParams: this.valueTestGyneco,
                QuestionText: this.QuestionText
            });
        }
    };
    return Step25Page;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('timeTravel'),
    __metadata("design:type", Object)
], Step25Page.prototype, "timeTravel", void 0);
Step25Page = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-step25',template:/*ion-inline-start:"/Users/kwame/Desktop/gitNew_risk/src/pages/step25/step25.html"*/'<!--\n  Generated template for the Step25Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>step25</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<h3 class="form-question-title">{{QuestionText.step25}}</h3>\n	<ion-item>\n		<ion-label floating>en minutes</ion-label>\n	    <ion-input type="number" #timeTravel></ion-input>\n	</ion-item>\n	<button ion-button (click)="goNextStep()">\n		Valider\n	</button>\n</ion-content>\n'/*ion-inline-end:"/Users/kwame/Desktop/gitNew_risk/src/pages/step25/step25.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], Step25Page);

//# sourceMappingURL=step25.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Step24Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__step25_step25__ = __webpack_require__(111);
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
 * Generated class for the Step24Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Step24Page = (function () {
    function Step24Page(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.valueTestGyneco = navParams.get('userParams');
        this.QuestionText = navParams.get('QuestionText');
    }
    Step24Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Step24Page');
    };
    Step24Page.prototype.goNextStep = function () {
        this.valueTestGyneco.nbWork = this.nbWork.value;
        if (!this.nbWork.value) {
            var alert_1 = this.alertCtrl.create({
                title: 'Rentrez le nombre d\'heure de travail',
                subTitle: 'Nous avons besoin de toutes les informations qui vous sont demandé pour établir votre profil',
                buttons: ['OK']
            });
            alert_1.present();
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__step25_step25__["a" /* Step25Page */], {
                userParams: this.valueTestGyneco,
                QuestionText: this.QuestionText
            });
        }
    };
    return Step24Page;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('nbWork'),
    __metadata("design:type", Object)
], Step24Page.prototype, "nbWork", void 0);
Step24Page = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-step24',template:/*ion-inline-start:"/Users/kwame/Desktop/gitNew_risk/src/pages/step24/step24.html"*/'<!--\n  Generated template for the Step24Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>step24</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<h3 class="form-question-title">{{QuestionText.step24}}</h3>\n	<ion-item>\n		<ion-label floating>en heure</ion-label>\n	    <ion-input type="number" #nbWork></ion-input>\n	</ion-item>\n	<button ion-button (click)="goNextStep()">\n		Valider\n	</button>\n</ion-content>\n'/*ion-inline-end:"/Users/kwame/Desktop/gitNew_risk/src/pages/step24/step24.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], Step24Page);

//# sourceMappingURL=step24.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Step23Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__step24_step24__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__psycho_test4_psycho_test4__ = __webpack_require__(51);
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
 * Generated class for the Step23Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Step23Page = (function () {
    function Step23Page(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.valueTestGyneco = navParams.get('userParams');
        this.QuestionText = navParams.get('QuestionText');
    }
    Step23Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Step23Page');
    };
    Step23Page.prototype.yesClick = function () {
        if (this.no.value == true) {
            this.no.value = false;
        }
    };
    Step23Page.prototype.noClick = function () {
        if (this.yes.value == true) {
            this.yes.value = false;
        }
    };
    Step23Page.prototype.goNextStep = function () {
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
            this.valueTestGyneco.work = this.result;
            if (this.result == 1)
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__step24_step24__["a" /* Step24Page */], {
                    userParams: this.valueTestGyneco,
                    QuestionText: this.QuestionText
                });
            else
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__psycho_test4_psycho_test4__["a" /* PsychoTest4Page */], {
                    userParams: this.valueTestGyneco,
                    QuestionText: this.QuestionText
                });
        }
    };
    return Step23Page;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('yes'),
    __metadata("design:type", Object)
], Step23Page.prototype, "yes", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('no'),
    __metadata("design:type", Object)
], Step23Page.prototype, "no", void 0);
Step23Page = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-step23',template:/*ion-inline-start:"/Users/kwame/Desktop/gitNew_risk/src/pages/step23/step23.html"*/'<!--\n  Generated template for the Step23Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>step23</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<h3 class="form-question-title">{{QuestionText.step23}}</h3>\n	<ion-list>\n		<ion-item>\n			<ion-label>Oui</ion-label>\n			<ion-checkbox (click)="yesClick()" #yes></ion-checkbox>\n		</ion-item>\n		<ion-item>\n			<ion-label>	Non</ion-label>\n			<ion-checkbox (click)="noClick()" #no></ion-checkbox>\n		</ion-item>				\n	</ion-list>\n	<button ion-button (click)="goNextStep()">\n		Valider\n	</button>\n</ion-content>\n'/*ion-inline-end:"/Users/kwame/Desktop/gitNew_risk/src/pages/step23/step23.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], Step23Page);

//# sourceMappingURL=step23.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Step22Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__step23_step23__ = __webpack_require__(113);
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
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__step23_step23__["a" /* Step23Page */], {
                userParams: this.valueTestGyneco,
                QuestionText: this.QuestionText
            });
        }
    };
    return Step22Page;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('weight'),
    __metadata("design:type", Object)
], Step22Page.prototype, "weight", void 0);
Step22Page = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-step22',template:/*ion-inline-start:"/Users/kwame/Desktop/gitNew_risk/src/pages/step22/step22.html"*/'<!--\n  Generated template for the Step22Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>step22</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<h3 class="form-question-title">{{QuestionText.step22}}</h3>\n	<ion-item>\n		<ion-label floating>en kg</ion-label>\n	    <ion-input type="number" #weight></ion-input>\n	</ion-item>\n	<button ion-button (click)="goNextStep()">\n		Valider\n	</button>\n</ion-content>\n'/*ion-inline-end:"/Users/kwame/Desktop/gitNew_risk/src/pages/step22/step22.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], Step22Page);

//# sourceMappingURL=step22.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Step20Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__step21_step21__ = __webpack_require__(52);
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
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__step21_step21__["a" /* Step21Page */], {
            userParams: this.valueTestGyneco,
            QuestionText: this.QuestionText
        });
    };
    return Step20Page;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('medicament1'),
    __metadata("design:type", Object)
], Step20Page.prototype, "medicament1", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('medicament2'),
    __metadata("design:type", Object)
], Step20Page.prototype, "medicament2", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('medicament3'),
    __metadata("design:type", Object)
], Step20Page.prototype, "medicament3", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('medicament4'),
    __metadata("design:type", Object)
], Step20Page.prototype, "medicament4", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('medicament5'),
    __metadata("design:type", Object)
], Step20Page.prototype, "medicament5", void 0);
Step20Page = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-step20',template:/*ion-inline-start:"/Users/kwame/Desktop/gitNew_risk/src/pages/step20/step20.html"*/'<!--\n  Generated template for the Step20Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>step20</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<h3 class="form-question-title">{{QuestionText.step20}}</h3>\n		<ion-list>\n				<ion-item>	\n					<ion-label>{{QuestionText.medicament1}}</ion-label>\n					<ion-checkbox #medicament1></ion-checkbox>\n				</ion-item>\n				<ion-item>	\n					<ion-label>{{QuestionText.medicament2}}</ion-label>\n					<ion-checkbox #medicament2></ion-checkbox>\n				</ion-item>\n				<ion-item>	\n					<ion-label>{{QuestionText.medicament3}}</ion-label>\n					<ion-checkbox #medicament3></ion-checkbox>\n				</ion-item>\n				<ion-item>	\n					<ion-label>{{QuestionText.medicament4}}</ion-label>\n					<ion-checkbox #medicament4></ion-checkbox>\n				</ion-item>\n				<ion-item>			\n					<ion-label>{{QuestionText.medicament5}}</ion-label>\n					<ion-checkbox #medicament5></ion-checkbox>\n				</ion-item>\n		</ion-list>\n		<button ion-button (click)="goNextStep()">\n			Valider\n		</button>\n</ion-content>\n'/*ion-inline-end:"/Users/kwame/Desktop/gitNew_risk/src/pages/step20/step20.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], Step20Page);

//# sourceMappingURL=step20.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Step19Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__step20_step20__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__step21_step21__ = __webpack_require__(52);
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
 * Generated class for the Step19Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Step19Page = (function () {
    function Step19Page(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.valueTestGyneco = navParams.get('userParams');
        this.QuestionText = navParams.get('QuestionText');
    }
    Step19Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Step19Page');
    };
    Step19Page.prototype.yesClick = function () {
        if (this.no.value == true) {
            this.no.value = false;
        }
    };
    Step19Page.prototype.noClick = function () {
        if (this.yes.value == true) {
            this.yes.value = false;
        }
    };
    Step19Page.prototype.goNextStep = function () {
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
            this.valueTestGyneco.medicament = this.result;
            if (this.result == 1) {
                this.QuestionText.medicament1 = "Anti-Epileptique";
                this.QuestionText.medicament2 = "Anticoagulent";
                this.QuestionText.medicament3 = "Antihypertenseur";
                this.QuestionText.medicament4 = "Insuline";
                this.QuestionText.medicament5 = "Antidepresseur";
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__step20_step20__["a" /* Step20Page */], {
                    userParams: this.valueTestGyneco,
                    QuestionText: this.QuestionText
                });
            }
            else
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__step21_step21__["a" /* Step21Page */], {
                    userParams: this.valueTestGyneco,
                    QuestionText: this.QuestionText
                });
        }
    };
    return Step19Page;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('yes'),
    __metadata("design:type", Object)
], Step19Page.prototype, "yes", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('no'),
    __metadata("design:type", Object)
], Step19Page.prototype, "no", void 0);
Step19Page = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-step19',template:/*ion-inline-start:"/Users/kwame/Desktop/gitNew_risk/src/pages/step19/step19.html"*/'<!--\n  Generated template for the Step19Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>step19</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<h3 class="form-question-title">{{QuestionText.step19}}</h3>\n	<ion-list>\n		<ion-item>\n			<ion-label>Oui</ion-label>\n			<ion-checkbox (click)="yesClick()" #yes></ion-checkbox>\n		</ion-item>\n		<ion-item>\n			<ion-label>	Non</ion-label>\n			<ion-checkbox (click)="noClick()" #no></ion-checkbox>\n		</ion-item>				\n	</ion-list>\n	<button ion-button (click)="goNextStep()">\n		Valider\n	</button>\n</ion-content>\n'/*ion-inline-end:"/Users/kwame/Desktop/gitNew_risk/src/pages/step19/step19.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], Step19Page);

//# sourceMappingURL=step19.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Step18Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__step19_step19__ = __webpack_require__(116);
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
 * Generated class for the Step18Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Step18Page = (function () {
    function Step18Page(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.valueTestGyneco = navParams.get('userParams');
        this.QuestionText = navParams.get('QuestionText');
    }
    Step18Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Step18Page');
    };
    Step18Page.prototype.yesClick = function () {
        if (this.no.value == true) {
            this.no.value = false;
        }
    };
    Step18Page.prototype.noClick = function () {
        if (this.yes.value == true) {
            this.yes.value = false;
        }
    };
    Step18Page.prototype.goNextStep = function () {
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
            this.valueTestGyneco.diabete = this.result;
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__step19_step19__["a" /* Step19Page */], {
                userParams: this.valueTestGyneco,
                QuestionText: this.QuestionText
            });
        }
    };
    return Step18Page;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('yes'),
    __metadata("design:type", Object)
], Step18Page.prototype, "yes", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('no'),
    __metadata("design:type", Object)
], Step18Page.prototype, "no", void 0);
Step18Page = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-step18',template:/*ion-inline-start:"/Users/kwame/Desktop/gitNew_risk/src/pages/step18/step18.html"*/'<!--\n  Generated template for the Step18Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>step18</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<h3 class="form-question-title">{{QuestionText.step18}}</h3>\n	<ion-list>\n		<ion-item>\n			<ion-label>Oui</ion-label>\n			<ion-checkbox (click)="yesClick()" #yes></ion-checkbox>\n		</ion-item>\n		<ion-item>\n			<ion-label>	Non</ion-label>\n			<ion-checkbox (click)="noClick()" #no></ion-checkbox>\n		</ion-item>				\n	</ion-list>\n	<button ion-button (click)="goNextStep()">\n		Valider\n	</button>\n</ion-content>\n'/*ion-inline-end:"/Users/kwame/Desktop/gitNew_risk/src/pages/step18/step18.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], Step18Page);

//# sourceMappingURL=step18.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Step17Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__step18_step18__ = __webpack_require__(117);
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
 * Generated class for the Step17Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Step17Page = (function () {
    function Step17Page(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.valueTestGyneco = navParams.get('userParams');
        this.QuestionText = navParams.get('QuestionText');
    }
    Step17Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Step17Page');
    };
    Step17Page.prototype.yesClick = function () {
        if (this.no.value == true) {
            this.no.value = false;
        }
    };
    Step17Page.prototype.noClick = function () {
        if (this.yes.value == true) {
            this.yes.value = false;
        }
    };
    Step17Page.prototype.goNextStep = function () {
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
            this.valueTestGyneco.highBloodPresure = this.result;
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__step18_step18__["a" /* Step18Page */], {
                userParams: this.valueTestGyneco,
                QuestionText: this.QuestionText
            });
        }
    };
    return Step17Page;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('yes'),
    __metadata("design:type", Object)
], Step17Page.prototype, "yes", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('no'),
    __metadata("design:type", Object)
], Step17Page.prototype, "no", void 0);
Step17Page = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-step17',template:/*ion-inline-start:"/Users/kwame/Desktop/gitNew_risk/src/pages/step17/step17.html"*/'<!--\n  Generated template for the Step17Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>step17</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<h3 class="form-question-title">{{QuestionText.step17}}</h3>\n	<ion-list>\n		<ion-item>\n			<ion-label>Oui</ion-label>\n			<ion-checkbox (click)="yesClick()" #yes></ion-checkbox>\n		</ion-item>\n		<ion-item>\n			<ion-label>	Non</ion-label>\n			<ion-checkbox (click)="noClick()" #no></ion-checkbox>\n		</ion-item>				\n	</ion-list>\n	<button ion-button (click)="goNextStep()">\n		Valider\n	</button>\n</ion-content>\n'/*ion-inline-end:"/Users/kwame/Desktop/gitNew_risk/src/pages/step17/step17.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], Step17Page);

//# sourceMappingURL=step17.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Step16Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__step17_step17__ = __webpack_require__(118);
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
 * Generated class for the Step16Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Step16Page = (function () {
    function Step16Page(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.valueTestGyneco = navParams.get('userParams');
        this.QuestionText = navParams.get('QuestionText');
    }
    Step16Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Step16Page');
    };
    Step16Page.prototype.yesClick = function () {
        if (this.no.value == true) {
            this.no.value = false;
        }
    };
    Step16Page.prototype.noClick = function () {
        if (this.yes.value == true) {
            this.yes.value = false;
        }
    };
    Step16Page.prototype.goNextStep = function () {
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
            this.valueTestGyneco.phlebite = this.result;
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__step17_step17__["a" /* Step17Page */], {
                userParams: this.valueTestGyneco,
                QuestionText: this.QuestionText
            });
        }
    };
    return Step16Page;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('yes'),
    __metadata("design:type", Object)
], Step16Page.prototype, "yes", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('no'),
    __metadata("design:type", Object)
], Step16Page.prototype, "no", void 0);
Step16Page = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-step16',template:/*ion-inline-start:"/Users/kwame/Desktop/gitNew_risk/src/pages/step16/step16.html"*/'<!--\n  Generated template for the Step16Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>step16</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<h3 class="form-question-title">{{QuestionText.step16}}</h3>\n	<ion-list>\n		<ion-item>\n			<ion-label>Oui</ion-label>\n			<ion-checkbox (click)="yesClick()" #yes></ion-checkbox>\n		</ion-item>\n		<ion-item>\n			<ion-label>	Non</ion-label>\n			<ion-checkbox (click)="noClick()" #no></ion-checkbox>\n		</ion-item>				\n	</ion-list>\n	<button ion-button (click)="goNextStep()">\n		Valider\n	</button>\n</ion-content>\n'/*ion-inline-end:"/Users/kwame/Desktop/gitNew_risk/src/pages/step16/step16.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], Step16Page);

//# sourceMappingURL=step16.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Step15Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__step16_step16__ = __webpack_require__(119);
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
 * Generated class for the Step15Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Step15Page = (function () {
    function Step15Page(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.valueTestGyneco = navParams.get('userParams');
        this.QuestionText = navParams.get('QuestionText');
    }
    Step15Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Step15Page');
    };
    Step15Page.prototype.yesClick = function () {
        if (this.no.value == true) {
            this.no.value = false;
        }
    };
    Step15Page.prototype.noClick = function () {
        if (this.yes.value == true) {
            this.yes.value = false;
        }
    };
    Step15Page.prototype.goNextStep = function () {
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
            this.valueTestGyneco.epilepsy = this.result;
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__step16_step16__["a" /* Step16Page */], {
                userParams: this.valueTestGyneco,
                QuestionText: this.QuestionText
            });
        }
    };
    return Step15Page;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('yes'),
    __metadata("design:type", Object)
], Step15Page.prototype, "yes", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('no'),
    __metadata("design:type", Object)
], Step15Page.prototype, "no", void 0);
Step15Page = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-step15',template:/*ion-inline-start:"/Users/kwame/Desktop/gitNew_risk/src/pages/step15/step15.html"*/'<!--\n  Generated template for the Step15Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>step15</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<h3 class="form-question-title">{{QuestionText.step15}}</h3>\n	<ion-list>\n		<ion-item>\n			<ion-label>Oui</ion-label>\n			<ion-checkbox (click)="yesClick()" #yes></ion-checkbox>\n		</ion-item>\n		<ion-item>\n			<ion-label>	Non</ion-label>\n			<ion-checkbox (click)="noClick()" #no></ion-checkbox>\n		</ion-item>				\n	</ion-list>\n	<button ion-button (click)="goNextStep()">\n		Valider\n	</button>\n</ion-content>\n'/*ion-inline-end:"/Users/kwame/Desktop/gitNew_risk/src/pages/step15/step15.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], Step15Page);

//# sourceMappingURL=step15.js.map

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Step12_1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__psycho_test3_psycho_test3__ = __webpack_require__(55);
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
 * Generated class for the Step12_1Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Step12_1Page = (function () {
    function Step12_1Page(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.valueTestGyneco = navParams.get('userParams');
        this.QuestionText = navParams.get('QuestionText');
        console.log(this.QuestionText);
    }
    Step12_1Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Step12_1Page');
    };
    Step12_1Page.prototype.goNextStep = function () {
        this.valueTestGyneco.nbCesarienne = this.nbCesarienne.value;
        if (!this.nbCesarienne.value) {
            var alert_1 = this.alertCtrl.create({
                title: 'Rentrez votre age',
                subTitle: 'Nous avons besoin de toutes les informations qui vous sont demandé pour établir votre profil',
                buttons: ['OK']
            });
            alert_1.present();
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__psycho_test3_psycho_test3__["a" /* PsychoTest3Page */], {
                userParams: this.valueTestGyneco,
                QuestionText: this.QuestionText
            });
        }
    };
    return Step12_1Page;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('nbCesarienne'),
    __metadata("design:type", Object)
], Step12_1Page.prototype, "nbCesarienne", void 0);
Step12_1Page = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-step12-1',template:/*ion-inline-start:"/Users/kwame/Desktop/gitNew_risk/src/pages/step12-1/step12-1.html"*/'<!--\n  Generated template for the Step12_1Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>step12_1</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<h3 class="form-question-title">{{QuestionText.step12_1}}</h3>\n  <ion-item>\n      <ion-label floating>Entrez le nombre</ion-label>\n      <ion-input type="number" #nbCesarienne></ion-input>\n  </ion-item>\n	<button ion-button (click)="goNextStep()">\n		Valider\n	</button>\n</ion-content>\n'/*ion-inline-end:"/Users/kwame/Desktop/gitNew_risk/src/pages/step12-1/step12-1.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], Step12_1Page);

//# sourceMappingURL=step12-1.js.map

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Step12Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__psycho_test3_psycho_test3__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__step12_1_step12_1__ = __webpack_require__(121);
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
 * Generated class for the Step12Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Step12Page = (function () {
    function Step12Page(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.valueTestGyneco = navParams.get('userParams');
        this.QuestionText = navParams.get('QuestionText');
    }
    Step12Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Step12Page');
    };
    Step12Page.prototype.yesClick = function () {
        if (this.no.value == true) {
            this.no.value = false;
        }
    };
    Step12Page.prototype.noClick = function () {
        if (this.yes.value == true) {
            this.yes.value = false;
        }
    };
    Step12Page.prototype.goNextStep = function () {
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
            console.log(this.valueTestGyneco);
            this.valueTestGyneco.Cesarienne = this.result;
            if (this.valueTestGyneco.nbChild == 1 || this.result == 0)
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__psycho_test3_psycho_test3__["a" /* PsychoTest3Page */], {
                    userParams: this.valueTestGyneco,
                    QuestionText: this.QuestionText
                });
            else
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__step12_1_step12_1__["a" /* Step12_1Page */], {
                    userParams: this.valueTestGyneco,
                    QuestionText: this.QuestionText
                });
        }
    };
    return Step12Page;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('yes'),
    __metadata("design:type", Object)
], Step12Page.prototype, "yes", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('no'),
    __metadata("design:type", Object)
], Step12Page.prototype, "no", void 0);
Step12Page = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-step12',template:/*ion-inline-start:"/Users/kwame/Desktop/gitNew_risk/src/pages/step12/step12.html"*/'<!--\n  Generated template for the Step12Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>step12</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<h3 class="form-question-title">{{QuestionText.step12}}</h3>\n		<ion-list>\n		<ion-item>\n			<ion-label>Oui</ion-label>\n			<ion-checkbox (click)="yesClick()" #yes></ion-checkbox>\n		</ion-item>\n		<ion-item>\n			<ion-label>	Non</ion-label>\n			<ion-checkbox (click)="noClick()" #no></ion-checkbox>\n		</ion-item>				\n	</ion-list>\n	<button ion-button (click)="goNextStep()">\n		Valider\n	</button>\n</ion-content>\n'/*ion-inline-end:"/Users/kwame/Desktop/gitNew_risk/src/pages/step12/step12.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], Step12Page);

//# sourceMappingURL=step12.js.map

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Step10Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__psycho_test1_psycho_test1__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__step11_step11__ = __webpack_require__(39);
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
 * Generated class for the Step10Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Step10Page = (function () {
    function Step10Page(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.valueTestGyneco = navParams.get('userParams');
        this.QuestionText = navParams.get('QuestionText');
    }
    Step10Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Step10Page');
    };
    Step10Page.prototype.yesClick = function () {
        if (this.no.value == true) {
            this.no.value = false;
        }
    };
    Step10Page.prototype.noClick = function () {
        if (this.yes.value == true) {
            this.yes.value = false;
        }
    };
    Step10Page.prototype.goNextStep = function () {
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
            this.valueTestGyneco.preEclampsy = this.result;
            if (this.valueTestGyneco.child == 1)
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__psycho_test1_psycho_test1__["a" /* PsychoTest1Page */], {
                    userParams: this.valueTestGyneco,
                    QuestionText: this.QuestionText
                });
            else
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__step11_step11__["a" /* Step11Page */], {
                    userParams: this.valueTestGyneco,
                    QuestionText: this.QuestionText
                });
        }
    };
    return Step10Page;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('yes'),
    __metadata("design:type", Object)
], Step10Page.prototype, "yes", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('no'),
    __metadata("design:type", Object)
], Step10Page.prototype, "no", void 0);
Step10Page = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-step10',template:/*ion-inline-start:"/Users/kwame/Desktop/gitNew_risk/src/pages/step10/step10.html"*/'<!--\n  Generated template for the Step10Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>step10</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<h3 class="form-question-title">{{QuestionText.step10}}</h3>\n	<ion-list>\n		<ion-item>\n			<ion-label>Oui</ion-label>\n			<ion-checkbox (click)="yesClick()" #yes></ion-checkbox>\n		</ion-item>\n		<ion-item>\n			<ion-label>	Non</ion-label>\n			<ion-checkbox (click)="noClick()" #no></ion-checkbox>\n		</ion-item>				\n	</ion-list>\n	<button ion-button (click)="goNextStep()">\n		Valider\n	</button>\n</ion-content>\n'/*ion-inline-end:"/Users/kwame/Desktop/gitNew_risk/src/pages/step10/step10.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], Step10Page);

//# sourceMappingURL=step10.js.map

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Step3Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__step4_step4__ = __webpack_require__(125);
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
 * Generated class for the Step3Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Step3Page = (function () {
    function Step3Page(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.valueTestGyneco = navParams.get('userParams');
        this.QuestionText = navParams.get('QuestionText');
    }
    Step3Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Step3Page');
        console.log(this.valueTestGyneco);
    };
    Step3Page.prototype.yesClick = function () {
        if (this.no.value == true) {
            this.no.value = false;
        }
    };
    Step3Page.prototype.noClick = function () {
        if (this.yes.value == true) {
            this.yes.value = false;
        }
    };
    Step3Page.prototype.goNextStep = function () {
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
            this.valueTestGyneco.smoke = this.result;
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__step4_step4__["a" /* Step4Page */], {
                userParams: this.valueTestGyneco,
                QuestionText: this.QuestionText
            });
        }
    };
    return Step3Page;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('yes'),
    __metadata("design:type", Object)
], Step3Page.prototype, "yes", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('no'),
    __metadata("design:type", Object)
], Step3Page.prototype, "no", void 0);
Step3Page = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-step3',template:/*ion-inline-start:"/Users/kwame/Desktop/gitNew_risk/src/pages/step3/step3.html"*/'<!--\n  Generated template for the Step3Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>step3</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n<h3 class="form-question-title">{{QuestionText.step3}}</h3>\n\n			  	<ion-list>\n	  				<ion-item>\n						<ion-label>Oui</ion-label>\n						<ion-checkbox (click)="yesClick()" #yes></ion-checkbox>\n			 		</ion-item>\n			 		<ion-item>\n						<ion-label>	Non</ion-label>\n						<ion-checkbox (click)="noClick()" #no></ion-checkbox>\n					</ion-item>\n					\n				</ion-list>\n\n\n			<button ion-button (click)="goNextStep()">\n				Valider\n			</button>\n\n</ion-content>\n'/*ion-inline-end:"/Users/kwame/Desktop/gitNew_risk/src/pages/step3/step3.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], Step3Page);

//# sourceMappingURL=step3.js.map

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Step4Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__step5_step5__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__psycho_test2_psycho_test2__ = __webpack_require__(129);
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
 * Generated class for the Step4Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Step4Page = (function () {
    function Step4Page(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.valueTestGyneco = navParams.get('userParams');
        this.QuestionText = navParams.get('QuestionText');
    }
    Step4Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Step4Page');
    };
    Step4Page.prototype.yesClick = function () {
        if (this.no.value == true) {
            this.no.value = false;
        }
    };
    Step4Page.prototype.noClick = function () {
        if (this.yes.value == true) {
            this.yes.value = false;
        }
    };
    Step4Page.prototype.goNextStep = function () {
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
            this.valueTestGyneco.child = this.result;
            if (this.result == 1) {
                this.QuestionText.psychoTest3 = "Vous et votre accouchement";
                this.QuestionText.psychoTest3_1 = "forceps";
                this.QuestionText.psychoTest3_2 = "ventouse";
                this.QuestionText.psychoTest3_3 = "césarienne en urgence";
                this.QuestionText.psychoTest3_4 = "anesthésie générale";
                this.QuestionText.psychoTest3_5 = "hémorragie";
                this.QuestionText.psychoTest3_6 = "Séparation avec le bébé à la naissance pendant plus de 6 heures";
                this.QuestionText.psychoTest3_7 = "penser que j'allais mourrir en accouchant";
                this.QuestionText.psychoTest3_8 = "penser que mon bébé allait mourrir";
                this.QuestionText.psychoTest3_9 = "j'ai subit un accouchement traumatique";
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__step5_step5__["a" /* Step5Page */], {
                    userParams: this.valueTestGyneco,
                    QuestionText: this.QuestionText
                });
            }
            else {
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__psycho_test2_psycho_test2__["a" /* PsychoTest2Page */], {
                    userParams: this.valueTestGyneco,
                    QuestionText: this.QuestionText
                });
            }
        }
    };
    return Step4Page;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('yes'),
    __metadata("design:type", Object)
], Step4Page.prototype, "yes", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('no'),
    __metadata("design:type", Object)
], Step4Page.prototype, "no", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('idn'),
    __metadata("design:type", Object)
], Step4Page.prototype, "idn", void 0);
Step4Page = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-step4',template:/*ion-inline-start:"/Users/kwame/Desktop/gitNew_risk/src/pages/step4/step4.html"*/'<!--\n  Generated template for the Step4Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>step4</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n		\n<h3 class="form-question-title">{{QuestionText.step4}}</h3>\n\n			  	<ion-list>\n	  				<ion-item>\n						<ion-label>Oui</ion-label>\n						<ion-checkbox (click)="yesClick()" #yes></ion-checkbox>\n			 		</ion-item>\n			 		<ion-item>\n						<ion-label>	Non</ion-label>\n						<ion-checkbox (click)="noClick()" #no></ion-checkbox>\n					</ion-item>\n					\n				</ion-list>\n\n\n			<button ion-button (click)="goNextStep()">\n				Valider\n			</button>\n</ion-content>\n'/*ion-inline-end:"/Users/kwame/Desktop/gitNew_risk/src/pages/step4/step4.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], Step4Page);

//# sourceMappingURL=step4.js.map

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Step5Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__step6_step6__ = __webpack_require__(127);
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
 * Generated class for the Step5Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Step5Page = (function () {
    function Step5Page(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.valueTestGyneco = navParams.get('userParams');
        this.QuestionText = navParams.get('QuestionText');
    }
    Step5Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Step5Page');
    };
    Step5Page.prototype.goNextStep = function () {
        this.valueTestGyneco = [];
        this.valueTestGyneco.nbChild = this.nbChild.value;
        if (!this.nbChild.value || this.nbChild.value == 0) {
            var alert_1 = this.alertCtrl.create({
                title: 'Rentrez le nombre d\'enfant',
                subTitle: 'Nous avons besoin de toutes les informations qui vous sont demandé pour établir votre profil',
                buttons: ['OK']
            });
            alert_1.present();
        }
        else {
            if (this.nbChild.value > 1) {
                this.QuestionText.step6 = "Avez-vous accouché d'un ou plusieurs enfants de plus de 4 kilos ?";
                this.QuestionText.step8 = "Avez-vous accouché d'un ou plusieurs enfants de moins de 2kg200 ?";
                this.QuestionText.step12 = "Avez-vous eu une ou des césariennes ?";
            }
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__step6_step6__["a" /* Step6Page */], {
                userParams: this.valueTestGyneco,
                QuestionText: this.QuestionText
            });
        }
    };
    return Step5Page;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('nbChild'),
    __metadata("design:type", Object)
], Step5Page.prototype, "nbChild", void 0);
Step5Page = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-step5',template:/*ion-inline-start:"/Users/kwame/Desktop/gitNew_risk/src/pages/step5/step5.html"*/'<!--\n  Generated template for the Step5Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>step5</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	\n<h3 class="form-question-title">{{QuestionText.step5}}</h3>\n	<ion-item>\n	<ion-label floating></ion-label>\n		<ion-input type="number" #nbChild></ion-input>\n	</ion-item>\n			<button ion-button (click)="goNextStep()">\n				Valider\n			</button>\n</ion-content>\n'/*ion-inline-end:"/Users/kwame/Desktop/gitNew_risk/src/pages/step5/step5.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], Step5Page);

//# sourceMappingURL=step5.js.map

/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Step6Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__step8_step8__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__step11_step11__ = __webpack_require__(39);
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
            console.log(this.valueTestGyneco);
            if (this.valueTestGyneco.nbChild == 1 && this.result == 1)
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__step11_step11__["a" /* Step11Page */], {
                    userParams: this.valueTestGyneco,
                    QuestionText: this.QuestionText
                });
            else
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__step8_step8__["a" /* Step8Page */], {
                    userParams: this.valueTestGyneco,
                    QuestionText: this.QuestionText
                });
        }
    };
    return Step6Page;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('yes'),
    __metadata("design:type", Object)
], Step6Page.prototype, "yes", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('no'),
    __metadata("design:type", Object)
], Step6Page.prototype, "no", void 0);
Step6Page = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-step6',template:/*ion-inline-start:"/Users/kwame/Desktop/gitNew_risk/src/pages/step6/step6.html"*/'<!--\n  Generated template for the Step6Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>step6</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	\n	<h3 class="form-question-title">{{QuestionText.step6}}</h3>\n	<ion-list>\n		<ion-item>\n			<ion-label>Oui</ion-label>\n			<ion-checkbox (click)="yesClick()" #yes></ion-checkbox>\n		</ion-item>\n		<ion-item>\n			<ion-label>	Non</ion-label>\n			<ion-checkbox (click)="noClick()" #no></ion-checkbox>\n		</ion-item>				\n	</ion-list>\n	<button ion-button (click)="goNextStep()">\n		Valider\n	</button>\n</ion-content>\n'/*ion-inline-end:"/Users/kwame/Desktop/gitNew_risk/src/pages/step6/step6.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], Step6Page);

//# sourceMappingURL=step6.js.map

/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Step9Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__step10_step10__ = __webpack_require__(123);
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
 * Generated class for the Step9Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Step9Page = (function () {
    function Step9Page(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.valueTestGyneco = navParams.get('userParams');
        this.QuestionText = navParams.get('QuestionText');
    }
    Step9Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Step9Page');
    };
    Step9Page.prototype.yesClick = function () {
        if (this.no.value == true) {
            this.no.value = false;
        }
    };
    Step9Page.prototype.noClick = function () {
        if (this.yes.value == true) {
            this.yes.value = false;
        }
    };
    Step9Page.prototype.goNextStep = function () {
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
            this.valueTestGyneco.premaChild = this.result;
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__step10_step10__["a" /* Step10Page */], {
                userParams: this.valueTestGyneco,
                QuestionText: this.QuestionText
            });
        }
    };
    return Step9Page;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('yes'),
    __metadata("design:type", Object)
], Step9Page.prototype, "yes", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('no'),
    __metadata("design:type", Object)
], Step9Page.prototype, "no", void 0);
Step9Page = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-step9',template:/*ion-inline-start:"/Users/kwame/Desktop/gitNew_risk/src/pages/step9/step9.html"*/'<!--\n  Generated template for the Step9Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>step9</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<h3 class="form-question-title">{{QuestionText.step9}}</h3>\n	<ion-list>\n		<ion-item>\n			<ion-label>Oui</ion-label>\n			<ion-checkbox (click)="yesClick()" #yes></ion-checkbox>\n		</ion-item>\n		<ion-item>\n			<ion-label>	Non</ion-label>\n			<ion-checkbox (click)="noClick()" #no></ion-checkbox>\n		</ion-item>				\n	</ion-list>\n	<button ion-button (click)="goNextStep()">\n		Valider\n	</button>\n</ion-content>\n'/*ion-inline-end:"/Users/kwame/Desktop/gitNew_risk/src/pages/step9/step9.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], Step9Page);

//# sourceMappingURL=step9.js.map

/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PsychoTest2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__step13_step13__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__step14_step14__ = __webpack_require__(53);
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
 * Generated class for the PsychoTest2Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var PsychoTest2Page = (function () {
    function PsychoTest2Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.valueTestGyneco = navParams.get('userParams');
        this.QuestionText = navParams.get('QuestionText');
    }
    PsychoTest2Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PsychoTest2Page');
    };
    PsychoTest2Page.prototype.goNextStep = function () {
        this.valueTestGyneco.psycho2 = [];
        this.valueTestGyneco.psycho2.result = 0;
        if (this.IVG.value) {
            this.valueTestGyneco.psycho2.IVG = 1;
            this.valueTestGyneco.psycho2.result += 1;
        }
        if (this.GEU.value) {
            this.valueTestGyneco.psycho2.GEU = 1;
            this.valueTestGyneco.psycho2.result += 1;
        }
        if (this.DieInUtero.value) {
            this.valueTestGyneco.psycho2.DieInUtero = 1;
            this.valueTestGyneco.psycho2.result += 2;
        }
        if (this.IMG.value) {
            this.valueTestGyneco.psycho2.IMG = 1;
            this.valueTestGyneco.psycho2.result += 2;
        }
        if (this.ISG.value) {
            this.valueTestGyneco.psycho2.ISG = 1;
            this.valueTestGyneco.psycho2.result += 3;
        }
        if (this.ChildHandicap.value) {
            this.valueTestGyneco.psycho2.ChildHandicap = 1;
            this.valueTestGyneco.psycho2.result += 3;
        }
        if (this.ChildPrema.value) {
            this.valueTestGyneco.psycho2.ChildPrema = 1;
            this.valueTestGyneco.psycho2.result += 1;
        }
        if (this.ChildChroniqueSeek.value) {
            this.valueTestGyneco.psycho2.ChildChroniqueSeek = 1;
            this.valueTestGyneco.psycho2.result += 3;
        }
        if (this.DieBabyP.value) {
            this.valueTestGyneco.psycho2.DieBabyP = 1;
            this.valueTestGyneco.psycho2.result += 2;
        }
        if (this.PregnantTraumaPsy.value) {
            this.valueTestGyneco.psycho2.PregnantTraumaPsy = 1;
            this.valueTestGyneco.psycho2.result += 10;
        }
        if (this.TraumaExperiencePsy.value) {
            this.valueTestGyneco.psycho2.TraumaExperiencePsy = 1;
            this.valueTestGyneco.psycho2.result += 10;
        }
        if (this.fausseCouche.value == true) {
            this.valueTestGyneco.fausseCouche = 1;
            this.valueTestGyneco.psycho2.result += 2;
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__step13_step13__["a" /* Step13Page */], {
                userParams: this.valueTestGyneco,
                QuestionText: this.QuestionText
            });
        }
        else
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__step14_step14__["a" /* Step14Page */], {
                userParams: this.valueTestGyneco,
                QuestionText: this.QuestionText
            });
    };
    return PsychoTest2Page;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('fausseCouche'),
    __metadata("design:type", Object)
], PsychoTest2Page.prototype, "fausseCouche", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('IVG'),
    __metadata("design:type", Object)
], PsychoTest2Page.prototype, "IVG", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('GEU'),
    __metadata("design:type", Object)
], PsychoTest2Page.prototype, "GEU", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('DieInUtero'),
    __metadata("design:type", Object)
], PsychoTest2Page.prototype, "DieInUtero", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('IMG'),
    __metadata("design:type", Object)
], PsychoTest2Page.prototype, "IMG", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('ISG'),
    __metadata("design:type", Object)
], PsychoTest2Page.prototype, "ISG", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('ChildHandicap'),
    __metadata("design:type", Object)
], PsychoTest2Page.prototype, "ChildHandicap", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('ChildPrema'),
    __metadata("design:type", Object)
], PsychoTest2Page.prototype, "ChildPrema", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('ChildChroniqueSeek'),
    __metadata("design:type", Object)
], PsychoTest2Page.prototype, "ChildChroniqueSeek", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('DieBabyP'),
    __metadata("design:type", Object)
], PsychoTest2Page.prototype, "DieBabyP", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('PregnantTraumaPsy'),
    __metadata("design:type", Object)
], PsychoTest2Page.prototype, "PregnantTraumaPsy", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('TraumaExperiencePsy'),
    __metadata("design:type", Object)
], PsychoTest2Page.prototype, "TraumaExperiencePsy", void 0);
PsychoTest2Page = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-psycho-test2',template:/*ion-inline-start:"/Users/kwame/Desktop/gitNew_risk/src/pages/psycho-test2/psycho-test2.html"*/'<!--\n  Generated template for the PsychoTest2Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>psychoTest2</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<h3 class="form-question-title">{{QuestionText.psychoTest2}}</h3>\n			<ion-list>\n				<ion-item>	\n					<ion-label>{{QuestionText.psychoTest2_1}}</ion-label>\n					<ion-checkbox #fausseCouche></ion-checkbox>\n				</ion-item>\n				<ion-item>	\n					<ion-label>{{QuestionText.psychoTest2_2}}</ion-label>\n					<ion-checkbox #IVG></ion-checkbox>\n				</ion-item>\n				<ion-item>	\n					<ion-label>{{QuestionText.psychoTest2_3}}</ion-label>\n					<ion-checkbox #GEU></ion-checkbox>\n				</ion-item>\n				<ion-item>	\n					<ion-label>{{QuestionText.psychoTest2_4}}</ion-label>\n					<ion-checkbox #DieInUtero></ion-checkbox>\n				</ion-item>\n				<ion-item>			\n					<ion-label>{{QuestionText.psychoTest2_5}}</ion-label>\n					<ion-checkbox #IMG></ion-checkbox>\n				</ion-item>\n				<ion-item>					\n					<ion-label>{{QuestionText.psychoTest2_6}}</ion-label>\n					<ion-checkbox #ISG></ion-checkbox>\n				</ion-item>\n				<ion-item>	\n					<ion-label>{{QuestionText.psychoTest2_7}}</ion-label>\n					<ion-checkbox #ChildHandicap></ion-checkbox>\n				</ion-item>\n				<ion-item>	\n					<ion-label>{{QuestionText.psychoTest2_8}}</ion-label>\n					<ion-checkbox #ChildPrema></ion-checkbox>\n				</ion-item>\n				<ion-item>	\n					<ion-label>{{QuestionText.psychoTest2_9}}</ion-label>\n					<ion-checkbox #ChildChroniqueSeek></ion-checkbox>\n				</ion-item>\n				<ion-item>	\n					<ion-label>{{QuestionText.psychoTest2_10}}</ion-label>\n					<ion-checkbox #DieBabyP></ion-checkbox>\n				</ion-item>\n				<ion-item>	\n					<ion-label>{{QuestionText.psychoTest2_11}}</ion-label>\n					<ion-checkbox ng-hide="FC == 0 && GEU == 0 && DieInUtero == 0 && ISG == 0 && ChildHandicap == 0 && ChildPrema == 0 && ChildChroniqueSeek == 0 && DieBabyP == 0 && IVG == 0  " #PregnantTraumaPsy></ion-checkbox>\n				</ion-item>\n				<ion-item>	\n					<ion-label>{{QuestionText.psychoTest2_12}}</ion-label>\n					<ion-checkbox #TraumaExperiencePsy></ion-checkbox>\n				</ion-item>\n			</ion-list>\n	<button ion-button (click)="goNextStep()">\n		Valider\n	</button>\n	\n</ion-content>\n'/*ion-inline-end:"/Users/kwame/Desktop/gitNew_risk/src/pages/psycho-test2/psycho-test2.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], PsychoTest2Page);

//# sourceMappingURL=psycho-test2.js.map

/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Step2_1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ivg_info_ivg_info__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__psycho_test1_psycho_test1__ = __webpack_require__(40);
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
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__ivg_info_ivg_info__["a" /* IvgInfoPage */], {
                    userParams: this.valueTestGyneco,
                    QuestionText: this.QuestionText
                });
            }
            else {
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__psycho_test1_psycho_test1__["a" /* PsychoTest1Page */], {
                    userParams: this.valueTestGyneco,
                    QuestionText: this.QuestionText
                });
            }
        }
    };
    return Step2_1Page;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('yes'),
    __metadata("design:type", Object)
], Step2_1Page.prototype, "yes", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('no'),
    __metadata("design:type", Object)
], Step2_1Page.prototype, "no", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('idn'),
    __metadata("design:type", Object)
], Step2_1Page.prototype, "idn", void 0);
Step2_1Page = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-step2-1',template:/*ion-inline-start:"/Users/kwame/Desktop/gitNew_risk/src/pages/step2-1/step2-1.html"*/'<!--\n  Generated template for the Step2_1Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>step2_1</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<h3 class="form-question-title">\n			{{QuestionText.step2_1}}\n	</h3>\n\n			  	<ion-list>\n	  				<ion-item>\n						<ion-label>Oui</ion-label>\n						<ion-checkbox (click)="yesClick()" #yes></ion-checkbox>\n			 		</ion-item>\n			 		<ion-item>\n						<ion-label>	Non</ion-label>\n						<ion-checkbox (click)="noClick()" #no></ion-checkbox>\n					</ion-item>\n					<ion-item>\n						<ion-label>Je ne sais pas</ion-label>\n						<ion-checkbox (click)="idnClick()" #idn></ion-checkbox>\n					</ion-item>\n				</ion-list>\n\n\n			<button ion-button (click)="goNextStep()">\n				Valider\n			</button>\n\n</ion-content>\n'/*ion-inline-end:"/Users/kwame/Desktop/gitNew_risk/src/pages/step2-1/step2-1.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], Step2_1Page);

//# sourceMappingURL=step2-1.js.map

/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenstruationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__step2_1_step2_1__ = __webpack_require__(130);
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
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__step2_1_step2_1__["a" /* Step2_1Page */], {
                userParams: this.valueTestGyneco,
                QuestionText: this.QuestionText
            });
        }
    };
    return MenstruationPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('menstruation'),
    __metadata("design:type", Object)
], MenstruationPage.prototype, "menstruation", void 0);
MenstruationPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-menstruation',template:/*ion-inline-start:"/Users/kwame/Desktop/gitNew_risk/src/pages/menstruation/menstruation.html"*/'<!--\n  Generated template for the MenstruationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>menstruation</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<h3 class="form-question-title">{{QuestionText.menstruation}}</h3>\n	\n	<ion-item>\n		<ion-label stacked>Date de vos derniere regles</ion-label>\n		<ion-input type="date" #menstruation></ion-input>\n	</ion-item>\n	<button ion-button (click)="goNextStep()">\n				Valider\n	</button>\n</ion-content>\n'/*ion-inline-end:"/Users/kwame/Desktop/gitNew_risk/src/pages/menstruation/menstruation.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], MenstruationPage);

//# sourceMappingURL=menstruation.js.map

/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Step2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menstruation_menstruation__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__psycho_test1_psycho_test1__ = __webpack_require__(40);
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
 * Generated class for the Step2Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Step2Page = (function () {
    function Step2Page(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.valueTestGyneco = navParams.get('userParams');
        this.QuestionText = navParams.get('QuestionText');
    }
    Step2Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Step2Page');
    };
    Step2Page.prototype.yesClick = function () {
        if (this.no.value == true || this.idn.value == true) {
            this.no.value = false;
            this.idn.value = false;
        }
    };
    Step2Page.prototype.noClick = function () {
        if (this.yes.value == true || this.idn.value == true) {
            this.yes.value = false;
            this.idn.value = false;
        }
    };
    Step2Page.prototype.idnClick = function () {
        if (this.no.value == true || this.yes.value == true) {
            this.no.value = false;
            this.yes.value = false;
        }
    };
    Step2Page.prototype.goNextStep = function () {
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
            this.valueTestGyneco.pregnant = this.result;
            if (this.result == 0) {
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__psycho_test1_psycho_test1__["a" /* PsychoTest1Page */], {
                    userParams: this.valueTestGyneco,
                    QuestionText: this.QuestionText
                });
            }
            else {
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__menstruation_menstruation__["a" /* MenstruationPage */], {
                    userParams: this.valueTestGyneco,
                    QuestionText: this.QuestionText
                });
            }
        }
    };
    return Step2Page;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('yes'),
    __metadata("design:type", Object)
], Step2Page.prototype, "yes", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('no'),
    __metadata("design:type", Object)
], Step2Page.prototype, "no", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('idn'),
    __metadata("design:type", Object)
], Step2Page.prototype, "idn", void 0);
Step2Page = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-step2',template:/*ion-inline-start:"/Users/kwame/Desktop/gitNew_risk/src/pages/step2/step2.html"*/'<!--\n  Generated template for the Step2Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>step2</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n		<h3 class="form-question-title">\n			{{QuestionText.step2}}\n		</h3>\n\n			  	<ion-list>\n	  				<ion-item>\n						<ion-label>Oui</ion-label>\n						<ion-checkbox (click)="yesClick()" #yes></ion-checkbox>\n			 		</ion-item>\n			 		<ion-item>\n						<ion-label>	Non</ion-label>\n						<ion-checkbox (click)="noClick()" #no></ion-checkbox>\n					</ion-item>\n					<ion-item>\n						<ion-label>Je ne sais pas</ion-label>\n						<ion-checkbox (click)="idnClick()" #idn></ion-checkbox>\n					</ion-item>\n				</ion-list>\n\n\n			<button ion-button (click)="goNextStep()">\n				Valider\n			</button>\n\n</ion-content>\n'/*ion-inline-end:"/Users/kwame/Desktop/gitNew_risk/src/pages/step2/step2.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], Step2Page);

//# sourceMappingURL=step2.js.map

/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Step1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__step2_step2__ = __webpack_require__(132);
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
 * Generated class for the Step1Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Step1Page = (function () {
    function Step1Page(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.QuestionText = navParams.get('QuestionText');
    }
    Step1Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Step1Page');
        this.tests = [];
        this.tests.push({ name: 1 });
        this.tests.push({ name: 2 });
        console.log(this.tests);
    };
    Step1Page.prototype.goNextStep = function () {
        this.valueTestGyneco = [];
        this.valueTestGyneco.age = this.age.value;
        if (!this.age.value) {
            var alert_1 = this.alertCtrl.create({
                title: 'Rentrez votre age',
                subTitle: 'Nous avons besoin de toutes les informations qui vous sont demandé pour établir votre profil',
                buttons: ['OK']
            });
            alert_1.present();
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__step2_step2__["a" /* Step2Page */], {
                userParams: this.valueTestGyneco,
                QuestionText: this.QuestionText
            });
        }
    };
    return Step1Page;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('age'),
    __metadata("design:type", Object)
], Step1Page.prototype, "age", void 0);
Step1Page = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-step1',template:/*ion-inline-start:"/Users/kwame/Desktop/gitNew_risk/src/pages/step1/step1.html"*/'<!--\n  Generated template for the Step1Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>step1</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<div class="slidebox">\n<div class="slideContent">\n	<h3 class="form-question-title">\n			{{QuestionText.step1}}\n	</h3>\n\n	<ion-item>\n	<ion-label floating>Age en année</ion-label>\n		<ion-input type="number" #age></ion-input>\n	</ion-item>\n	</div>\n	</div>\n	<div class="next">\n			<button ion-button class="button next-button touch" (click)="goNextStep()">\n				Valider\n			</button>\n			</div>\n</ion-content>\n'/*ion-inline-end:"/Users/kwame/Desktop/gitNew_risk/src/pages/step1/step1.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], Step1Page);

//# sourceMappingURL=step1.js.map

/***/ }),

/***/ 141:
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
webpackEmptyAsyncContext.id = 141;

/***/ }),

/***/ 182:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/ivg-info/ivg-info.module": [
		302,
		34
	],
	"../pages/menstruation/menstruation.module": [
		334,
		33
	],
	"../pages/psycho-test1/psycho-test1.module": [
		332,
		32
	],
	"../pages/psycho-test2/psycho-test2.module": [
		329,
		31
	],
	"../pages/psycho-test3/psycho-test3.module": [
		319,
		30
	],
	"../pages/psycho-test4/psycho-test4.module": [
		304,
		29
	],
	"../pages/result/result.module": [
		303,
		28
	],
	"../pages/step1/step1.module": [
		336,
		27
	],
	"../pages/step10/step10.module": [
		323,
		26
	],
	"../pages/step11/step11.module": [
		322,
		25
	],
	"../pages/step12-1/step12-1.module": [
		320,
		24
	],
	"../pages/step12/step12.module": [
		321,
		23
	],
	"../pages/step13/step13.module": [
		318,
		22
	],
	"../pages/step14/step14.module": [
		317,
		21
	],
	"../pages/step15/step15.module": [
		316,
		20
	],
	"../pages/step16/step16.module": [
		315,
		19
	],
	"../pages/step17/step17.module": [
		314,
		18
	],
	"../pages/step18/step18.module": [
		313,
		17
	],
	"../pages/step19/step19.module": [
		312,
		16
	],
	"../pages/step2-1/step2-1.module": [
		333,
		15
	],
	"../pages/step2/step2.module": [
		335,
		14
	],
	"../pages/step20/step20.module": [
		311,
		13
	],
	"../pages/step21/step21.module": [
		310,
		12
	],
	"../pages/step22/step22.module": [
		309,
		11
	],
	"../pages/step23/step23.module": [
		308,
		10
	],
	"../pages/step24/step24.module": [
		307,
		9
	],
	"../pages/step25/step25.module": [
		306,
		8
	],
	"../pages/step26/step26.module": [
		305,
		7
	],
	"../pages/step3/step3.module": [
		331,
		6
	],
	"../pages/step4/step4.module": [
		330,
		5
	],
	"../pages/step5/step5.module": [
		328,
		4
	],
	"../pages/step6/step6.module": [
		327,
		3
	],
	"../pages/step7/step7.module": [
		326,
		2
	],
	"../pages/step8/step8.module": [
		325,
		1
	],
	"../pages/step9/step9.module": [
		324,
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
webpackAsyncContext.id = 182;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return AboutPage;
}());
AboutPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-about',template:/*ion-inline-start:"/Users/kwame/Desktop/gitNew_risk/src/pages/about/about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      About\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/kwame/Desktop/gitNew_risk/src/pages/about/about.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], AboutPage);

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Step7Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__step8_step8__ = __webpack_require__(56);
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
 * Generated class for the Step7Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Step7Page = (function () {
    function Step7Page(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.valueTestGyneco = navParams.get('userParams');
        this.QuestionText = navParams.get('QuestionText');
    }
    Step7Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Step7Page');
    };
    Step7Page.prototype.goNextStep = function () {
        this.valueTestGyneco = [];
        this.valueTestGyneco.age = this.nbBigChild.value;
        if (!this.nbBigChild.value || this.nbBigChild.value == 0) {
            var alert_1 = this.alertCtrl.create({
                title: 'Rentrez votre age',
                subTitle: 'Nous avons besoin de toutes les informations qui vous sont demandé pour établir votre profil',
                buttons: ['OK']
            });
            alert_1.present();
        }
        else {
            this.valueTestGyneco.nbBigChild = this.nbBigChild.value;
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__step8_step8__["a" /* Step8Page */], {
                userParams: this.valueTestGyneco,
                QuestionText: this.QuestionText
            });
        }
    };
    return Step7Page;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('nbBigChild'),
    __metadata("design:type", Object)
], Step7Page.prototype, "nbBigChild", void 0);
Step7Page = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-step7',template:/*ion-inline-start:"/Users/kwame/Desktop/gitNew_risk/src/pages/step7/step7.html"*/'<!--\n  Generated template for the Step7Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>step7</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<h3 class="form-question-title">{{QuestionText.step7}}</h3>\n\n	<ion-item>\n	<ion-label floating>Age en année</ion-label>\n		<ion-input type="number" #nbBigChild></ion-input>\n	</ion-item>\n			<button ion-button (click)="goNextStep()">\n				Valider\n			</button>\n</ion-content>\n'/*ion-inline-end:"/Users/kwame/Desktop/gitNew_risk/src/pages/step7/step7.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], Step7Page);

//# sourceMappingURL=step7.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(247);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_result_result__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_step1_step1__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_step2_step2__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_step3_step3__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_menstruation_menstruation__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_step2_1_step2_1__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_ivg_info_ivg_info__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_step4_step4__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_step5_step5__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_step6_step6__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_step7_step7__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_step8_step8__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_step9_step9__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_step10_step10__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_step11_step11__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_step12_step12__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_step12_1_step12_1__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_step13_step13__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_step14_step14__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_step15_step15__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_step16_step16__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_step17_step17__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_step18_step18__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_step19_step19__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_step20_step20__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_step21_step21__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_step22_step22__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_step23_step23__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_step24_step24__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_step25_step25__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_step26_step26__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_psycho_test1_psycho_test1__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_psycho_test2_psycho_test2__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_psycho_test3_psycho_test3__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pages_psycho_test4_psycho_test4__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__ionic_native_status_bar__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__ionic_native_splash_screen__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__ionic_storage__ = __webpack_require__(298);
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
            __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_result_result__["a" /* ResultPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_step1_step1__["a" /* Step1Page */],
            __WEBPACK_IMPORTED_MODULE_9__pages_step2_step2__["a" /* Step2Page */],
            __WEBPACK_IMPORTED_MODULE_10__pages_step3_step3__["a" /* Step3Page */],
            __WEBPACK_IMPORTED_MODULE_11__pages_menstruation_menstruation__["a" /* MenstruationPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_step2_1_step2_1__["a" /* Step2_1Page */],
            __WEBPACK_IMPORTED_MODULE_13__pages_ivg_info_ivg_info__["a" /* IvgInfoPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_step4_step4__["a" /* Step4Page */],
            __WEBPACK_IMPORTED_MODULE_15__pages_step5_step5__["a" /* Step5Page */],
            __WEBPACK_IMPORTED_MODULE_16__pages_step6_step6__["a" /* Step6Page */],
            __WEBPACK_IMPORTED_MODULE_17__pages_step7_step7__["a" /* Step7Page */],
            __WEBPACK_IMPORTED_MODULE_18__pages_step8_step8__["a" /* Step8Page */],
            __WEBPACK_IMPORTED_MODULE_19__pages_step9_step9__["a" /* Step9Page */],
            __WEBPACK_IMPORTED_MODULE_20__pages_step10_step10__["a" /* Step10Page */],
            __WEBPACK_IMPORTED_MODULE_21__pages_step11_step11__["a" /* Step11Page */],
            __WEBPACK_IMPORTED_MODULE_22__pages_step12_step12__["a" /* Step12Page */],
            __WEBPACK_IMPORTED_MODULE_23__pages_step12_1_step12_1__["a" /* Step12_1Page */],
            __WEBPACK_IMPORTED_MODULE_24__pages_step13_step13__["a" /* Step13Page */],
            __WEBPACK_IMPORTED_MODULE_25__pages_step14_step14__["a" /* Step14Page */],
            __WEBPACK_IMPORTED_MODULE_26__pages_step15_step15__["a" /* Step15Page */],
            __WEBPACK_IMPORTED_MODULE_27__pages_step16_step16__["a" /* Step16Page */],
            __WEBPACK_IMPORTED_MODULE_28__pages_step17_step17__["a" /* Step17Page */],
            __WEBPACK_IMPORTED_MODULE_29__pages_step18_step18__["a" /* Step18Page */],
            __WEBPACK_IMPORTED_MODULE_30__pages_step19_step19__["a" /* Step19Page */],
            __WEBPACK_IMPORTED_MODULE_31__pages_step20_step20__["a" /* Step20Page */],
            __WEBPACK_IMPORTED_MODULE_32__pages_step21_step21__["a" /* Step21Page */],
            __WEBPACK_IMPORTED_MODULE_33__pages_step22_step22__["a" /* Step22Page */],
            __WEBPACK_IMPORTED_MODULE_34__pages_step23_step23__["a" /* Step23Page */],
            __WEBPACK_IMPORTED_MODULE_35__pages_step24_step24__["a" /* Step24Page */],
            __WEBPACK_IMPORTED_MODULE_36__pages_step25_step25__["a" /* Step25Page */],
            __WEBPACK_IMPORTED_MODULE_37__pages_step26_step26__["a" /* Step26Page */],
            __WEBPACK_IMPORTED_MODULE_38__pages_psycho_test1_psycho_test1__["a" /* PsychoTest1Page */],
            __WEBPACK_IMPORTED_MODULE_39__pages_psycho_test2_psycho_test2__["a" /* PsychoTest2Page */],
            __WEBPACK_IMPORTED_MODULE_40__pages_psycho_test3_psycho_test3__["a" /* PsychoTest3Page */],
            __WEBPACK_IMPORTED_MODULE_41__pages_psycho_test4_psycho_test4__["a" /* PsychoTest4Page */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/ivg-info/ivg-info.module#IvgInfoPageModule', name: 'IvgInfoPage', segment: 'ivg-info', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/result/result.module#ResultPageModule', name: 'ResultPage', segment: 'result', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/psycho-test4/psycho-test4.module#PsychoTest4PageModule', name: 'PsychoTest4Page', segment: 'psycho-test4', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/step26/step26.module#Step26PageModule', name: 'Step26Page', segment: 'step26', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/step25/step25.module#Step25PageModule', name: 'Step25Page', segment: 'step25', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/step24/step24.module#Step24PageModule', name: 'Step24Page', segment: 'step24', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/step23/step23.module#Step23PageModule', name: 'Step23Page', segment: 'step23', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/step22/step22.module#Step22PageModule', name: 'Step22Page', segment: 'step22', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/step21/step21.module#Step21PageModule', name: 'Step21Page', segment: 'step21', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/step20/step20.module#Step20PageModule', name: 'Step20Page', segment: 'step20', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/step19/step19.module#Step19PageModule', name: 'Step19Page', segment: 'step19', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/step18/step18.module#Step18PageModule', name: 'Step18Page', segment: 'step18', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/step17/step17.module#Step17PageModule', name: 'Step17Page', segment: 'step17', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/step16/step16.module#Step16PageModule', name: 'Step16Page', segment: 'step16', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/step15/step15.module#Step15PageModule', name: 'Step15Page', segment: 'step15', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/step14/step14.module#Step14PageModule', name: 'Step14Page', segment: 'step14', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/step13/step13.module#Step13PageModule', name: 'Step13Page', segment: 'step13', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/psycho-test3/psycho-test3.module#PsychoTest3PageModule', name: 'PsychoTest3Page', segment: 'psycho-test3', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/step12-1/step12-1.module#Step12_1PageModule', name: 'Step12_1Page', segment: 'step12-1', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/step12/step12.module#Step12PageModule', name: 'Step12Page', segment: 'step12', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/step11/step11.module#Step11PageModule', name: 'Step11Page', segment: 'step11', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/step10/step10.module#Step10PageModule', name: 'Step10Page', segment: 'step10', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/step9/step9.module#Step9PageModule', name: 'Step9Page', segment: 'step9', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/step8/step8.module#Step8PageModule', name: 'Step8Page', segment: 'step8', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/step7/step7.module#Step7PageModule', name: 'Step7Page', segment: 'step7', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/step6/step6.module#Step6PageModule', name: 'Step6Page', segment: 'step6', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/step5/step5.module#Step5PageModule', name: 'Step5Page', segment: 'step5', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/psycho-test2/psycho-test2.module#PsychoTest2PageModule', name: 'PsychoTest2Page', segment: 'psycho-test2', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/step4/step4.module#Step4PageModule', name: 'Step4Page', segment: 'step4', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/step3/step3.module#Step3PageModule', name: 'Step3Page', segment: 'step3', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/psycho-test1/psycho-test1.module#PsychoTest1PageModule', name: 'PsychoTest1Page', segment: 'psycho-test1', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/step2-1/step2-1.module#Step2_1PageModule', name: 'Step2_1Page', segment: 'step2-1', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/menstruation/menstruation.module#MenstruationPageModule', name: 'MenstruationPage', segment: 'menstruation', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/step2/step2.module#Step2PageModule', name: 'Step2Page', segment: 'step2', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/step1/step1.module#Step1PageModule', name: 'Step1Page', segment: 'step1', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_44__ionic_storage__["a" /* IonicStorageModule */].forRoot()
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_result_result__["a" /* ResultPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_step1_step1__["a" /* Step1Page */],
            __WEBPACK_IMPORTED_MODULE_9__pages_step2_step2__["a" /* Step2Page */],
            __WEBPACK_IMPORTED_MODULE_10__pages_step3_step3__["a" /* Step3Page */],
            __WEBPACK_IMPORTED_MODULE_11__pages_menstruation_menstruation__["a" /* MenstruationPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_step2_1_step2_1__["a" /* Step2_1Page */],
            __WEBPACK_IMPORTED_MODULE_13__pages_ivg_info_ivg_info__["a" /* IvgInfoPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_step4_step4__["a" /* Step4Page */],
            __WEBPACK_IMPORTED_MODULE_15__pages_step5_step5__["a" /* Step5Page */],
            __WEBPACK_IMPORTED_MODULE_16__pages_step6_step6__["a" /* Step6Page */],
            __WEBPACK_IMPORTED_MODULE_17__pages_step7_step7__["a" /* Step7Page */],
            __WEBPACK_IMPORTED_MODULE_18__pages_step8_step8__["a" /* Step8Page */],
            __WEBPACK_IMPORTED_MODULE_19__pages_step9_step9__["a" /* Step9Page */],
            __WEBPACK_IMPORTED_MODULE_20__pages_step10_step10__["a" /* Step10Page */],
            __WEBPACK_IMPORTED_MODULE_21__pages_step11_step11__["a" /* Step11Page */],
            __WEBPACK_IMPORTED_MODULE_22__pages_step12_step12__["a" /* Step12Page */],
            __WEBPACK_IMPORTED_MODULE_23__pages_step12_1_step12_1__["a" /* Step12_1Page */],
            __WEBPACK_IMPORTED_MODULE_24__pages_step13_step13__["a" /* Step13Page */],
            __WEBPACK_IMPORTED_MODULE_25__pages_step14_step14__["a" /* Step14Page */],
            __WEBPACK_IMPORTED_MODULE_26__pages_step15_step15__["a" /* Step15Page */],
            __WEBPACK_IMPORTED_MODULE_27__pages_step16_step16__["a" /* Step16Page */],
            __WEBPACK_IMPORTED_MODULE_28__pages_step17_step17__["a" /* Step17Page */],
            __WEBPACK_IMPORTED_MODULE_29__pages_step18_step18__["a" /* Step18Page */],
            __WEBPACK_IMPORTED_MODULE_30__pages_step19_step19__["a" /* Step19Page */],
            __WEBPACK_IMPORTED_MODULE_31__pages_step20_step20__["a" /* Step20Page */],
            __WEBPACK_IMPORTED_MODULE_32__pages_step21_step21__["a" /* Step21Page */],
            __WEBPACK_IMPORTED_MODULE_33__pages_step22_step22__["a" /* Step22Page */],
            __WEBPACK_IMPORTED_MODULE_34__pages_step23_step23__["a" /* Step23Page */],
            __WEBPACK_IMPORTED_MODULE_35__pages_step24_step24__["a" /* Step24Page */],
            __WEBPACK_IMPORTED_MODULE_36__pages_step25_step25__["a" /* Step25Page */],
            __WEBPACK_IMPORTED_MODULE_37__pages_step26_step26__["a" /* Step26Page */],
            __WEBPACK_IMPORTED_MODULE_38__pages_psycho_test1_psycho_test1__["a" /* PsychoTest1Page */],
            __WEBPACK_IMPORTED_MODULE_39__pages_psycho_test2_psycho_test2__["a" /* PsychoTest2Page */],
            __WEBPACK_IMPORTED_MODULE_40__pages_psycho_test3_psycho_test3__["a" /* PsychoTest3Page */],
            __WEBPACK_IMPORTED_MODULE_41__pages_psycho_test4_psycho_test4__["a" /* PsychoTest4Page */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_42__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_43__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(107);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/kwame/Desktop/gitNew_risk/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n<ion-header>\n\n  <ion-navbar class="bar-stable">\n<div class="progress-bar">\n        <div id="progression" class="progress-bar-state">\n        </div>\n      </div>\n   </ion-navbar>'/*ion-inline-end:"/Users/kwame/Desktop/gitNew_risk/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(107);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/kwame/Desktop/gitNew_risk/src/pages/tabs/tabs.html"*/'\n'/*ion-inline-end:"/Users/kwame/Desktop/gitNew_risk/src/pages/tabs/tabs.html"*/
    }),
    __metadata("design:paramtypes", [])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Step11Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__step12_step12__ = __webpack_require__(122);
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
 * Generated class for the Step11Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Step11Page = (function () {
    function Step11Page(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.valueTestGyneco = navParams.get('userParams');
        this.QuestionText = navParams.get('QuestionText');
    }
    Step11Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Step11Page');
    };
    Step11Page.prototype.yesClick = function () {
        if (this.no.value == true) {
            this.no.value = false;
        }
    };
    Step11Page.prototype.noClick = function () {
        if (this.yes.value == true) {
            this.yes.value = false;
        }
    };
    Step11Page.prototype.goNextStep = function () {
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
            this.valueTestGyneco.pregnantDiabete = this.result;
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__step12_step12__["a" /* Step12Page */], {
                userParams: this.valueTestGyneco,
                QuestionText: this.QuestionText
            });
        }
    };
    return Step11Page;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('yes'),
    __metadata("design:type", Object)
], Step11Page.prototype, "yes", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('no'),
    __metadata("design:type", Object)
], Step11Page.prototype, "no", void 0);
Step11Page = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-step11',template:/*ion-inline-start:"/Users/kwame/Desktop/gitNew_risk/src/pages/step11/step11.html"*/'<!--\n  Generated template for the Step11Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>step11</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<h3 class="form-question-title">{{QuestionText.step11}}</h3>\n	<ion-list>\n		<ion-item>\n			<ion-label>Oui</ion-label>\n			<ion-checkbox (click)="yesClick()" #yes></ion-checkbox>\n		</ion-item>\n		<ion-item>\n			<ion-label>	Non</ion-label>\n			<ion-checkbox (click)="noClick()" #no></ion-checkbox>\n		</ion-item>				\n	</ion-list>\n	<button ion-button (click)="goNextStep()">\n		Valider\n	</button>\n</ion-content>\n'/*ion-inline-end:"/Users/kwame/Desktop/gitNew_risk/src/pages/step11/step11.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], Step11Page);

//# sourceMappingURL=step11.js.map

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PsychoTest1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__step3_step3__ = __webpack_require__(124);
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
 * Generated class for the PsychoTest1Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var PsychoTest1Page = (function () {
    function PsychoTest1Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.valueTestGyneco = navParams.get('userParams');
        this.QuestionText = navParams.get('QuestionText');
    }
    PsychoTest1Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PsychoTest1Page');
        console.log(this.procreation.value);
    };
    PsychoTest1Page.prototype.goNextStep = function () {
        this.valueTestGyneco.psycho1 = [];
        this.valueTestGyneco.psycho1.result = 0;
        if (this.procreation.value) {
            this.valueTestGyneco.psycho1.result += 1;
            this.valueTestGyneco.psycho1.procreation = this.procreation.value;
            this.valueTestGyneco.psycho1.yearsProcreation = this.yearsProcreation.value;
            this.valueTestGyneco.psycho1.nbProcreation = this.nbProcreation.value;
            if (this.yearsProcreation.value <= 2)
                this.valueTestGyneco.psycho1.result += 1;
            else if (this.yearsProcreation.value > 2)
                this.valueTestGyneco.psycho1.result += 2;
        }
        if (this.oocyteDonation.value) {
            this.valueTestGyneco.psycho1.oocyteDonation = this.oocyteDonation.value;
            this.valueTestGyneco.psycho1.result += 2;
        }
        if (this.spermDonation.value) {
            this.valueTestGyneco.psycho1.spermDonation = this.spermDonation.value;
            this.valueTestGyneco.psycho1.result += 2;
        }
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__step3_step3__["a" /* Step3Page */], {
            userParams: this.valueTestGyneco,
            QuestionText: this.QuestionText
        });
    };
    return PsychoTest1Page;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('procreation'),
    __metadata("design:type", Object)
], PsychoTest1Page.prototype, "procreation", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('yearsProcreation'),
    __metadata("design:type", Object)
], PsychoTest1Page.prototype, "yearsProcreation", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('nbProcreation'),
    __metadata("design:type", Object)
], PsychoTest1Page.prototype, "nbProcreation", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('oocyteDonation'),
    __metadata("design:type", Object)
], PsychoTest1Page.prototype, "oocyteDonation", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('spermDonation'),
    __metadata("design:type", Object)
], PsychoTest1Page.prototype, "spermDonation", void 0);
PsychoTest1Page = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-psycho-test1',template:/*ion-inline-start:"/Users/kwame/Desktop/gitNew_risk/src/pages/psycho-test1/psycho-test1.html"*/'<!--\n  Generated template for the PsychoTest1Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>psychoTest1</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<h3 class="form-question-title">{{QuestionText.psychoTest1}}</h3>\n			<ion-list>\n				<ion-item>	\n					<ion-label>{{QuestionText.psychoTest1_1}}</ion-label>\n					<ion-checkbox #procreation></ion-checkbox>\n				</ion-item>\n			<div *ngIf="procreation.value">\n				<ion-item>\n					<ion-label floating>{{QuestionText.psychoTest1_2}}</ion-label>\n					<ion-input type="number" #yearsProcreation></ion-input>\n				</ion-item>\n				<ion-item>	\n					<ion-label floating>{{QuestionText.psychoTest1_3}}</ion-label>\n					<ion-input type="number" #nbProcreation></ion-input>\n				</ion-item>\n				</div>\n				<ion-item>	\n					<ion-label>{{QuestionText.psychoTest1_4}}</ion-label>\n					<ion-checkbox #oocyteDonation></ion-checkbox>\n				</ion-item>\n				<ion-item>			\n					<ion-label>{{QuestionText.psychoTest1_5}}</ion-label>\n					<ion-checkbox #spermDonation></ion-checkbox>\n				</ion-item>\n			</ion-list>\n	<button ion-button (click)="goNextStep()">\n		Valider\n	</button>\n	\n</ion-content>\n'/*ion-inline-end:"/Users/kwame/Desktop/gitNew_risk/src/pages/psycho-test1/psycho-test1.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], PsychoTest1Page);

//# sourceMappingURL=psycho-test1.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PsychoTest4Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__result_result__ = __webpack_require__(109);
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
 * Generated class for the PsychoTest4Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var PsychoTest4Page = (function () {
    function PsychoTest4Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.valueTestGyneco = navParams.get('userParams');
        this.QuestionText = navParams.get('QuestionText');
    }
    PsychoTest4Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PsychoTest4Page');
    };
    PsychoTest4Page.prototype.goNextStep = function () {
        this.valueTestGyneco.psycho4 = [];
        this.valueTestGyneco.psycho4.result = 0;
        if (this.angoisseCrise.value) {
            this.valueTestGyneco.psycho4.angoisseCrise = 1;
            this.valueTestGyneco.psycho4 += 2;
        }
        if (this.boulimie.value) {
            this.valueTestGyneco.psycho4.boulimie = 1;
            this.valueTestGyneco.psycho4.result += 2;
        }
        if (this.anorexie.value) {
            this.valueTestGyneco.psycho4.anorexie = 1;
            this.valueTestGyneco.psycho4.result += 2;
        }
        if (this.TOC.value) {
            this.valueTestGyneco.psycho4.TOC = 1;
            this.valueTestGyneco.psycho4.result += 1;
        }
        if (this.depression.value) {
            this.valueTestGyneco.psycho4.depression = 1;
            this.valueTestGyneco.psycho4.result += 2;
        }
        if (this.phobie.value) {
            this.valueTestGyneco.psycho4.phobie = 1;
            this.valueTestGyneco.psycho4.result += 1;
        }
        if (this.bipolaire.value) {
            this.valueTestGyneco.psycho4.bipolaire = 1;
            this.valueTestGyneco.psycho4.result += 2;
        }
        if (this.HPtravel.value) {
            this.valueTestGyneco.psycho4.HPtravel = 1;
            this.valueTestGyneco.psycho4.result += 2;
        }
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__result_result__["a" /* ResultPage */], {
            userParams: this.valueTestGyneco,
            QuestionText: this.QuestionText
        });
    };
    return PsychoTest4Page;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('angoisseCrise'),
    __metadata("design:type", Object)
], PsychoTest4Page.prototype, "angoisseCrise", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('boulimie'),
    __metadata("design:type", Object)
], PsychoTest4Page.prototype, "boulimie", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('anorexie'),
    __metadata("design:type", Object)
], PsychoTest4Page.prototype, "anorexie", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('TOC'),
    __metadata("design:type", Object)
], PsychoTest4Page.prototype, "TOC", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('depression'),
    __metadata("design:type", Object)
], PsychoTest4Page.prototype, "depression", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('phobie'),
    __metadata("design:type", Object)
], PsychoTest4Page.prototype, "phobie", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('bipolaire'),
    __metadata("design:type", Object)
], PsychoTest4Page.prototype, "bipolaire", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('HPtravel'),
    __metadata("design:type", Object)
], PsychoTest4Page.prototype, "HPtravel", void 0);
PsychoTest4Page = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-psycho-test4',template:/*ion-inline-start:"/Users/kwame/Desktop/gitNew_risk/src/pages/psycho-test4/psycho-test4.html"*/'<!--\n  Generated template for the PsychoTest4Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>psychoTest4</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<h3 class="form-question-title">{{QuestionText.PsychoTest4}}</h3>\n	<ion-list>\n				<ion-item>	\n					<ion-label>{{QuestionText.psychoTest4_1}}</ion-label>\n					<ion-checkbox #angoisseCrise></ion-checkbox>\n				</ion-item>\n				<ion-item>	\n					<ion-label>{{QuestionText.psychoTest4_2}}</ion-label>\n					<ion-checkbox #boulimie></ion-checkbox>\n				</ion-item>\n				<ion-item>	\n					<ion-label>{{QuestionText.psychoTest4_3}}</ion-label>\n					<ion-checkbox #anorexie></ion-checkbox>\n				</ion-item>\n				<ion-item>	\n					<ion-label>{{QuestionText.psychoTest4_4}}</ion-label>\n					<ion-checkbox #TOC></ion-checkbox>\n				</ion-item>\n				<ion-item>			\n					<ion-label>{{QuestionText.psychoTest4_5}}</ion-label>\n					<ion-checkbox #depression></ion-checkbox>\n				</ion-item>\n				<ion-item>					\n					<ion-label>{{QuestionText.psychoTest4_6}}</ion-label>\n					<ion-checkbox #phobie></ion-checkbox>\n				</ion-item>\n				<ion-item>	\n					<ion-label>{{QuestionText.psychoTest4_7}}</ion-label>\n					<ion-checkbox #bipolaire></ion-checkbox>\n				</ion-item>\n				<ion-item>	\n					<ion-label>{{QuestionText.psychoTest4_8}}</ion-label>\n					<ion-checkbox #HPtravel></ion-checkbox>\n				</ion-item>\n			</ion-list>\n	<button ion-button (click)="goNextStep()">\n		Valider\n	</button>\n</ion-content>\n'/*ion-inline-end:"/Users/kwame/Desktop/gitNew_risk/src/pages/psycho-test4/psycho-test4.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], PsychoTest4Page);

//# sourceMappingURL=psycho-test4.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Step21Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__step22_step22__ = __webpack_require__(114);
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
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__step22_step22__["a" /* Step22Page */], {
                userParams: this.valueTestGyneco,
                QuestionText: this.QuestionText
            });
        }
    };
    return Step21Page;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('size'),
    __metadata("design:type", Object)
], Step21Page.prototype, "size", void 0);
Step21Page = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-step21',template:/*ion-inline-start:"/Users/kwame/Desktop/gitNew_risk/src/pages/step21/step21.html"*/'<!--\n  Generated template for the Step21Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>step21</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<h3 class="form-question-title">{{QuestionText.step21}}</h3>\n	<ion-item>\n		<ion-label floating>en cm</ion-label>\n	    <ion-input type="number" #size></ion-input>\n	</ion-item>\n	<button ion-button (click)="goNextStep()">\n		Valider\n	</button>\n</ion-content>\n'/*ion-inline-end:"/Users/kwame/Desktop/gitNew_risk/src/pages/step21/step21.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], Step21Page);

//# sourceMappingURL=step21.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Step14Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__step15_step15__ = __webpack_require__(120);
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
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__step15_step15__["a" /* Step15Page */], {
            userParams: this.valueTestGyneco,
            QuestionText: this.QuestionText
        });
    };
    return Step14Page;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('alcool'),
    __metadata("design:type", Object)
], Step14Page.prototype, "alcool", void 0);
Step14Page = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-step14',template:/*ion-inline-start:"/Users/kwame/Desktop/gitNew_risk/src/pages/step14/step14.html"*/'<!--\n  Generated template for the Step14Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>step14</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<h3 class="form-question-title">{{QuestionText.step14}}</h3>\n\n			<ion-item>   \n				<ion-range max=30 #alcool>   \n					<ion-icon range-right max=30></ion-icon>\n				</ion-range>\n			</ion-item>\n			<p>{{alcool.value}}</p>\n			<button ion-button (click)="goNextStep()">\n				Valider\n			</button>\n</ion-content>\n'/*ion-inline-end:"/Users/kwame/Desktop/gitNew_risk/src/pages/step14/step14.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], Step14Page);

//# sourceMappingURL=step14.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Step13Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__step14_step14__ = __webpack_require__(53);
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
 * Generated class for the Step13Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Step13Page = (function () {
    function Step13Page(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.valueTestGyneco = navParams.get('userParams');
        this.QuestionText = navParams.get('QuestionText');
    }
    Step13Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Step13Page');
    };
    Step13Page.prototype.goNextStep = function () {
        this.valueTestGyneco.nbFausseCouche = this.nbFausseCouche.value;
        if (!this.nbFausseCouche.value) {
            var alert_1 = this.alertCtrl.create({
                title: 'Rentrez le nombre de fausse couche',
                subTitle: 'Nous avons besoin de toutes les informations qui vous sont demandé pour établir votre profil',
                buttons: ['OK']
            });
            alert_1.present();
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__step14_step14__["a" /* Step14Page */], {
                userParams: this.valueTestGyneco,
                QuestionText: this.QuestionText
            });
        }
    };
    return Step13Page;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('nbFausseCouche'),
    __metadata("design:type", Object)
], Step13Page.prototype, "nbFausseCouche", void 0);
Step13Page = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-step13',template:/*ion-inline-start:"/Users/kwame/Desktop/gitNew_risk/src/pages/step13/step13.html"*/'<!--\n  Generated template for the Step13Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>step13</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<h3 class="form-question-title">{{QuestionText.step13}}</h3>\n	<ion-item>\n	<ion-label floating>Entrez le nombre</ion-label>\n		<ion-input type="number" #nbFausseCouche></ion-input>\n	</ion-item>\n	<button ion-button (click)="goNextStep()">\n		Valider\n	</button>\n</ion-content>\n'/*ion-inline-end:"/Users/kwame/Desktop/gitNew_risk/src/pages/step13/step13.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], Step13Page);

//# sourceMappingURL=step13.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PsychoTest3Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__step13_step13__ = __webpack_require__(54);
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
 * Generated class for the PsychoTest3Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var PsychoTest3Page = (function () {
    function PsychoTest3Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.valueTestGyneco = navParams.get('userParams');
        this.QuestionText = navParams.get('QuestionText');
    }
    PsychoTest3Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PsychoTest3Page');
    };
    PsychoTest3Page.prototype.goNextStep = function () {
        this.valueTestGyneco.psycho3 = [];
        this.valueTestGyneco.psycho3.result = 0;
        if (this.forceps.value) {
            this.valueTestGyneco.psycho3.forceps = 1;
            this.valueTestGyneco.psycho3.result += 1;
        }
        if (this.ventouse.value) {
            this.valueTestGyneco.psycho3.ventouse = 1;
            this.valueTestGyneco.psycho3.result += 2;
        }
        if (this.cesarienneUrgence.value) {
            this.valueTestGyneco.psycho3.cesarienneUrgence = 1;
            this.valueTestGyneco.psycho3.result += 2;
        }
        if (this.generalAnest.value) {
            this.valueTestGyneco.psycho3.generalAnest = 1;
            this.valueTestGyneco.psycho3.result += 1;
        }
        if (this.hemorragie.value) {
            this.valueTestGyneco.psycho3.hemorragie = 1;
            this.valueTestGyneco.psycho3.result += 2;
        }
        if (this.babySeparation.value) {
            this.valueTestGyneco.psycho3.babySeparation = 1;
            this.valueTestGyneco.psycho3.result += 5;
        }
        if (this.dieDelivery.value) {
            this.valueTestGyneco.psycho3.dieDelivery = 1;
            this.valueTestGyneco.psycho3.result += 2;
        }
        if (this.psyDieBaby.value) {
            this.valueTestGyneco.psycho3.psyDieBaby = 1;
            this.valueTestGyneco.psycho3.result += 5;
        }
        if (this.traumaDelivery.value) {
            this.valueTestGyneco.psycho3.traumaDelivery = 1;
            this.valueTestGyneco.psycho3.result += 5;
        }
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__step13_step13__["a" /* Step13Page */], {
            userParams: this.valueTestGyneco,
            QuestionText: this.QuestionText
        });
    };
    return PsychoTest3Page;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('forceps'),
    __metadata("design:type", Object)
], PsychoTest3Page.prototype, "forceps", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('ventouse'),
    __metadata("design:type", Object)
], PsychoTest3Page.prototype, "ventouse", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('cesarienneUrgence'),
    __metadata("design:type", Object)
], PsychoTest3Page.prototype, "cesarienneUrgence", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('generalAnest'),
    __metadata("design:type", Object)
], PsychoTest3Page.prototype, "generalAnest", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('hemorragie'),
    __metadata("design:type", Object)
], PsychoTest3Page.prototype, "hemorragie", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('babySeparation'),
    __metadata("design:type", Object)
], PsychoTest3Page.prototype, "babySeparation", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('dieDelivery'),
    __metadata("design:type", Object)
], PsychoTest3Page.prototype, "dieDelivery", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('psyDieBaby'),
    __metadata("design:type", Object)
], PsychoTest3Page.prototype, "psyDieBaby", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('traumaDelivery'),
    __metadata("design:type", Object)
], PsychoTest3Page.prototype, "traumaDelivery", void 0);
PsychoTest3Page = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-psycho-test3',template:/*ion-inline-start:"/Users/kwame/Desktop/gitNew_risk/src/pages/psycho-test3/psycho-test3.html"*/'<!--\n  Generated template for the PsychoTest2Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>psychoTest2</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<h3 class="form-question-title">{{QuestionText.psychoTest3}}</h3>\n			<ion-list>\n				<ion-item>	\n					<ion-label>{{QuestionText.psychoTest3_1}}</ion-label>\n					<ion-checkbox #forceps></ion-checkbox>\n				</ion-item>\n				<ion-item>	\n					<ion-label>{{QuestionText.psychoTest3_2}}</ion-label>\n					<ion-checkbox #ventouse></ion-checkbox>\n				</ion-item>\n				<ion-item>	\n					<ion-label>{{QuestionText.psychoTest3_3}}</ion-label>\n					<ion-checkbox #cesarienneUrgence></ion-checkbox>\n				</ion-item>\n				<ion-item>	\n					<ion-label>{{QuestionText.psychoTest3_4}}</ion-label>\n					<ion-checkbox #generalAnest></ion-checkbox>\n				</ion-item>\n				<ion-item>			\n					<ion-label>{{QuestionText.psychoTest3_5}}</ion-label>\n					<ion-checkbox #hemorragie></ion-checkbox>\n				</ion-item>\n				<ion-item>	\n					<ion-label>{{QuestionText.psychoTest3_7}}</ion-label>\n					<ion-checkbox #babySeparation></ion-checkbox>\n				</ion-item>\n				<ion-item>					\n					<ion-label>{{QuestionText.psychoTest3_6}}</ion-label>\n					<ion-checkbox #dieDelivery></ion-checkbox>\n				</ion-item>\n				<ion-item>	\n					<ion-label>{{QuestionText.psychoTest3_8}}</ion-label>\n					<ion-checkbox #psyDieBaby></ion-checkbox>\n				</ion-item>\n				<ion-item>	\n					<ion-label>{{QuestionText.psychoTest3_9}}</ion-label>\n					<ion-checkbox #traumaDelivery></ion-checkbox>\n				</ion-item>\n			</ion-list>\n		<button ion-button (click)="goNextStep()">\n			Valider\n		</button>\n</ion-content>\n'/*ion-inline-end:"/Users/kwame/Desktop/gitNew_risk/src/pages/psycho-test3/psycho-test3.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], PsychoTest3Page);

//# sourceMappingURL=psycho-test3.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Step8Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__step9_step9__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__step11_step11__ = __webpack_require__(39);
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
 * Generated class for the Step8Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Step8Page = (function () {
    function Step8Page(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.valueTestGyneco = navParams.get('userParams');
        this.QuestionText = navParams.get('QuestionText');
    }
    Step8Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Step8Page');
    };
    Step8Page.prototype.yesClick = function () {
        if (this.no.value == true) {
            this.no.value = false;
        }
    };
    Step8Page.prototype.noClick = function () {
        if (this.yes.value == true) {
            this.yes.value = false;
        }
    };
    Step8Page.prototype.goNextStep = function () {
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
            this.valueTestGyneco.smallChild = this.result;
            if (this.yes)
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__step9_step9__["a" /* Step9Page */], {
                    userParams: this.valueTestGyneco,
                    QuestionText: this.QuestionText
                });
            else
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__step11_step11__["a" /* Step11Page */], {
                    userParams: this.valueTestGyneco,
                    QuestionText: this.QuestionText
                });
        }
    };
    return Step8Page;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('yes'),
    __metadata("design:type", Object)
], Step8Page.prototype, "yes", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('no'),
    __metadata("design:type", Object)
], Step8Page.prototype, "no", void 0);
Step8Page = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-step8',template:/*ion-inline-start:"/Users/kwame/Desktop/gitNew_risk/src/pages/step8/step8.html"*/'<!--\n  Generated template for the Step8Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>step8</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<h3 class="form-question-title">{{QuestionText.step8}}</h3>\n	<ion-list>\n		<ion-item>\n			<ion-label>Oui</ion-label>\n			<ion-checkbox (click)="yesClick()" #yes></ion-checkbox>\n		</ion-item>\n		<ion-item>\n			<ion-label>	Non</ion-label>\n			<ion-checkbox (click)="noClick()" #no></ion-checkbox>\n		</ion-item>				\n	</ion-list>\n	<button ion-button (click)="goNextStep()">\n		Valider\n	</button>\n</ion-content>\n'/*ion-inline-end:"/Users/kwame/Desktop/gitNew_risk/src/pages/step8/step8.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], Step8Page);

//# sourceMappingURL=step8.js.map

/***/ })

},[228]);
//# sourceMappingURL=main.js.map