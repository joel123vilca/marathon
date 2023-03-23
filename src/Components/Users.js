import React, { useState, useEffect } from "react";
import axios from "axios";
import "./user.css";

const Users = () => {
  const [list, setList] = useState([]);

  const getData = async () => {
    let res = await axios("https://jsonplaceholder.typicode.com/users");
    let data = res.data.map((item) => {
      return {
        name: item.name,
        username: item.username,
        email: item.email,
        address: {
          city: item.address.city,
        },
        website: item.website,
        company: {
          name: item.company.name,
        },
      };
    });
    console.log(data);
    setList(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div className="users">
        {list.length > 0 &&
          list.map((user, index) => (
            <div className="user">
              <div>
                <img
                  src={`https://dummyimage.com/200x200/024983/ffffff&text=${user.website}`}
                  alt="user image"
                ></img>
              </div>
              <h2 className="user-name">
                {index + 1}. {user.username}{" "}
              </h2>
              <div className="user-info">
                <div className="label">name</div>
                <div className="info"> {user.name} </div>
              </div>
              <div className="user-info">
                <div className="label">Email</div>
                <div className="info">{user.email} </div>
              </div>
              <div className="user-info">
                <div className="label">Company</div>
                <div className="info">{user.company.name} </div>
              </div>
              <div className="user-info">
                <div className="label">city</div>
                <div className="info">{user.address.city} </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Users;
