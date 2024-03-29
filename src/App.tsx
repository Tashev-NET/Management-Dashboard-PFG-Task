import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Users from "./screens/Users";
import Albums from "./screens/Albums";
import Posts from "./screens/Posts";
import Home from "./screens/Home";
import Sidebar from "./components/Sidebar";
import UserAlbums from "./screens/UserAlbums";
import UserPosts from "./screens/UserPosts";

const App = () => {
  return (
    <Router>
      <div className=" flex flex-row w-full mt-10">
        <Sidebar />
        <Routes>
          <Route path="/user/:id/albums" element={<UserAlbums />} />
          <Route path="/user/:id/posts" element={<UserPosts />} />
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />

          <Route path="/albums" element={<Albums />} />
          <Route path="/posts" element={<Posts />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
