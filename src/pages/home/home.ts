import { Component, Renderer, ElementRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ResultPage } from '../result/result';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import Questions from './questionFile';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  @ViewChild('sliderOne') sliderOne: Slides;
  @ViewChild('realFormButton') realFormButton;

  Questions = [];
  Answers = [];
  totalStep = 0;
  currentStep = 0;
  activeLogo = false;
  activeLogoWrapper = false;
  activeWelcomeContent = false;
  isInitialized = false;
  changing = false;
  Question:any;
  number:any;
  yes:any;
  no:any;
  idn:any;
  date:any;
  questionForm:any;

  constructor(private renderer: Renderer, public navCtrl: NavController, public navParams: NavParams) { }

  ngOnInit() {
   var self = this;
   this.activeLogoWrapper = true;

    setTimeout(function() {
      self.activeLogo = true;
    }, 500);

    setTimeout(function() {
      self.activeLogoWrapper = false;
      self.activeWelcomeContent = true;
    }, 2500);


    this.Questions = Questions;
    console.log(this.Questions);

    // type 1 = number
    // type 2 = Oui non
    // type 3 = oui non je ne sais pas
    // type 4 = select
    // type 5 = date

  }

  init() {
    this.isInitialized = true;
    this.currentStep = this.sliderOne.getActiveIndex();
    this.totalStep = this.sliderOne.length();
    this.sliderOne.lockSwipeToPrev(true);
    // this.sliderOne.lockSwipes(true);
  }

  ionSlideDidChange() {
    this.changing = false;
  }

  ionSlideWillChange() {
    this.changing = true;
  }

  slideChanged() {
    this.currentStep = this.sliderOne.getActiveIndex();
  }

  ngAfterViewInit() {
  }

  handleNext() {
    console.log(this.renderer);
    let mouseclick = new MouseEvent('click', {bubbles: false});
    setTimeout(() => {
      this.renderer.invokeElementMethod(this.realFormButton.nativeElement, 'dispatchEvent', [mouseclick]);
    }, 10);
  }

  nextForm(question) {

    console.log("before", question);

    this.questionForm = question;
    if (this.questionForm.type == "number")
    {
      this.currentStep = this.questionForm.answer.nextStep;
      this.Questions[this.questionForm.idTable].answerUser = this.number;
      this.sliderOne.slideTo(this.currentStep, 350);
    }
    else if (this.questionForm.type == "yesNoIdn")
    {
      if (this.yes)
      {
        this.currentStep =this.questionForm.answerYes.nextStep;
        this.Questions[this.questionForm.idTable].answerUser = 1;
        this.sliderOne.slideTo(this.currentStep, 350);
      }
      else if (this.no)
      {
        this.currentStep =this.questionForm.answerNo.nextStep;
        this.Questions[this.questionForm.idTable].answerUser = 0;
        this.sliderOne.slideTo(this.currentStep, 350);

      }
      else if (this.idn)
      {
        this.currentStep = this.questionForm.answerIdn.nextStep;
        this.Questions[this.questionForm.idTable].answerUser = 2;
        this.sliderOne.slideTo(this.currentStep, 350);
      }
    }
    else if (this.questionForm.type == "yesNo")
    {
      if (this.yes)
      {
        this.currentStep = this.questionForm.answerYes.nextStep;
        this.Questions[this.questionForm.idTable].answerUser = 1;
        this.sliderOne.slideTo(this.currentStep, 350);
      }
      else if (this.no)
      {
        this.currentStep = this.questionForm.answerNo.nextStep;
        this.Questions[this.questionForm.idTable].answerUser = 0;
        this.sliderOne.slideTo(this.currentStep, 350);
      }
    }
    else if (this.questionForm.type == "date")
    {
      this.currentStep = this.questionForm.answer.nextStep;
      this.Questions[this.questionForm.idTable].answerUser = this.date;
      this.sliderOne.slideTo(this.currentStep, 350);
    }

    this.number = "";
    this.yes = false;
    this.no = false;
    this.idn = false;
    this.date = 0;

    console.log("after", question);

    console.log("questions", this.Questions);

    if (this.currentStep == 99) {
      this.navCtrl.push(ResultPage, {
        userParams: this.Questions
      });
    }

  }

  next() {
    if(!this.isInitialized)
      this.init();
    this.currentStep++;
    this.sliderOne.slideTo(this.currentStep, 350);
  }
  prev() {
     this.currentStep--;
     this.sliderOne.slideTo(this.currentStep, 350);
  }
}
