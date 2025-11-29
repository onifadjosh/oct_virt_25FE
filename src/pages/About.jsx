import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeName, increaseAge, increaseAgeByNum } from '../redux/appSlice'

const About = () => {
  const [name, setname] = useState('')
  const [userAge, setUserAge] = useState(0)
  const fullname = useSelector((state)=>state.fullname)

  const age = useSelector((state)=>state.age)

  const dispatch = useDispatch()
  return (
    <div className='mt-5 pt-5'>
      <div>change User: <input type="text" placeholder='name'  onChange={(e)=>setname(e.target.value)}/></div>

      <h1>{fullname}</h1>

      <button onClick={()=>dispatch(changeName(name))}>change Name</button>




      <hr />

      <h1>{age}</h1>
      <input type="number"  onChange={(e)=>setUserAge(e.target.value)} placeholder='Add number'/>
      <button onClick={()=>dispatch(increaseAge())}>increase age</button>
      <button onClick={()=>dispatch(increaseAgeByNum(Number(userAge)))}>increase age by num</button>

    </div>
  )
}

export default About