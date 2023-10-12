/* In this exercice, even if the calcul is different, we want the result to be 100. */

//Thanks to the global variables, the functions can access the variables and use them in the calculs.
var v1=50;v2=100,v3=150,v4=200,v5=2,v6=250

//Functions that return the result of the calculs.

//Function that returns the result of a sum.
function equal1(){
  var a=v1;  
  var b=v1;  
  return a+b;
}

//Function that returns the result of a substraction.
function equal2(){
  var a=v3;
  var b=v1;
  return a-b;
}

//Function that returns the result of a multiplication.
function equal3(){
  var a=v1;
  var b=v5;
  return a*b;
}

//Function that returns the result of a division.
function equal4(){
  var a=v4;
  var b=v5;
  return a/b;
}

//Function that returns the result of a modulo.
function equal5(){
  var a=v6;
  var b=v3;
  return a%b;
}