import { useEffect, useState } from "react";
import { Post } from "../../Types";
import { Link, useParams } from "react-router-dom";
import { fetchUserPosts } from "../../api";
import PostCard from "../PostCard";

const UserPosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    fetchUserPosts(id ?? "").then((data) => setPosts(data));
  }, [id]);

  return (
    <div className="grid grid-cols-2 gap-4 mt-5">
      {posts.splice(5).map((post) => (
        <Link key={post.id} to={`/post/${post.id}/comments`}>
          <PostCard key={post.id} post={post} />
        </Link>
      ))}
    </div>
  );
};

export default UserPosts;
