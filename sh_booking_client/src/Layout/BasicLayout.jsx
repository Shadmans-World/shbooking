import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";

export default function BasicLayout() {
  return (
    <>
      <Navbar />

      <div className="mt-2 p-1 min-h-[calc(100vh-9.03rem)]">
        <Outlet />
      </div>

      <Footer/>
    </>
  );
}
