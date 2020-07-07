function Person(name, first, second) {
    this.name = name;
    this.first = first;
    this.second = second;
}
Person.prototype.sum = function () {
    return 'mondified : ' + (this.first + this.second);
}

let BGH = new Person('BGH', 10, 20);
BGH.sum = function () {
    return 'this : ' + (this.first + this.second);
}
let HSH = new Person('HSH', 10, 10);

console.log(BGH.sum());
console.log(HSH.sum());
