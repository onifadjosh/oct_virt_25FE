// import React, { useState } from 'react'
// import Button from './components/Button'
// import Navbar from './components/Navbar'
// import Formm from './components/Formm'
// import Card from './components/Card'

// const App = () => {

//   // 3 oranges- at first
//   // someone gives me 1 more orange=> 4 oranges

//   //hooks
//   // const [first, setfirst] = useState(second)
//   //first there stands for the initial state,
//   //setFirst there stands for the function to change the value
//   //second stands for the initial value

//   //props
//   //props as in properties , is an object of data sent to a component. Props is passed down
//   //from parent of component to child

//   const [num, setnum] = useState(0)
//   const [name, setname] = useState('Pampam')

//   const incNum=()=>{
//     setnum(num+1)
//     console.log(num)
//   }

//   return (
//     <>
//     <Navbar/>
//       <h1 style={{backgroundColor:"red"}} className='head'>I am in class with agba developers</h1>

//       {/* <button className='btn btn-success '>buy me</button> */}

//       <Button title="Buy me" color="btn-success"/>
//       <Button title="Warn app" color="btn-warning"/>
//       <Button title="Delete" color="btn-danger"/>

//       {/* <Card content1="Pampam" content2="Hard Eba" content3="Pam"/>

//       <Card content1="Mrs Ini" content2="Semo" content3="Mrs Inioluwa"/> */}

//       {/* <div className='pampam'>
//         <div className='Pam'></div>
//       </div> */}

//       <h1>{name}</h1>

//       <button onClick={()=>setname('Amadin')}>change name</button>

//       <button className='ms-5 btn btn-success' onClick={incNum}>{num}</button>

//       <Formm/>
//     </>
//   )
// }

// export default App

import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";
import Effect from "./pages/Effect";
import Layout from "./pages/Layout";
import Fetch from "./pages/Fetch";
import Formikk from "./pages/Formikk";
import GetUser from "./pages/GetUser";
import Login from "./pages/Login";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        {/* * */}
        {/* programmatic redirection */}
        {/* <Route path='/' element={<Navigate to={'/about'}/>} /> */}

        <Route path="/sp-contact" element={<Navigate to={"/contact"} />} />
        <Route path="/effect" element={<Effect />} />

        <Route path="/fetch" element={<Fetch />} />
        <Route path="/formik" element={<Formikk />} />
        
        <Route path="/get-users" element={<GetUser />} />

        <Route path="/" element={<Layout />}>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>

        <Route path="/user/:username" element={<Profile />} />

        <Route path="/login" element={<Login />} />

        <Route path="*" element={<NotFound />} />
        {/* wild card routing */}
      </Routes>
    </>
  );
};

export default App;
