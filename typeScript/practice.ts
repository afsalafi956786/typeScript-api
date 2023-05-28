// let fruits:string[]=['afsal','mango','anid'];
// let list:number[]=[1,2,45];
// let mixed:[number,string]=[55,'arabiv']

// ............................

//union
// let multiType:number | string;
// multiType=20;
// multiType='faa';

// ............................

//optional num2 
// function add(num1:number,num2?:number){
//   if(num2){
//     return num1*num2;
//   }else{
//     return num1;
//   }
// }
// add(5,12);

// ............................

//interface;
// interface Person{
//     firstName:string;
//     lastName:string;
// } 

// function fullName(person:Person){
//     console.log(`${person.firstName} ${person.lastName}`);
    
// }

// let p=  {
//     firstName:'afsal',
//     lastName:'afi'
// }
// fullName(p);


// interface Person {
//     name: string;
//     age: number;
//   }
//   const person: Person = { name: "John", age: 30 };
 
// ............................

//class concept

// class employee{
//     employeeName:string;
//     constructor(name:string){
//        this.employeeName=name;
//     }
//     greet(){
//         console.log(`good morning ${this.employeeName}`);
        
//     }
// }
// let emp1=new employee('vishwas');
// console.log();

// ............................

// tuple
// let mix:[string,number,boolean];
// mix=['afsal',22,true];

// ............................

// const character='mario';
// console.log(character);

// const inputs=document.querySelectorAll('input');
// console.log(inputs);

// inputs.forEach(input=>{
//     console.log(input);
    
// })

// ............................



// let total=(diameter:number)=>{
//  return diameter *Math.PI;

// }
// let result:number=total(55);
// console.log(result);

// ............................



// let mixed=['afsal',12,'ari',55];
// mixed.push('abi');
// mixed.push(12);
// mixed[0]=55;
// mixed.push(77)
// mixed[1]='abi'

//arrays
// let array:string[]=[];
// array.push('afsal');
// array.push('afi')

// ............................

//union

// let mixed:(string | boolean |number)[]=[]
// mixed.push('aman');
// mixed.push(true);
// mixed.push(44)
// console.log(mixed);

// const data:(string | number)[]=['harem','aman',33]

// ............................

//objects

// let obj:object;
// obj={
//     name:'afsal',
//     roll:1,
//     age:32
// }

//any
// let mixed:any[]=[];
// mixed.push('5');
// mixed.push('ari')

// let ninja:{name:any,age:any};
// ninja={
//     name:'afsal',
//     age:22,
// }
// console.log(ninja);

//explicit type object
// const details:{name:string,age:number,work:string}={
//     name:'hogh',
//     age:33,
//     work:'bank manger'
// }
 
// ............................

//classes


// let mark:number;

// function total(){
//     return 50;
// }

// mark=total()

// ............................

//map
// const heros=['thor','spiderman','ironman','hulk'];

// heros.map(hero=>{
//     return `the real hero is ${hero}`
// })

//better syntax
// const heros=['thor','spiderman','ironman','hulk'];
// heros.map((hero):string=>{
//     return `hero is ${hero}`
// })

// ............................




//type alias (type)
// type Point={
//     x:number;
//     y:number;
// }

// function marks(pt:Point){
//     console.log(`firs mark is ${pt.x}`);
//     console.log(`secod mark is ${pt.y}`);
// }

// marks({x:100,y:100})

//type alias
// type Person = { name: string, age: number };
// const person: Person = { name: "John", age: 30 };

// ............................



// enums

// enum Directions{
//     North='North',
//     East='East',
//     South='south',
//     West='west',
// }

// console.log(Directions.North);
// console.log(Directions.East);

// ............................