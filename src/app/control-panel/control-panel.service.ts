import { Injectable } from '@angular/core';
import { Subject } from "rxjs";

@Injectable()
export class ControlPanelService {

    private stopAllSource = new Subject<void>();
    private rollAllSource = new Subject<void>();

    stopAllSource$ = this.stopAllSource.asObservable();
    rollAllSource$ = this.rollAllSource.asObservable();

    constructor() {


    }

    stopAllDices() {
        this.stopAllSource.next();
    }

    rollAllDices() {
        this.rollAllSource.next();
    }

}
