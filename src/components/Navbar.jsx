import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
import Logo from "../assets/images/Mayank (1).png";

const Navbar = () => {
  return (
    <Stack>
      <Link to="/">
        <img
          src={Logo}
          alt="logo"
          style={{
            width: "50px",
            height: "50px",
            margin: "0 20px",
          }}
        />
      </Link>
    </Stack>
  );
};

export default Navbar;
