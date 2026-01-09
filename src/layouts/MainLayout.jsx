// src/layouts/DashboardLayout.jsx
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
import Card from "../pages/Card";

const MainLayout = () => {
  return (
    <div className="flex flex-col max-w-full border border-amber-600 mx-auto" >
      {/* Header */}
      <Header />

      {/* Body */}
      <div className="flex flex-1">
        <Sidebar />

        <main className="flex-1 p-6 bg-gray-200  max-w-[16000px] border-amber-600">
          <Outlet />
        </main>
      </div>
          <Card />
    </div>
  );
};

export default MainLayout;





























