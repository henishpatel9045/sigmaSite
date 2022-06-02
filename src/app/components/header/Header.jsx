import { Box, Typography } from "@mui/material";
import React from "react";
import "./header.css";
import BG1 from "../../assets/header-1.png";

function Header() {
  return (
    <section>
      <Box id="home" sx={{ flexDirection: { xs: "column", md: "row" } }}>
        <Box className="header-content">
          <Typography variant="h3" gutterBottom className="header-title">
            Lorem ipsum dolor amet
          </Typography>
          <Typography variant="h5" gutterBottom className="header-description">
            Nam sollicitud nunc, cursus eros vulputate sed. Vestibulum lobortis.
          </Typography>
        </Box>
        <Box className="header-img">
          <img src={BG1} alt="Header-1" />
        </Box>
      </Box>
      <Box
        sx={{ columnGap: { xs: ".6rem", md: "2rem" } }}
        className="header-links"
      >
        <Box>
          <Typography variant="h6" className="link">
            Business Solution
          </Typography>
          <Typography variant="body2">
            Interdum et malesuada ac ante…
          </Typography>
        </Box>
        <Box>
          <Typography variant="h6" className="link">
            Business Solution
          </Typography>
          <Typography variant="body2">
            Interdum et malesuada ac ante…
          </Typography>
        </Box>
        <Box>
          <Typography variant="h6" className="link">
            Business Solution
          </Typography>
          <Typography variant="body2">
            Interdum et malesuada ac ante…
          </Typography>
        </Box>
      </Box>
    </section>
  );
}

export default Header;
