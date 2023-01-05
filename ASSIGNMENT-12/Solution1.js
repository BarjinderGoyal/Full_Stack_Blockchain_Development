// ids=[10,20,30,40,50];

// for(i in ids){
//     console.log(i)
// }





class EmployeeData{

    constructor(ids,names,salaries){
        this.ids = ids;
        this.names = names;
        this.salaries = salaries;
        this.map=new Map();
         for(let i=0;i<ids.length; i++){
            this.map.set(ids[i],{"name":names[i],"salary":salaries[i]});
            
        }
    }

    mapById(){
        let ids= this.ids;
        let names = this.names;
        let salaries = this.salaries;
      
       
    }

    getIds(){
        console.log(this.ids);
    }

    totalEmployee(){
        console.log(this.ids.length);
    }

    getEmployeeName(){
        let ids = this.ids;
        for(let i=0;i<ids.length; i++){
            console.log(`${this.ids[i]}   :  ${this.map.get(this.ids[i]).name}`);
        }
    }

    getEmployeeSalaries(){
       
            console.log(this.salaries);
        
    }


    averageSalary(){
        let total=0;
        for(let i=0;i<ids.length; i++){
             total+=this.salaries[i];
        }
        console.log(total/this.salaries.length);
    }
}





let ids =  [ 67, 48, 29 ]
let names = [ "Hitanshu", "Ninad", "Amandeep" ]
let salaries = [ 75000, 82000, 98000 ]


let employee = new EmployeeData(ids,names,salaries);
employee.getIds();
employee.totalEmployee();
employee.getEmployeeName();
employee.getEmployeeSalaries();
employee.averageSalary();



