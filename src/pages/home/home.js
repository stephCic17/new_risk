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
import { NavController } from 'ionic-angular';
import { Step1Page } from '../step1/step1';
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
        this.navCtrl.push(Step1Page, {
            QuestionText: this.QuestionText
        });
    };
    return HomePage;
}());
HomePage = __decorate([
    Component({
        selector: 'page-home',
        templateUrl: 'home.html'
    }),
    __metadata("design:paramtypes", [NavController])
], HomePage);
export { HomePage };
//# sourceMappingURL=home.js.map