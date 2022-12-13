// Data Types

// number
// string
// boolean
// null
// undefined
// object
// symbol // es6

let num = 42; // number
let num1 = 'hello'; //string
let num2 = false; //boolean

//typeof - определяет тип данных
typeof 42; //number
typeof 'str'; //string
typeof true; //boolean
typeof []; //object
typeof {}; //object
typeof null; //onject
typeof undefined; //undefined
typeof Symbol(); //symbol

//const
// const num3 = 15;
// num3 = 'hello' //error , константы не ререопределяются

// //let
// let num4 = 15;
// num4 = 'string'; 
// console.log(num4)


//boolean type (true or false)
let isCompleted: boolean = false;
// isCompleted = 42; //error 'type : number'
// isCompleted = '42'; // error 'type : string'

isCompleted = false;


//number
const num5: number = 15;
// const num6: number = 152g4; // error

//string 
const str1: string = '23';
// const str2: string = gg; // error

const str3: string = `hello my brothers ${ str1 }`;

//Null & Undefined type 
//JavaScript
typeof null; //object
typeof undefined; //undefined

//TypeScript
const u: undefined = undefined;
const n: null = null;

//Void type - предназначен для определения отсутствующих типов
const greetUser = (): void => {
    alert('Hello bitches :)');
}
//error: Type'() => void
// const greetUser1: void = () => {
//     alert('hello error (')
// }