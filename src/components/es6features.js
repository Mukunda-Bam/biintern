import React from 'react'

function Es6features() {
    let x=10;
    let y=2;

    let multiply= x*y;

    let hello=()=>{
        return "helloworld";
    }

    let add =(a, b)=>a+b;
    
    let sum=add(3,4);

    const divide=(c, d)=> c/d;
    
    let subtract=(h, k)=>h-k;

    class Car{
        constructor(name, year){
            this.name=name;
            this.year=year;
        }
    }
    const myCar1= new Car("Ford", 2014);
    const myCar2 = new Car("Audi", 2019);
    
    const myArray = ['apple', 'banana', 'orange'];

const myList = myArray.map((item) => <p>{item}</p>)

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
    <p>{hello()}</p>
    <p>The value of divison is {divide(15, 3)}</p>
    <p>The value of subtraction is {subtract(9, 3)}</p>


    <h2>Classes</h2>
     <p>Creating two objects from a class Car</p>
     <p>{myCar1.name} {myCar2.year}</p>

     <h2>Map arrray method</h2>
<p>{myList}</p>
    </div>
  )
}

export const name="jesse";
export const age=28;
const city ="ktm";
const housenmbr= 34;
export { city, housenmbr};

export default Es6features;
