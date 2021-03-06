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
var create_rules_component_1 = require("./create-rules.component");
var rule_container_component_1 = require("./rule-container.component");
var rule_stack_component_1 = require("./rule-stack.component");
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var ng2_drag_drop_1 = require("ng2-drag-drop");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, ng2_drag_drop_1.Ng2DragDropModule],
            declarations: [create_rules_component_1.CreateRuleComponent, rule_stack_component_1.RuleStackComponent, rule_container_component_1.RuleContainer],
            bootstrap: [create_rules_component_1.CreateRuleComponent, rule_stack_component_1.RuleStackComponent, rule_container_component_1.RuleContainer]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app_module.js.map