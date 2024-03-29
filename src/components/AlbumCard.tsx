// components/AlbumCard.tsx

import React from "react";
import { Album } from "../Types";

interface AlbumCardProps {
  album: Album;
}

const AlbumCard: React.FC<AlbumCardProps> = ({ album }) => {
  return (
    <div className="bg-white shadow-md p-4 rounded-md">
      <h2 className="text-xl font-semibold">{album.title}</h2>
    </div>
  );
};

export default AlbumCard;
