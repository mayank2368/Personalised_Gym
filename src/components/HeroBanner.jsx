import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import HeroBannerImage from "../assets/images/1banner.png";

const HeroBanner = () => {
  return (
    <Grid container spacing={4}>
      {/* Left side for text content */}
      <Grid item xs={12} md={6}>
        <Box
          sx={{
            mt: {
              lg: "212px",
              xs: "70px",
            },
            ml: { sm: "50px" },
          }}
          position="relative"
          p="20px"
        >
          <Typography color="#FF2625" fontSize="26px" fontWeight="600">
            MAYANK'S FITNESS WORLD
          </Typography>
          <Typography
            fontWeight={700}
            sx={{
              fontSize: { lg: "44px", xs: "40px" },
            }}
            mb="23px"
            mt="30px"
          >
            Eat, Sleep <br /> Gym, Repeat!
          </Typography>
          <Typography fontSize="22px" lineHeight="35px" mb={4}>
            The most effective exercises are here{" "}
          </Typography>
          <Button
            variant="contained"
            color="error"
            href="#exercises"
            sx={{
              backgroundColor: "#ff2625",
              padding: "10px",
            }}
          >
            Explore Exercises
          </Button>
          <Typography
            fontWeight={600}
            color="#ff2625"
            sx={{
              opacity: 0.1,
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(50%, -50%)",
              fontSize: "55px",
              display: {
                lg: "block",
                xs: "none",
              },
            }}
          >
            NEVER BACK DOWN
          </Typography>
        </Box>
      </Grid>

      {/* Right side for the image */}
      <Grid item xs={12} md={6}>
        <img
          src={HeroBannerImage}
          alt="banner"
          className="hero-banner-img"
          style={{ width: "100%", height: "auto", maxWidth: "400px" }}
        />
      </Grid>
    </Grid>
  );
};

export default HeroBanner;
