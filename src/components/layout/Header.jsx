import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="p-5 space-x-6 bg-green-500">
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/addcoffee"}>Add Coffee</NavLink>
      <NavLink to={"/signup"}>SignUp</NavLink>
      <NavLink to={"/signin"}>SignIn</NavLink>
      <NavLink to={"/users"}>Users</NavLink>
    </div>
  );
};

export default Header;
