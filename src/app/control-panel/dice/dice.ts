enum DiceState {
    Roll,
    Idle
}

export class Dice {

    private state: DiceState;
    private interval: number;

    protected value: number;

    constructor() {
        this.state = DiceState.Idle;
        this.value = 2;
    }

    roll() {

        if (this.state != DiceState.Idle) {
            return
        }

        this.state = DiceState.Roll;
        this.interval = setInterval(()=> {
            this.value = Math.floor(Math.random() * 7);
        }, 100);
    }

    stop() {

        if (this.state == DiceState.Idle) {
            return
        }

        this.state = DiceState.Idle;
        clearInterval(this.interval);
    }
}
