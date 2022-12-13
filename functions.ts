//function

//Function example
const creatPassword = (name,age) => `${name}${age}`;

creatPassword('Jack', 31); //Jack31

//Arguments type
const creatPassword1 = (name: string, age: number) => `${name}${age}`;

//Multiple arguments type
const creatPassword2 = (name: string, age: number | string) => `${name}${age}`;
creatPassword2('Jack', 31); //'Jack31'
creatPassword2('Jack', '31'); //'Jack31'

//Default arguments
const creatPassword3 = (name: string = 'Max', age: number | string = 20) => `${name}${age}`;
creatPassword3(); // 'Max20'
//Error - функция не принимает null
// creatPassword3(null);


//Function with two required agruments
const creatPassword4 = (name: string, age: number) => `${name}${age}`;

//Error - с одним аргументом
// creatPassword4('Jack');

//Function with optional agruments 'age'
const creatPassword5 = (name: string, age?: number) => `${name}${age}`; //Знак вопроса, если аргумент не обязателен
console.log(creatPassword5('Jack'));

//REST
const createSrills = (name, ...skills) =>`${name}, my skils are ${skills.join()}`;

//REST type
const createSrills1 = (name: string, ...skills: Array<string>) =>`${name}, my skils are ${skills.join()}`;

//Call function with REST arguments
console.log(createSrills1('Jack', 'JS', 'ES6', 'React'));  //'Jack, my skils are JS,ES6,React'

//Returned type is string
const creatPassword6 = (name: string, age: number | string) => `${name}${age}`; //После круглых скобок описать тип, возвращаемых функцией данных
//Returned type is number
const sum = (first: number, second: number): number => first + second;
//Returned type of object
const createEmptyObject = (): object => ({});

//Void - если функция не возвращает никаких данных
const greetUser = (): void => {
    alert('Hello');
};
//Never Type - если функция возвращает ошибку
//Function return Error
const msg = 'hello';
const error = (msg: string): never => {
    throw new Error(msg);
}

//Function infinite loop -если функция выполняется постоянно
const infiniteLoop = (): never => {
    while(true) {

    }
}

//Function variable type
let myFunc;

function oldFunc(name: string): void {
    alert(`Hello ${name}`)
};

myFunc = oldFunc;

//Describle function type
let myFunc1: (firstArg: string) => void; //void - функция ничего не возвращает

function oldFunc1(name: string): void {
    alert(`Hello ${name}`)
};

myFunc1 = oldFunc1;
