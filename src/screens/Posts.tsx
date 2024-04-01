import React, { useState, useEffect } from "react";
import { fetchPosts } from "../api";
import { Post } from "../Types";
import PostCard from "../components/PostCard";
import { Link } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";

const Posts: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(2);

  useEffect(() => {
    fetchPosts(page)
      .then((posts) => {
        setPosts(posts);
      })
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);

  const fetchMoreData = () => {
    fetchPosts(page)
      .then((newPosts) => {
        setPosts((prevPosts) => [...prevPosts, ...newPosts]);
        newPosts.length > 0 ? setHasMore(true) : setHasMore(false);
      })
      .catch((error) => console.error("Error fetching more posts:", error));

    setPage((prevPage) => prevPage + 1);
  };
  return (
    <InfiniteScroll
      dataLength={posts.length}
      next={fetchMoreData}
      hasMore={hasMore}
      loader={<div>Loading...</div>}
    >
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold my-4">Posts</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 grid-rows-auto">
          {posts.map((post) => (
            <Link key={post.id} to={`/post/${post.id}/comments`}>
              <PostCard post={post} />
            </Link>
          ))}
        </div>
      </div>
    </InfiniteScroll>
  );
};

export default Posts;
