import React, { useEffect, useState } from "react";
import axios from "axios";

const UserList = () => {
  const [ListOfUser, setListOfUser] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      setListOfUser(response.data);
    }).catch(function (error) {
      console.log(error);
    })
  }, []);
  return (
    <div>
      {ListOfUser.map((elm) => {
        return (
          <div className="container">
            <hr></hr>
            <h4>ID: {elm.id}</h4>
            <hr></hr>
            <h4>Name: {elm.name}</h4>
            <hr></hr>
            <h4>Username: {elm.username}</h4>
            <hr></hr>
          </div>
        );
      })}
    </div>
  );
};
export default UserList;
