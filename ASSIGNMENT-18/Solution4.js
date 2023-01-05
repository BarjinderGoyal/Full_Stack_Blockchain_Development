
function* gen() {
    let t1 = yield "2 * 2 = ?";
    console.log(t1)
    let t2 = yield "3 + 3 = ?"
    console.log(t2); 
  }
  
  let generator = gen();
  
  console.log( generator.next().value ); 
  
  console.log( generator.next(4).value ); 
  
  console.log( generator.next(6).done );