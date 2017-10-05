import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Step1Page } from '../step1/step1';


import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  @ViewChild(Slides) slides: Slides;
  currentStep = 0;
  totalStep = 4;
  progressWidth = "0%";
  activeLogo = false;
  activeLogoWrapper = false;
  activeWelcomeContent = false;
  Question:any;
  number:any;
  yes:any;
  no:any;
  idn:any;
  date:any;
  questionForm:any;

  ngOnInit() {
   var self = this;
    console.log(0);
    this.activeLogoWrapper = true;

    setTimeout(function() {
      console.log(1);
      self.activeLogo = true;
    }, 500);

    setTimeout(function() {
      console.log(2);
      self.activeLogoWrapper = false;
      self.activeWelcomeContent = true;
    }, 2500);
    this.Question = [];
      this.Question.push(
        {
          idTable: 0,
          id: 1,
          idForm: "step1",
          title: "Quel âge avez-vous ?",
          type: "number",
          answer:
            {
              label: "age en année",
              nextStep: 2
            },
          answerUser: "yes"        
        });
      this.Question.push(
        {
          idTable: 1,
          id: 2,
          idForm: "step2",
          title: "Êtes-vous enceinte ?",
          type: "yesNoIdn",
          answerYes: 
            {
              label: "Oui",
              nextStep: 3
            },
          answerNo:
            {
              label: "Non",
              nextStep: 5
            },
          answerIdn: 
            {
              label: "Je ne sais pas",
              nextStep: 3
            },
          answerUser: "yes"         
         });
      this.Question.push(
        {
          idTable: 2,
          id: 3,
          idForm: "step3",
          title: "Quel est la date de vos dernière règle ?",
          type: "date",
          answer: {
            label: "jj/mm/aaaa",
            nextStep: 4
          },
          answerUser: "yes"          
          });
      this.Question.push(
        {
          idTable: 3,
          id: 4,
          idForm: "step4",
          title:"Est-ce une bonne nouvelle ?",
          type:"yesNoIdn",
          answerYes:
            {
              label: "Oui",
              nextStep: 5
            },
          answerNo:
            {
              label: "Non",
              nextStep: 30
            },
          answerIdn:
            {
              label: "Je ne sais pas",
              nextStep: 30
            }
          ,
          answerUser: "yes"        
        });
      this.Question.push(
        {
          idTable: 4,
          id: 5,
          idForm: "step5",
          title:"QUESTIONNAIRE PSYCHO",
          type:"yesNo",
          answerYes:
            {
              label: "Oui",
              nextStep: 6
            },
            answerNo:
            {
              label: "Non",
              nextStep: 6
            }
          ,
          answerUser: "yes"        
        });
     
      this.Question.push(
        {
          idTable: 5,
          id: 6,
          idForm: "step5",
          title:"Fumez-vous ?",
          type:"yesNo",
          answerYes:
            {
              label: "Oui",
              nextStep: 7
            },
          answerNo:
            {
              label: "Non",
              nextStep: 7
            }
          ,
          answerUser: "yes"        
        });
      this.Question.push(
        {
          idTable: 6,
          id: 7,
          idForm: "step6",
          title:"Avez-vous des enfants ?",
          type: "yesNo",
          answerYes:
            {
              label: "Oui",
              nextStep: 8
            },
          answerNo:
            {
              label: "Non",
              nextStep: 18
            }
          ,
          answerUser: "yes"        
        });
      this.Question.push(
        {
          idTable: 7,
          id: 8,
          idForm: "step7",
          title:"Combien avez-vous d'enfant ?",
          type: "number",
          answer:
            {
              label: "nombre d'enfant",
              nextStep: 9
            }
          ,
          answerUser: "yes"        
        });
      this.Question.push(
        {
          idTable: 8,
          id: 9,
          idForm: "step8",
          title: "Avez-vous accouché d'enfants de plus de 4 kilos ?",
          type: "yesNo",
          answerYes:
            {
              label: "Oui",
              nextStep: 10
            },
          answerNo:
            {
              label: "Non",
              nextStep: 11
            }
          ,
          answerUser: "yes"        
        });
      this.Question.push(
        {
          idTable: 9,
          id: 10,
          idForm: "step9",
          title:"Combien d'un enfant de plus de 4 kilos avez-vous eus ?",
          type: "number",
          answer:
            {
              label: "nombre d'enfants",
              nextStep: 11
            }
          ,
          answerUser: "yes"        
        });
      this.Question.push(
        {
          idTable: 10,
          id: 11,
          idForm: "step10",
          title:"Avez-vous accouché d'enfant de moins de 2kg200 ?",
          type: "yesNo",
          answerYes:
            {
              label: "Oui",
              nextStep: 12
            },
          answerNo:
            {
              label: "Non",
              nextStep: 13
            }
          ,
          answerUser: "yes"        
        });
      this.Question.push(
        {
          idTable: 11,
          id: 12,
          idForm: "step11",
          title: "Votre enfant était il prématuré ?",
          type: "yesNo",
          answerYes:
            {
              label: "Oui",
              nextStep: 13
            },
          answerNo:
            {
              label: "Non",
              nextStep: 13
            }
          ,
          answerUser: "yes"        
        });
      this.Question.push(
        {
          idTable: 12,
          id: 13,
          idForm: "step12",
          title: "Avez-vous eu une prééclampsie ?",
          type: "yesNo",
          answerYes:
            {
              label: "Oui",
              nextStep: 14
            },
          answerNo:
            {
              label: "Non",
              nextStep: 14
            }
          ,
          answerUser: "yes"        
        });
      this.Question.push(
        {
          idTable: 13,
          id: 14,
          idForm: "step13",
          title:"Avez-vous un antécedent de diabète de grossesse ?",
          type: "yesNo",
          answerYes:
            {
              label: "Oui",
              nextStep: 15
            },
          answerNo:
            {
              label: "Non",
              nextStep: 15
            }
          ,
          answerUser: "yes"        
        });
      this.Question.push(
        {
          idTable: 14,
          id: 15,
          idForm: "step14",
          title: "Avez-vous eu une césariennes ?",
          type: "yesNo",
          answerYes:
            {
              label: "Oui",
              nextStep: 16
            },
          answerNo:
            {
              label: "Non",
              nextStep: 17
             }
          ,
          answerUser: "yes"        
        });
      this.Question.push(
        {
          idTable: 15,
          id: 16,
          idForm: "step15",
          title: "Combien avez-vous eu de césarienne",
          type: "number",
          answer:
            {
              label: "nombre de cesarienne",
              nextStep: 17
            }
          ,
          answerUser: "yes"        
        });
      // question select psycho
      this.Question.push(
        {
          idTable: 17,
          id: 18,
          idForm: "step17",
          title: "Combien de fausse couche avez-vous fait ?",
          type: "number",
          answer:
            {
              label: "nombre",
              nextStep: 19
            }
          ,
          answerUser: "yes"        
        });
      this.Question.push(
        {
          idTable: 18,
          id: 19,
          idForm: "step18",
          title: "Combien de verres d'alcool buvez-vous par semaine ?",
          type: "number",
          answer:
            {
              label: "nombre par semaine",
              nextStep: 20
            }
          ,
          answerUser: "yes"        
        });
      this.Question.push(
        {
          idTable: 19,
          id: 20,
          idForm: "step19",
          title: "Avez-vous une épilepsie ?",
          type: "yesNo",
          answerYes:
            {
              label: "Oui",
              nextStep: 21
            },
          answerNo:
            {
              label: "Non",
              nextStep: 21
            }
          ,
          answerUser: "yes"        
        });
      this.Question.push(
        {
          idTable: 20,
          id: 21,
          idForm: "step20",
          title: "Avez-vous déjà eu une phlébite ?",
          type: "yesNo",
          answerYes:
            {
              label: "Oui",
              nextStep: 22
            },
          answerNo:
            {
              label: "Non",
              nextStep: 22
            }
          ,
          answerUser: "yes"        
        });
      this.Question.push(
        {
          idTable: 21,
          id: 22,
          idForm: "step21",
          title: "Avez-vous de l'hypertension artérielle ?",
          type: "yesNo",
          answerYes:
            {
              label: "Oui",
              nextStep: 23
            },
          answerNo:
            {
              label: "Non",
              netStep: 23
            }
          ,
          answerUser: "yes"        
        });
      this.Question.push(
        {
          idTable: 22,
          id: 23,
          idForm: "step22",
          title: "Avez-vous du diabète ?",
          type: "yesNo",
          answerYes:
            {
              label: "Oui",
              nextStep: 24
            },
          answerNo:
            {
              label: "Non",
              nextStep: 24
            }
          ,
          answerUser: "yes"        
        });
      this.Question.push(
        {
          idTable: 23,
          id: 24,
          idForm: "step23",
          title:"Prenez vous des médicaments ?",
          type: "yesNo",
          answerYes:
            {
              label: "Oui",
              nextStep: 25
            },
          answerNo:
            {
              label: "Non",
              nextStep: 26
            }
          ,
          answerUser: "yes"        
        });
      //Question select medicament
      this.Question.push(
        {
          idTable: 24,
          id: 25,
          idForm: "step",
          title:"Selectionnez les médicaments que vous prenez",
          type: "number",
          answer:
            {
              label: "",
              nextStep: 26
            }
          ,
          answerUser: "yes"        
        }); 
      this.Question.push(
        {
          idTable: 25,
          id: 26,
          idForm: "step25",
          title: "Quelle est votre taille (en cm) ?",
          type: "number",
          answer:
            {
              label: "en cm",
              nextStep: 27
            }
          ,
          answerUser: "yes"        
        });
      this.Question.push(
        {
          idTable: 26,
          id: 27,
          idForm: "step26",
          title: "Quel est votre poids (en kg) ?",
          type: "number",
          answer:
            {
              label: "en kg",
              nextStep: 28
            }
          ,
          answerUser: "yes"        
        });
      this.Question.push(
        {
          idTable: 27,
          id: 28,
          idForm: "step27",
          title: "Travaillez-vous ?",
          type: "yesNo",
          answerYes:
            {
              label: "Oui",
              nextStep: 29
            },
          answerNo:
            {
              label: "Non",
              nextStep: 31
            }
          ,
          answerUser: "yes"        
        });
      this.Question.push(
        {
          idTable: 28,
          id: 29,
          idForm: "step28",
          title: "Combien d'heures de travail effectuez-vous par jour ?",
          type: "number",
          answer:
            {
              label: "en heure",
              nextStep: 30
            }
          ,
          answerUser: "yes"        
        });
      this.Question.push(
        {
          idTable: 29,
          id: 30,
          idForm: "step29",
          title: "Quel est votre temps de trajet par jour (en minute) ?",
          type: "number",
          answer:
            {
              label: "en minute",
              nextStep: 31
            }
          ,
          answerUser: "yes"        
        });
      this.Question.push(
        {
          idTable: 30,
          id: 31,
          idForm: "step30",
          title: "Travaillez-vous debout plus de 6 heures par jour ?",
          type: "yesNo",
          answerYes:
            {
              label: "Oui",
              nextStep: 32
            },
          answerNo:
            {
              label: "Non",
              nextStep: 32
            }
          ,
          answerUser: "yes"        
        });
 
     console.log(this.Question[0].type);

      //this.QuestionText.psychoTest1 = "Vous et votre fertilité";
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
 

  }

  init() {
    this.currentStep = this.slides.getActiveIndex();
    this.totalStep = this.slides.length();

//type 1 = number
// type 2 = Oui non
//type 3 = oui non je ne sais pas
// type 4 = select
// type 5 = date

      
  }

  slideChanged() {
    this.currentStep = this.slides.getActiveIndex();
    this.updateProgressBar();
  }

  updateProgressBar() {
    this.progressWidth = (100 / this.totalStep) * this.currentStep + "%";
  }

  nextForm(question) {
    this.questionForm = question;
    if (this.questionForm.type == "number")
      this.currentStep = this.questionForm.answer.nextStep;
    else if (this.questionForm.type == "yesNoIdn")
    {
      if (this.yes)
        this.currentStep =this.questionForm.answerYes.nextStep;
      else if (this.no)
        this.currentStep =this.questionForm.answerNo.nextStep;
      else if (this.idn)
        this.currentStep =this.questionForm.answerIdn.nextStep;
      this.yes = false;
      this.no = false;
      this.idn = false;
    }
    else if (this.questionForm.type == "yesNo")
    {
      if (this.yes)
        this.currentStep =this.questionForm.answerYes.nextStep;
      if (this.no)
        this.currentStep = this.questionForm.answerNo.nextStep;    
      this.yes = false;
      this.no = false;
    }  
    else if (this.questionForm.type == "date")
      this.currentStep = this.questionForm.answer.nextStep;
    this.number = "";
    if (this.currentStep > 0) {
      this.slides.slideTo(this.currentStep, 350);
      this.updateProgressBar();
    }
    this.currentStep = -1;

  }
  next(){
      this.currentStep++;
       this.slides.slideTo(this.currentStep, 350);
      this.updateProgressBar();
  }
  prev() {
    this.currentStep--;
    this.slides.slideTo(this.currentStep, 350);
    this.updateProgressBar();
  }
}


