var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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
        definePositif();
        defineRisk();
        defineConseil();
    };
    ResultPage.prototype.definePositif = function () {
        if (this.valueTestGyneco.feelingPregnant == 1)
            this.result.positif.push("Félicitation vous êtes enceinte !");
        if (this.valueTestGyneco.child == 0 && this.feelingPregnant == 1)
            this.result.positif.push("Félicitation vous allez avoir votre premier enfant");
        if (this.valueTestGyneco.age < 38)
            this.result.positif.push("Vous avez le bon l'âge optimal pour faire un enfant");
        else
            this.result.positif.push("Être plus âgée pour élever ses enfants est ausi un gage de maturité !");
    };
    ResultPage.prototype.defineRisk = function () {
        if (this.valueTestGyneco.age < 42)
            this.result.risk.push("A votre Age, vous présentez un risque élevé d'anomalie chromosomique foetale");
        else if (this.valueTestGyneco.age > 42)
            this.result.risk.push("A votre Age, vous présentez un risque très élevé d'anomalie chromosomique foetale");
        if (this.valueTestGyneco.smoke == 1 && this.valueTestGyneco.pregnant == 1)
            this.result.risk.push("Vous fumez, ce qui peut entrainer de nombreuses complications.");
        if (this.valueTestGyneco.smoke == 1 && this.valueTestGyneco.pregnant == 1)
            this.result.risk.push("Vous fumez, ce qui peut entrainer de nombreuses complications.");
        else if (this.valueTestGyneco.smoke == 1)
            this.result.risk.push("Vous fumez, ce qui peut entrainer de nombreuses complications.");
    };
    ResultPage.prototype.defineConseil = function () {
        if (this.valueTestGyneco.smoke == 1 && this.valueTestGyneco.pregnant == 1)
            this.result.conseil.push("Arrêtez de fumer !");
    };
    return ResultPage;
}());
ResultPage = __decorate([
    IonicPage(),
    Component({
        selector: 'page-result',
        templateUrl: 'result.html',
    }),
    __metadata("design:paramtypes", [NavController, NavParams])
], ResultPage);
export { ResultPage };
//# sourceMappingURL=result.js.map