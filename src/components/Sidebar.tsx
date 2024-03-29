import { useNavigate } from "react-router";

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div className="w-[20%]">
      <ul className="flex flex-col items-center gap-15">
        <li onClick={()=>{navigate('/users')}}>users</li>
        <li onClick={()=>{navigate('/albums')}}>albums</li>
        <li onClick={()=>{navigate('/posts')}}>posts</li>
      </ul>
    </div>
  );
};

export default Sidebar;
