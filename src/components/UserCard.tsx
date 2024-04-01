import React from "react";
import { User } from "../Types";

type UserCardProps = {
  user: User;
};

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <div className="bg-white shadow-md p-4 rounded-md">
      <h2 className="text-xl font-semibold">{user.name}</h2>
      <p className="text-gray-600">@{user.username}</p>
      <p className="text-gray-600">{user.email}</p>
    </div>
  );
};

export default UserCard;
