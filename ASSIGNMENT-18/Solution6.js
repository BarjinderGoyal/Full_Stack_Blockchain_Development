function* generator(){ 
    try{
        yield 1;
        yield 2; 
        yield 3; // Error in this line.
       }catch(e){
          console.log(e);
       }
}

let gen = generator();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.throw(new Error("Error is exceuted")));