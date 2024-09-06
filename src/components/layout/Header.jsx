import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="p-5 space-x-4 bg-green-500">
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/signup"}>SignUp</NavLink>
      <NavLink to={"/users"}>Users</NavLink>
    </div>
  );
};

export default Header;
