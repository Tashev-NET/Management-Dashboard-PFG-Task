import { useState } from "react";
import { useNavigate } from "react-router";
import {  Library, Menu, Rss, Users, X } from "lucide-react";
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="w-[20%] pr-4">
      {window.innerWidth >= 800 && (
        <div className="flex justify-center">
          <ul className="flex flex-col gap-[15px] ">
            <li
              className="cursor-pointer flex gap-4"
              onClick={() => {
                navigate("/users");
              }}
            >
              <Users /> <p>users</p>
            </li>
            <li
              className="cursor-pointer flex gap-4"
              onClick={() => {
                navigate("/albums");
              }}
            >
              <Library />
              <p>albums</p>
            </li>
            <li
              className="cursor-pointer flex gap-4"
              onClick={() => {
                navigate("/posts");
              }}
            >
              <Rss />
              <p>posts</p>
            </li>
          </ul>
        </div>
      )}
      {window.innerWidth <= 800 && (
        <div>
          <div
            onClick={() => {
              setIsOpen((prev) => !prev);
            }}
            className="flex justify-end cursor-pointer"
          >
            {isOpen ? <X /> : <Menu />}
          </div>{" "}
          {isOpen && (
            <div className="flex justify-center">
              <ul className="flex flex-col gap-[15px] ">
                <li
                  className="cursor-pointer flex gap-4"
                  onClick={() => {
                    navigate("/users");
                  }}
                >
                  <Users /> <p>users</p>
                </li>
                <li
                  className="cursor-pointer flex gap-4"
                  onClick={() => {
                    navigate("/albums");
                  }}
                >
                  <Library />
                  <p>albums</p>
                </li>
                <li
                  className="cursor-pointer flex gap-4"
                  onClick={() => {
                    navigate("/posts");
                  }}
                >
                  <Rss />
                  <p>posts</p>
                </li>
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Sidebar;
