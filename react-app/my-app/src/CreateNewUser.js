import React, { useState, useEffect } from "react";

const CreateNewUser = () => {
  const [newUserName, setNewUserName] = useState(null);
  const [newUserAge, setNewUserAge] = useState(null);
  const [newUserJob, setNewUserJob] = useState(null);

  const addNewUser = () => {
    const data = { name: newUserName, age: newUserAge, job: newUserJob };

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
    console.log("New user added!");
  };

  return (
    <div>
      <div className="AddNewUser">
        <h2>Add New User</h2>
        <div className="Name">
          <div className="Label">Name: </div>
          <div className="input">
            <input
              value={newUserName || ""}
              onChange={(e) => setNewUserName(e.target.value)}
              type="text"
            />
          </div>
        </div>
        <div className="Age">
          <div className="Label">Age: </div>
          <div className="input">
            <input
              value={newUserAge || ""}
              onChange={(e) => setNewUserAge(e.target.value)}
              type="text"
            />
          </div>
        </div>
        <div className="Job">
          <div className="Label">Job: </div>
          <div className="input">
            <input
              value={newUserJob || ""}
              onChange={(e) => setNewUserJob(e.target.value)}
              type="text"
            />
          </div>
        </div>
        <button onClick={() => addNewUser()}>Add</button>
      </div>
    </div>
  );
};

export default CreateNewUser;
