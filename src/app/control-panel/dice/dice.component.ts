import { Component, OnInit } from '@angular/core';
import { Dice } from "./dice";
import { ControlPanelService } from "../control-panel.service";

@Component({
    selector: 'app-dice',
    templateUrl: './dice.component.html',
    styleUrls: ['./dice.component.css']
})
export class DiceComponent extends Dice implements OnInit {

    constructor(private _controlPanelService: ControlPanelService) {
        super();

        this._controlPanelService.stopAllSource$.subscribe(
            () => {
                this.stop();
            });

        this._controlPanelService.rollAllSource$.subscribe(
            () => {
                this.roll();
            });
    }

    ngOnInit() {

    }

    onRoll() {
        this.roll();
    }

    onStop() {
        this.stop();
    }

}
