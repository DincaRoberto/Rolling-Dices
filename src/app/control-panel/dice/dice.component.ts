import { Component, OnInit } from '@angular/core';
import { Dice } from "./dice";

@Component({
    selector: 'app-dice',
    templateUrl: './dice.component.html',
    styleUrls: ['./dice.component.css']
})
export class DiceComponent extends Dice implements OnInit {

    constructor() {
        super();
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
