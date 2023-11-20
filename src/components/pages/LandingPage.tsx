import React from "react";
import { Navbar } from "../Navbar";
import { SideBar } from "../SideBar";
import { FriendsBar } from "../FriendsBar";
import { CreateContent } from "../create_content/CreateContent";

export const LandingPage = () => {
  return (
    <>
      <div className="grid-container">
        <div className="grid-item1">
          <Navbar />
        </div>
        <div className="grid-item3">
          <SideBar />
        </div>
        <div className="grid-item2">
          <CreateContent />
        </div>
        <div className="grid-item4">
          <FriendsBar />
        </div>
      </div>
    </>
  );
};
