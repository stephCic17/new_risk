var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Step8Page } from './step8';
var Step8PageModule = (function () {
    function Step8PageModule() {
    }
    return Step8PageModule;
}());
Step8PageModule = __decorate([
    NgModule({
        declarations: [
            Step8Page,
        ],
        imports: [
            IonicPageModule.forChild(Step8Page),
        ],
    })
], Step8PageModule);
export { Step8PageModule };
//# sourceMappingURL=step8.module.js.map