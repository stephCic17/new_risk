import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import Stat from '../../app/statistique';

@IonicPage()
@Component({
    selector: 'page-result',
    templateUrl: 'result.html',
})
export class ResultPage {
    @ViewChild(Slides) slides: Slides;
    activeWelcomeContent = false;
    isInitialized = false;
    answers: any;
    tableAnswer:any;
    resultRisk:number;
    resultPsycho1:number;
    resultPsycho2:number;
    resultPsycho3:number;
    resultPsycho4:number;
    IMC:number;
    result:any;
    resultSlide:any;
    psycho:any;
    riskAssessment:any;
    conseil:any;
    positif:any;

    constructor(public navCtrl: NavController, public navParams: NavParams) {

        Stat.push({
            id: 2,
            type: "resultBegin",
            title: "begin result",
            timestamp: Date.now()
        });
        this.tableAnswer = navParams.get('userParams');
        this.resultRisk = 0;
    }

    nextBegin(){
        Stat.push({
            id: 3,
            type: "end result",
            title: "clic return home",
            timestamp: Date.now()
        });
        console.log(Stat);        
        this.navCtrl.push(HomePage);
    }

    ngAfterViewInit() {
        console.log("ouéoué");
        this.slides.lockSwipes(false);
        this.slides.freeMode = true;
    }

