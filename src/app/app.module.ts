import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ResultPage } from '../pages/result/result';
import { Step1Page } from '../pages/step1/step1';
import { Step2Page } from '../pages/step2/step2';
import { Step3Page } from '../pages/step3/step3';
import { MenstruationPage } from '../pages/menstruation/menstruation';
import { Step2_1Page } from '../pages/step2-1/step2-1';
import { IvgInfoPage } from '../pages/ivg-info/ivg-info';
import { Step4Page } from '../pages/step4/step4';
import { Step5Page } from '../pages/step5/step5';
import { Step6Page } from '../pages/step6/step6';
import { Step7Page } from '../pages/step7/step7';
import { Step8Page } from '../pages/step8/step8';
import { Step9Page } from '../pages/step9/step9';
import { Step10Page } from '../pages/step10/step10';
import { Step11Page } from '../pages/step11/step11';
import { Step12Page } from '../pages/step12/step12';
import { Step12_1Page } from '../pages/step12-1/step12-1';
import { Step13Page } from '../pages/step13/step13';
import { Step14Page } from '../pages/step14/step14';
import { Step15Page } from '../pages/step15/step15';
import { Step16Page } from '../pages/step16/step16';
import { Step17Page } from '../pages/step17/step17';
import { Step18Page } from '../pages/step18/step18';
import { Step19Page } from '../pages/step19/step19';
import { Step20Page } from '../pages/step20/step20';
import { Step21Page } from '../pages/step21/step21';
import { Step22Page } from '../pages/step22/step22';
import { Step23Page } from '../pages/step23/step23';
import { Step24Page } from '../pages/step24/step24';
import { Step25Page } from '../pages/step25/step25';
import { Step26Page } from '../pages/step26/step26';
import { PsychoTest1Page } from '../pages/psycho-test1/psycho-test1';
import { PsychoTest2Page } from '../pages/psycho-test2/psycho-test2';
import { PsychoTest3Page } from '../pages/psycho-test3/psycho-test3';
import { PsychoTest4Page } from '../pages/psycho-test4/psycho-test4';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    HomePage,
    TabsPage,
    ResultPage,
    Step1Page,
    Step2Page,
    Step3Page,
    MenstruationPage,
    Step2_1Page,
    IvgInfoPage,
    Step4Page,
    Step5Page,
    Step6Page,
    Step7Page,
    Step8Page,
    Step9Page,
    Step10Page,
    Step11Page,
    Step12Page,
    Step12_1Page,
    Step13Page,
    Step14Page,
    Step15Page,
    Step16Page,
    Step17Page,
    Step18Page,
    Step19Page,
    Step20Page,
    Step21Page,
    Step22Page,
    Step23Page,
    Step24Page,
    Step25Page,
    Step26Page,
    PsychoTest1Page,
    PsychoTest2Page,
    PsychoTest3Page,
    PsychoTest4Page
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    HomePage,
    TabsPage,
    ResultPage,
    Step1Page,
    Step2Page,
    Step3Page,
    MenstruationPage,
    Step2_1Page,
    IvgInfoPage,
    Step4Page,
    Step5Page,
    Step6Page,
    Step7Page,
    Step8Page,
    Step9Page,
    Step10Page,
    Step11Page,
    Step12Page,    
    Step12_1Page,
    Step13Page,
    Step14Page,
    Step15Page,
    Step16Page,
    Step17Page,
    Step18Page,
    Step19Page,
    Step20Page,
    Step21Page,
    Step22Page,
    Step23Page,
    Step24Page,
    Step25Page,
    Step26Page,
    PsychoTest1Page,
    PsychoTest2Page,
    PsychoTest3Page,
    PsychoTest4Page

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
