import { Component, Renderer } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { ResultPage } from '../result/result';
import { IvgInfoPage } from '../ivg-info/ivg-info';

import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import Questions from './questionFile';
import Stat from '../../app/statistique';

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
	answer:any;

	questionForm:any;


	constructor(private renderer: Renderer, public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) { }
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

		this.answer = [];
		this.Questions = Questions;
		console.log(this.Questions);

	}

	init() {
		this.isInitialized = true;
		this.currentStep = this.sliderOne.getActiveIndex();
		this.totalStep = this.sliderOne.length();
		//		this.sliderOne.lockSwipeToPrev(true);
		this.sliderOne.lockSwipes(true);
		// setTimeout(function(){
			// }, 500);
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
			Stat.push({
				id: question.id,
				type: question.type,
				title: "clic next",
				timestamp: Date.now()
			});
			console.log(Stat);
			this.questionForm = question;
			if (this.questionForm.type == "number")
			{
				this.currentStep = this.questionForm.answer.nextStep;
				this.Questions[this.questionForm.idTable].prevStep = this.questionForm.idTable;
				this.Questions[this.questionForm.idTable].answerUser = this.number;
				this.manageSlideTo();
			}
			else if (this.questionForm.type == "yesNoIdn")
			{
				if (this.yes)
				{
					this.currentStep =this.questionForm.answerYes.nextStep;
					this.Questions[this.questionForm.idTable].answerUser = 1;
					this.manageSlideTo();
				}
				else if (this.no)
				{
					this.currentStep =this.questionForm.answerNo.nextStep;
					this.Questions[this.questionForm.idTable].answerUser = 0;
					if (this.currentStep == 250)
					{
						this.yes = false;
						this.no = false;
						this.idn = false;
						this.navCtrl.push(IvgInfoPage, {
							userParams: this.Questions
						});
					}
					this.manageSlideTo();

				}
				else if (this.idn)
				{
					this.currentStep = this.questionForm.answerIdn.nextStep;
					this.Questions[this.questionForm.idTable].answerUser = 2;
					if (this.currentStep == 250)
						this.navCtrl.push(IvgInfoPage, {
							userParams: this.Questions
						});
					this.manageSlideTo();
				}
				else
				{
					let alert = this.alertCtrl.create({
						title: 'Selectionnez au moins une des réponses',
						subTitle: 'Nous avons besoin de toutes les informations qui vous sont demandées pour établir votre profil',
						buttons: ['OK']
					});
					alert.present();
				}
			}
			else if (this.questionForm.type == "yesNo")
			{

				if (this.yes)
				{
					this.currentStep = this.questionForm.answerYes.nextStep;
					this.Questions[this.questionForm.idTable].answerUser = 1;
					this.manageSlideTo();
				}
				else if (this.no)
				{
					this.currentStep = this.questionForm.answerNo.nextStep;
					this.Questions[this.questionForm.idTable].answerUser = 0;
					this.manageSlideTo();
				}
				else
				{
					let alert = this.alertCtrl.create({
						title: 'Selectionnez au moins une des réponses',
						subTitle: 'Nous avons besoin de toutes les informations qui vous sont demandées pour établir votre profil',
						buttons: ['OK']
					});
					alert.present();
				}

			}
			else if (this.questionForm.type == "date")
			{
				console.log(this.Questions[2]);

				if (this.Questions[1].answerUser == 2)
					this.Questions[3].title = "Désireriez-vous cette grossesse ?";
				if (this.date)
				{
					this.currentStep = this.questionForm.answer.nextStep;
					this.Questions[this.questionForm.idTable].answerUser = new Date(this.date);
					this.manageSlideTo();
				}
				else
				{
					let alert = this.alertCtrl.create({
						title: 'Selectionnez au moins une des réponses',
						subTitle: 'Nous avons besoin de toutes les informations qui vous sont demandées pour établir votre profil',
						buttons: ['OK']
					});
					alert.present();
				}
			}
			else if (this.questionForm.type == "multipleChoice"
				|| this.questionForm.type == "multipleIf"
				|| this.questionForm.type == "Psycho1")
			{

				if (this.questionForm.id == 18 && !this.answer.one)
					this.questionForm.nextStep = 20;
				this.currentStep = this.questionForm.nextStep;
				this.Questions[this.questionForm.idTable].answerUser1 = this.answer.one;
				this.Questions[this.questionForm.idTable].answerUser2 = this.answer.two;
				this.Questions[this.questionForm.idTable].answerUser3 = this.answer.three;
				this.Questions[this.questionForm.idTable].answerUser4 = this.answer.four;
				this.Questions[this.questionForm.idTable].answerUser5 = this.answer.five;
				this.Questions[this.questionForm.idTable].answerUser6 = this.answer.six;
				this.Questions[this.questionForm.idTable].answerUser7 = this.answer.seven;
				this.Questions[this.questionForm.idTable].answerUser8 = this.answer.eight;
				this.Questions[this.questionForm.idTable].answerUser9 = this.answer.nine;
				this.Questions[this.questionForm.idTable].answerUser10 = this.answer.ten;
				this.Questions[this.questionForm.idTable].answerUser11 = this.answer.eleven;
				this.Questions[this.questionForm.idTable].answerUser12 = this.answer.twelve;
				this.manageSlideTo();
			}
			if (this.currentStep == 99) {
				this.navCtrl.push(ResultPage, {
					userParams: this.Questions
				});
			}
			if (this.Questions[this.currentStep-1])
				this.Questions[this.currentStep-1].prevStep = this.questionForm.id;

			this.number = false;
			this.yes = false;
			this.no = false;
			this.idn = false;
			this.date = 0;
			this.answer.one = false;
			this.answer.two = false;
			this.answer.three = false;
			this.answer.four = false;
			this.answer.five = false;
			this.answer.six = false;
			this.answer.seven = false;
			this.answer.eight = false;
			this.answer.nine = false;
			this.answer.ten = false;
			this.answer.eleven = false;
			this.answer.twelve = false;

			console.log("questions", this.Questions);
		}

		manageSlideTo() {
			console.log("mange");
			this.sliderOne.lockSwipes(false);
			if (this.currentStep == 99) {
				console.log("next == 99");
				this.navCtrl.push(ResultPage, {
					userParams: this.Questions
				});
			}
			else
				this.sliderOne.slideTo(this.currentStep, 350);
			this.sliderOne.lockSwipes(true);
		}

		next() {
			console.log("next");
			Stat.push({
				id: 1,
				type: "begin",
				title: "clic next after begin",
				timestamp: Date.now()
			});
			if(!this.isInitialized)
				this.init();
			this.currentStep++;
			this.manageSlideTo();
		}
		prev() {
			console.log("prev");
			this.currentStep--;
			this.manageSlideTo();
		}
		prevStepFunction(question) {
			Stat.push({
				id: question.id,
				type: question.type,
				title: "clic prev",
				timestamp: Date.now()
			});
			console.log("prevStepFunction");
			this.currentStep = question.prevStep;
			this.manageSlideTo();
		}
		testCheck(answer)
		{
			if (answer == "yes")
			{
				
				if (this.yes == false)
				{
					Stat.push({
						id: this.currentStep,
						type: "yes",
						title: "question",
						timestamp: Date.now()
					});
					console.log(Stat);
					this.no = false;
					this.idn = false;
					this.yes = true;

				}
			}
			else if (answer == "no")
			{
				Stat.push({
					id: this.currentStep,
					type: "no",
					title: "question",
					timestamp: Date.now()
				});
				console.log(Stat);
				if (this.no == false)
				{
					this.yes = false;
					this.idn = false;
					this.no = true;
				}
			}
			else
			{
				if (this.idn == false)
				{
					Stat.push({
						id: this.currentStep,
						type: "idn",
						title: "question",
						timestamp: Date.now()
					});
					console.log(Stat);
					this.no = false;
					this.yes = false;
					this.idn = true;
				}
			}
		}
	}