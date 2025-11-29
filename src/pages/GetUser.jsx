import axios from "axios";
import React, { useEffect, useState } from "react";

const GetUser = () => {
  const [allUsers, setallUsers] = useState([]);
  const [deleting, setdeleting] = useState(false)
  
  useEffect(() => {
    const getUsersFromBe = async () => {
      let response = await axios.get("https://oct-virt-25be.onrender.com/user/displayUser");
      console.log(response.data);
      setallUsers(response.data.user);
    };

    getUsersFromBe();
  }, [deleting]);

  const deleteUser=async(id)=>{
    setdeleting(true)
    let response = await axios.post(`https://oct-virt-25be.onrender.com/user/delete/${id}`)
    alert(response.data.message)
    setdeleting(false)
  }

  return (
    <div>
      <div>
        {allUsers.map((user, index) => (
          <div className="card" style={{ width: "18rem" }} key={user._id}>
            <div className="card-body">
              <h5 className="card-title">{user.fullname}</h5>
              <h6 className="card-subtitle mb-2 text-body-secondary">
                {user.course}
              </h6>
              <p className="card-text">
                {user.email}
              </p>
              <button className="btn btn-danger" onClick={()=>deleteUser(user._id)}>{deleting?'Deleting...':'Delete'}</button>
              <button className="btn btn-primary">Edit</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GetUser;
