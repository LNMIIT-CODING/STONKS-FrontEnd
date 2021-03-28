import React from "react";
import "./DashBoard.css";

//Components;
import DashCard from "../../Components/DashCard/DashCard";
import SideBar from "../../Components/SideBar/SideBar";

// This component is where all the applcation joins to one place
export default function DashBoard() {
  return (
    <div className="dash">
      <SideBar />
      <DashCard />
    </div>
  );
}
