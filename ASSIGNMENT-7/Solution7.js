let breakString=(str)=>{
 let breaker ="\n";
let index = str.indexOf(".");
let str1 = str.slice(0,index+1);
let str2 = str.slice(index+1);
console.log(str1+breaker+str2);
}


breakString("Hello I am blockchain developer.And i love doing it");