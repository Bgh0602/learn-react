let BGH = {
    name: 'BGH',
    first: 10,
    second: 20,
}
let HSH = {
    name: 'HSH',
    first: 10,
    second: 10,
}

function sum() {
    return this.first + this.second;
}
HSH.__proto__ = BGH
console.log(sum.call(HSH))