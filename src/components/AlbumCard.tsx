import React, { useEffect, useState } from "react";
import { Album } from "../Types";
import { fetchPostUserData } from "../api";

interface AlbumCardProps {
  album: Album;
}

const AlbumCard: React.FC<AlbumCardProps> = ({ album }) => {
  const [userData, setUserData] = useState<any>();

  useEffect(() => {
    fetchPostUserData(album.userId).then((data) => setUserData(data));
  }, []);
  return (
    <div className="bg-white shadow-md p-4 rounded-md">
      <h2 className="text-xl font-semibold">{album.title}</h2>
      <p className="text-gray-600">Author username: {userData?.username}</p>
    </div>
  );
};

export default AlbumCard;
