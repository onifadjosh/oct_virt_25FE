import React from 'react'

const Button = ({color, title}) => {
  // console.log(props)
    // let nameOfProduct = 'Rice'

    const shout=(name)=>{
        alert(`this user my name ${name}`)
    }
  return (
    <button className={`btn ${color}`} onClick={()=>shout('Pampam')}>{title}</button>
    //interpolation in react
  )
}

export default Button