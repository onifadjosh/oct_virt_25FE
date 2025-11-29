import React from 'react'
import { useParams } from 'react-router-dom'

const Profile = () => {
    let {username} = useParams()
    // console.log(params)
  return (
    <div className='pt-5 mt-5'>
      welcome onboard {username}, we are happy to have  you  
    </div>
  )
}

export default Profile