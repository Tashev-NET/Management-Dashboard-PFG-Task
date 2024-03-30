import React, { useEffect, useState } from "react";
import { Album } from "../Types";
import { fetchPostUserData } from "../api";
import { Star } from "lucide-react";
interface AlbumCardProps {
  album: Album;
  isFavorite: boolean;
  setFavoriteAlbums: React.Dispatch<React.SetStateAction<number[]>>;
}

const AlbumCard: React.FC<AlbumCardProps> = ({
  album,
  isFavorite,
  setFavoriteAlbums,
}) => {
  const [userData, setUserData] = useState<any>();
  useEffect(() => {
    fetchPostUserData(album.userId).then((data) => setUserData(data));
  }, []);

  const favoriteAlbum = () => {
    setFavoriteAlbums((prev) => [...prev, album.id]);
  };
  const unFavoriteAlbum = () => {
    setFavoriteAlbums((prev) => prev.filter((el) => el !== album.id));
  };
  return (
    <div className="bg-white shadow-md p-4 rounded-md">
      <div className="flex justify-between">
        <h2 className="text-xl font-semibold">{album.title}</h2>
        {isFavorite ? (
          <Star fill="yellow" onClick={favoriteAlbum} />
        ) : (
          <Star color="black" onClick={unFavoriteAlbum} />
        )}
      </div>
      <p className="text-gray-600">Author username: {userData?.username}</p>
    </div>
  );
};

export default AlbumCard;
