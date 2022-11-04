import React, { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const loadUsers = async () => {
      const response = await fetch("http://localhost:3004/users");
      const data = await response.json();
      setUsers(data);
    };
    loadUsers();
  }, []);

  const weekAgo = new Date();
  weekAgo.setDate(weekAgo.getDate() - 7);

  return (
    <ul>
      {users
        .filter(
          (user) => !user.isBanned && new Date(user.lastActivityAt) >= weekAgo
        )
        .map((user) => (
          <li key={user.id}>
            <img src={user.avatarUrl} />
            <p>{user.fullName}</p>
            <small>{user.role}</small>
          </li>
        ))}
    </ul>
  );
}

export default App;
