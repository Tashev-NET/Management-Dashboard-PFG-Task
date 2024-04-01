import React, { useEffect, useState } from "react";
import { Post, User } from "../Types";
import { useAppContext } from "../contexts/AppContext";

type PostCardProps = {
  post: Post;
};

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const [userData, setUserData] = useState<User>();
  const { users } = useAppContext();
  useEffect(() => {
    const data = users.find((user) => user.id === post.userId);
    setUserData(data);
  }, []);

  return (
    <div className="bg-white shadow-md p-4 rounded-md mb-3 h-[170px]">
      <h2 className="text-xl font-semibold">{post.title}</h2>
      <p className="text-gray-600">{post.body}</p>
      <p className="text-gray-600">Author email:{userData?.email}</p>
    </div>
  );
};

export default PostCard;
