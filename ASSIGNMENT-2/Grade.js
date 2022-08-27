let grade=(marks)=>{
    let result;
    switch(true){
        case marks>90 && marks <=100:
            result= "S grade";
            break;
        
        case marks>80 && marks <=90: 
            result= "A grade";
            break;
        
        case marks>70 && marks <=80:
            result= "B grade";
            break;
        
        case marks>60 && marks <=70: 
            result= "C grade"; 
            break;
        
        case marks>50 && marks <=60:
            result= "D grade";
            break;
        
        case marks>40 && marks <=50:
            result= "E grade";
            break;
        
        case marks>=0 && marks <=40:
            result="F grade";
            break;
        
        default:
          result="Invalid Marks";
          break;    
            
        
    }
    return result;
}

console.log(grade(100));
console.log(grade(56));
console.log(grade(48));
console.log(grade(38));