import React from "react";
import { Outlet } from "react-router-dom";
import LeftSidebar from "../../components/left_sidebar/LeftSidebar";

const Dashboard = () => {
  return (
    <div className="dashboard-wrapper">
      <LeftSidebar />
      <div className="dashboard-content-wrapper">
        {/* nested page */}
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
