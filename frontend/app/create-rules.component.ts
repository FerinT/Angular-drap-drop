import { Component } from '@angular/core'

@Component({

    selector: 'create-rule',
    template: `
    
    <div class="container-fluid" >
    <h1>Create Rules</h1>
    <i><p>click create and drag the rule to your proposed area</p></i>
        <form>
            <table>
                <tr>
                    <div class="form-group">
                        <td>
                            <label for="field">Field</label>
                        </td>
                        <td>
                            <select name="field" class="form-control">
                                <option value="franchise">Franchise</option>
                                <option value="billing_partner">Billing Partner</option>
                                <option value="billing_method">Billing Method</option>
                                <option value="statement_direction">Statement Direction</option>
                                <option value="transaction_type">Transaction Type</option>
                                <option value="product">product</option>
                            </select>
                        </td>
                        <td>
                            <label for="operator">Operator</label>
                        </td>
                        <td>
                            <select name="operator" class="form-control">
                                <option value="equal">=</option>
                                <option value="greater_than">></option>
                            </select>
                        </td>
                        <td>
                            <label for="actual_value">Value</label>
                        </td>
                        <td>
                            <input type="text" class="form-control" id="actual_value" required>
                        </td>
                        <br>
                        <button type="submit" class="btn btn-success pull-right">Create</button>
                    </div>
                <tr>
            </table>

    <div class="col-sm-3">
        <ul class="list-group">
            <li draggable *ngFor="let criteria of rulecriteria" [dragData]="criteria" class="list-group-item">{{criteria.evaluator}}</li>
        </ul>
    </div>


        </form>
    </div>

    `
})

export class CreateRuleComponent {


    
}