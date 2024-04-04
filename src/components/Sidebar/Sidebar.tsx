import { useState } from "react";
import { useNavigate } from "react-router";
import { Library, Menu, Rss, Users, X } from "lucide-react";
import SidebarItem from "./SidebarItem";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const renderMenu = () => (
    <ul className="flex flex-col gap-4">
      <SidebarItem
        icon={<Users />}
        text="users"
        path="/users"
        navigate={navigate}
      />

      <SidebarItem
        icon={<Library />}
        text="albums"
        path="/albums"
        navigate={navigate}
      />

      <SidebarItem
        icon={<Rss />}
        text="posts"
        path="/posts"
        navigate={navigate}
      />
    </ul>
  );

  return (
    <div className="w-1/5 pr-4 relative">
      <div className=" sticky top-4 left-0">
        <div className="hidden md:flex justify-center">{renderMenu()}</div>

        <div className="md:hidden">
          <div
            onClick={() => {
              setIsOpen((prev) => !prev);
            }}
            className="flex justify-end cursor-pointer mb-4"
          >
            {isOpen ? <X /> : <Menu />}
          </div>
          {isOpen && <div className="flex justify-center">{renderMenu()}</div>}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
