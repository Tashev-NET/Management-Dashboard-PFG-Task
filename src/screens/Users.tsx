import React from "react";
import UserCard from "../components/UserCard";
import { useAppContext } from "../contexts/AppContext";
import { Link } from "react-router-dom";

const Users: React.FC = () => {
  const { users } = useAppContext();
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold my-4">Users</h1>
      <div className="grid grid-cols-2 gap-4">
        {users.map((user) => (
          <Link key={user.id} to={`/user/${user.id}`}>
            <UserCard user={user} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Users;
