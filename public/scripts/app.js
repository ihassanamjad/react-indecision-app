'use strict';

var add = function add(a, b) {
    return a + b;
};

console.log(add(1, 55, 23));

var user = {
    name: 'Hassan Amjad',
    cities: ['LHR', 'SKT', 'ISB'],
    printPlacesLived: function printPlacesLived() {
        var cityMessages = this.cities.map(function (city) {
            return city + ':D';
        });

        return cityMessages;
        // this.cities.forEach((city) => {
        //     console.log(this.name + ' has lived in ' + city)
        // });
    }
};

console.log(user.printPlacesLived());

var multiplier = {
    numbers: [2, 4, 6],
    multiplyBy: 3,
    multiply: function multiply() {
        var _this = this;

        var result = this.numbers.map(function (number) {
            return number * _this.multiplyBy;
        });
        return result;
    }
};

console.log(multiplier.multiply());
//Addition Practice Code
var divider = {
    prime: [2, 3, 5, 7, 11, 13],
    num: 2,
    divide: function divide() {
        var _this2 = this;

        return this.prime.map(function (primenum) {
            return primenum / _this2.num;
        });
    }
};

console.log(divider.divide());
