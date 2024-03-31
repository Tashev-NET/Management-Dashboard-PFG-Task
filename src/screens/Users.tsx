import React from "react";
import UserCard from "../components/UserCard";
import { useAppContext } from "../contexts/AppContext";

const Users: React.FC = () => {
  const { users } = useAppContext();
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
