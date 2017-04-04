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
var rule_criteria_service_1 = require("./rule-criteria.service");
var CreateRuleComponent = (function () {
    function CreateRuleComponent(ruleCriteriaService) {
        this.ruleCriteriaService = ruleCriteriaService;
        this.ruleCriteriaLaterUse = [];
    }
    CreateRuleComponent.prototype.onItemDrop = function (e) {
        console.log('in drop item');
        // Get the dropped data here
        this.ruleCriteriaLaterUse.push(e.dragData);
    };
    CreateRuleComponent.prototype.getRuleCriteria = function () {
        var _this = this;
        this.ruleCriteriaService.getCriteria().then(function (ruleCriteria) { return _this.ruleCriteria = ruleCriteria; });
    };
    CreateRuleComponent.prototype.ngOnInit = function () {
        this.getRuleCriteria();
    };
    CreateRuleComponent = __decorate([
        core_1.Component({
            selector: 'create-rule',
            template: "\n    \n    <div class=\"container-fluid\" >\n    <h1>Create Rules</h1>\n    <i><p>click create and drag the rule to your proposed area</p></i>\n        <form>\n            <table>\n                <tr>\n                    <div class=\"form-group\">\n                        <td>\n                            <label for=\"field\">Field</label>\n                        </td>\n                        <td>\n                            <select name=\"field\" class=\"form-control\">\n                                <option value=\"franchise\">Franchise</option>\n                                <option value=\"billing_partner\">Billing Partner</option>\n                                <option value=\"billing_method\">Billing Method</option>\n                                <option value=\"statement_direction\">Statement Direction</option>\n                                <option value=\"transaction_type\">Transaction Type</option>\n                                <option value=\"product\">product</option>\n                            </select>\n                        </td>\n                        <td>\n                            <label for=\"operator\">Operator</label>\n                        </td>\n                        <td>\n                            <select name=\"operator\" class=\"form-control\">\n                                <option value=\"equal\">=</option>\n                                <option value=\"greater_than\">></option>\n                            </select>\n                        </td>\n                        <td>\n                            <label for=\"actual_value\">Value</label>\n                        </td>\n                        <td>\n                            <input type=\"text\" class=\"form-control\" id=\"actual_value\" required>\n                        </td>\n                        <br>\n                        <button type=\"submit\" class=\"btn btn-success pull-right\">Create</button>\n                    </div>\n                <tr>\n            </table>\n\n    <div class=\"col-sm-9\">\n        <ul class=\"list-group\">\n            <li draggable *ngFor=\"let criteria of ruleCriteria\" [dragData]=\"criteria\" class=\"list-group-item\">{{criteria.field}} {{criteria.evaluator}} {{criteria.value}} </li>\n        </ul>\n    </div>\n\n    <div class=\"col-sm-9\">\n    <div class=\"panel panel-default\" droppable (onDrop)=\"onItemDrop($event)\">\n    <br>\n        <div class=\"panel-heading\">Use these later</div>\n            <div class=\"panel-body\">\n                <li draggable *ngFor=\"let criteria of ruleCriteriaLaterUse\" [dragData]=\"criteria\" class=\"list-group-item\">{{criteria.field}} {{criteria.evaluator}} {{criteria.value}} </li>\n            </div>\n        </div>\n    </div>\n\n\n        </form>\n    </div>\n\n    ",
            providers: [rule_criteria_service_1.RuleCriteriaService]
        }), 
        __metadata('design:paramtypes', [rule_criteria_service_1.RuleCriteriaService])
    ], CreateRuleComponent);
    return CreateRuleComponent;
}());
exports.CreateRuleComponent = CreateRuleComponent;
//# sourceMappingURL=create-rules.component.js.map