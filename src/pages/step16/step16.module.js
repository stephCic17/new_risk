var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Step16Page } from './step16';
var Step16PageModule = (function () {
    function Step16PageModule() {
    }
    return Step16PageModule;
}());
Step16PageModule = __decorate([
    NgModule({
        declarations: [
            Step16Page,
        ],
        imports: [
            IonicPageModule.forChild(Step16Page),
        ],
    })
], Step16PageModule);
export { Step16PageModule };
//# sourceMappingURL=step16.module.js.map