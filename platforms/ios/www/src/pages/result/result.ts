import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';

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

        this.tableAnswer = navParams.get('userParams');
        this.resultRisk = 0;
        console.log("test");
        console.log(this.tableAnswer);
    }

    nextBegin(){
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
        console.log(this.tableAnswer);
        this.IMC = this.tableAnswer[27].answerUser / Math.pow(this.tableAnswer[26].answerUser / 100, 2);
        console.log(this.IMC);
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
                title: "D'après vos antécédent vous présentez un risque de dépression du post-Partum"
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
            this.riskAssessment = "D'après vos réponse vous présentez une grossesse à haut et devez être suivi dans une maternité de type 3.";
        else if (this.resultRisk >= 50)
            this.riskAssessment = "D'apres vos réponse vous présentez une grossesse à haut risque mais qui ne necessite pas un suivi dans une maternité de type 3";
        else if (this.resultRisk >= 20)
            this.riskAssessment = "D'apres vos réponses vous présentez une grossesse à risque.";
        else
            this.riskAssessment = "D'apres vos réponses vous ne présentez pas de risque particulier pour votre grossesse.";
        console.log("debut risk");
        if (this.tableAnswer[3].answerUser == true)
            this.resultSlide.push(
            {
                type: "positif",
                title: "Félicitation vous êtes enceinte !"
            });
        if (this.tableAnswer[6].answerUser == 0 && this.tableAnswer[3].answerUser == true)
            this.resultSlide.push(
            {
                type: "positif",
                title:  "Félicitation vous allez avoir votre premier enfant"
            });

        if (this.tableAnswer[0].answerUser < 42 && this.tableAnswer[0].answerUser >= 38)
            this.resultSlide.push(
            {
                type: "risk",
                title:"A votre Age, vous présentez un risque élevé d'anomalie chromosomique foetale"
            });
        else if (this.tableAnswer[0].answerUser > 42)
            this.resultSlide.push(
            {
                type: "risk",
                title:"A votre Age, vous présentez un risque très élevé d'anomalie chromosomique foetale"
            });
        if (this.tableAnswer[0].answerUser < 38)
            this.resultSlide.push(
            {
                type: "positif",
                title: "Vous avez le bon l'âge optimal pour faire un enfant"
            });
        else
            this.resultSlide.push(
            {
                type: "positif",
                title: "Être plus âgée pour élever ses enfants est ausi un gage de maturité !"
            });


        if (this.tableAnswer[5].answerUser == true && this.tableAnswer[1].answerUser == true)
            this.resultSlide.push(
            {
                type: "risk",
                title:"Vous fumez, ce qui peut entrainer de nombreuses complications."
            });
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
                title:"Vous fumez, ce qui va entrainer de nombreuses complications lors d'une future grossesse."
            });
        if (this.tableAnswer[5].answerUser == true && this.tableAnswer[1].answerUser == true)
            this.resultSlide.push(
            {
                type: "conseil",
                title: "Arrêtez de fumer !"
            });
        else if (this.tableAnswer[5].answerUser == true)
            this.resultSlide.push(
            {
                type: "conseil",
                title: "Arrêtez de fumer avant d'entammer une grossesse !"
            });



        if (this.tableAnswer[8].answerUser == true)
            this.resultSlide.push(
            {
                type: "risk",
                title:"Vous avez eus un enfant de + de 4kg, ce qui peut favoriser l'apparition du vous place dans un groupe à risque de développer un diabète de grossesse."});
        if (this.tableAnswer[8].answerUser == true && this.tableAnswer[13].answerUser == true)
            this.resultSlide.push(
            {
                type: "conseil",
                title: "Effectuez un dépistage de diabète de grossesse"
            });
        else if (this.tableAnswer[8].answerUser == true)
            this.resultSlide.push(
            {
                type: "conseil",
                title: "Effectuez un dépistage de diabète de grossesse."
            });
        if (this.tableAnswer[11].answerUser == false && this.tableAnswer[10].answerUser == true)
            this.resultSlide.push(
            {
                type: "risk",
                title:"Vous avez eu un enfant de - de 2kg200 qui n'était pas prématuré, il s'agit donc d'un antécédent de retard de croissance intra-utérin qui vous expose à un risque de récidive d'environ 10 %"
            });
        if (this.tableAnswer[8].answerUser >= 3)
            this.resultSlide.push(
            {
                type: "risk",
                title:"Vous avez un nombre élevé de fausse couches"
            });
        if (this.tableAnswer.IMG)
            this.resultSlide.push(
            {
                type: "risk",
                title:"Vous avez déjà effectué une IMG et vous pourriez avoir un risque de récidive"
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
                type: "risk",
                title:"Stoppez votre consommation d'alcool !"
            });
        if (this.tableAnswer[19].answerUser >= 10 && this.tableAnswer[1].answerUser == true)
            this.resultSlide.push(
            {
                type: "risk",
                title:"Vous consommez une quantité d'alcool importante"
            });
        if (this.tableAnswer[20].answerUser == true)
            this.resultSlide.push(
            {
                type: "risk",
                title:"Votre epilepsie"
            });
        if (this.tableAnswer[25].answerUser1 == true)
            this.resultSlide.push(
            {
                type: "conseil",
                title: "Vous devez être prise en charge par une équipe spécialisée pour le choix des antiépileptiques et leur dosage ainsi que pour la mise en place d'une surveillance foetale adaptée."
            });

        if (this.tableAnswer[25].answerUser2 == true)
            this.resultSlide.push(
            {
                type: "conseil",
                title:"Vous devez être prise en charge par une équipe spécialisée pour le choix des anticoagulent et leur dosage ainsi que pour la mise en place d'une surveillance foetale adaptée."
            });
        if (this.tableAnswer[21].answerUser == true)
            this.resultSlide.push(
            {
                type: "risk",
                title:"Votre antécédent de phlébite"
            });
        if (this.tableAnswer[25].answerUser3 == true)
            this.resultSlide.push(
            {
                type: "conseil",
                title:"Vous devez être prise en charge par une équipe spécialisée pour le choix des antihypertenseurs et leur dosage ainsi que pour la mise en place d'une surveillance foetale adaptée."
            });
        if (this.tableAnswer[22].answerUser == true)
            this.resultSlide.push(
            {
                type: "risk",
                title:"Votre hypertension"
            });

        if (this.tableAnswer[25].answerUser4 == true)
            this.resultSlide.push(
            {
                type: "conseil",
                title: "Vous devez être prise en charge par une équipe spécialisée pour le choix des antidiabetiques et leur dosage ainsi que pour la mise en place d'une surveillance foetale adaptée."
            });
        if (this.IMC < 18.5)
            this.resultSlide.push(
            {
                type: "risk",
                title:"Votre MAIGREUR"
            });
        else if (this.IMC > 35 && this.IMC < 40)
            this.resultSlide.push(
            {
                type: "risk",
                title:"Votre obésité"
            });

        else if (this.IMC > 40)
            this.resultSlide.push(
            {
                type: "risk",
                title:"Votre obésité massive"
            });
        if (this.IMC < 18.5)
            this.resultSlide.push(
            {
                type: "conseil",
                title:"Alimentez-vous correctement"
            });
        else if (
            this.IMC > 40)
            this.resultSlide.push(
            {
                type: "conseil",
                title:"Vous devez être prise en charge dans un centre spécialisé."
            });

        if (this.tableAnswer[29].answerUser > 10 && this.tableAnswer[29].answerUser <= 12)
            this.resultSlide.push(
            {
                type: "risk",
                title:"Votre nombre d'heure de travail est élevé."
            });
        if (this.tableAnswer[29].answerUser > 12)
            this.resultSlide.push(
            {
                type: "risk",
                title:"Votre nombre d'heure de travail est vraiment très élevé"
            });
        if (this.tableAnswer[30].answerUser > 90)
            this.resultSlide.push(
            {
                type: "risk",
                title:"Votre temps de trajet pour aller au travail est élevé"
            });
        if (this.tableAnswer[30].answerUser == true)
            this.resultSlide.push(
            {
                type: "risk",
                title:"Vous travaillez debout plus de 6 heures par jour"
            });

        if (this.tableAnswer.IMG == true)
            this.resultSlide.push(
            {
                type: "positif",
                title:"La plus grande partie des anomalies foetales sont des accidents et leur récidive est rare"
            });
        if (!this.tableAnswer[28].answerUser)
            this.resultSlide.push(
            {
                type: "positif",
                title: "Vous ne travaillez pas, vous pouvez donc prendre le temps de vous occuper de vous et préparer la venue de votre enfant"
            });
        if (this.tableAnswer[29].answerUser > 10)
            this.resultSlide.push(
            {
                type: "conseil",
                title:"Essayer d'aménager vos heures de travail"
            });
        if (this.tableAnswer[29].answerUser > 90)
            this.resultSlide.push(
            {
                type: "conseil",
                title:"Essayer d'aménager vos heures de présence au travail pour diminuer les temps de trajets"
            });
        if (this.tableAnswer[29].answerUser == true)
            this.resultSlide.push(
            {
                type: "conseil",
                title:"Nous vous conseillons de discuter dès à présent avec votre employeur de la possibilité d'aménager vos conditions de travail. Vous risquez d'être en difficulté pendant votre grossesse si vous restez debout plus de 6 heures par jour"
            });
        if (this.tableAnswer[18].answerUser >= 3)
            this.resultSlide.push(
            {
                type: "conseil",
                title: "Effectuez un bilan de fausse couche à répétition et bénéficiez d'une prise en charge adaptée en fonction des résultats de ce bilan."
            });
        if (this.tableAnswer.IMG == true)
            this.resultSlide.push(
            {
                type: "conseil",
                title:"Prenez rendez-vous pour une consultation spécialisée afin d'évaluer le risque de récidive de malformation foetale."
            });
        if (this.tableAnswer[19].answerUser >= 10 && this.tableAnswer[1].answerUser == true)
            this.resultSlide.push(
            {
                type: "conseil",
                title:"Prenez rendez-vous dans un centre spécialisée pour vous aider à arrêter l'alcool"
            });
        if (this.tableAnswer[19].answerUser < 10 && this.tableAnswer[19].answerUser > 0 && this.tableAnswer[1].answerUser == true)
            this.resultSlide.push(
            {
                type: "conseil",
                title: "Il sera nécessaire de stopper votre consommation d'alcool lorsque vous serez enceinte!"
            });

        this.answers = this.resultSlide.concat(this.psycho);

        console.log(this.answers);

    }
