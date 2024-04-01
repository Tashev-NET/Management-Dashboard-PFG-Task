import React, { useState } from "react";
import TabButtons from "../components/TabButtons";
import UserAlbums from "../components/UserDetailsComponents/UserAlbums";
import UserPosts from "../components/UserDetailsComponents/UserPosts";
import { useParams } from "react-router-dom";

const UserDetails: React.FC = () => {
  const buttonsInCenterSection = ["Posts", "Albums"];
  const [tab, setTab] = useState<string>(buttonsInCenterSection[0]);
  const { id } = useParams<{ id: string }>();

  const renderContent = () => {
    switch (tab) {
      case "Posts":
        return <UserPosts />;
      case "Albums":
        return <UserAlbums />;

      default:
        return null;
    }
  };
  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold my-4">
        Details For User With ID: {id}
      </h1>
      <TabButtons
        buttons={buttonsInCenterSection}
        selected={tab}
        onClick={(tab: string) => {
          setTab(tab);
        }}
      />

      {renderContent()}
    </div>
  );
};

export default UserDetails;
