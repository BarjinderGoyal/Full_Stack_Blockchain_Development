const names= ['John', 'Tina','Kale','Max']
function useFunction(arr,fn){
for(let i=0; i<arr.length; i++){
fn(arr[i]);
}
}
function argFn (name){
console.log("Hello " + name );
}
useFunction(names,argFn);

// UseFunction() is higherorder function because it take argFn() as an argument

// output is 
//  Hello John
//  Hello Tina
//  Hello Kale
//  Hello Max