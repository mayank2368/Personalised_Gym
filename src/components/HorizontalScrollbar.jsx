import React from "react";
import { Box, Typography } from "@mui/material";
import BodyPart from "./BodyPart";
import ExerciseCard from "./ExerciseCard";
import RightArrowIcon from "../assets/icons/right-arrow.png";
import LeftArrowIcon from "../assets/icons/left-arrow.png";

const HorizontalScrollbar = ({ data, bodyPart, bodyParts, setBodyPart }) => {
  const scrollContainerRef = React.createRef();

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft -= 200; // Adjust the scroll distance as needed
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft += 200; // Adjust the scroll distance as needed
    }
  };

  return (
    <div
      style={{ overflowX: "auto", whiteSpace: "nowrap" }}
      ref={scrollContainerRef}
    >
      <Typography onClick={scrollLeft} className="right-arrow">
        <img src={LeftArrowIcon} alt="left-arrow" />
      </Typography>

      {data.map((item) => (
        <Box
          key={item.id || item}
          itemID={item.id || item}
          title={item.id || item}
          m="0 40px"
          style={{ display: "inline-block" }}
        >
          {bodyParts ? (
            <BodyPart
              item={item}
              bodyPart={bodyPart}
              setBodyPart={setBodyPart}
            />
          ) : (
            <ExerciseCard exercise={item} />
          )}
        </Box>
      ))}

      <Typography onClick={scrollRight} className="left-arrow">
        <img src={RightArrowIcon} alt="right-arrow" />
      </Typography>
    </div>
  );
};

export default HorizontalScrollbar;
