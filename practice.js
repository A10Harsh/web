// parent class
class person{
    constructor(name){ 
        this.species = "Homo sapiens";
        this.name = name;
    }

    eat(){
        console.log("vegetable")
    }
}

// child class
class engineer extends person{
    constructor(name){  //child constructor
        super(name); // to invoke parent class contructor
    }
    work(){
        super.eat(); //calling eat function of parent class
        console.log("Solve Problems, Build something");
    }
}

// creating Object
let engObj = new engineer("Harsh"); 