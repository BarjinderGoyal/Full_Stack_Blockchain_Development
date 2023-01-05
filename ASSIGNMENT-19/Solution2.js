let sleep=(x)=>{
  return new Promise(resolve=> setTimeout(resolve,x));
}

(async function(){
    await sleep(10000);
    console.log("HELLO");
})();