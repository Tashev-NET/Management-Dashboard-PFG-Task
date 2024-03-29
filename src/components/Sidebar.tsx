import { useNavigate } from "react-router";

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div className="w-[20%]">
      <ul className="flex flex-col items-center gap-15">
        <li
          className="cursor-pointer"
          onClick={() => {
            navigate("/users");
          }}
        >
          users
        </li>
        <li
          className="cursor-pointer"
          onClick={() => {
            navigate("/albums");
          }}
        >
          albums
        </li>
        <li
          className="cursor-pointer"
          onClick={() => {
            navigate("/posts");
          }}
        >
          posts
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
