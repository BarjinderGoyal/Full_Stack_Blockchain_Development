console.log('start')
setTimeout(() => {
console.log('setTimeout')
})
Promise.resolve().then(() => {
console.log('resolve')
})
console.log('end')


// output is "start" , "end" , "resolve" ,"setTimeout" 