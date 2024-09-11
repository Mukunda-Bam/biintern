import React from 'react'

function Es6features() {
    let x=10;
    let y=2;
    let multiply= x*y;

    let hello=()=>{
        return "helloworld";
    }

   let greet =()=>{
    return "I printed helloworld";
   }

   let cote= ()=>{
      const nam="mukunda";
      const ag=27;
      return "My name is " + nam  + ". My age is " + ag;
   }

   let com=(f)=>{
       return "My age is "+ f;
   }

   let maz=(g, l)=>{
      return "My name is " + g +". My age is " + l;
   }

    let add =(a, b)=>a+b;
    let sum=add(3,4);

    const divide=(c, d)=> c/d;
    let subtract=(h, k)=>h-k;

    let user= {fname:"mukunda", lname:"bam", age:"27"};

   const usr = {color:"red", size:"medium"};
   const dflt = {height: 5};
   let setting= {...usr, ...dflt};

let city=["ktm", "pokhara", "newyork", "delhi"];
let firstCity= city[0];


const myArray = ['apple', 'banana', 'orange'];
const myList = myArray.map((item) => <li key={item}>{item}</li>)

const firstList =[1, 2, 3, "ram"];
const scndList =[4, 5, 6, "shyam"];
const combineList= [...firstList, ...scndList];

const country1= ["nepal", "japan", "india"];
const country2 = ["usa", "germany", "uk"];
const world = country1.concat(country2);



    class Car{
        constructor(name, year){
            this.name=name;
            this.year=year;
        }
    }
    const myCar1= new Car("Ford", 2014);
    const myCar2 = new Car("Audi", 2019);
    
   
  return (
    <div>
           <h1>ES6 features practice</h1>

      <h2>Let</h2>
      <p>The value of x is{x}</p>

      <h2>Const</h2>
    <p>{y}</p>

    <h2>Arrow function</h2>
    <p>The value of multiplication is {multiply}</p>
    <p>The value of addition is {sum}</p>

    <p>I printed {hello()}</p>
    <p>{greet()}</p>
    <p>{cote()}</p>

    <h2>Arrow functions with parameters</h2>
    <p>{com(27)}</p>
    <p>{maz("mukunda", 27)}</p>

    <p>The value of divison is {divide(15, 3)}</p>
    <p>The value of subtraction is {subtract(9, 3)}</p>

   <h2>Object</h2>
   <p>{user.fname}</p>
   <p>My age is {user.age}</p>
   <p>{setting.color}</p>

<h2>Arrays</h2>
<p>The name of first city is {firstCity}</p>

<p>{city.map((thing)=>(
<li key={thing}>{thing}</li>
))}</p>


<h2>Map arrray method</h2>
<p>{myList}</p>

<h2>Spread operator and merging</h2>
<p>{combineList}</p>

<h2>Array concatenation</h2>
<p>{world}</p>


    <h2>Classes</h2>
     <p>Creating two objects from a class Car</p>
     <p>{myCar1.name} {myCar2.year}</p>

    </div>
  )
}

export const name="jesse";
export const age=28;

const city ="ktm";
const housenmbr= 34;
export { city, housenmbr};

export default Es6features;
