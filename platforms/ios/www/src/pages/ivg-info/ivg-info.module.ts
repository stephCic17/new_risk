import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IvgInfoPage } from './ivg-info';

@NgModule({
  declarations: [
    IvgInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(IvgInfoPage),
  ],
})
export class IvgInfoPageModule {}
