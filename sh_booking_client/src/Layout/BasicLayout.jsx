import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";

export default function BasicLayout() {
  return (
    <>
      <Navbar />

      <div className="mt-2">
        <Outlet />
      </div>
    </>
  );
}
