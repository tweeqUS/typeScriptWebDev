//Simple object example
let user = {
    name: 'Kirya',
    age: 27,
};

//Object type using any ( any - любой тип)
let user1: any = {
    name: 'Kirya',
    age: 27,
};

user1 = 'test'; // Now type of user if string

//Array type 
let list: Array<number> = [1, 2, 3];

//Define object type
let user2: {name: string, age: number} = {
    name: 'Kirya',
    age: 27,
};

//Base object structure
let user3: {name: string, age: number} = {
    name: 'Kirya',
    age: 27,
};

// user3.nickname = 'dev'; //erroe - Property 'nickname' does not exist on type 'name: string, age: number'


//Updating object type
let user4: {name: string, age: number, nickname: string} = {
    name: 'Kirya',
    age: 27,
    nickname: 'dev' //Now everything is correct
};

//New admin object
let admin: {name: string, age: number, nickname: string} = {
    name: 'Daria',
    age: 22,
    nickname: 'technolog' //Now everything is correct
};

//Using Type for object structure
type Person = {
    name: string, 
    age: number, 
    nickname?: string
    getPass?: () => string,
};

//Apply PErson type for object with the same structure
let user5: Person = {
    name: 'Kirya',
    age: 27,
    nickname: 'dev' //Now everything is correct
};

//New admin object
let admin1: Person= {
    name: 'Daria',
    age: 22,
    nickname: 'technolog' //Now everything is correct
};

let legal: Person= {
    name: 'Mia',
    age: 20,
    getPass(): string {
        return `${this.name}${this.age}`;
    },
};