/////AARAY
// function Test(names:string[]):void{
//     for(var i=0;i<names.length;i++)
//     {
//         console.log(names[i]);
//     }
   
// }
// var names1:string[]=["Ram", "Ravi", "Aastha"];
// Test(names1);
// var names2=new Array("ele1","ele2");
// Test(names2);

////TUPLE --> UNION TYPE

// function Test(names:(string | number)[]):void{
//     for(var i=0;i<names.length;i++)
//     {
//         console.log(names[i]);
//     }
   
// }
// var tuple1=[10, "Ravi", 20, "19csu003"];
// Test(tuple1);
// var names2=new Array("ele1","ele2");
// Test(names2);


////union type
// var uni:string|number
// uni=50;
// console.log(uni);
// uni="Armaan";
// console.log(uni);


  
///// REST parameter
// function fun1(...theArgs) {
//     console.log(theArgs.length)
//   }
  
//   fun1()         // 0
//   fun1(5)        // 1
//   fun1(5, 6, 7)  // 3

    //or

// function Test(...names:string[]):void{
//     for(var i=0;i<names.length;i++)
//     {
//       console.log(names[i]);
//     }
   
// }
// Test("X");
// Test("Y","Z");



/////function overloading ---
// typescript support function overloading unlike javascript

// function add(a:string, b:string):string;
// function add(a:number, b:number): number;
// function add(a: any, b:any): any {
//     return a + b;
// }
// console.log(add("Hello ", "AAStha"));
// console.log(add(10, 20));




//21-10-21

//////// interface concept/////
// interface Person{
//     sal:number,
//     name:string,
//    getsal:(number)=>number,
//    getname:(string)=>string
//    }
// let customer:Person=
//    {
//      sal:1000,
//      name:"Neeti",
//      getsal:(sal):number=>{return sal;},
//      getname:(name):string=>{
//        return name;
//      }
//    }
//    console.log(customer.name);
//    console.log(customer.getname("aastha"));
///////////constructor///////
// interface I{
//     a:number;
//   }
//   class Emp
//   {
//     code:number;
//     name:string;
//     constructor(code:number, name:string)
//     {
//       this.code=code;
//       this.name=name;
//       console.log("Constructor");
//     }
//   }
//   let obj=new Emp(100,"Neeti");
//   class ENew extends Emp{
//     age:number;
//     constructor(code:number, name:string,age:number){
//       super(code,name);
//       this.age=age;
//     }
//   }
//   let obj1=new ENew(100,"Neeti",34);
  
////////////inheritance////
//public,private,protected//
//extends,static,implements,//



// 25-10-21///////////
// DUCK TYPING//////////

interface F1{
  fname:string;
  getname():string;
}

class X implements F1{
  fname:string;
  getname():string{
    return this.fname;
  }
  constructor(){
    this.fname="madaan";
  }
}

let some={
  fname:"AASTHA",
  getname:() =>"Test"
}

let var1:F1=new X()
console.log(var1.fname);
var1=some;  ///duck typing [var and func should be exactly same.]
console.log(var1.fname);

// class Dog{
//   sound="bark"
// }
// class Lion{
//   sound="roar"
// }
// class Goat{
//   sound="bleat"
//   swim(){
//     console.log("cannot swim")
//   }
// }

// let lion:Lion=new Dog();
// let dog:Dog=new Lion();
// let lionTwo:Lion = new Goat();
// let goat:Goat=new Lion();
// console.log("Lion sound"+lion.sound);
// console.log("Dog Sound"+dog.sound)
// console.log("Lion Sound"+lionTwo);