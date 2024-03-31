import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Users from "./screens/Users";
import Albums from "./screens/Albums";
import Posts from "./screens/Posts";
import Home from "./screens/Home";
import Sidebar from "./components/Sidebar";
import UserAlbums from "./screens/UserAlbums";
import UserPosts from "./screens/UserPosts";
import PostComments from "./screens/PostComments";
import { AppProvider } from "./contexts/AppContext";

const App = () => {
  return (
    <Router>
      <AppProvider>
        <div className=" flex flex-row w-full mt-10">
          <Sidebar />
          <Routes>
            <Route path="/user/:id/albums" element={<UserAlbums />} />
            <Route path="/user/:id/posts" element={<UserPosts />} />
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<Users />} />

            <Route path="/albums" element={<Albums />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/post/:id/comments" element={<PostComments />} />
          </Routes>
        </div>
      </AppProvider>
    </Router>
  );
};

export default App;
