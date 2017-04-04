"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var rule_container_component_1 = require('./rule-container.component');
var RuleStackComponent = (function () {
    function RuleStackComponent() {
        //*ngFor="let ruleContainer of RuleContainer" [ruleContainer]="ruleContainer"
        //  <button type="submit" class="btn btn-success pull-right" (click)="addRuleContainerComponent()">Create Another Rule</button>
        this.ruleContainer = [];
    }
    RuleStackComponent.prototype.addRuleContainerComponent = function () {
        this.ruleContainer.push(new rule_container_component_1.RuleContainer());
    };
    RuleStackComponent = __decorate([
        core_1.Component({
            selector: 'rule-stack-container',
            template: "<rule-container></rule-container>\n      <button type=\"submit\" class=\"btn btn-success pull-right\" (click)=\"addRuleContainerComponent()\">Create Another Rule</button>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], RuleStackComponent);
    return RuleStackComponent;
}());
exports.RuleStackComponent = RuleStackComponent;
//# sourceMappingURL=rule-stack.component.js.map