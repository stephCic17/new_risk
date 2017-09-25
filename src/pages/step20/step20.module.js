var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Step20Page } from './step20';
var Step20PageModule = (function () {
    function Step20PageModule() {
    }
    return Step20PageModule;
}());
Step20PageModule = __decorate([
    NgModule({
        declarations: [
            Step20Page,
        ],
        imports: [
            IonicPageModule.forChild(Step20Page),
        ],
    })
], Step20PageModule);
export { Step20PageModule };
//# sourceMappingURL=step20.module.js.map