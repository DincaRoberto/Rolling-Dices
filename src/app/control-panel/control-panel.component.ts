import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-control-panel',
    templateUrl: './control-panel.component.html',
    styleUrls: ['./control-panel.component.css']
})
export class ControlPanelComponent implements OnInit {

    private dices = [];

    constructor() {
    }

    ngOnInit() {
    }

    onAddDice() {
        this.dices.push(this.dices.length);
    }

    onRemoveDice() {
        this.dices.pop();
    }

    onRollAllDices() {

    }

    onStopAllDices() {

    }

}
