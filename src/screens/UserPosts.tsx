import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchUserPosts } from "../api";
import { Post } from "../Types";
import PostCard from "../components/PostCard";

const UserPosts: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    fetchUserPosts(id ?? "").then((data) => setPosts(data));
  }, [id]);

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold my-4">Posts For User With ID: {id}</h1>
      <div>
        {posts.splice(5).map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default UserPosts;
