"use strict";
var rule_1 = require("./rule");
var financial_account_1 = require("./financial-account");
var fin = new financial_account_1.FinancialAccount();
fin.activeFlag = "f";
var ruleCriteria = new ruleCriteria();
ruleCriteria.field = "account number";
var rule = new rule_1.Rule();
rule.financialAccount = fin;
rule.ruleCriteria = ruleCriteria;
exports.RULES = [
    rule
];
//# sourceMappingURL=mock-rules.js.map