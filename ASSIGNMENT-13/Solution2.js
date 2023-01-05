let solution=(arr)=>{
    var map = new Map();
    map['A']=[];
    map['B']=[];
    map['C']=[];
    map['D']=[];
    map['E']=[];
    map['F']=[];
    for(let i=0;i< arr.length;i++){
        if(arr[i].marks >90){
            map['A'].push({name:arr[i].name,grade:"A"});
        }else if(arr[i].marks >80){
            map['B'].push({name:arr[i].name,grade:"B"});
        }else if(arr[i].marks >70){
            map['C'].push({name:arr[i].name,grade:"C"});
        }else if(arr[i].marks >60){
            map['D'].push({name:arr[i].name,grade:"D"});
        }else if(arr[i].marks >50){
            map['E'].push({name:arr[i].name,grade:"E"});
        }else{
            map['F'].push({name:arr[i].name,grade:"F"});
        }
    }
    
     
     for(let i=0;i<6;i++){
      
        console.log(String.fromCharCode(65+i), ':' , map[String.fromCharCode(65+i)]);
     }
}


let students = [
{ name: "John", marks: "92" },
{ name: "Oliver", marks: "85" },
{ name: "Michael", marks: "79" },
{ name: "Dwight", marks: "95"},
{ name: "Oscar", marks: "64" },
{ name: "Kevin", marks: "48" },
];

solution(students);