let leapYear=(y)=>{
    if(y%400==0){
        return (`${y} is a leap year`);
    }
    else if(y%100==0){
         return (`${y} is not a leap year`);
    }else if(y%4==0){
         return (`${y} is a leap year`);
    }else{
         return (`${y} is  not a leap year`);
    }
}

