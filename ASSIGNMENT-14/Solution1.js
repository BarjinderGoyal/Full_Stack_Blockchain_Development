let solution=(arr)=>{
    var resultIt= [];
    var resultSalary=[]
    for(let i=0;i<arr.length;i++){
        if(arr[i]['department'] =="IT"){
            resultIt.push(arr[i]);
        }
        if(arr[i]['Salary']<65000){
            resultSalary.push(arr[i]);
        }
    }
    console.log(resultIt);
    console.log(resultSalary);
}


let employees = [
{
"id": 1,
"name":"Abhinav",
"department":"IT",
"Salary":75000
},
{
"id": 2,
"name":"Gaurav",
"department":"Sales",
"Salary":52000
},
{
"id": 3,
"name":"Raj",
"department":"IT",
"Salary":64000
}]

solution(employees)