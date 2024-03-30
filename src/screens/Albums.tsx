import React, { useState, useEffect } from "react";
import { fetchAlbums } from "../api";
import AlbumCard from "../components/AlbumCard";
import { Album } from "../Types";
import { useLocalStorage } from "../hooks/useLocalStorage";

const Albums: React.FC = () => {
  const [albums, setAlbums] = useState<Album[]>([]);
  const [favoriteAlbums, setFavoriteAlbums] = useLocalStorage<number[]>(
    "favoriteAlbums",
    []
  );
  useEffect(() => {
    fetchAlbums().then((data) => setAlbums(data));
  }, []);

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold my-4">Albums</h1>
      <div className="grid grid-cols-2 gap-4">
        {albums.map((album) => (
          <AlbumCard
            key={album.id}
            album={album}
            setFavoriteAlbums={setFavoriteAlbums}
            isFavorite={favoriteAlbums.includes(album.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Albums;
