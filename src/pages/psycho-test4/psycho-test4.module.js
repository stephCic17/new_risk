var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PsychoTest4Page } from './psycho-test4';
var PsychoTest4PageModule = (function () {
    function PsychoTest4PageModule() {
    }
    return PsychoTest4PageModule;
}());
PsychoTest4PageModule = __decorate([
    NgModule({
        declarations: [
            PsychoTest4Page,
        ],
        imports: [
            IonicPageModule.forChild(PsychoTest4Page),
        ],
    })
], PsychoTest4PageModule);
export { PsychoTest4PageModule };
//# sourceMappingURL=psycho-test4.module.js.map