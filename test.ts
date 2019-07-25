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
// class Car {
//   engine: string;
//   constructor(engine: string) {
//     this.engine = engine
//   }
//   getDis(word: string): string {
//     return '关键字' + word
//   }
// }
// var newCar = new Car('auto')
// console.log(newCar.engine);
// let dis: string = newCar.getDis('cc')
// console.log(dis);

// // class quanjia {
// //   // dian: string;
// //   // constructor(dian: string) {
// //   //   this.dian = dian
// //   // };
// //   static getName(str: number): string {
// //     return '吊用了getname的' + str
// //   }
// //   get est() {
// //     return 'getValue'
// //   }
// //   set est(val) {
// //     console.log('has no admin');

// //   }
// // }
// // let getQuan = new quanjia()
// // // console.log(quanjia.getName(1));
// // console.log(quanjia.est)

// class MyClass {
//   constructor() {
//     // ...
//   }
//   get prop() {
//     return 'getter';
//   }
//   set prop(value) {
//     console.log('setter: ' + value);
//   }
// }

// let inst = new MyClass();

// inst.prop = '12';
// // setter: 123

// console.log(inst.prop);

// // 'getter'

class person {
  protected protectedName: string = 'protectName'
  isName: string = 'personName';
  private proName: string = 'private'
}
let cc = new person()
// console.log(cc.proName);
console.log(cc.isName);
// console.log(cc.protectedName);

interface jieKou {
  hobby: string
}

class getAll implements jieKou {
  hobby: string;
  constructor(hobby: string) {
    this.hobby = hobby
  }
}

namespace title1 {
  export class cc {
    nickName: string = 'cc';
  }
  export interface tt {
    firstName: string,
    lastName: string,
    sayHi: () => string
  }
}

interface Person {
  name: string;
  age?: number;
  // [propName: string]: string;
}

let tom: Person = {
  name: 'Tom',
  age: 25,
  // gender: 'male'
};

function getLength(something: number | string): number {
  if ((<string>something).length) {
    return (<string>something).length
  } else {
    return <number>something.toString().length
  }
}



