const add = (a, b) => {
    return a + b;
}

console.log(add(1,55,23));

const user = {
    name: 'Hassan Amjad',
    cities: ['LHR', 'SKT', 'ISB'],
    printPlacesLived() {
        const cityMessages = this.cities.map((city) => city + ':D');

        return cityMessages;
        // this.cities.forEach((city) => {
        //     console.log(this.name + ' has lived in ' + city)
        // });
    }
}

console.log(user.printPlacesLived());

const multiplier = {
    numbers: [2,4,6],
    multiplyBy: 3,
    multiply(){
        const result = this.numbers.map(number => number*this.multiplyBy);
        return result;
    }

}

console.log(multiplier.multiply());
//Addition Practice Code
const divider = {
    prime: [2,3,5,7,11,13],
    num: 2,
    divide(){
        return this.prime.map((primenum) => primenum / this.num);
    }
}

console.log(divider.divide());