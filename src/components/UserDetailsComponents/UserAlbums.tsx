import { useEffect, useState } from "react";
import { Album } from "../../Types";
import { useParams } from "react-router-dom";
import { fetchUserAlbums } from "../../api";
import AlbumCard from "../AlbumCard";
import { useLocalStorage } from "../../hooks/useLocalStorage";

const UserAlbums = () => {
  const [albums, setAlbums] = useState<Album[]>([]);
  const { id } = useParams<{ id: string }>();
  const [favoriteAlbums, setFavoriteAlbums] = useLocalStorage<number[]>(
    "favoriteAlbums",
    []
  );
  useEffect(() => {
    fetchUserAlbums(id ?? "").then((data) => setAlbums(data));
  }, [id]);

  return (
    <div className="grid grid-cols-2 gap-4 mt-5">
      {albums.slice(0, 5).map((album) => (
        <AlbumCard
          key={album.id}
          album={album}
          setFavoriteAlbums={setFavoriteAlbums}
          isFavorite={favoriteAlbums.includes(album.id)}
        />
      ))}
    </div>
  );
};

export default UserAlbums;
