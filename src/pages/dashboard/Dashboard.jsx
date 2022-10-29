import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";

const Dashboard = () => {
  return (
    <div className="dashboard-wrapper">
      <Sidebar />
      <div className="dashboard-content-wrapper">
        {/* nested page */}
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
