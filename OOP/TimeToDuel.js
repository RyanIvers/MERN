class Card {
    constructor(name){
        this.name = name;
    }
}

class Unit extends Card{
    constructor(name, cost, power, res){
        super(name, cost);
        this.power = power;
        this.res = res;
    }
    attack(target){
        target.res -= this.power;

    }
}

class Effect extends Unit{
    constructor(name, cost, text, stat, magnitude){
        super(name, cost)
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }

    play( target ) {
        if( target instanceof Unit ) {
            target[this.stat] += this.magnitude;
        } else {
            throw new Error( "Target must be a unit!" );
        }
    }
}

//Turn 1
const RedBeltNinja = new Unit("Red Belt Ninja", 3, 3, 4);
const HardAlgorithm = new Effect("Hard Algorithm", 2, "increase target's resilience by 3", "res", 3);
HardAlgorithm.play(RedBeltNinja);

// Turn 2
const BlackBeltNinja = new Unit("Black Belt Ninja", 4, 5, 4);
const UnhandledPromiseRejection = new Effect("Unhandled Promise Rejection", 1, "reduce target's resilience by 2", "res", -2);
UnhandledPromiseRejection.play(RedBeltNinja);

// Turn 3
const PairProgramming = new Effect("Pair Programming", 3, "	increase target's power by 2", "power", 2);
PairProgramming.play(RedBeltNinja);

RedBeltNinja.attack(BlackBeltNinja);






