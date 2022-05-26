import { Link } from "@mui/material";
import React from "react";
import "./util.css";

function NavLink({ href, children }) {
  return (
    <Link href={href} className="nav-link">
      {children}
    </Link>
  );
}

export default NavLink;
