import React, { useState, useEffect } from "react";
import { fetchPosts } from "../api";
import { Post } from "../Types";
import PostCard from "../components/PostCard";
import { Link } from "react-router-dom";

const Posts: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetchPosts().then((data) => setPosts(data));
  }, []);

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold my-4">Posts</h1>
      <div>
        {posts.map((post) => (
          <Link key={post.id} to={`/post/${post.id}/comments`}>
            <PostCard post={post} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Posts;
