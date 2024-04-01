import { Album, Post } from "../Types";

export const fetchUsers = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const fetchPosts = async (
  page: number = 1,
  limit: number = 12
): Promise<Post[]> => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch posts");
    }
    const data = await response.json();
    return data as Post[];
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
};

export const fetchAlbums = async (
  page: number = 1,
  limit: number = 30
): Promise<Album[]> => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/albums?_page=${page}&_limit=${limit}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch albums");
    }
    const data = await response.json();
    return data as Album[];
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const fetchUserPosts = async (userId: string) => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch user posts");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const fetchUserAlbums = async (userId: string) => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/albums?userId=${userId}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch user albums");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
export const fetchPostComments = async (postId: string) => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch post comments");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
