enum P { name = 'chen', age = 18 }
console.log(P.name);

function getHero(age: number, type?: string): string {
  if (type !== undefined) {
    return '找到了' + age + type + '的英雄'
  }
  return '找到了' + age + '的英雄'
}

console.log(getHero(18, 'ironMan'));
console.log(getHero(18));


function getName(...age: string[]): string {
  let uu = '找到了'
  age.forEach((items, index) => {
    uu = uu + items
    if (index < age.length - 1) {
      uu = uu + '.'
    }
  })
  uu = uu + '的英雄'
  return uu

}
console.log(getName('sp', 'icon', 'hha'));
