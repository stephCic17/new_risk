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
    nextStep: 5
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
  title:"Vous et votre fertilité",
  type:"Psycho1",
  answerUser1: -1,
  answerUser2 :-1,
  answerUser3: -1,
  answerUser4 :-1,
  answerUser5: -1,
  answer1:
  {
    label: "recours à l'aide médicale à la procréation",
  },
  answer2:
  {
    label: "combien d'années avez vous passé entre le début du traitement et l'arrivée d'une grossesse",
  },
  answer3:
  {
    label: "combien de fois avez-vous eus recours à l'aide médicale à la procreation",
  },
  answer4:
  {
    label: "Bénéficié d'un don d'ovocyte",
  },
  answer5:
  {
    label: "Bénéficié d'un don de sperme",
  },
  nextStep: 6
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
    nextStep: 6
  },
  answerNo:
  {
    label: "Non",
    nextStep: 6
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
    nextStep: 7
  },
  answerNo:
  {
    label: "Non",
    nextStep: 17
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
    nextStep: 8
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
    nextStep: 9
  },
  answerNo:
  {
    label: "Non",
    nextStep: 10
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
    nextStep: 10
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
    nextStep: 11
  },
  answerNo:
  {
    label: "Non",
    nextStep: 12
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
    nextStep: 12
  },
  answerNo:
  {
    label: "Non",
    nextStep: 12
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
    nextStep: 13
  },
  answerNo:
  {
    label: "Non",
    nextStep: 13
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
    nextStep: 14
  },
  answerNo:
  {
    label: "Non",
    nextStep: 14
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
    nextStep: 15
  },
  answerNo:
  {
    label: "Non",
    nextStep: 16
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
    nextStep: 16
  }
},
{
  idTable: 16,
  id: 17,
  title:"Vous et votre accouchement",
  type:"multipleChoice",
  answerUser1: -1,
  answerUser2 :-1,
  answerUser3: -1,
  answerUser4 :-1,
  answerUser5: -1,
  answerUser6: -1,
  answerUser7: -1,
  answerUser8: -1,
  answerUser9: -1,
  answer1:
  {
    label: "forceps",
  },
  answer2:
  {
    label: "ventouse",
  },
  answer3:
  {
    label: "césarienne en urgence",
  },
  answer4:
  {
    label: "anesthésie générale",
  },
  answer5:
  {
    label: "hémorragie",
  },
  answer6:
  {
    label: "Séparation avec le bébé à la naissance pendant plus de 6 heures",
  },
  answer7:
  {
    label: "penser que j'allais mourrir en accouchant",
  },
  answer8:
  {
    label: "penser que mon bébé allait mourrir",
  },
  answer9:
  {
    label: "j'ai subit un accouchement traumatique",
  },
  nextStep: 17
},
{
  idTable: 17,
  id: 18,
  title:"Avez-vous connu une de ces situation ?",
  type:"multipleChoice",
  answerUser1: -1,
  answerUser2 :-1,
  answerUser3: -1,
  answerUser4 :-1,
  answerUser5: -1,
  answerUser6: -1,
  answerUser7: -1,
  answerUser8: -1,
  answerUser9: -1,
  answerUser10: -1,
  answerUser11: -1,
  answerUser12: -1,
  answer1:
  {
    label: "Fauche couche",
  },
  answer2:
  {
    label: "Interruption volontaire de grossesse",
  },
  answer3:
  {
    label: "Grossesse extra utérine",
  },
  answer4:
  {
    label: "Mort foetale in utéro",
  },
  answer5:
  {
    label: "Interruption médical de la grossesse",
  },
  answer6:
  {
    label: "Interruption sélective de la grossesse",
  },
  answer7:
  {
    label: "Enfant porteur de handicap",
  },
  answer8:
  {
    label: "Enfant prématuré",
  },
  answer9:
  {
    label: "Enfant atteint d'une maladie chronique",
  },
  answer10:
  {
    label: "Mort d'un enfant",
  },
  answer11:
  {
    label: "Ces expériences ont été traumatiques",
  },
  answer12:
  {
    label: "en dehors des situation de grossesse j'ai connu des évènement que je qualifierais de traumatiques",
  },
  nextStep: 18
},
{
  idTable: 18,
  id: 19,
  answerUser: -1,
  title: "Combien de fausse couche avez-vous fait ?",
  type: "number",
  answer:
  {
    label: "nombre",
    nextStep: 19
  }
},
{
  idTable: 19,
  id: 20,
  title: "Combien de verres d'alcool buvez-vous par semaine ?",
  type: "number",
  answer:
  {
    label: "nombre par semaine",
    nextStep: 20
  },
  answerUser: -1,
},
{
  idTable: 20,
  id: 21,
  answerUser: -1,
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
},
{
  idTable: 21,
  id: 22,
  answerUser: -1,
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
},
{
  idTable: 22,
  id: 23,
  answerUser: -1,
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
    nextStep: 23
  }
},
{
  idTable: 23,
  id: 24,
  answerUser: -1,
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
},
{
  idTable: 24,
  id: 25,
  answerUser: -1,
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
},
{
  idTable: 25,
  id: 26,
  title:"Selectionner les médicament que vous prennez",
  type:"multipleIf",
  answerUser1: -1,
  answerUser2 :-1,
  answerUser3: -1,
  answerUser4 :-1,
  answerUser5: -1,
  answerUser6: -1,
  answerUser7: -1,
  answerUser8: -1,

  answer1:
  {
    label: "Anti-Epileptique",
  },
  answer2:
  {
    label: "Anticoagulent",
  },
  answer3:
  {
    label: "Antihypertenseur",
  },
  answer4:
  {
    label: "Insuline",
  },
  answer5:
  {
    label: "Antidepresseur",
  },

  nextStep: 26
},
{
  idTable: 26,
  id: 27,
  answerUser: -1,
  title: "Quelle est votre taille (en cm) ?",
  type: "number",
  answer:
  {
    label: "en cm",
    nextStep: 27
  }
},
{
  idTable: 27,
  id: 28,
  title: "Quel est votre poids (en kg) ?",
  type: "number",
  answer:
  {
    label: "en kg",
    nextStep: 28
  }
},
{
  idTable: 28,
  id: 29,
  answerUser: -1,
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
    nextStep: 32
  }
},
{
  idTable: 29,
  id: 30,
  answerUser: -1,
  title: "Combien d'heures de travail effectuez-vous par jour ?",
  type: "number",
  answer:
  {
    label: "en heure",
    nextStep: 30
  }
},
{
  idTable: 30,
  id: 31,
  answerUser: -1,
  title: "Quel est votre temps de trajet par jour (en minute) ?",
  type: "number",
  answer:
  {
    label: "en minute",
    nextStep: 31
  }
},
{
  idTable: 31,
  id: 32,
  answerUser: -1,
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
},
{
  idTable: 32,
  id: 33,
  title:"Vous et votre psychologie",
  type:"multipleChoice",
  answerUser1: -1,
  answerUser2 :-1,
  answerUser3: -1,
  answerUser4 :-1,
  answerUser5: -1,
  answerUser6: -1,
  answerUser7: -1,
  answerUser8: -1,
  answer1:
  {
    label: "Crises d'angoisse",
  },
  answer2:
  {
    label: "Boulimie",
  },
  answer3:
  {
    label: "Anorexie",
  },
  answer4:
  {
    label: "Trouble Obsessionnels compulsif TOC",
  },
  answer5:
  {
    label: "Dépression",
  },
  answer6:
  {
    label: "Phobie",
  },
  answer7:
  {
    label: "trouble bipolaires",
  },
  answer8:
  {
    label: "hospitalisation dans un service psychiatrique",
  },
  nextStep: 99
}
];

export default Questions;


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
