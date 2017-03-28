
enum Direction {
    Roll,
    Idle
}

export class Dice {

    private state: Direction;
    private interval: number;

    protected value: number;

    constructor() {
        this.state = Direction.Idle;
        this.value = 2;
    }

    roll() {
        this.state = Direction.Roll;
        this.interval = setInterval(()=>{
            this.value = Math.floor(Math.random()*7);
        },500);
    }

    stop(){
        this.state = Direction.Idle;
        clearInterval(this.interval);
    }
}
