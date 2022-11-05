import React, { useState, useEffect } from "react";
import { calculateDateOneWeekAgo, loadUsers } from "../helpers";

interface User {
  id: number;
  fullName: string;
  avatarUrl: string;
  isBanned: boolean;
  lastActivityAt: number;
  role: string;
}

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    loadUsers(setUsers, setError);
  }, []);

  const weekAgo = calculateDateOneWeekAgo();

  if (error) {
    return <div>{error}</div>;
  } else {
    return (
      <ul>
        {users
          .filter(
            (user: User) => !user.isBanned && user.lastActivityAt >= weekAgo
          )
          .map((user: User) => (
            <li key={user.id}>
              <img src={user.avatarUrl} alt="avatar-img" />
              <p>{user.fullName}</p>
              <small>{user.role}</small>
            </li>
          ))}
      </ul>
    );
  }
};

export default UserList;
