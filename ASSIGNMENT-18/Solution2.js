function* generator(){
    yield 1;
    yield 2;
 }

 let gen = generator();
 console.log(gen.next());
 console.log(gen.next());
 console.log(gen.next());
 