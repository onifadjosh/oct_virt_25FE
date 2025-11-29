import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className=' mt-5 pt-5'>
        {/* <div className='sidebar d-flex flex-column gap-5 bg-primary w-25' style={{height:"100vh"}}>
             <Link  to={'/about'} className='text-danger'>About</Link> 
             <Link to={'/contact'} className='text-danger'>Contact</Link>   
        </div> */}
        <div>
            <Outlet/>
        </div>
    </div>
  )
}

export default Layout