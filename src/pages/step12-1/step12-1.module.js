var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Step12_1Page } from './step12-1';
var Step12_1PageModule = (function () {
    function Step12_1PageModule() {
    }
    return Step12_1PageModule;
}());
Step12_1PageModule = __decorate([
    NgModule({
        declarations: [
            Step12_1Page,
        ],
        imports: [
            IonicPageModule.forChild(Step12_1Page),
        ],
    })
], Step12_1PageModule);
export { Step12_1PageModule };
//# sourceMappingURL=step12-1.module.js.map