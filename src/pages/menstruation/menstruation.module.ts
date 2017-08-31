import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MenstruationPage } from './menstruation';

@NgModule({
  declarations: [
    MenstruationPage,
  ],
  imports: [
    IonicPageModule.forChild(MenstruationPage),
  ],
})
export class MenstruationPageModule {}
