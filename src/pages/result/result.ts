import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
/**
 * Generated class for the ResultPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-result',
  templateUrl: 'result.html',
})
export class ResultPage {
    @ViewChild(Slides) slides: Slides;
      currentStep = 0;
  
	valueTestGyneco:any;
	resultRisk:number;
    result:any;
    risk:any;
    conseil:any;
    positif:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
	
      	this.valueTestGyneco = navParams.get('userParams');
  	    this.resultRisk = 0;
        console.log("test");
        console.log(this.valueTestGyneco);
    }

  ionViewDidLoad() {

    console.log(this.valueTestGyneco);
    this.result = [];
    this.risk = [];
    this.conseil = [];
    this.positif = [];
    if ( this.valueTestGyneco[0].answerUser > 42)
    	this.resultRisk += 50;
    else if (this.valueTestGyneco[0].answerUser == 42)
    	this.resultRisk += 20;
    else if (this.valueTestGyneco[0].answerUser > 38)
    	this.resultRisk += 2;

    if (this.valueTestGyneco[18].answerUser > 10)
    	this.resultRisk += 400;
    if(this.valueTestGyneco[5].answerUser == 1)
    	this.resultRisk += 2;
    if (this.valueTestGyneco[6].answerUser == 1)
	{
		if (this.valueTestGyneco[14].answerUser == 1)
    		this.resultRisk += 2;
    	if (this.valueTestGyneco[8].answerUser == 1)
    		this.resultRisk += 50;
    	if (this.valueTestGyneco[10].answerUser == 1)
    		this.resultRisk += 50;
    	if (this.valueTestGyneco[12].answerUser == 1)
    		this.resultRisk += 50;
    	if (this.valueTestGyneco[13].answerUser == 1)
    		this.resultRisk += 2;
    	if (this.valueTestGyneco[11].answerUser == 1)
    		this.resultRisk += 50;

    }
    if (this.valueTestGyneco[17].answerUser > 0)
    	this.resultRisk += 2;
    if (this.valueTestGyneco[22].answerUser == 1)
    	this.resultRisk += 50;
    if (this.valueTestGyneco.epilepsy == 1)
    	this.resultRisk += 200;
    if (this.valueTestGyneco[21].answerUser == 1)
    	this.resultRisk += 2;
    if (this.valueTestGyneco[20].answerUser == 1)
    	this.resultRisk += 2;
    if (this.valueTestGyneco[23].answerUser == 1)
    {
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

    if (this.valueTestGyneco[27].answerUser == 1)
    {
    	if (this.valueTestGyneco[29].answerUser > 90)
    		this.resultRisk += 2;
    	if (this.valueTestGyneco[29].answerUser == 1)
    		this.resultRisk += 2;
    	if (this.valueTestGyneco[28].answerUser > 10)
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
 console.log("debut risk");
        if (this.valueTestGyneco[0].answerUser < 42 && this.valueTestGyneco[0].answerUser >= 38)
             this.risk.push(
                 {
                     type: "risk",
                     idPositif: 0,
                     idConseil: 0,
                     title:"A votre Age, vous présentez un risque élevé d'anomalie chromosomique foetale"
                 });
        else if (this.valueTestGyneco[0].answerUser > 42)
             this.risk.push(
                 {
                     type: "risk",
                     idPositif: 0,
                     idConseil: 0,
                     title:"A votre Age, vous présentez un risque très élevé d'anomalie chromosomique foetale"
                 });
        if (this.valueTestGyneco[5].answerUser == 1 && this.valueTestGyneco.pregnant == 1)
             this.risk.push(
                 {
                     type: "risk",
                     idPositif: 0,
                     idConseil: 0,
                     title:"Vous fumez, ce qui peut entrainer de nombreuses complications."
                 });
        if (this.valueTestGyneco[5].answerUser == 1 && this.valueTestGyneco.pregnant == 1)
             this.risk.push(
                 {
                     type: "risk",
                     idPositif: 0,
                     idConseil: 0,
                     title:"Vous fumez, ce qui peut entrainer de nombreuses complications."
                 });
        else if (this.valueTestGyneco[5].answerUser == 1)
           this.risk.push(
               {
                   type: "risk",
                     idPositif: 0,
                     idConseil: 0,
                   title:"Vous fumez, ce qui va entrainer de nombreuses complications lors d'une future grossesse."
               });
        if (this.valueTestGyneco[8].answerUser == 1)
            this.risk.push(
                {
                    type: "risk",
                     idPositif: 0,
                     idConseil: 0,
                    title:"Vous avez eus un enfant de + de 4kg, ce qui peut favoriser l'apparition du vous place dans un groupe à risque de développer un diabète de grossesse."});      

        if (this.valueTestGyneco[11].answerUser == 0 && this.valueTestGyneco.smallChild == 1)
            this.risk.push(
                {
                    type: "risk",
                     idPositif: 0,
                     idConseil: 0,
                    title:"Vous avez eu un enfant de - de 2kg200 qui n'était pas prématuré, il s'agit donc d'un antécédent de retard de croissance intra-utérin qui vous expose à un risque de récidive d'environ 10 %"
                });
        if (this.valueTestGyneco[17].answerUser >= 3)
            this.risk.push(
                {
                    type: "risk",
                     idPositif: 0,
                     idConseil: 0,
                    title:"Vous avez un nombre élevé de fausse couches"
                });
        if (this.valueTestGyneco.IMG)
            this.risk.push(
                {
                    type: "risk",
                     idPositif: 0,
                     idConseil: 0,
                    title:"Vous avez déjà effectué une IMG et vous pourriez avoir un risque de récidive"
                });
        if (this.valueTestGyneco[18].answerUser < 10 && this.valueTestGyneco[18].answerUser > 0)
            this.risk.push(
                {
                    type: "risk",
                     idPositif: 0,
                     idConseil: 0,
                    title:"Vous consommez de l'alcool"
                });
        if (this.valueTestGyneco[18].answerUser < 10 && this.valueTestGyneco[18].answerUser > 0 && this.valueTestGyneco.pregnant == 1)
            this.risk.push(
                {
                    type: "risk",
                     idPositif: 0,
                     idConseil: 0,
                    title:"Stoppez votre consommation d'alcool !"
                });
        if (this.valueTestGyneco[18].answerUser >= 10 && this.valueTestGyneco.pregnant == 1)
            this.risk.push(
                {
                    type: "risk",
                     idPositif: 0,
                     idConseil: 0,
                    title:"Vous consommez une quantité d'alcool importante"
                });
        if (this.valueTestGyneco.epilepsy == 1)
            this.risk.push(
                {
                    type: "risk",
                     idPositif: 0,
                     idConseil: 0,
                    title:"Votre epilepsie"
                });
        if (this.valueTestGyneco[20].answerUser == 1)
            this.risk.push(
                {
                    type: "risk",
                     idPositif: 0,
                     idConseil: 0,
                    title:"Votre antécédent de phlébite"
                });
        if (this.valueTestGyneco[21].answerUser == 1)
            this.risk.push(
                {
                    type: "risk",
                     idPositif: 0,
                     idConseil: 0,
                    title:"Votre hypertension"
                });

        if (this.valueTestGyneco.IMC < 18.5)
            this.risk.push(
                {
                    type: "risk",
                     idPositif: 0,
                     idConseil: 0,
                    title:"Votre MAIGREUR"
                });
        else if (this.valueTestGyneco.IMC > 35 && this.valueTestGyneco.IMC < 40)
            this.risk.push(
                {
                    type: "risk",
                     idPositif: 0,
                     idConseil: 0,
                    title:"Votre obésité"
                });
        else if (this.valueTestGyneco.IMC > 40)
            this.risk.push(
                {
                    type: "risk",
                     idPositif: 0,
                     idConseil: 0,
                    title:"Votre obésité massive"
                });
        
        if (this.valueTestGyneco[28].answerUser > 10 && this.valueTestGyneco[28].answerUser <= 12)
            this.risk.push(
                {
                    type: "risk",
                     idPositif: 0,
                     idConseil: 0,
                    title:"Votre nombre d'heure de travail est élevé."
                });
        if (this.valueTestGyneco[28].answerUser > 12)
            this.risk.push(
                {
                    type: "risk",
                     idPositif: 0,
                     idConseil: 0,
                    title:"Votre nombre d'heure de travail est vraiment très élevé"
                });
        if (this.valueTestGyneco[29].answerUser > 90)
            this.risk.push(
                {
                    type: "risk",
                     idPositif: 0,
                     idConseil: 0,
                    title:"Votre temps de trajet pour aller au travail est élevé"
                });
        if (this.valueTestGyneco[29].answerUser == 1)
            this.risk.push(
                {
                    type: "risk",
                     idPositif: 0,
                     idConseil: 0,
                    title:"Vous travaillez debout plus de 6 heures par jour"
                });
        console.log(this.risk);
        console.log("debut positif");

        if (this.valueTestGyneco.feelingPregnant == 1)
            this.positif.push(
                {
                  title: "Félicitation vous êtes enceinte !"
                });
        if (this.valueTestGyneco[6].answerUser == 0 && this.valueTestGyneco.feelingPregnant == 1)
             this.positif.push(
                 {
                  title:  "Félicitation vous allez avoir votre premier enfant"
                 });
        if (this.valueTestGyneco[0].answerUser < 38)
             this.positif.push(
                 {
                   title: "Vous avez le bon l'âge optimal pour faire un enfant"
                 });
        else
             this.positif.push(
                 {
                   title: "Être plus âgée pour élever ses enfants est ausi un gage de maturité !"
                 });
        if (this.valueTestGyneco.IMG == 1)
            this.positif.push(
                {
                   title:"La plus grande partie des anomalies foetales sont des accidents et leur récidive est rare"
                }); 
        if (!this.valueTestGyneco[27].answerUser)
             this.positif.push(
                 {
                   title: "Vous ne travaillez pas, vous pouvez donc prendre le temps de vous occuper de vous et préparer la venue de votre enfant"
                 });
   
         console.log("debut conseil");
    
        if (this.valueTestGyneco[5].answerUser == 1 && this.valueTestGyneco.pregnant == 1)
             this.conseil.push(
                 {
                     title: "Arrêtez de fumer !"
                 });
        else if (this.valueTestGyneco[5].answerUser == 1)
           this.conseil.push(
               {
                   title: "Arrêtez de fumer avant d'entammer une grossesse !"
               });
        if (this.valueTestGyneco[8].answerUser)
            this.conseil.push(
                {
                    title: "Effectuez un dépistage de diabète de grossesse."
                });
        if (this.valueTestGyneco[8].answerUser == 1 && this.valueTestGyneco[13].answerUser == 1)
            this.conseil.push(
                {
                    title: "Effectuez un dépistage de diabète de grossesse"
                });
        if (this.valueTestGyneco[17].answerUser >= 3)
            this.conseil.push(
                {
                    title: "Effectuez un bilan de fausse couche à répétition et bénéficiez d'une prise en charge adaptée en fonction des résultats de ce bilan."
                });
        if (this.valueTestGyneco.IMG == 1)
            this.conseil.push(
                {
                   title:"Prenez rendez-vous pour une consultation spécialisée afin d'évaluer le risque de récidive de malformation foetale."
                }); 
        if (this.valueTestGyneco[18].answerUser >= 10 && this.valueTestGyneco.pregnant == 1)
            this.conseil.push(
                {
                   title:"Prenez rendez-vous dans un centre spécialisée pour vous aider à arrêter l'alcool"
                });
        if (this.valueTestGyneco[18].answerUser < 10 && this.valueTestGyneco[18].answerUser > 0 && this.valueTestGyneco.pregnant == 1)
            this.conseil.push(
                {
                  title: "Il sera nécessaire de stopper votre consommation d'alcool lorsque vous serez enceinte!"
                });
     

        if (this.valueTestGyneco.medicament1 == 1)
            this.conseil.push(
                {
                  title: "Vous devez être prise en charge par une équipe spécialisée pour le choix des antiépileptiques et leur dosage ainsi que pour la mise en place d'une surveillance foetale adaptée."
                });
        if (this.valueTestGyneco.medicament2 == 1)
            this.conseil.push(
                {
                   title:"Vous devez être prise en charge par une équipe spécialisée pour le choix des anticoagulent et leur dosage ainsi que pour la mise en place d'une surveillance foetale adaptée."
                });
        if (this.valueTestGyneco.medicament3 == 1)
            this.conseil.push(
                {
                   title:"Vous devez être prise en charge par une équipe spécialisée pour le choix des antihypertenseurs et leur dosage ainsi que pour la mise en place d'une surveillance foetale adaptée."
                });
        if (this.valueTestGyneco.medicament4 == 1)
            this.conseil.push(
                {
                  title: "Vous devez être prise en charge par une équipe spécialisée pour le choix des antidiabetiques et leur dosage ainsi que pour la mise en place d'une surveillance foetale adaptée."
                });
        if (this.valueTestGyneco.medicament5 == 1)
            this.conseil.push(
                {
                   title:""
                 });

        if (this.valueTestGyneco.IMC < 18.5)
            this.conseil.push(
                {
                   title:"Alimentez-vous correctement"
                });
        else if (
            this.valueTestGyneco.IMC > 40)
            this.conseil.push(
                {
                   title:"Vous devez être prise en charge dans un centre spécialisé."
                });
     

        if (this.valueTestGyneco[28].answerUser > 10)
             this.conseil.push(
                 {
                    title:"Essayer d'aménager vos heures de travail"
                 });
        if (this.valueTestGyneco[29].answerUser > 90)
            this.conseil.push(
                {
                   title:"Essayer d'aménager vos heures de présence au travail pour diminuer les temps de trajets"
                });
        if (this.valueTestGyneco[29].answerUser == 1)
            this.conseil.push(
                {
                   title:"Nous vous conseillons de discuter dès à présent avec votre employeur de la possibilité d'aménager vos conditions de travail. Vous risquez d'être en difficulté pendant votre grossesse si vous restez debout plus de 6 heures par jour"
                });

        console.log("risk:",this.risk);
        console.log("positif:",this.positif);
        console.log("conseil:",this.conseil);
     }
/*defineRisk() {

        if (this.valueTestGyneco[0].answerUser < 42)
             this.risk.push("A votre Age, vous présentez un risque élevé d'anomalie chromosomique foetale")
        else if (this.valueTestGyneco0[0].answerUser > 42)
             this.risk.push("A votre Age, vous présentez un risque très élevé d'anomalie chromosomique foetale"
             });
        if (this.valueTestGyneco[5].answerUser == 1 && this.valueTestGyneco.pregnant == 1)
             this.risk.push("Vous fumez, ce qui peut entrainer de nombreuses complications."
             });
        if (this.valueTestGyneco[5].answerUser == 1 && this.valueTestGyneco.pregnant == 1)
             this.risk.push("Vous fumez, ce qui peut entrainer de nombreuses complications.");
        else if (this.valueTestGyneco[5].answerUser == 1)
           this.risk.push("Vous fumez, ce qui va entrainer de nombreuses complications lors d'une future grossesse.");
        if (this.valueTestGyneco[8].answerUser == 1)
            this.risk.push("Vous avez eus un enfant de + de 4kg, ce qui peut favoriser l'apparition du vous place dans un groupe à risque de développer un diabète de grossesse.");         
        if (this.valueTestGyneco[11].answerUser == 0 && this.valueTestGyneco.smallChild == 1)
            this.risk.push("Vous avez eu un enfant de - de 2kg200 qui n'était pas prématuré, il s'agit donc d'un antécédent de retard de croissance intra-utérin qui vous expose à un risque de récidive d'environ 10 %");
        if (this.valueTestGyneco[17].answerUser >= 3)
            this.risk.push("Vous avez un nombre élevé de fausse couches");
        if (this.valueTestGyneco.IMG)
            this.risk.push("Vous avez déjà effectué une IMG et vous pourriez avoir un risque de récidive");
        if (this.valueTestGyneco[18].answerUser < 10 && this.valueTestGyneco[18].answerUser > 0)
            this.risk.push("Vous consommez de l'alcool");
        if (this.valueTestGyneco[18].answerUser < 10 && this.valueTestGyneco[18].answerUser > 0 && this.valueTestGyneco.pregnant == 1)
            this.risk.push("Stoppez votre consommation d'alcool !");
        if (this.valueTestGyneco[18].answerUser >= 10 && this.valueTestGyneco.pregnant == 1)
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
