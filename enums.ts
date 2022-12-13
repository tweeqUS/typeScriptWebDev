//enum - перечисления

//Reverse enum - обращаться к своим данным в обоих направлениях
enum Direction {
    Up12,
    Down1,
    Left1,
    Right1
}

Direction[0] //Up12;
Direction[1] //Down1;
Direction[2] //Left1;
Direction[3] //Right1;

//Custom index for enum elements

enum Direction {
    Up2 = 2,
    Down2 = 4,
    Left2 = 6,
    Right2 = 8
}

Direction.Up2; //2
Direction.Down2; //4
Direction[6] //Left2;
Direction[8] //Right2;

//Custom name for keys

enum links {
    youtube = 'https://youtube.com',
    vk = 'https://vk.com',
    facebook = 'https://fb.com'
}

//using
links.vk // 'https://vk.com'
links.youtube // 'https://youtube.com'

//Compiled code

'use strict';
var links1;
(function(links1) {
    links1['youtube'] = 'https://youtube.com';
    links1['vk'] = 'https://vk.com';
    links1['facebook'] = 'https://fb.com';
})(links1 || (links1 = {}));


var Direction2;
(function(Direction2) {
    Direction2[Direction2['Up'] = 0] = 'Up';
    Direction2[Direction2['Down'] = 1] = 'Down';
    Direction2[Direction2['Left'] = 2] = 'Left';
    Direction2[Direction2['Right'] = 3] = 'Right';
})(Direction2 || (Direction2 = {}));

//const enum

const enum links3 {
    youtube = 'https://youtube.com',
    vk = 'https://vk.com',
    facebook = 'https://fb.com'
}
//compiled code
//пусто

//Using of enum properties
const arr = [links3.vk, links3.facebook];

//Compiled code
const arr1 = ['https://vk.com','https://fb.com'];