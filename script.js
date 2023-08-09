
let x;
let d = new Date();

x =d.toString();

x= d.getTime();
x=d.valueOf();

x=d.getFullYear();
//07-01-2015    13:23:00
x=d.getMonth();
x=d.getMonth()+1;

x=d.getDate();
//day of the month

x=d.getDay();
//day of the week

x=d.getHours();
x=d.getMinutes();
x=d.getSeconds();
x=d.getMilliseconds();

x =`${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`;

x=Intl.DateTimeFormat('en-US',).format(d);
x=Intl.DateTimeFormat('en-GB',).format(d); //england format
x=Intl.DateTimeFormat('default',).format(d);
x=Intl.DateTimeFormat('default', {month: 'long' }).format(d);

x = d.toLocaleDateString();
x=d.toLocaleString('default', {month: 'short'});

x=d.toLocaleString('default',{
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZone: 'America/New_York',   
});

x= Number(true);
x=Number(false);

console.log(x);

let amount = '100';
amount = parseInt(amount);
amount = parseFloat(amount);
amount= +amount;
amount = Number(amount);

//string properties AND  methods
const s = 'hello'

x = typeof s; //string

x = s.length;

console.log(x);

//access value by key
x= s[1];
x = s.__proto__;
x = s.toUpperCase();
x= s.toLowerCase();
x= s.charAt(0);
x= s.indexOf('h');
x = s.substring(0, 4);
x= s.substring(2, 5);
x= s.substring(4);

x = s.slice(-11, -6);

x='        hello world'
x= x.trim();
x= s.replace('hello', 'hey');
x= s.includes('hell');
x = s.valueOf();

x = s.split(' ');
x= s.split('');

console.log(x);
console.log(s);

//arrays are zero based

let x;

//array literal
const numbers =[12, 34, 55, 54, 43];
const mixed = [ 12, 'hello', true, null];

//array constructor
const fruits =  new Array ('apple', 'orange', 'grape');

x= numbers[0];

x = numbers[0] + numbers[3];

x = `my favorite fruit is ${fruits[2]}`;

x= numbers.length;

fruits[2] = 'pear';
fruits.length = 2; 


fruits[3] = 'strawberry';

fruits[fruits.length] = 'blueberry';

x = fruits;

console.log(x);

const arr = [55, 67, 89, 29];

arr.push(100);
arr.pop(); //remove last element
arr.unshift(99); //add to the beginning of the array
arr.shift();//remove from the beginning of the array
arr.reverse(); 

x  = arr.includes(20); //boolean value
x = arr.indexOf(55); //index 0 it starts at 0

x = arr.slice(1);//remove the before
x = arr.slice(89, 3);//remove the before and after but isnt changing the original array
x = arr.splice(67, 3); //starting element, how many elements after you want to add; changes the original array; this takes the values out of the array 

x = arr.splice(3, 1); // removes the single value from the array; first value is the position on the array;

x = arr.splice(1, 4).reverse( ).toString( ).charAt(0);

console.log(arr);

let x;

const fruits = [ 'apple', 'pear', 'orange', ];
const berries  = ['strawberry', 'blueberry', 'raspberry'];

fruits.push(berries); //nested array
console.log(fruits);

x =fruits[3] [1]; //accessing nested array. first array bracket references the neted array, second array bracket references the position of the item in the nested array. remember, array positions start at 0;

const allFruits = [fruits, berries];

x= allFruits; //both arrays are now nested=.
x= allFruits [1] [0];

x = fruits.concat(berries); //array fruits plus berries concatinated together. they are not an array.

//spread operaror(...)

x = [...fruits, ...berries]; //same results as concat. takes items from both arrays and combines them. they are not an array

//flatten array

const arr = [1, 2, [3, 4], 5, [6, 7], 8]; //nested arrays;
x = arr.flat(); //flatten which is the removal of nested arrays making it one single array

//static methods on Array Objects

Array.isArray(fruits); //boolean
x = Array.from('12345'); //creates an array from an array-like object
const a = 1;
const b = 2;
const c =3;

x = Array.of(a, b, c); //creates an array from these values
console.log(arr);








