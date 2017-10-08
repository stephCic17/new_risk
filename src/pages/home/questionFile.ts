const Questions = [
  {
    idTable: 0,
    id: 1,
    title: "Quel âge avez-vous ?",
    type: "number",
    answer:
      {
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
    answerYes:
      {
        label: "Oui",
        nextStep: 3
      },
    answerNo:
      {
        label: "Non",
        nextStep: 6
      },
    answerIdn:
      {
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
    title:"Est-ce une bonne nouvelle ?",
    type:"yesNoIdn",
    answerUser: -1,
       answerYes:
      {
        label: "Oui",
        nextStep: 5
      },
    answerNo:
      {
        label: "Non",
        nextStep: 99
      },
    answerIdn:
      {
        label: "Je ne sais pas",
        nextStep: 30
      }
  },
  {
    idTable: 4,
    id: 5,
    title:"QUESTIONNAIRE PSYCHO",
    type:"yesNo",
    answerUser: -1,
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
  },
  {
    idTable: 5,
    id: 6,
    title:"Fumez-vous ?",
    type:"yesNo",
    answerUser: -1,
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
    },
  {
    idTable: 6,
    id: 7,
    answerUser: -1 ,
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
  },
  {
    idTable: 7,
    id: 8,
    answerUser: -1,
    title:"Combien avez-vous d'enfant ?",
    type: "number",
    answer:
      {
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
  },
  {
    idTable: 9,
    id: 10,
    answerUser: -1,
    title:"Combien d'un enfant de plus de 4 kilos avez-vous eus ?",
    type: "number",
    answer:
      {
        label: "nombre d'enfants",
        nextStep: 11
      }
  },
  {
    idTable: 10,
    id: 11,
    answerUser: -1,
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
  },
  {
    idTable: 11,
    id: 12,
    answerUser: -1,
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
  },
  {
    idTable: 12,
    id: 13,
    answerUser: -1,
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
  },
  {
    idTable: 13,
    id: 14,
    answerUser: -1,
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
  },
  {
    idTable: 14,
    id: 15,
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
  },
  {
    idTable: 15,
    id: 16,
    answerUser: -1,
    title: "Combien avez-vous eu de césarienne",
    type: "number",
    answer:
      {
        label: "nombre de cesarienne",
        nextStep: 17
      }
  },
  {
    idTable: 16,
    id: 17,
    answerUser: -1,
    title: "Combien de fausse couche avez-vous fait ?",
    type: "number",
    answer:
      {
        label: "nombre",
        nextStep: 18
      }
  },
  {
    idTable: 17,
    id: 18,
    title: "Combien de verres d'alcool buvez-vous par semaine ?",
    type: "number",
    answer:
      {
        label: "nombre par semaine",
        nextStep: 19
      },
    answerUser: -1,
  },
  {
    idTable: 18,
    id: 19,
    answerUser: -1,
    title: "Avez-vous une épilepsie ?",
    type: "yesNo",
    answerYes:
      {
        label: "Oui",
        nextStep: 20
      },
    answerNo:
      {
        label: "Non",
        nextStep: 20
      }
  },
  {
    idTable: 19,
    id: 20,
    answerUser: -1,
    title: "Avez-vous déjà eu une phlébite ?",
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
  },
  {
    idTable: 20,
    id: 21,
    answerUser: -1,
    title: "Avez-vous de l'hypertension artérielle ?",
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
  },
  {
    idTable: 21,
    id: 22,
    answerUser: -1,
    title: "Avez-vous du diabète ?",
    type: "yesNo",
    answerYes:
      {
        label: "Oui",
        nextStep: 23
      },
    answerNo:
      {
        label: "Non",
        nextStep: 23
      }
  },
  {
    idTable: 22,
    id: 23,
    answerUser: -1,
    title:"Prenez vous des médicaments ?",
    type: "yesNo",
    answerYes:
      {
        label: "Oui",
        nextStep: 24
      },
    answerNo:
      {
        label: "Non",
        nextStep: 25
      }
  },
  {
    idTable: 23,
    id: 24,
    answerUser: -1,
    title:"Selectionnez les médicaments que vous prenez",
    type: "number",
    answer:
      {
        label: "",
        nextStep: 25
      }
  },
  {
    idTable: 24,
    id: 25,
    answerUser: -1,
    title: "Quelle est votre taille (en cm) ?",
    type: "number",
    answer:
      {
        label: "en cm",
        nextStep: 26
      }
  },
  {
    idTable: 25,
    id: 26,
    title: "Quel est votre poids (en kg) ?",
    type: "number",
    answer:
      {
        label: "en kg",
        nextStep: 27
      }
  },
  {
    idTable: 26,
    id: 27,
    answerUser: -1,
    title: "Travaillez-vous ?",
    type: "yesNo",
    answerYes:
      {
        label: "Oui",
        nextStep: 28
      },
    answerNo:
      {
        label: "Non",
        nextStep: 99
      }
  },
  {
    idTable: 27,
    id: 28,
    answerUser: -1,
    title: "Combien d'heures de travail effectuez-vous par jour ?",
    type: "number",
    answer:
      {
        label: "en heure",
        nextStep: 29
      }
  },
  {
    idTable: 28,
    id: 29,
    answerUser: -1,
    title: "Quel est votre temps de trajet par jour (en minute) ?",
    type: "number",
    answer:
      {
        label: "en minute",
        nextStep: 30
      }
  },
  {
    idTable: 29,
    id: 30,
    answerUser: -1,
    title: "Travaillez-vous debout plus de 6 heures par jour ?",
    type: "yesNo",
    answerYes:
      {
        label: "Oui",
        nextStep: 99
      },
    answerNo:
      {
        label: "Non",
        nextStep: 99
      }
  }
];

export default Questions;


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
