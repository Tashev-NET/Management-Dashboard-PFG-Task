import React from "react";
import { Post } from "../Types";

type PostCardProps = {
  post: Post;
};

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <div className="bg-white shadow-md p-4 rounded-md mb-3">
      <h2 className="text-xl font-semibold">{post.title}</h2>
      <p className="text-gray-600">{post.body}</p>
      <p className="text-gray-600">User ID: {post.userId}</p>
    </div>
  );
};

export default PostCard;
