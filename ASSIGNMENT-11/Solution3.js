
var result=[];
let solution = (arr,i)=>{
 if(i >= arr.length){
  return;
 }
 while(i<arr.length){
  if(Array.isArray(arr[i])){
    solution(arr[i],0);
    result.concat(arr[i]);
  }else{
        result.push(arr[i]);
  }
  i++;

 }
}
// var arr1 = [1,2,3,4,5,[1,23,4,[4,55,[11111,22222,2222332,123213,33332]]],1111];
var arr1 = [ 1, 2, [ 3, 4, [ 5 ] ] ];
solution(arr1,0);
console.log(result);
