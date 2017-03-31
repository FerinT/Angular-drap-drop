import { Injectable } from '@angular/core';

import { CRITERIA } from "./mock-criteria"
import { RuleCriteria } from "./rule-criteria"

@Injectable()
export class RuleCriteriaService {

    getCriteria(): RuleCriteria[] {
        return CRITERIA;
    }

}