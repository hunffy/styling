import React from "react";
import Footer from "../components/footer";
import { Outlet } from "react-router-dom";
const Root = () => {
  return (
    <div>
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Root;
