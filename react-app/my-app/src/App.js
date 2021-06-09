import logo from "./logo.svg";
import "./App.css";
// import React, { useState, useEffect } from "react";
import UserList from "./UserList";
import CreateNewUser from "./CreateNewUser";
import GetData from "./GetData";

function App() {
  const { data: users } = GetData("http://localhost:8000/users");

  return (
    <div className="App">
      {/* <div className="user">count: {count}</div> */}
      {users && <UserList users={users} />}
      <CreateNewUser />
    </div>
  );
}

export default App;
