import React, { useState } from "react";

const handleDelUser = (id) => {
  var url = "http://localhost:8000/users/" + id;

  fetch(url, {
    method: "DELETE", // or 'PUT'
    // body: JSON.stringify(data), // data can be `string` or {object}!
    // headers: new Headers({
    //   "Content-Type": "application/json",
    // }),
  })
    .then((res) => res.json())
    .catch((error) => console.error("Error:", error))
    .then((response) => console.log("Success:", response));
  console.log("deleted ID: " + id);
};

function UserList({ users }) {
  return (
    <div>
      {users.map((item) => (
        <div className="userList" key={item.id}>
          <div className="name">Name : {item.name}</div>
          <div className="age">Age: {item.age}</div>
          <div className="job">Job: {item.job}</div>
          <button onClick={() => handleDelUser(item.id)}>Del</button>
        </div>
      ))}
    </div>
  );
}

export default UserList;
