//Closure is a function bundled with its lexical environment
//a) the inner function is closure

function OuterFunction()
{ var outerVariable = 100;
function InnerFunction() {
alert(outerVariable);

}
return InnerFunction;
}
var innerFunc = OuterFunction();
innerFunc();

//b) output of this function is alert(outerVariable); 