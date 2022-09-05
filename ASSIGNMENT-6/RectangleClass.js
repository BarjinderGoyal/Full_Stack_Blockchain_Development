class Rectangle{
    constructor(a,b){
        this.a=a;
        this.b=b;
    }
    area(){
        return this.a*this.b;
    }
}

class Square extends Rectangle{
    constructor(a){
        super(a,a);
    }
}

let s= new Square(100);
console.log(s.area());
