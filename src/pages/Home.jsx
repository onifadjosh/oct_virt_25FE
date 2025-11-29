import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='mt-5 pt-5'>
    
    <p>This is the home route, welcome home, home sweet home</p>

    <Link to={'/about'}>About</Link>

    <Link to={'/contact'}>Contact Us</Link>

    {/* <a href="/">home</a> */}
    
    
    
    </div>
  )
}

export default Home