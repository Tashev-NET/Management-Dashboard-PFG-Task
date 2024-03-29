import React from "react";
import { Comment } from "../Types";

type CommentCardProps = {
  comment: Comment;
};

const CommentCard: React.FC<CommentCardProps> = ({ comment }) => {
  return (
    <div className="bg-white shadow-md p-4 rounded-md">
      <h2 className="text-xl font-semibold">{comment.name}</h2>
      <p className="text-gray-600">@{comment.body}</p>
    </div>
  );
};

export default CommentCard;
