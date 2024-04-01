import React from "react";

type SidebarItemProps = {
  icon: any;
  text: string;
  path: string;
  navigate: (path: string) => void;
};
const SidebarItem: React.FC<SidebarItemProps> = ({
  icon,
  text,
  path,
  navigate,
}) => {
  return (
    <li
      className="cursor-pointer flex gap-4"
      onClick={() => {
        navigate(path);
      }}
    >
      {icon} <p>{text}</p>
    </li>
  );
};

export default SidebarItem;
