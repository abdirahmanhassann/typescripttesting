import logo from './logo.svg';
import React, { ChangeEvent, FC, useEffect, useState } from 'react';
function App() {
  class employee {
    name: string;
    job: string;  
    age:number;
constructor(name:string,job:string,age:number){
this.name=name
this.job=job
this.age=age
}
getName=()=>{return this.name}
getJob=()=>{return this.job}
addyear=()=>{this.age=this.age+1}
setAge=(age)=>{
  this.age=age
}
  }

  const clint =new employee('clint','warehouse operative',0)
  const po =new employee ('po','security guard',39)

  class range{
    iq:number;
    people:{name:string,job:string}[]
    constructor(iq:number,people:{name:string,job:string}[]){
this.iq=iq
this.people=people
    }
    getIq=()=>{return this.iq}

    getpeople=()=>{return this.people}

    addpeople=(people:{name:string,job:string})=>{return this.people.push(people)}

    removepeople=(people:{name:string,job:string})=>{
      let g:{name:string,job:string}[]=[]
    
     g= this.people.filter((i)=>  i!=people)
      console.log(g)
      return this.people=g
    }
  }
  
  const countryy=new range(80,[clint,po])
  const ez=new employee('eezy','sales assistant',20)
  countryy.addpeople(ez)
  console.log(countryy)

  const abdirahman=new employee('abdirahman','web developer',21)
  const country2=new range(125,[abdirahman])
  const becky=new employee('becky','unemployed',17)
  country2.addpeople(becky)
  becky.addyear()
  abdirahman.addyear()
  console.log(country2)
    return(
<></>
    )
  
}

export default App;
