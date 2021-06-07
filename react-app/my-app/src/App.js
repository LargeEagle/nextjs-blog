import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import UserList from "./UserList";
import CreateNewUser from "./CreateNewUser";

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
  }, [users]);

  return (
    <div className="App">
      {/* <div className="user">count: {count}</div> */}
      {users && <UserList users={users} />}
      <CreateNewUser />
      {/* <button onClick={() => setUsers("Tony")}>click it!</button> */}
    </div>
  );
}

export default App;
