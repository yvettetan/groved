import React from "react";
import { Outlet } from "react-router-dom";

const ShopContainer = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default ShopContainer;
