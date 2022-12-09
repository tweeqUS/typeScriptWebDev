//Array type
let list: number[] = [1, 2, 3];

//Array - тип данных / <number> - описываем эти данные
let list1: Array<number> = [1, 2, 3]; // Generic type

//Tuple Type
//Multiple lines

let x: [string, number];
x = ['hello', 10];

// x = [10, 'hello'] //error , непрвильный порядок 


//one line
let y: [string, number] = ['hello', 10];

//Any Type /Лучше прописывать типы заранее правильно , вместо Any
//Any type for array
let t: [any, any] = ['goodbuy', 42];
let i: Array<any>= [10, 'goodbuy'];

// Any type for string
let notSure: any = false;

//Issue case(no error)
notSure = true;
notSure = 8;
notSure = 'hello';

//Enum type /Для задания понятных имен набору численных значений
enum Direction {
    Up,
    Down,
    Left,
    Right
}

Direction.Up; //0
Direction.Down; //1
Direction.Left; //2
Direction.Right; //3

//Custom index for enum elements
enum Direction1 {
    Up = 2,
    Down = 4,
    Left = 6,
    Right
}

Direction1.Up; // 2
Direction1.Down; //4
Direction1.Left; //6
Direction1.Right; //7 Индекс селдующего элемента, индекс которого не задан, зависит от предыдущего


//Never Type
//Function return Error

//1 - Функция вохвращает ощибкуц и не заканчивает своё выполнение
const msg = 'hello';
const error = (msg: string): never => {
    throw new Error(msg);
}

//Function infinity loop

//2 - функция постоянно выполняется(бесконечно)
const infinityLoop = (): void => {
    while(true){

    }
};

//Object type для определения объектов или не примитивов
const create = (o: object | null): void => {}; // | - либо , (o: object либо null)

// create(1); //error
// create('42'); //error
create({obj: 1});

//Multiple type for one value - тип обединения |;
let id: number | string;
id = 10;
id = '42';
// id = false; //error

//Type - создавать пользовательские типы
type Name = string; //Custom type creation
let idd: Name; //Apply custom type

idd: '42'; //No Error
idd: 10; //error



