let solution=(arr)=>{
    var numsOfBeds= [];
    var avaOfBeds=[]
    var location=[];
    for(let i=0;i<arr.length;i++){
        if(arr[i]['noOfBeds'] >200){
            numsOfBeds.push(arr[i]);
        }
        if(arr[i]['availability'] === "Yes"){
           avaOfBeds.push(arr[i]);
        }
        if(arr[i]['location'] === "Pune"){
            location.push(arr[i]);
        }
    }
    console.log(numsOfBeds);
    console.log(avaOfBeds);
    console.log(location)
}


let hospitals = [
{
"id": 1,
"name":"Hospital A",
"location":"Delhi",
"noOfBeds":450,
"availability":"Yes"
},
{
"id": 2,
"name":"Hospital B",

"location":"Pune",
"noOfBeds":150,
"availability":"No"
},
{
"id": 3,
"name":"Hospital",
"location":"Pune",
"noOfBeds":350,
"availability":"Yes"
}]

solution(hospitals)