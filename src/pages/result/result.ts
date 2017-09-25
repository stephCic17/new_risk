import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

	valueTestGyneco:any;
	resultRisk:number;
    result:any;
    risk:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
	
      	this.valueTestGyneco = navParams.get('userParams');
  	    this.resultRisk = 0;
    
    }

  ionViewDidLoad() {

    console.log(this.valueTestGyneco);
    this.result = [];
    this.risk = [];
    if ( this.valueTestGyneco.age > 42)
    	this.resultRisk += 50;
    else if (this.valueTestGyneco.age == 42)
    	this.resultRisk += 20;
    else if (this.valueTestGyneco.age > 38)
    	this.resultRisk += 2;

    if (this.valueTestGyneco.alcool > 10)
    	this.resultRisk += 400;
    if(this.valueTestGyneco.smoke == 1)
    	this.resultRisk += 2;
    if (this.valueTestGyneco.child == 1)
	{
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
    if (this.valueTestGyneco.medicament == 1)
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

    if (this.valueTestGyneco.Work == 1)
    {
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
             this.risk.push({text:"A votre Age, vous présentez un risque élevé d'anomalie chromosomique foetale"});
        else if (this.valueTestGyneco.age > 42)
             this.risk.push({text:"A votre Age, vous présentez un risque très élevé d'anomalie chromosomique foetale"});
        if (this.valueTestGyneco.smoke == 1 && this.valueTestGyneco.pregnant == 1)
             this.risk.push({text:"Vous fumez, ce qui peut entrainer de nombreuses complications."});
        if (this.valueTestGyneco.smoke == 1 && this.valueTestGyneco.pregnant == 1)
             this.risk.push({text:"Vous fumez, ce qui peut entrainer de nombreuses complications."});
        else if (this.valueTestGyneco.smoke == 1)
           this.risk.push({text:"Vous fumez, ce qui va entrainer de nombreuses complications lors d'une future grossesse."});
        if (this.valueTestGyneco.bigChild == 1)
            this.risk.push({text:"Vous avez eus un enfant de + de 4kg, ce qui peut favoriser l'apparition du vous place dans un groupe à risque de développer un diabète de grossesse."});         
        if (this.valueTestGyneco.premaChild == 0 && this.valueTestGyneco.smallChild == 1)
            this.risk.push({text:"Vous avez eu un enfant de - de 2kg200 qui n'était pas prématuré, il s'agit donc d'un antécédent de retard de croissance intra-utérin qui vous expose à un risque de récidive d'environ 10 %"});
        if (this.valueTestGyneco.nbFausseCouche >= 3)
            this.risk.push({text:"Vous avez un nombre élevé de fausse couches"});
        if (this.valueTestGyneco.IMG)
            this.risk.push({text:"Vous avez déjà effectué une IMG et vous pourriez avoir un risque de récidive"});
        if (this.valueTestGyneco.alcool < 10 && this.valueTestGyneco.alcool > 0)
            this.risk.push({text:"Vous consommez de l'alcool"});
        if (this.valueTestGyneco.alcool < 10 && this.valueTestGyneco.alcool > 0 && this.valueTestGyneco.pregnant == 1)
            this.risk.push({text:"Stoppez votre consommation d'alcool !"});
        if (this.valueTestGyneco.alcool >= 10 && this.valueTestGyneco.pregnant == 1)
            this.risk.push({text:"Vous consommez une quantité d'alcool importante"});
        if (this.valueTestGyneco.epilepsy == 1)
            this.risk.push({text:"Votre epilepsie"});
        if (this.valueTestGyneco.phlebite == 1)
            this.risk.push({text:"Votre antécédent de phlébite"});
        if (this.valueTestGyneco.highBloodPresure == 1)
            this.risk.push({text:"Votre hypertension"});
        if (this.valueTestGyneco.IMC < 18.5)
            this.risk.push({text:"Votre MAIGREUR"});
        else if (this.valueTestGyneco.IMC > 35 && this.valueTestGyneco.IMC < 40)
            this.risk.push({text:"Votre obésité"});
        else if (this.valueTestGyneco.IMC > 40)
            this.risk.push({text:"Votre obésité massive"});
        if (this.valueTestGyneco.nbWork > 10 && this.valueTestGyneco.nbWork <= 12)
            this.risk.push({text:"Votre nombre d'heure de travail est élevé."});
        if (this.valueTestGyneco.nbWork > 12)
            this.risk.push({text:"Votre nombre d'heure de travail est vraiment très élevé"});
        if (this.valueTestGyneco.timeTravel > 90)
            this.risk.push({text:"Votre temps de trajet pour aller au travail est élevé"});
        if (this.valueTestGyneco.standingWork == 1)
            this.risk.push({text:"Vous travaillez debout plus de 6 heures par jour"});
        console.log(this.risk);
  }
     definePositif() {

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
     }

     defineRisk() {

        if (this.valueTestGyneco.age < 42)
             this.risk.push("A votre Age, vous présentez un risque élevé d'anomalie chromosomique foetale")
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
     }

    defineConseil() {
    
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

     }
}
