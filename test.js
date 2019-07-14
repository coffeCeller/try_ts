var P;
(function (P) {
    P["name"] = "chen";
    P[P["age"] = 18] = "age";
})(P || (P = {}));
console.log(P.name);
function getHero(age, type) {
    if (type !== undefined) {
        return '找到了' + age + type + '的英雄';
    }
    return '找到了' + age + '的英雄';
}
console.log(getHero(18, 'ironMan'));
console.log(getHero(18));
function getName() {
    var age = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        age[_i] = arguments[_i];
    }
    var uu = '找到了';
    age.forEach(function (items, index) {
        uu = uu + items;
        if (index < age.length - 1) {
            uu = uu + '.';
        }
    });
    uu = uu + '的英雄';
    return uu;
}
console.log(getName('sp', 'icon', 'hha'));
