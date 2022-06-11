import { Box, Button, Divider, Typography } from "@mui/material";
import React, { useState } from "react";
import { For } from "react-haiku";
import "./header.css";
import BG1 from "../../assets/header-1.png";
import BG2 from "../../assets/header-2.png";
import BG3 from "../../assets/header-3.png";

const data = [
  {
    title: "Lorem ipsum dolor amet",
    description:
      "Nam sollicitud nunc, cursus eros vulputate sed. Vestibulum lobortis.",
    img: BG1,
  },
  {
    title: "Lorem ipsum dolor amet",
    description:
      "Nam sollicitud nunc, cursus eros vulputate sed. Vestibulum lobortis.",
    img: BG2,
  },
  {
    title: "Lorem ipsum dolor amet",
    description:
      "Nam sollicitud nunc, cursus eros vulputate sed. Vestibulum lobortis.",
    img: BG3,
  },
];

const HeaderLink = ({ title, description, isSelected, handleClick }) => (
  <Button
    onClick={handleClick}
    variant="text"
    color="primary"
    className={isSelected ? "headlink-btn link-selected" : "headlink-btn"}
  >
    <Typography variant="h6" className="link">
      {title}
    </Typography>
    <Typography variant="body2">{description}</Typography>
  </Button>
);

const HeaderCompo = ({ title, description, img }) => (
  <Box
    sx={{
      flexDirection: { xs: "column", md: "row" },
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "all .3s",
    }}
  >
    <Box className="header-content">
      <Typography variant="h3" gutterBottom className="header-title">
        {title}
      </Typography>
      <Typography variant="h5" gutterBottom className="header-description">
        {description}
      </Typography>
    </Box>
    <Box className="header-img">
      <img src={img} alt="Header-1" />
    </Box>
  </Box>
);

function Header() {
  const [selectedLink, setSelected] = useState(0);

  return (
    <section>
      <Box
        id="home"
        sx={{
          overflow: "hidden",
          marginBottom: "2rem",
          height: { md: "80vh", xs: "90vh" },
        }}
      >
        <HeaderCompo
          title={data[selectedLink].title}
          description={data[selectedLink].description}
          img={data[selectedLink].img}
        />
      </Box>
      <Box
        sx={{ columnGap: { xs: ".6rem", md: "2rem" } }}
        className="header-links"
      >
        <For
          each={data}
          render={(item, index) => (
            <>
              <HeaderLink
                key={index}
                title={item.title}
                description={item.description}
                isSelected={index == selectedLink}
                handleClick={() => {
                  setSelected(index);
                }}
              />
              {index != data.length - 1 && (
                <Divider
                  orientation="vertical"
                  variant="middle"
                  flexItem
                  style={{ borderColor: "rgba(0,0,0,0.25)" }}
                />
              )}
            </>
          )}
        />
      </Box>
    </section>
  );
}

export default Header;
