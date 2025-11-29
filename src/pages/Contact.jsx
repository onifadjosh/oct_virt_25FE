import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeName } from '../redux/appSlice'

const Contact = () => {
  // const [first, setfirst] = useState('pampam')
  const fullname = useSelector((state)=>state.fullname)
  const dispatch= useDispatch()
  return (
    <div className='mt-5 pt-5'>

      <div>This is the contact page for {fullname}</div>

      <button onClick={()=>dispatch(changeName())}>Change Name</button>
    </div>
  )
}

export default Contact