// export class HomePage {
//
// 	QuestionText:any;
//
//   constructor(public navCtrl: NavController) {
//
//   }
//
//
//   	openStep1() {
//   		this.QuestionText = [];
//   		this.QuestionText.step1 = "Quel âge avez-vous ?";
//   		this.QuestionText.step2 = "Êtes-vous enceinte ?";
//   		this.QuestionText.step3 = "Fumez-vous ?";
//   		this.QuestionText.step4 = "Avez-vous des enfants ?";
//   		this.QuestionText.step5 = "Combien avez-vous d'enfant ?";
//   		this.QuestionText.step6 = "Avez-vous accouché d'enfants de plus de 4 kilos ?";
//   		this.QuestionText.step7 = "Combien d'un enfant de plus de 4 kilos avez-vous eus ?";
//   		this.QuestionText.step8 = "Avez-vous accouché d'enfant de moins de 2kg200 ?";
//   		this.QuestionText.step9 = "Votre enfant était il prématuré ?";
//   		this.QuestionText.step10 = "Avez-vous eu une prééclampsie ?";
//   		this.QuestionText.step11 = "Avez-vous un antécedent de diabète de grossesse ?";
//   		this.QuestionText.step12 = "Avez-vous eu une césariennes ?";
//       this.QuestionText.step12_1 = "Combien avez-vous eu de césarienne";
//  	  	this.QuestionText.step13 = "Combien de fausse couche avez-vous fait ?";
//    		this.QuestionText.step14 = "Combien de verres d'alcool buvez-vous par semaine ?";
//  	  	this.QuestionText.step15 = "Avez-vous une épilepsie ?";
//  	  	this.QuestionText.step16 = "Avez-vous déjà eu une phlébite ?";
//  	  	this.QuestionText.step17 = "Avez-vous de l'hypertension artérielle ?";
//  	   	this.QuestionText.step18 = "Avez-vous du diabète ?";
//  		  this.QuestionText.step19 = "Prenez vous des médicaments ?";
//  	  	this.QuestionText.step20 = "Selectionnez les médicaments que vous prenez";
//  		  this.QuestionText.step21 = "Quelle est votre taille (en cm) ?";
//  	  	this.QuestionText.step22 = "Quel est votre poids (en kg) ?";
//  	  	this.QuestionText.step23 = "Travaillez-vous ?";
//  	  	this.QuestionText.step24 = "Combien d'heures de travail effectuez-vous par jour ?";
//  	  	this.QuestionText.step25 = "Quel est votre temps de trajet par jour (en minute) ?";
//  	  	this.QuestionText.step26 = "Travaillez-vous debout plus de 6 heures par jour ?";
//  	  	this.QuestionText.step28 = "";
//  	  	this.QuestionText.step2_1 = "Est-ce une bonne nouvelle ?";
//    		this.QuestionText.menstruation = "Quel est la date de vos dernière règle ?";
//
//       this.QuestionText.psychoTest1 = "Vous et votre fertilité";
//       this.QuestionText.psychoTest1_1 = "recours à l'aide médicale à la procréation ";
//       this.QuestionText.psychoTest1_2 = "combien d'années avez vous passé entre le début du traitement et l'arrivée d'une grossesse";
//       this.QuestionText.psychoTest1_3 = "combien de fois avez-vous eus recours à l'aide médicale à la procreation";
//       this.QuestionText.psychoTest1_4 = "Bénéficié d'un don d'ovocyte";
//       this.QuestionText.psychoTest1_5 = "Bénéficié d'un don de sperme";
//
//       this.QuestionText.psychoTest2 = "Avez-vous connu une de ces situation ?";
//       this.QuestionText.psychoTest2_1 = "Fauche couche";
//       this.QuestionText.psychoTest2_2 = "Interruption volontaire de grossesse";
//       this.QuestionText.psychoTest2_3 = "Grossesse extra utérine";
//       this.QuestionText.psychoTest2_4 = "Mort foetale in utéro";
//       this.QuestionText.psychoTest2_5 = "Interruption médical de la grossesse";
//       this.QuestionText.psychoTest2_6 = "Interruption sélective de la grossesse";
//       this.QuestionText.psychoTest2_7 = "Enfant porteur de handicap";
//       this.QuestionText.psychoTest2_8 = "Enfant prématuré";
//       this.QuestionText.psychoTest2_9 = "Enfant atteint d'une maladie chronique";
//       this.QuestionText.psychoTest2_10 = "Mort d'un enfant";
//       this.QuestionText.psychoTest2_11 = "Ces expériences ont été traumatiques";
//       this.QuestionText.psychoTest2_12 = "en dehors des situation de grossesse j'ai connu des évènement que je qualifierais de traumatiques";
//
//       this.QuestionText.psychoTest4 = "Vous et votre psychologie";
//       this.QuestionText.psychoTest4_1 = "Crises d'angoisse";
//       this.QuestionText.psychoTest4_2 = "Boulimie";
//       this.QuestionText.psychoTest4_3 = "Anorexie";
//       this.QuestionText.psychoTest4_4 = "Trouble Obsessionnels compulsif TOC";
//       this.QuestionText.psychoTest4_5 = "Dépression";
//       this.QuestionText.psychoTest4_6 = "Phobie";
//       this.QuestionText.psychoTest4_7 = "trouble bipolaires";
//       this.QuestionText.psychoTest4_8 = "hospitalisation dans un service psychiatrique";
//
//   		this.navCtrl.push(Step1Page, {
//   			QuestionText: this.QuestionText
//   		});
//   	}
//
// }
