import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import UserList from "./UserList";

function App() {
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState(null);

  useEffect(() => {
    // 使用瀏覽器 API 更新文件標題
    fetch("http://localhost:8000/users")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setUsers(data);
      });
  }, []);

  const data = { name: "Steve", age: 30, job: "soldier" };
  const addNewUser = () => {
    fetch("http://localhost:8000/users", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    console.log(data);
  };

  // console.log(users);
  return (
    <div className="App">
      {/* <div className="user">count: {count}</div> */}
      {users && <UserList users={users} />}

      <div className="AddNewUser">
        <h2>Add New User</h2>
        <div className="Name">
          <div className="Label">Name: </div>
          <div className="input">
            <input id="Name" type="text" />
          </div>
        </div>
        <div className="Age">
          <div className="Label">Age: </div>
          <div className="input">
            <input id="Age" type="text" />
          </div>
        </div>
        <div className="Job">
          <div className="Label">Job: </div>
          <div className="input">
            <input id="Job" type="text" />
          </div>
        </div>
        <button onClick={() => addNewUser()}>Add</button>
      </div>
      {/* <button onClick={() => setUsers("Tony")}>click it!</button> */}
    </div>
  );
}

export default App;
