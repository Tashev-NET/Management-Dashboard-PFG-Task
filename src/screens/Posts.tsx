import React, { useState, useEffect, useRef } from "react";
import { fetchPosts } from "../api";
import { Post } from "../Types";
import PostCard from "../components/PostCard";
import { Link } from "react-router-dom";

const Posts: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setLoading(true);
    fetchPosts(page)
      .then((newPosts) => {
        setPosts((prevPosts) => [...prevPosts, ...newPosts]);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
        setLoading(false);
      });
  }, [page]);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, clientHeight, scrollHeight } =
        document.documentElement;
      if (scrollTop + clientHeight >= scrollHeight - 20) {
        setPage((prev) => prev + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="container mx-auto" ref={containerRef}>
      <h1 className="text-2xl font-bold my-4">Posts</h1>
      <div className="grid grid-cols-2 gap-4">
        {posts.map((post) => (
          <Link key={post.id} to={`/post/${post.id}/comments`}>
            <PostCard post={post} />
          </Link>
        ))}
        {loading && <div>Loading...</div>}
      </div>
    </div>
  );
};

export default Posts;
