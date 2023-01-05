class Student{
    constructor(ids,names,scores){
        this.ids= ids;
        this.names=names;
        this.scores=scores;
        this.state = new Map();
        this.state.set("id",ids);
        this.state.set("name",names);
        this.state.set("scores",scores);
    }


    getNames(){
        console.log(this.state.get("name"));
        
    }

    deleteScore(){
        this.state.delete("scores");
    }
    
    dSolution(){
        this.state.set("scores",this.scores);
        function firstParameter(values) 
        {
           console.log(values);
        }
           
       
        console.log("-----one parameter-----");
        this.state.forEach(firstParameter);
           
        
        function twoParameter(values, key) 
        {
           console.log(key + "  " + values);
        }
           
        
        console.log("-----two parameter-----");
        this.state.forEach(twoParameter);
           
        
        function threeParameter(values, key, map) 
        {
        
           console.log(key + "  " + values);
           console.log(map);
        }
           
        
        console.log("-----three parameter-----");
        this.state.forEach(threeParameter);

    }


}

let id= [ 1, 2, 3 ]
let name= [ 'Hitanshu', 'Ninad', 'Amandeep' ]
let scores= [ 90, 88, 92 ]


let students = new Student(id,name,scores);
students.getNames();
students.deleteScore();
students.dSolution();