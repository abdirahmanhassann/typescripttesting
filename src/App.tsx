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

  class iqrange{
    iq:number;
    people:{name:string,job:string}[]
    constructor(iq:number,people:{name:string,job:string}[]){
this.iq=iq
this.people=people
    }
    getIq=()=>{return this.iq}
    getpeople=()=>{return this.people}
  }
  
  const countryy=new iqrange(80,[clint,po])
  console.log(countryy)
    return(
<></>
    )
  
}

export default App;
