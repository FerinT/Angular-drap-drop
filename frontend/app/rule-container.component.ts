import { Component } from '@angular/core'

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
        <div class="panel-heading">Drop Items here</div>
            <div class="panel-body">
                <li *ngFor="let item of droppedItems" class="list-group-item">{{item.name}}</li>
            </div>
        </div>
    </div>


    </div>

    `
})

export class RuleContainer {}

