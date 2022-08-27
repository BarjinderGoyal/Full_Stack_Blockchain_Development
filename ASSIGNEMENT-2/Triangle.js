let triangle=(a,b,c)=>{
    if(a===b &&b===c){
        return 'Equilateral triangle'
    }else if(a!=b && a!=c && b!=c){
        return 'Scalene triangle'
    }else{
        return 'Isosceles triangle'
    }
}
