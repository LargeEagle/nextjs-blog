import React, { useState } from "react";

function UserList({ users }) {
  return (
    <div>
      {users.map((item) => (
        <div className="userList" key={item.id}>
          <div className="name">Name : {item.name}</div>
          <div className="age">Age: {item.age}</div>
          <div className="job">Job: {item.job}</div>
        </div>
      ))}
    </div>
  );
}

export default UserList;
