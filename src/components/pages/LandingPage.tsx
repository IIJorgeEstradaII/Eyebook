import React from "react";
import { Navbar } from "../Navbar";
import { SideBar } from "../SideBar";
import { FriendsBar } from "../FriendsBar";

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
        <div className="grid-item2">{/* Contenido del grid-item2 */}</div>
        <div className="grid-item4">
          <FriendsBar />
        </div>
      </div>
    </>
  );
};
