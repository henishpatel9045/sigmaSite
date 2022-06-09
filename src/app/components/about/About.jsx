import { Box, Typography } from "@mui/material";
import React from "react";
import "./about.css";
import BG from "../../assets/about.png";

const data =
  "Aliquam gravida quam dui, venenatis suscipit erat dapibus eu. Donec non libero ultricies Cras convallis lacus orci. Tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero. Quisque ut metus sit amet augue rutrum feugiat.";

function About() {
  return (
    <Box component={"section"} id="about">
      <div>
        <img src={BG} alt="AboutUs" />
      </div>
      <div>
        <Typography variant="h4" className="header-title about-title">
          About Us
        </Typography>
        <Typography variant="body2" className="about-desc">
          {data}
        </Typography>
      </div>
    </Box>
  );
}

export default About;
