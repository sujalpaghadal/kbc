import { useTheme } from "@emotion/react";
import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import PageTitle from "../Global/Pagetitle";
import suatain from "../../src/assets/image/sustainabolity/sustain.png";
function Sustainability() {
  const theme = useTheme();

  return (
    <>
      <PageTitle title={`Sustainability`} />
      <Box sx={{ py: 20 }}>
        <Typography
          component="h2"
          variant="h4"
          color="text.primary"
          sx={{
            textAlign: "center",
            fontWeight: "600",
            mb: 10,
          }}
        >
          Sustainability
        </Typography>

        <Box
          columnGap={3}
          px={{ xs: "2rem", sm: "4rem", md: "4rem", lg: "6rem", xl: "18em" }}
          rowGap={3}
          display="grid"
          gridTemplateColumns={{
            xs: "repeat(1, 1fr)",
          }}
        >
          <Grid
            container
            spacing={4}
            direction={{ xs: "row-reverse", md: "row-reverse", lg: "row" }}
          >
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={5}
              xl={7}
              order={{ xs: 2, lg: 1 }}
            >
              <Typography
                sx={{
                  fontSize: { zs: "30px", md: "35px", lg: "40px" },
                  color: theme.palette.primary.main,
                  mb: 4,
                  fontWeight: 600,
                }}
              >
                Sustainability
              </Typography>
              <Typography sx={{ fontSize: "18px", lineHeight: "34px" }}>
                At Rajhans Realty, our commitment to responsible business
                practices shapes a brighter future. Sustainability is at the
                core of our operations, where we employ eco-friendly
                technologies, foster a culture of conservation, and actively
                work to minimize our environmental footprint. Our sustainable
                initiatives encompass social responsibility, environmental
                concerns, ethical business practices, and community engagement.
                We invest in employee well-being, support local communities, and
                prioritize fair and transparent business dealings. By
                integrating sustainability into our core values, we strive to
                make a positive contribution to the world, maintaining a
                harmonious balance between business growth and environmental and
                social responsibility. We take pride in our commitment to
                sustainability, evidenced by various accolades and initiatives.
                Notably, we were honored with the Swachh Bharat Award (2017) by
                the Surat Municipal Corporation, recognizing our dedication to
                cleanliness and environmental responsibility. Additionally,
                securing 'The Green Commercial Project of the Year' award (2023)
                highlights our commitment to environmentally friendly business
                practices. At Rajhans Realty, we understand the significance of
                our role in creating a better world, and these achievements
                underscore our ongoing journey towards a more responsible
                future.
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={7}
              xl={5}
              order={{ xs: 1, lg: 2 }}
            >
              <Box
                sx={{
                  minHeight: "280px",
                  width: 320,
                  perspective: "1000px",
                  transition: "transform 0.4s",
                  "& > div, & > div > div": {
                    transition: "inherit",
                  },
                  "&:hover": {
                    "& > div": {
                      transform: "rotateY(-30deg)",
                      "& > div:nth-child(2)": {
                        transform: "scaleY(0.8) translate3d(10px, -8px, -2px)",
                      },
                      "& > div:nth-child(3)": {
                        transform: "translate3d(10px, -8px, -2px)",
                      },
                    },
                  },
                }}
              >
                <Box
                  className="sustain-inner"
                  sx={{
                    width: "450px",
                    height: "500px",
                    borderTopRightRadius: "200px",
                    borderBottomLeftRadius: "200px",
                    background: theme.palette.primary.gradient,
                    position: "relative",
                  }}
                >
                  <img
                    src={suatain}
                    alt="sustain-image"
                    className="sustain-image"
                  />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}

export default Sustainability;
