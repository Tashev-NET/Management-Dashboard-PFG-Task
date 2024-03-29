import React, { useState, useEffect } from "react";
import { fetchUsers } from "../api";
import UserCard from "../components/UserCard";
import { User } from "../Types";

const Users: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetchUsers().then((data) => setUsers(data));
  }, []);

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold my-4">Users</h1>
      <div className="grid grid-cols-2 gap-4">
        {users.map((user) => (
          <UserCard user={user} />
        ))}
      </div>
    </div>
  );
};

export default Users;
