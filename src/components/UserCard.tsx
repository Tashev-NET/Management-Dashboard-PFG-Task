import React from "react";
import { User } from "../Types";
import { Link } from "react-router-dom";

type UserCardProps = {
  user: User;
};

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <div className="bg-white shadow-md p-4 rounded-md">
      <h2 className="text-xl font-semibold">{user.name}</h2>
      <p className="text-gray-600">@{user.username}</p>
      <p className="text-gray-600">{user.email}</p>
      <div className="mt-4">
        <Link to={`/user/${user.id}/albums`} className="mr-4 text-blue-600">
          Albums
        </Link>
        <Link to={`/user/${user.id}/posts`} className="text-blue-600">
          Posts
        </Link>
      </div>
    </div>
  );
};

export default UserCard;
