import logo from './logo.svg';
import React, { ChangeEvent, FC, useEffect, useState } from 'react';
function App() {
  class employee {
    name: string;
    job: string;  
constructor(name:string,job:string){
this.name=name
this.job=job
}
getName=()=>{return this.name}
getJob=()=>{return this.job}
  }

  const clint =new employee('clint','warehouse operative')
  const po =new employee ('po','security guard')

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
  const ez=new employee('eezy','sales assistant')
  countryy.addpeople(ez)
  console.log(countryy)
  countryy.removepeople(clint);
  console.log(countryy)
  
    return(
<></>
    )
  
}

export default App;
