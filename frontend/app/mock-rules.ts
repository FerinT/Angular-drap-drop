import { Rule } from "./rule"
import { FinancialAccount } from "./financial-account"
import { RuleCriteria } from "./rule-criteria"


var fin = new FinancialAccount();
fin.activeFlag = "f";

var ruleCriteria = new ruleCriteria();
ruleCriteria.field = "account number";

var rule = new Rule();
rule.financialAccount = fin;
rule.ruleCriteria = ruleCriteria;



export const RULES: Rule[] = [
    rule
];