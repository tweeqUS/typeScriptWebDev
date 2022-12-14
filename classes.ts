//Simple class example
class User {

}

//Class types

class User1 {
    name: string;
    age: number;
    nickName: string;

    constructor(name: string, age: number, nickName: string) {
        this.name = name;
        this.age = age;
        this.nickName = nickName;
    }

}


const yauhen = new User1('kirya', 27, 'dev');


//Class types modificators

class User2 {
    public name: string; //public по умолчанию
    private nickName: string; //private не может быть доступен за пределами класса
    protected age: number; //protected доступ могут получить только наследники
    readonly pass: number; //readonly доступно только для чтения

    constructor(name: string, age: number, nickName: string, pass: number) {
        this.name = name;
        this.age = age;
        this.nickName = nickName;
        this.pass = pass;
    }
}

const yauhen1 = new User2('kirya', 27, 'web', 123);

yauhen1.name;
// yauhen1.nickName; error
// yauhen1.age; error
// yauhen.pass; error



//Class default properties

class User3 {
    name: string;
    age: number = 27;
    nickName: string = 'web'

    constructor(name: string) {
        this.name = name;
    }
}

const user3 = new User3('kirya');

user3;


//Class default properties (example)

class User4 {
    name: string;
    age: number = 27;
    nickName: string = 'web'

    constructor(name: string) {
        this.name = name;
    }

    getPass(): string {
        return `${this.nickName} ${this.age}`
    }
}

const user4 = new User4('kirya');

user4.getPass();


//Class creation example
class User5 {
    public name: string; //public по умолчанию
    private nickName: string; //private не может быть доступен за пределами класса
    protected age: number; //protected доступ могут получить только наследники
    readonly pass: number; //readonly доступно только для чтения

    constructor(name: string, age: number, nickName: string, pass: number) {
        this.name = name;
        this.age = age;
        this.nickName = nickName;
        this.pass = pass;
    }
}

//Minimization of Class properties
class User55 {
    constructor(
        public name: string,
        public age: number,
        public nickName: string,
        public pass: number
    ) { }
} 


//Get access to privete property
class User6 {
    private age: number = 20;
    constructor(public name: string){}

    setAge(age: number) {
        this.age = age;
    }

    set myAge(age: number) {
        this.age = age;
    }
}

const yauhen2 = new User6('kirya');

yauhen2.setAge(27);
yauhen2.myAge = 30;