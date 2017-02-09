CLOSURE :
A closure is a function that remembers the associated variables of its parent class.
In other words, it can access all the variables of its parent class.
In javascript all the nested functions are automatically closure functions because they can access the variables of their parent class.
A closure function remembers the values of variables that were in parent class when closure function was defined.

for instance :

var a =1;                   //global variable

function f1()             //parent function

{

 var a =2;                 //local variable
 
   return function()     //closure function
   
   {
   
    return a;
    
};
    
}
var b =f1();

console.log(a);

here, the output value of "a" variable will be "1". It is because a=1 is outside the function and is globally available and we didnt call the function in this program.


In next example:


var a =1;

function f1()                //parent function

{

 var a =2;
 
   return function()       //closure function
   {
   
    return a;
    
   
};
    
}
var b =f1(); //f1() stored in var b

console.log(b());

here in this , we called the function f1() stored in b, so the output will be "2" as the closure function remembers the value
of variable of its parent class.

concept working behind:

parent function creates object to store all local variables and further it will be added to scope chain.
parent function and closure function both has reference to scope chain.



Links:


https://www.youtube.com/watch?v=oWSQ4mWNFPU

http://eloquentjavascript.net/03_functions.html

http://www.w3schools.com/js/js_function_closures.asp
