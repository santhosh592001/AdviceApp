import React, { useEffect, useState } from 'react'
import './Adviceapp.css'

export const Adviceapp = () => {

  const [advice , getadvice] = useState("Click Me and Get an Advice")
  const [count , setcount] = useState(0)

async function click(){

  const res = await fetch("https://api.adviceslip.com/advice");

  const data = await res.json();

  getadvice(data.slip.advice);
  setcount(count + 1)
}
   
useEffect(function(){

click()

} ,[])



  return (


    <div className='container mt-3'>

     <h3 className='mt-5'>{advice}</h3>

<div id='button1'>
<button onClick={click} className='bg-danger border-none p-2'>Get Adviced</button>
</div>
    
    <Counter count= {count}/>

    </div>
  )
}


function Counter(props){

  return(

    <div className='text-center mt-3'>
    <p>You have Read <b>{props.count}</b> piease of advice</p>
    </div>


  )


}