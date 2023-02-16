import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
function App() {
const [apistate,setapistate]=useState<product[]>()
 
interface product{
  title:string;
  brand:string;
price:string;

}
useEffect(()=>{
function api(){
  fetch('https://dummyjson.com/products')
  .then(res => res.json())
  .then(res => {setapistate(res.products)
  console.log(res)
  })  
}

api()
},[])

  return (
    <>
{
  apistate &&
  apistate.map((i)=>{
    return(

      <div style={{width:'fit-content',height:'fit-content',background:'wheat',padding:'50px'}}>
<h3>{i.title}</h3>
<p>{i.brand}</p>
<p>{i.price}</p>
    </div>
      )
  })
}
    </>
  );
}

export default App;
