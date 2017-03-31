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
var RuleContainer = (function () {
    function RuleContainer() {
    }
    RuleContainer = __decorate([
        core_1.Component({
            selector: 'rule-container',
            template: "\n\n      <div class=\"container-fluid\">\n        <table>\n            <tr>\n                <td>\n                    <label for=\"accountNumber\">Account Number</label>\n                </td>\n                <td>\n                    <select name=\"accountNumber\" class=\"form-control\">\n                        <option value=\"1\">123abc456</option>\n                        <option value=\"2\">456def123</option>\n                    </select>\n                </td>\n            </tr>\n        </table>\n        \n\n   <div class=\"col-sm-7\">\n    <div class=\"panel panel-default\" droppable (onDrop)=\"onItemDrop($event)\">\n        <div class=\"panel-heading\">Drop Items here</div>\n            <div class=\"panel-body\">\n                <li *ngFor=\"let item of droppedItems\" class=\"list-group-item\">{{item.name}}</li>\n            </div>\n        </div>\n    </div>\n\n\n    </div>\n\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], RuleContainer);
    return RuleContainer;
}());
exports.RuleContainer = RuleContainer;
//# sourceMappingURL=rule-container.component.js.map