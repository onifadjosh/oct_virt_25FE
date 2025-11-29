import React, { useState } from "react";
import Card from "./Card";
import Adduser from "./Adduser";

const Formm = () => {
  
  const [allUsers, setallUsers] = useState([]);

  // const changeName=(event)=>{
  //     console.log(event.target.value)
  // }

  const submitUser = (userDetails) => {
    // let userDetails = {
    //   name,
    //   course,
    //   food,
    //   age,
    // };
    console.log(userDetails);
    let fruits = ["orange", "cherry", "mango", "apple"];
    let newFruits = [...fruits, "grapes", "agbalumo"];

    console.log(newFruits);

    let newAllUsers = [...allUsers, userDetails];
    console.log(newAllUsers);

    setallUsers(newAllUsers);
  };

  return (
    <div>
      
      <Adduser submitUser={submitUser}/>
      <hr />

      <div className="d-flex gap-3 flex-wrap">
        {allUsers.map((user, index) => (
          <div className="card" style={{width: "18rem",}} key={index}>
            <div className="card-body">
              <h5 className="card-title">{user.name}</h5>
              <h6 className="card-subtitle mb-2 text-body-secondary">
               {user.course}
              </h6>
              <p className="card-text">
                likes {user.food} with age {user.age}
              </p>
              <div className="d-flex gap-2">
                <button className="btn btn-primary">Edit</button>

                <button className="btn btn-danger">Delete</button>
              </div>
            </div>
          </div>

          // <Card
          //   key={index}
          //   content1={user.name}
          //   content2={user.course}
          //   content3={`likes ${user.food} with age ${user.age}`}
          // />
        ))}
      </div>
    </div>
  );
};

export default Formm;
