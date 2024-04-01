import { useState } from "react";
import { useNavigate } from "react-router";
import { Menu } from "lucide-react";
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="w-[20%] pr-4">
      {window.innerWidth >= 768 && (
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
      )}
      {window.innerWidth <= 768 && (
        <div>
          <div
            onClick={() => {
              setIsOpen((prev) => !prev);
            }}
            className="flex justify-end"
          >
            <Menu />
          </div>{" "}
          {isOpen && (
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
          )}
        </div>
      )}
    </div>
  );
};

export default Sidebar;
