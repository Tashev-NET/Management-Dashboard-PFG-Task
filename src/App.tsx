import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Users from "./screens/Users";
import Albums from "./screens/Albums";
import Posts from "./screens/Posts";
import Home from "./screens/Home";
import Sidebar from "./components/Sidebar";
import PostComments from "./screens/PostComments";
import { AppProvider } from "./contexts/AppContext";
import UserDetails from "./screens/UserDetails";

const App = () => {
  return (
    <Router>
      <AppProvider>
        <div className=" flex flex-row w-full mt-10">
          <Sidebar />
          <Routes>
            <Route path="/user/:id" element={<UserDetails />} />
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