/*defineRisk() {

        if (this.valueTestGyneco[0].answerUser < 42)
             this.resultSlide.push("A votre Age, vous présentez un risque élevé d'anomalie chromosomique foetale")
        else if (this.valueTestGyneco0[0].answerUser > 42)
             this.risk.push("A votre Age, vous présentez un risque très élevé d'anomalie chromosomique foetale"
             });
        if (this.valueTestGyneco[5].answerUser == 1 && this.valueTestGyneco[1].answerUser == 1)
             this.risk.push("Vous fumez, ce qui peut entrainer de nombreuses complications."
             });
        if (this.valueTestGyneco[5].answerUser == 1 && this.valueTestGyneco[1].answerUser == 1)
             this.risk.push("Vous fumez, ce qui peut entrainer de nombreuses complications.");
        else if (this.valueTestGyneco[5].answerUser == 1)
           this.risk.push("Vous fumez, ce qui va entrainer de nombreuses complications lors d'une future grossesse.");
        if (this.valueTestGyneco[8].answerUser == 1)
            this.risk.push("Vous avez eus un enfant de + de 4kg, ce qui peut favoriser l'apparition du vous place dans un groupe à risque de développer un diabète de grossesse.");
        if (this.valueTestGyneco[11].answerUser == 0 && this.valueTestGyneco[10].answerUser == 1)
            this.risk.push("Vous avez eu un enfant de - de 2kg200 qui n'était pas prématuré, il s'agit donc d'un antécédent de retard de croissance intra-utérin qui vous expose à un risque de récidive d'environ 10 %");
        if (this.valueTestGyneco[17].answerUser >= 3)
            this.risk.push("Vous avez un nombre élevé de fausse couches");
        if (this.valueTestGyneco.IMG)
            this.risk.push("Vous avez déjà effectué une IMG et vous pourriez avoir un risque de récidive");
        if (this.valueTestGyneco[18].answerUser < 10 && this.valueTestGyneco[18].answerUser > 0)
            this.risk.push("Vous consommez de l'alcool");
        if (this.valueTestGyneco[18].answerUser < 10 && this.valueTestGyneco[18].answerUser > 0 && this.valueTestGyneco[1].answerUser == 1)
            this.risk.push("Stoppez votre consommation d'alcool !");
        if (this.valueTestGyneco[18].answerUser >= 10 && this.valueTestGyneco[1].answerUser == 1)
            this.risk.push("Vous consommez une quantité d'alcool importante");
        if (this.valueTestGyneco.epilepsy == 1)
            this.risk.push("Votre epilepsie");
        if (this.valueTestGyneco[20].answerUser == 1)
            this.risk.push("Votre antécédent de phlébite");
        if (this.valueTestGyneco[21].answerUser == 1)
            this.risk.push("Votre hypertension");

        if (this.valueTestGyneco.IMC < 18.5)
            this.risk.push("Votre MAIGREUR");
        else if (this.valueTestGyneco.IMC > 35 && this.valueTestGyneco.IMC < 40)
            this.risk.push("Votre obésité");
        else if (this.valueTestGyneco.IMC > 40)
            this.risk.push("Votre obésité massive");

        if (this.valueTestGyneco[28].answerUser > 10 && this.valueTestGyneco[28].answerUser <= 12)
            this.risk.push("Votre nombre d'heure de travail est élevé.");
        if (this.valueTestGyneco[28].answerUser > 12)
            this.risk.push("Votre nombre d'heure de travail est vraiment très élevé");
        if (this.valueTestGyneco[29].answerUser > 90)
            this.risk.push("Votre temps de trajet pour aller au travail est élevé");
        if (this.valueTestGyneco[29].answerUser == 1)
            this.risk.push("Vous travaillez debout plus de 6 heures par jour");
     }
     */
 }
