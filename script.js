// // function calcAge(birthYear) {
// //     let age = 2023 - birthYear;

// //     function printAge() {
// //         let output = `you are ${age} born in ${birthYear}`;
// //         console.log(output);
// //         console.log(firstName);
// //         console.log(age);
// //     }
// //     printAge();
// //     //return age;

// // }
// // //console.log(age); age is not defined - only inner scope can have access to the var of its outer scope
// // const firstName = "mina";
// // calcAge(1994);
// // // console.log(output); youre getting an error output is not defined

// // hoisting
// console.log(me)
// console.log(job)
// console.log(year)


// var me = 'mina';
// var job = 'butcher';
// var year = 1994;
// function addDecl(a, b) {
//     return a + b;
// }
// const addExpr = function (a, b) {
//     return a + b;
// }
// var addArrow = (a, b) => a + b;

// console.log(numProducts);
// if (!numProducts) deleteShoppingCart();

// var numProducts = 10;
// function deleteShoppingCart() {
//     console.log('all products deleted')
// }
// //a bug, use const or let; declare a var at the top of each scope
// var x = 1;
// console.log(x === window.x);
// //this keyword
// //method example 
// const mina = {
//     name: 'Mina',
//     year: 1994,
//     calcAge: function () {
//         return 2023 - this.year
//     }
// };
// mina.calcAge();

// //this is outside of any funct in the global scope - global, window object
// console.log(this);
// //regular function scope
// //undefined it 
// //if not strict mode it is a globd=sl objc 
// const calcAge = function (birthYear) {
//     console.log(2023 - birthYear);
//     console.log(this);
// }
// calcAge(1994);
// //an arrow funct uses a lexical this key word of its  parent function or scope 
// const calcAgeArrow = birthYear => {
//     console.log(2023 - birthYear);
//     console.log(this);
// }

// calcAgeArrow(1994);

// //inside of method this key word

// const minerz = {
//     year: 1994,
//     calcAge: function () {
//         console.log(this);
//         console.log(2023 - this.year)
//     },
// };
// //minerz is the owner of the method
// minerz.calcAge()

// const matilda = {
//     year: 2000,
// };
// matilda.calcAge = minerz.calcAge;
// // don't forget a function is just a value
// //coppied calcAge method from minerz to matilda 
// matilda.calcAge()
;
// const f = minerz.calcAge;

// // we coppied a function into a new var
// //that possible because f is just a value

// f(); // just a regular function call - undefined
// //with method we get 29 and 23
var firstName = 'matilda'


const mina = {
    firstName: 'mina',
    year: 1994,
    calcAge: function () {
        //console.log(this);
        console.log(2023 - this.year);
        //solution 1
        // const that = this;// self or that 
        // const isMillenial = function () {
        //     console.log(that);
        //     console.log(that.year >= 1981 && that.year <= 1996)
        // };
        // isMillenial();
        //solution 2 
        const isMillenial = () => {
            console.log(this);
            console.log(this.year >= 1981 && this.year <= 1996)
        };
        isMillenial();
    },
    greet: () => {
        console.log(`hey ${this.firstName}`)

    },

};
mina.greet();
mina.calcAge();

//arguments keyword

const addExpr = function (a, b) {
    console.log(arguments);
    return a + b;
}
addExpr(2, 5, 7);
var addArrow = (a, b) => a + b;
addArrow(2, 5, 7);
console.log(addArrow(2, 5, 7))