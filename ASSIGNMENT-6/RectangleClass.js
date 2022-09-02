class Rectangle{
    area(a,b){
        return a*b;
    }
}

class Square extends Rectangle{
    constructor(a){
        super();
        let ans=super.area(a,a);
        console.log(ans);
    }
}

new Square(10);
