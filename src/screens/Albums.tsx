import React, { useState, useEffect } from "react";
import { fetchAlbums } from "../api";
import AlbumCard from "../components/AlbumCard";
import { Album } from "../Types";
import { useLocalStorage } from "../hooks/useLocalStorage";
import InfiniteScroll from "react-infinite-scroll-component";

const Albums: React.FC = () => {
  const [albums, setAlbums] = useState<Album[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(2);
  const [favoriteAlbums, setFavoriteAlbums] = useLocalStorage<number[]>(
    "favoriteAlbums",
    []
  );
  useEffect(() => {
    fetchAlbums(page)
      .then((albums) => {
        setAlbums(albums);
      })
      .catch((error) => console.error("Error fetching albums:", error));
  }, []);

  const fetchMoreData = () => {
    fetchAlbums(page)
      .then((newAlbums) => {
        setAlbums((prevAlbums) => [...prevAlbums, ...newAlbums]);
        newAlbums.length > 0 ? setHasMore(true) : setHasMore(false);
      })
      .catch((error) => console.error("Error fetching more albums:", error));

    setPage((prevPage) => prevPage + 1);
  };

  return (
    <InfiniteScroll
      dataLength={albums.length}
      next={fetchMoreData}
      hasMore={hasMore}
      loader={<div>Loading...</div>}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold my-4">Albums</h1>
          <p className=" text-black">Page size: {albums.length}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 grid-rows-auto">
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
    </InfiniteScroll>
  );
};

export default Albums;
