var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Step13Page } from './step13';
var Step13PageModule = (function () {
    function Step13PageModule() {
    }
    return Step13PageModule;
}());
Step13PageModule = __decorate([
    NgModule({
        declarations: [
            Step13Page,
        ],
        imports: [
            IonicPageModule.forChild(Step13Page),
        ],
    })
], Step13PageModule);
export { Step13PageModule };
//# sourceMappingURL=step13.module.js.map