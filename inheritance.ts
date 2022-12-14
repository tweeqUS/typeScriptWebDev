//Simple Class example
class User7 {

    constructor(public name: string, public age: number) { }

}

const yauhen3 = new User7('kirya', 27);
yauhen3;


//Class with static property
class User8 {
    static secret = 12345; //static property

    constructor(public name: string, public age: number) { }
}


//Example of call static property
User8.secret //общее значени для всех объектов, кажды эксемляр получит доступ к этому значению при использовании конструкций user.secret

//Call static property in class method
class User9 {
    static secret = 12345;
    constructor(public name: string, public age: number) { }
    getPass(): string {
        return `${this.name} ${this.age}`
    }
}

const yauhen4 = new User9('kirya', 27)

yauhen4.getPass();


//COmpiled code
'use strict';

// class User10 {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     getPass() {
//         return this.name + User10.secret;
//     }
// }
// User10.secret = 12345;


//Class example 
class User11 {
    private nickName: string = 'web';
    static secret = 12345;

    constructor(public name: string, public age: number) {}

    getPass(): string {
        return `${this.name} ${this.age}`
    }
}

//Inheritance example

// class Yauhen extends User11 {
//     name: string = 'Yauhen'

//     constructor(age: number) {
//         super(name, age)
//     }
// }

// //Create instances based on "User11" and "Yauhen" classes
// const max = new User11('Max', 25);
// const yauhen5 = new Yauhen(31); 


//Personal method in inherited class
// class Yauhen extends User11 {
//     name: string = "Yauhen";

//     constructor(age: number) {
//         super(name, age);
//     }

//     getPass(): string {
//         return `${this.age}${this.name}${this.secret}`
//     }
// }

// const yauhen6 = new Yauhen(31);

// yauhen6.getPass();

//Abstract class example
abstract class User12 {
    constructor(public name: string, public age: number) { }

    greet(): void {
        console.log(this.name);
    }
    abstract getPass(): string;
}

// const max1 = new User12('max', 23); //error - Cannot create an instance of an abstract class.


//Realization of 'getPass' method
// class Yauhenn extends User12 {
//     name: string = 'Yauhen';
//     constructor(age: number) {
//         super(name, age);
//     }

//     getPass(): string {
//         return `${this,this.name}${this.age}`
//     }
// }

// const yauhen6 = new Yauhenn(31);

// yauhen6.greet();
// yauhen6.getPass();
