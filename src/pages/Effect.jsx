import React, { useEffect, useState } from 'react'

const Effect = () => {
  const [name, setname] = useState("Pampam")
  const [num, setnum] = useState(0)
  //useeffect syntax is a function that collects a callback parameter and also an array
    useEffect(()=>{
      console.log("use effect ran")
    },[name])
    //[] this is called the dependency array

    //no dependency array-> use effect will run onload, when any state changes it will run
    //empty dependency array-> use effect will run on load, when state changes it wont run
    //dependency array with state inside->use effect will run onload and when that particular state changes it will also run
  return (
    <div className='mt-5 pt-5'>
      <h1 onClick={()=>setname("Matthew")}>{name}</h1>


      <h1 onClick={()=>setnum(num+1)}>{num}</h1>
    </div>
  )
}

export default Effect