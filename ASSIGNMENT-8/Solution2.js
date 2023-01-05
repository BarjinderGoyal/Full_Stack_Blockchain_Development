class setOperation{
    constructor(){
        this.set = new Set();
    }

    addElement(num){
        this.set.add(num);
    }

    deleteElement(num){
        this.set.delete(num);
    }

    showSet(){
        console.log(this.set);
    }
}


let set = new setOperation();
set.addElement(1);
set.addElement(2);
set.addElement(3);
set.addElement(4);
set.addElement(1);
set.showSet();
set.deleteElement(4);
set.showSet();


