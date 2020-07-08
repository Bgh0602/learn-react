function Person(name, first, second) {
    this.name = name;
    this.first = first;
    this.second = second;
}

Person.prototype.sum = function () {
    return this.first + this.second;
}

function PersonPlus(name, first, second, third) {
    Person.call(this, name, first, second);
    this.third = third;
}
PersonPlus.prototype.avg = function () {
    return (this.first + this.second + this.third) / 3;
}
let BGH = new PersonPlus('BGH', 10, 20, 30);
console.log(BGH.avg())
console.log(BGH.sum())