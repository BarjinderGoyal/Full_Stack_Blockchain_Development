class operations {
    constructor(str) {
        this.str = str;
    }

    upperCase() {
        let str1 = this.str;
        return str1.toUpperCase();
    }

    firstCharUpperCase() {
        let str1 = this.str;
        if (str1.charCodeAt(0) >= 97 && str1.charCodeAt(0) <= 122) {
            return String.fromCharCode(str1.charCodeAt(str1[0]) - 97 + 65) + str1.slice(1,);

        }
        else {
            return str1;
        }
    }

    lowerCase() {
        let str1 = this.str;
        return str1.toLowerCase();
    }

    breakString() {
    let str1 = this.str.split(" ");
    var result="";
    for(let i=Math.floor(str1.length/2);i< str1.length;i++){
        result=result+ str1[i] +" ";
    }
    for(let i=0;i<Math.floor(str1.length/2);i++){
       result= result+(str1[i])+" ";
    }
     return result;
    }

  countRepeatingChar(){
    
    let str1 =  this.str;
    let count=0;
    

  }

    reverseString(){
        let str1= this.str.split(" ");
        var result="";
        for(let i=str1.length-1;i>=0;i--){
            result= result+str1[i]+" ";
        }
        return result;

    }
}


let s=(str)=>{
    str= str.replaceAll(" ","");
    return str.sort((a,b)=>  a<b);
}

console.log(s("this is true lines "))







//console.log(reverseString("Hello i am a Blockchain Developer"));




