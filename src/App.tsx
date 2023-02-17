import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
function App() {
const [textt,settext]=useState('')
const [todos,settodos]=useState<string[]>([])

// function clicked(text){
//   if(todos){
//     settodos([...todos,text])
//     console.log(todos);
//     console.log('po')
//     settext('');
//   }
// }
function del(i:string){
  console.log(i)
  todos.filter((h)=>{return h!=i})
}
  return (
    <>
    <form >
<input type='text' value={textt} onChange={(e)=>settext(e.target.value)}/>
<button type='submit' onClick={(e)=>{
  e.preventDefault();
      settodos([...todos,textt])
      console.log(todos);
      console.log(textt)
      settext('');
  
}
}>Enter</button>
</form>
{
  todos.map((i)=>{
    return(
      <>
      <div>{i}
      <button onClick={()=>{
          console.log(i)
         let k= todos.filter(v=>{return v!=i})
settodos(k)
        
      }}>delete</button>
      </div>
        </>
    )
  })
}
    </>
  );
}

export default App;
