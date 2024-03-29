import React, { useEffect, useState } from "react";
import { Post } from "../Types";
import { fetchPostUserData } from "../api";

type PostCardProps = {
  post: Post;
};

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const [userData, setUserData] = useState<any>();

  useEffect(() => {
    fetchPostUserData(post.userId).then((data) => setUserData(data));
  }, []);

  return (
    <div className="bg-white shadow-md p-4 rounded-md mb-3">
      <h2 className="text-xl font-semibold">{post.title}</h2>
      <p className="text-gray-600">{post.body}</p>
      <p className="text-gray-600">Author email:{userData?.email}</p>
    </div>
  );
};

export default PostCard;
