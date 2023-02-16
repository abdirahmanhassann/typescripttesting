import logo from './logo.svg';
import './App.css';
import React from 'react';
function App() {

  interface check{
    name:string;
    age:number;
    male?:boolean;
  }
  const ppl:{name:string,age:number,male?:boolean}[]= [
    {
       name:'person1',
       age:41,
       male:true
     }
    , 
     {
       name:'person2',
       age:20,
male:false
     }
    ]
  return (
    <>
    {
ppl.map((i)=>{
  return(
<>
    <h1>{i.name}</h1>
    <h1>{i.age}</h1>
    <h1>{i.male?'true':'false'}</h1>
    </>
    )
})
}
    </>
  );
}

export default App;
