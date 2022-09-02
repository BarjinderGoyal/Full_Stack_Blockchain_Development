class Cylinder{
    constructor(radius,height){
        this.radius=radius;
        this.height=height;
    }

    getVolume(){
        let volume= (Math.PI*(this.radius*this.radius)*this.height).toFixed(4);
        console.log(volume);
        return volume;
    }
}

class Sphere{
    constructor(radius){
        this.radius=radius;
    }

    getVolume(){
        let volume= (Math.PI*(this.radius*this.radius*this.radius)*(4/3)).toFixed(4);
        console.log(volume);
        return volume;
    }
}


class Cone{
    constructor(radius,height){
        this.radius=radius;
        this.height=height;
    }

    getVolume(){
        let volume= ((Math.PI*(this.radius*this.radius)*this.height)/3).toFixed(4);
        console.log(volume);
        return volume;
    }
}

let c= new Cone(6,20);
c.getVolume();