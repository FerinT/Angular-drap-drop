import { Component, OnInit } from '@angular/core'
import { RuleContainer } from './rule-container.component'


@Component({

    selector: 'rule-stack-container',
    template: `<rule-container></rule-container>
      <button type="submit" class="btn btn-success pull-right" (click)="addRuleContainerComponent()">Create Another Rule</button>
    `
})

export class RuleStackComponent {
    //*ngFor="let ruleContainer of RuleContainer" [ruleContainer]="ruleContainer"
    //  <button type="submit" class="btn btn-success pull-right" (click)="addRuleContainerComponent()">Create Another Rule</button>

    ruleContainer: RuleContainer[] = [];

    addRuleContainerComponent(){
        this.ruleContainer.push(new RuleContainer());
    }
}