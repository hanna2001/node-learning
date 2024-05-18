// The Stack and the Heap
// Elements whose size id predefined can only be stored in Stack : numbers, strings, booleans
//

// we call a function without paranthesis -> refference -> will not be execute at once

function add(num){
    return num+1;
}

addOne= num =>{
    return num+1;
}

let val = addOne
let val2 = add() // executes immedeately

let button;
button.addEventListener('click',addOne); // executes when clicked , fn gets registered
button.addEventListener('click',addOne()); // executes immedeately


// this refers to the element that calls the code not always the object

class A{
    constructor(){
        this.name='hi';
        console.log(this); // obj of class A
        button.addEventListener('click',this.addOne)
        console.log(this); // button
    }
    addOne= num =>{
    return num+1;
}
}

// using a bind method will help in mentioning what this should refer to
// arrow funtion will solve this issue
button.addEventListener('click',this.addOne.bind(this))
button.addEventListener('click',()=>{
    this.addOne();
})


// Arrays
// js : ['1', 1]
// ts : [1,1]

// for of : include undefined
// for each : exclude undefined

// spread operators
let a= [1,2,3];
a=[...a,4];

// rest operator : handle variability in the number of arguments passed to a function
function toArray(...args){
    return args;
}

// destructuring
const person={_name:"Hanna",age:33}
const {_name, age}=person
