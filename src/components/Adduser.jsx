import React, { useState } from 'react'

const Adduser = ({submitUser}) => {
    const [name, setname] = useState("");
      const [course, setcourse] = useState("");
      const [food, setfood] = useState("");
      const [age, setage] = useState(0);
  return (
    <div>
        <input
        type="text"
        placeholder="name"
        onChange={(e) => setname(e.target.value)}
      />
      <input
        type="text"
        placeholder="course"
        onChange={(e) => setcourse(e.target.value)}
      />
      <input
        type="text"
        placeholder="best food"
        onChange={(e) => setfood(e.target.value)}
      />
      <input
        type="text"
        placeholder="age"
        onChange={(e) => setage(e.target.value)}
      />

      <button onClick={()=>submitUser({name, course,food, age})}>submit user</button>
    </div>
  )
}

export default Adduser