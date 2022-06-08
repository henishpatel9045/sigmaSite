import { Box, Typography } from "@mui/material";
import React from "react";
import "./explore.css";
import PIC from "../../assets/pic.jpg";
import { For } from "react-haiku";
import { Rating } from "@mui/material";

const data = [
  {
    title: "Photoshop",
    img: PIC,
    description: "Pids ds daha sd ajdaosdasdad dasda.",
  },
  {
    title: "Photoshop",
    img: PIC,
    description: "Pids ds daha sd ajdaosdasdad dasda.",
  },
  {
    title: "Photoshop",
    img: PIC,
    description: "Pids ds daha sd ajdaosdasdad dasda.",
  },
  {
    title: "Photoshop",
    img: PIC,
    description: "Pids ds daha sd ajdaosdasdad dasda.",
  },
  {
    title: "Photoshop",
    img: PIC,
    description: "Pids ds daha sd ajdaosdasdad dasda.",
  },
];

const ExploreCard = ({ title, img, description }) => (
  <div className="explore-course-wrapper">
    <div className="explore-course-title">{title}</div>
    <div className="explore-course-card">
      <img src={img} className="explore-card-img" alt="" />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "1rem 0rem",
        }}
      >
        <div style={{ flex: 1 }}>
          <Typography variant="h6" className="explore-card-heading">
            {title}
          </Typography>
          <Typography variant="body2" className="explore-card-body">
            {description}
          </Typography>
        </div>
        <div
          className="card-content-bottom"
          style={{ justifySelf: "flex-end" }}
        >
          <Rating name="read-only" value={3.8} readOnly precision={0.1} />
          <Typography
            variant="caption"
            style={{ fontWeight: "bold", fontSize: "1.5rem", opacity: 0.9 }}
          >
            $ 450
          </Typography>
        </div>
      </div>
    </div>
  </div>
);

const ExploreCourse = ({ heading, data }) => (
  <div>
    <Typography
      variant="h5"
      className=""
      sx={{ opacity: 0.8, fontWeight: "bold" }}
    >
      {heading}
    </Typography>
    <Box
      sx={{ flexDirection: { md: "row", xs: "column" } }}
      className="explore-course-container"
    >
      <For
        each={data}
        render={(item, index) => (
          <ExploreCard
            key={index}
            title={item.title}
            img={item.img}
            description={item.description}
          />
        )}
      />
    </Box>
  </div>
);

function Explore() {
  return (
    <section id="explore">
      <Box className="section-header">
        <Typography variant="h4" className="section-title">
          Explore Course
        </Typography>
        <Typography variant="subtitle1" className="subtitle">
          Ut sed eros finibus, placerat orci id, dapibus.
        </Typography>
      </Box>
      <div className="explore-wrapper">
        <ExploreCourse heading={"Photography"} data={data} />
      </div>
    </section>
  );
}

export default Explore;