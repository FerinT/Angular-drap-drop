
import { CreateRuleComponent } from "./create-rules.component"
import { RuleContainer } from "./rule-container.component"
import { RuleCriteriaService } from "./rule-criteria.service"
import { RuleStackComponent } from "./rule-stack.component"

import { NgModule }      from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule }   from '@angular/forms'
import { Ng2DragDropModule } from "ng2-drag-drop"



@NgModule({
  imports:      [ BrowserModule, Ng2DragDropModule],
  declarations: [ CreateRuleComponent, RuleStackComponent, RuleContainer ],
  bootstrap:    [ CreateRuleComponent, RuleStackComponent, RuleContainer ]
})

export class AppModule { }
