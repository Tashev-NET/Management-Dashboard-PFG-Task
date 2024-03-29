import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchUserAlbums } from "../api";
import { Album } from "../Types";
import AlbumCard from "../components/AlbumCard";

const UserAlbums: React.FC = () => {
  const [albums, setAlbums] = useState<Album[]>([]);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    fetchUserAlbums(id ?? "").then((data) => setAlbums(data));
  }, [id]);

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold my-4">Albums For User With ID: {id}</h1>
      <div className="grid grid-cols-2 gap-4">
        {albums.splice(5).map((album) => (
          <AlbumCard key={album.id} album={album} />
        ))}
      </div>
    </div>
  );
};

export default UserAlbums;
