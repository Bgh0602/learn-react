function Person(name, first, second) {
    this.name = name;
    this.first = first;
    this.second = second;
    this.sum = function () {
        return this.first + this.second
    }
}

let BGH = new Person('BGH', 10, 20)
let HSH = new Person('HSH', 10, 10)

console.log(HSH.sum());
console.log(BGH.sum());

let day1 = new Date();
console.log(day1.getFullYear());
console.log(day1.getMonth() + 1);

console.log(Date)
