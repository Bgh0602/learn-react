let superObject = { superVal: 'super' };
//let subObject = { subVal: 'sub' };
//subObject.__proto__ = superObject;
let subObject = Object.create(superObject);
subObject.subVal = 'sub';
console.log('subObject.subVal => ', subObject.subVal);
console.log('subObject.superVal => ', subObject.superVal);

subObject.superVal = 'sub';
console.log('superObject.superVal => ', superObject.superVal);

let BGH = {
    name: 'Bae',
    first: 10,
    second: 20,
    sum: function () {
        return this.first + this.second
    }
}
let CWB = Object.create(BGH);
CWB.name = 'Chio';
CWB.first = 10;
CWB.second = 10;
CWB.avg = function () {
    return (CWB.first + CWB.second) / 2
}
// let CWB = {
//     name: 'CHio',
//     first: 10,
//     second: 10,
//     avg: function () {
//         return (this.first + this.second) / 2
//     },
// }
// CWB.__proto__ = BGH;

console.log('BGH.sum() : ', BGH.sum())
console.log('CWB.sum() : ', CWB.sum())
console.log('CWB.avg() : ', CWB.avg())

