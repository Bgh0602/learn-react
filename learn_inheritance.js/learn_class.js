class Person {
    constructor(name, first, second) {
        this.name = name;
        this.first = first;
        this.second = second;
    }
    sum() {
        return this.first + this.second;
    }
}

class PersonPlus extends Person {
    constructor(name, first, second, third) {
        super(name, first, second);
        this.third = third;
    }
    sum() {
        return super.sum() + this.third;
    }
    average() {
        return (super.sum() + this.third) / 3;
    }
}
//     Person.prototype.sum = function () {
//     return this.first + this.second;
// }

let HSH = new PersonPlus('HSH', 10, 10, 10);
let BGH = new PersonPlus('BGH', 10, 20, 30);

console.log(HSH.sum());
console.log(HSH.average())
console.log(BGH.average());
