import { Component, OnInit } from '@angular/core'
import { Ng2DragDropModule } from "ng2-drag-drop";
import { RuleCriteria } from "./rule-criteria";

@Component({

    selector: 'rule-container',
    template: `

      <div class="container-fluid">
        <table>
            <tr>
                <td>
                    <label for="accountNumber">Account Number</label>
                </td>
                <td>
                    <select name="accountNumber" class="form-control">
                        <option value="1">123abc456</option>
                        <option value="2">456def123</option>
                    </select>
                </td>
            </tr>
        </table>
        

    <div class="col-sm-7">
        <div class="panel panel-default" droppable (onDrop)="onItemDrop($event)">
        <br>
            <b><i><div class="panel-heading">Criteria to be met in order to save to this account</div></i></b>
                <div class="panel-body">
                    <li draggable *ngFor="let criteria of ruleCriteria" [dragData]="criteria" class="list-group-item">{{criteria.field}} {{criteria.evaluator}} {{criteria.value}} </li>
                </div>
            </div>
        </div>


    </div>
    <br>
     
    `
})

export class RuleContainer {
    ruleCriteria: RuleCriteria[] = [];
 
     onItemDrop(e: any) {
        // Get the dropped data here
        this.ruleCriteria.push(e.dragData);
    }

    
    
}

