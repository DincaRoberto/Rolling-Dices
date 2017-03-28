import { Component, OnInit } from '@angular/core';
import { ControlPanelService } from "./control-panel.service";

@Component({
    selector: 'app-control-panel',
    templateUrl: './control-panel.component.html',
    styleUrls: ['./control-panel.component.css']
})
export class ControlPanelComponent implements OnInit {

    private dices = [];

    constructor(private _controlPanelService:ControlPanelService) {

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
        this._controlPanelService.rollAllDices();
    }

    onStopAllDices() {
        this._controlPanelService.stopAllDices();
    }

}
