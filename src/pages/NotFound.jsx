import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const NotFound = () => {
    let navigate = useNavigate()
  return (
    <div className='mt-5 pt-5'>
        <p>User abeg, where you dey carry me go</p>

        <Link to="/"  className='btn btn-primary'>Go Home</Link>

        <button className='btn btn-success' onClick={()=>navigate('/')}>Go Home</button>
    </div>
  )
}



export default NotFound