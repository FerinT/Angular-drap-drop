import { Injectable } from '@angular/core';

import { CRITERIA } from "./mock-criteria"
import { RuleCriteria } from "./rule-criteria"

@Injectable()
export class RuleCriteriaService {

    getCriteria(): Promise<RuleCriteria[]> {
        return Promise.resolve(CRITERIA);
    }

}