import React, { ChangeEvent, FC, useEffect, useState } from 'react';
function App() {
class species{
 po:string;
  clint:string
  constructor(clint:string,po:string){
    this.clint=clint;
    this.po=po;
  }
  getname=(clint:string,po:string):string=>{
    return this.clint=clint,this.po=po
  }
}
const speciesy=new species('clint2','po2')

class p extends species{
  height:(number|string|object)[]
  weight:number
  constructor(height:(number|string|object)[],weight:number,clint:string,po:string){
    super(clint,po)
    this.height=height;
this.weight=weight;
  }
 // getheight=(height:number,weight:number)=>{return this.height=height,this.weight=weight}
}

const g=new p([9,'poepoeski',90,{name:'clint',age:20}],100,'notclint','po')

console.log(g.height)
//g.getheight(183,120)
console.log(g.weight,g.height)
    return(
<>
</>
    )
  
}

export default App;
