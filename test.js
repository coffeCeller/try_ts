// // enum P { name = 'chen', age = 18 }
// // console.log(P.name);
// // function getHero(age: number, type?: string): string {
// //   if (type !== undefined) {
// //     return '找到了' + age + type + '的英雄'
// //   }
// //   return '找到了' + age + '的英雄'
// // }
// // console.log(getHero(18, 'ironMan'));
// // console.log(getHero(18));
// // function getName(...age: string[]): string {
// //   let uu = '找到了'
// //   age.forEach((items, index) => {
// //     uu = uu + items
// //     if (index < age.length - 1) {
// //       uu = uu + '.'
// //     }
// //   })
// //   uu = uu + '的英雄'
// //   return uu
// // }
// // console.log(getName('sp', 'icon', 'hha'));
// // function  getName(...age:string[]):string {
// //   let str = '找到了'
// //   age.forEach((items,index) => {
// //      str=str+ items
// //       if (index<age.length-1) {
// //       }
// //   });
// // }
// function getName(name: string): string {
//   return name + 'get'
// }
// console.log(getName('c'));
// let arr = [1, 2, 3, 4]
// const odd = arr.filter(num => num % 2 !== 0).map(num => num * 2)
// console.log(odd);
// var a = 2; // 二进制 10 
// var b = 3; // 二进制 11
// var result;
// result = (a & b);
// console.log("(a & b) => ", result);
// result = (a | b);
// console.log("(a | b) => ", result);
// result = (a ^ b);
// console.log("(a ^ b) => ", result);
// result = (~b);
// console.log("(~b) => ", result);
// result = (a << b);
// console.log("(a << b) => ", result);
// result = (a >> b);
// console.log("(a >> b) => ", result);
// result = (a >>> 1);
// console.log("(a >>> 1) => ", result);
// 
// interface nameList1 {
//   v1: number
// }
// interface nameList2 {
//   v2: number
// }
// interface child extends nameList1, nameList2 { }
// var obj: child = { v1: 1, v2: 2 }
// console.log(obj.v1);
// interface runOptions {
//   name: string,
//   commit: string[] | string | (() => number)
// }
// function getName(name: string): string {
//   return '获取到了' + name
// }
// var options: runOptions = { name: 'str', commit: () => 1 }
// console.log(options.commit);
// let fn: any = options.commit
// console.log(fn());
// enum person { age, name }
// console.log(person.age);
var Car = /** @class */ (function () {
    function Car(engine) {
        this.engine = engine;
    }
    Car.prototype.getDis = function (word) {
        return '关键字' + word;
    };
    return Car;
}());
var newCar = new Car('auto');
console.log(newCar.engine);
var dis = newCar.getDis('cc');
console.log(dis);