    ngOnInit() {
        var self = this;

        setTimeout(function() {
            self.activeWelcomeContent = true;
        }, 250);

        this.slides.lockSwipes(false);
        this.IMC = this.tableAnswer[27].answerUser / Math.pow(this.tableAnswer[26].answerUser / 100, 2);
        this.result = [];
        this.resultSlide = [];
        this.conseil = [];
        this.positif = [];

        this.resultPsycho1 = 0;
        if (this.tableAnswer[4].answerUser1 == true)
        {
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
        if (this.resultPsycho1 >= 2 || this.resultPsycho2 >= 5 || this.resultPsycho3 > 4 || this.resultPsycho4 >= 2 )
        {
            this.psycho.push(
            {
                type: "psycho",
                title: "D'après vos antécédents vous présentez un risque de dépression post-partum"
            });
        }
        if ( this.tableAnswer[0].answerUser > 42)
            this.resultRisk += 50;
        else if (this.tableAnswer[0].answerUser == 42)
            this.resultRisk += 20;
        else if (this.tableAnswer[0].answerUser > 38)
            this.resultRisk += 2;

        if (this.tableAnswer[18].answerUser > 10)
            this.resultRisk += 400;
        if(this.tableAnswer[5].answerUser == true)
            this.resultRisk += 2;
        if (this.tableAnswer[6].answerUser == true)
        {
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
        if (this.tableAnswer[23].answerUser == true)
        {
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

        if (this.tableAnswer[27].answerUser == true)
        {
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
            this.resultSlide.push(
            {
                type: "positif",
                title:  "Félicitations vous allez avoir votre premier enfant"
            });
        else if (this.tableAnswer[3].answerUser == true)
            this.resultSlide.push(
            {
                type: "positif",
                title: "Félicitations vous êtes enceinte !"
            });
        

        if (this.tableAnswer[0].answerUser < 42 && this.tableAnswer[0].answerUser >= 38)
            this.resultSlide.push(
            {
                type: "risk",
                title:"A votre âge, vous présentez un risque d'anomalie chromosomique foetale qui n'est pas négligeable."
            });
        else if (this.tableAnswer[0].answerUser > 42)
            this.resultSlide.push(
            {
                type: "risk",
                title:"A votre âge, vous présentez un risque élevé d'anomalie chromosomique foetale."
            });
        if (this.tableAnswer[0].answerUser < 38)
            this.resultSlide.push(
            {
                type: "positif",
                title: "Vous avez l'âge optimal pour faire un enfant."
            });
        else
        {
            this.resultSlide.push(
            {
                type: "positif",
                title: "Être plus âgée pour élever ses enfants est aussi un gage de maturité !"
            });
             this.resultSlide.push(
            {
                type: "conseil",
                title: "Nous vous conseillons d'effectuer les dépistages d'anomalies chromosiques foetale(s)."
            });
            }
        if (this.tableAnswer[5].answerUser == true && this.tableAnswer[1].answerUser == true)
            this.resultSlide.push(
            {
                type: "risk",
                title:"Vous fumez, ce qui peut entrainer de nombreuses complications."
            });
        else if (this.tableAnswer[5].answerUser == true)
            this.resultSlide.push(
            {
                type: "risk",
                title:"Vous fumez, ce qui peut entrainer de nombreuses complications lors d'une future grossesse."
            });
        if (this.tableAnswer[5].answerUser == true && this.tableAnswer[1].answerUser == true)
            this.resultSlide.push(
            {
                type: "conseil",
                title: "Faites vous aider pour arrêter de fumer et prévenir d'éventuelles complication pour votre bébé."
            });
        else if (this.tableAnswer[5].answerUser == true)
            this.resultSlide.push(
            {
                type: "conseil",
                title: "Avant de tomber enceinte faites vous aider pour arrêter de fumer et prévenir d'éventuelles complication pour votre bébé."
            });



        if (this.tableAnswer[8].answerUser == true)
            this.resultSlide.push(
            {
                type: "risk",
                title:"Vous avez eu un enfant de + de 4kg, vous risquez de développer un diabète de grossesse."});
        if (this.tableAnswer[8].answerUser == true && this.tableAnswer[13].answerUser == true)
            this.resultSlide.push(
            {
                type: "conseil",
                title: "Effectuez un dépistage de diabète de grossesse."
            });
        else if (this.tableAnswer[8].answerUser == true)
            this.resultSlide.push(
            {
                type: "conseil",
                title: "Anticipez ! Effectuez un dépistage de diabète gestationnel dès le début de grossesse. "
            });
        if (this.tableAnswer[11].answerUser == false && this.tableAnswer[10].answerUser == true)
        {
            this.resultSlide.push(
            {
                type: "risk",
                title:"Vous avez eu un enfant de - de 2kg200 qui n'était pas prématuré, il s'agit donc d'un antécédent de retard de croissance intra-utérin. "
            });
           this.resultSlide.push(
            {
                type: "positif",
                title:"Vous avez 9 chances sur 10 d’avoir un bébé de poids normal cette fois ci !"
            });
        
        }
        if (this.tableAnswer[18].answerUser >= 3)
        {
            this.resultSlide.push(
            {
                type: "risk",
                title:"Vous avez un nombre élevé de fausses couches"
            });
            this.resultSlide.push(
            {
                type: "conseil",
                title: "Vos fausses couches à répétition vous angoissent certainement. Prenez RDV chez un spécialiste pour vous faire confirmer qu’elles sont accidentelles."
            });
        }
        if (this.tableAnswer.IMG)
            this.resultSlide.push(
            {
                type: "risk",
                title:"Vous avez déjà subi une IMG mais votre risque de récidive est faible"
            });
        if (this.tableAnswer.IMG == true)
            this.resultSlide.push(
            {
                type: "positif",
                title:"La plus grande partie des anomalies foetales sont des accidents et leur récidive est rare.Prenez rendez-vous pour une consultation spécialisée pour vous le faire confirmer."
            });
        if (this.tableAnswer[19].answerUser < 10 && this.tableAnswer[19].answerUser > 0)
            this.resultSlide.push(
            {
                type: "risk",
                title:"Vous consommez de l'alcool"
            });
        if (this.tableAnswer[19].answerUser < 10 && this.tableAnswer[19].answerUser > 0 && this.tableAnswer[1].answerUser == true )
            this.resultSlide.push(
            {
                type: "conseil",
                title:"Il sera nécessaire de stopper votre consommation d'alcool lorsque vous serez enceinte!"
            });
        if (this.tableAnswer[19].answerUser >= 10 && this.tableAnswer[1].answerUser == true)
            this.resultSlide.push(
            {
                type: "risk",
                title:"Votre consommation est d’alcool est décidément trop élevée… votre bébé court des risques important de malformations et de retard mental."
            });
                  if (this.tableAnswer[19].answerUser >= 10 && this.tableAnswer[1].answerUser == true)
            this.resultSlide.push(
            {
                type: "conseil",
                title:"Profitez de votre grossesse annoncée pour vous motiver à stopper l’alcool ! Prenez rendez-vous dans un centre spécialisée pour vous aider."
            });
        if (this.tableAnswer[20].answerUser == true)
            this.resultSlide.push(
            {
                type: "risk",
                title:"Votre épilepsie"
            });
        if (this.tableAnswer[25].answerUser1 == true)
            this.resultSlide.push(
            {
                type: "conseil",
                title: "Votre grossesse pourrait déséquilibrer votre épilepsie, il serait préférable que vous soyez prise en charge par une équipe spécialisée pour le choix des antiépileptiques et leur dosage ainsi que pour la mise en place d'une surveillance foetale adaptée."
            });
        if (this.tableAnswer[21].answerUser == true)
            this.resultSlide.push(
            {
                type: "risk",
                title:"Votre antécédent de phlébite"
            });
        if (this.tableAnswer[25].answerUser2 == true)
            this.resultSlide.push(
            {
                type: "conseil",
                title:"Votre grossesse pourrait déséquilibrer votre traitement, il serait préférable que vous soyez prise en charge par une équipe spécialisée pour le choix des anticoagulents et leur dosage ainsi que pour la mise en place d'une surveillance foetale adaptée."
            });
     
        if (this.tableAnswer[22].answerUser == true)
            this.resultSlide.push(
            {
                type: "risk",
                title:"Votre hypertension"
            });
        if (this.tableAnswer[25].answerUser3 == true)
            this.resultSlide.push(
            {
                type: "conseil",
                title:"Votre grossesse pourrait déséquilibrer votre HTA, il serait préférable d’être prise en charge par une équipe spécialisée pour le choix des antihypertenseurs et leur dosage ainsi que pour la mise en place d'une surveillance foetale adaptée."
            });
        if (this.tableAnswer[22].answerUser == true)
            this.resultSlide.push(
            {
                type: "risk",
                title:"Votre diabète"
            });
        if (this.tableAnswer[25].answerUser4 == true)
            this.resultSlide.push(
            {
                type: "conseil",
                title: "Pendant la grossesse, votre diabète sera déséquilibré, vous devrez donc être prise en être prise en charge par une équipe spécialisée pour le choix des antidiabétiques et leur dosage ainsi que pour la mise en place d'une surveillance foetale adaptée."
            });
        if (this.IMC < 18.5)
            this.resultSlide.push(
            {
                type: "risk",
                title:"Vous êtes en sous poids"
            });
        else if (this.IMC > 35 && this.IMC < 40)
            this.resultSlide.push(
            {
                type: "risk",
                title:"Vous êtes en surpoids"
            });

        else if (this.IMC > 40)
            this.resultSlide.push(
            {
                type: "risk",
                title:"Vous êtes en surpoids"
            });
        if (this.IMC < 18.5)
            this.resultSlide.push(
            {
                type: "conseil",
                title:"Essayez de vous alimentez suffisamment"
            });
        else if (
            this.IMC > 40)
            this.resultSlide.push(
            {
                type: "conseil",
                title:"Il serait préférable d'être prise en charge dans un centre spécialisé auprès de professionnels qui en ont l’ habitude et l’expertise."
            });

        if (this.tableAnswer[29].answerUser > 10 && this.tableAnswer[29].answerUser <= 12)
            this.resultSlide.push(
            {
                type: "risk",
                title:"Vous travaillez beaucoup."
            });
        if (this.tableAnswer[29].answerUser > 12)
            this.resultSlide.push(
            {
                type: "risk",
                title:"Votre nombre d'heures de travail est vraiment très élevé."
            });
        
       

        
        if (!this.tableAnswer[28].answerUser)
            this.resultSlide.push(
            {
                type: "positif",
                title: "Prenez le temps de préparer la venue de votre enfant et de vous occuper de vous."
            });
        if (this.tableAnswer[29].answerUser > 10)
            this.resultSlide.push(
            {
                type: "conseil",
                title:"Rapprochez-vous de votre direction pour un éventuel aménagement de vos horaires ou une mise en place de télétravail"
            });
        if (this.tableAnswer[30].answerUser > 90)
            this.resultSlide.push(
            {
                type: "risk",
                title:"Votre temps de trajet pour aller travailler est élevé."
            });
        if (this.tableAnswer[30].answerUser > 90)
            this.resultSlide.push(
            {
                type: "conseil",
                title:"Rapprochez-vous de votre direction pour une éventuelle mise en place de télétravail afin de diminuer les temps de trajets"
            });
         if (this.tableAnswer[30].answerUser == true)
            this.resultSlide.push(
            {
                type: "risk",
                title:"Vous travaillez debout plus de 6 heures par jour."
            });
        if (this.tableAnswer[31].answerUser == true)
            this.resultSlide.push(
            {
                type: "conseil",
                title:"Rapprochez-vous de votre direction pour un éventuel aménagement de vos conditions de travail. Vous risquez d'être en difficulté pendant votre grossesse si vous restez debout plus de 6 heures par jour et ce serait malin s'il acceptait ! Car qui ménage sa monture va loin"
            });
        
       

        this.answers = this.resultSlide.concat(this.psycho);
        console.log(this.answers);

    }
}
