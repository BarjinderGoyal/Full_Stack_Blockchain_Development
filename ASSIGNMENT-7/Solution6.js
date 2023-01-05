// we can use indexOf(), lastIndexOf() , match()

// indexOf()
// this method return the starting index of the text. if the text is not found in the string then it return -1;

let method1=(str,text)=>{
   return str.indexOf(text);
}

console.log(method1("I am a boy","boy"));
console.log(method1("I am a boy" ,"hello"));



// lastIndexOf
// this method search the text from the end of the string and return the starting index of the text. if the text is not found in the string then it return -1;

let method2=(str,text)=>{
    return str.lastIndexOf(text);
 }
 
 console.log(method2("I am  a boy","boy"));
 console.log(method2("I am a boy" ,"hello"));


 //match()
 // this method  uses a regular expression to match a series of characters

 let method3=(str,text)=>{
   let ans = str.match(text);
   if(ans !== null){
      return true;
   }else{
      return false;
   }
 }

 console.log(method3("I am  a boy","boy"));
 console.log(method3("I am a boy" ,"hello"));




 //includes() it returns true  if string includes the given text

 let method4=(str,text)=>{
     return str.includes(text);
 }

 console.log(method4("I am  a boy","boy"));
 console.log(method4("I am a boy" ,"hello"));

