import React from "react";
import PageTitle from "../Global/Pagetitle";
import { Box, Grid, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import Leadership from "../../src/assets/image/leadership/leadership.png";

function Ourmanagement() {
  const highlights = [
    {
      name: "Sanjaybhai Sudani",
      role: "Group Chairman",
      description:
        "With a dynamic and passionate persona, Mr. Jayesh B. Desai has been at the helm of the group since its inception. As a first-generation entrepreneur and exemplary leader, he has played a pivotal role in the success of the Rajhans Group. Mr. Jayesh Desai embarked on his entrepreneurial journey in 1996 with an edible oil venture, and his visionary leadership paved the way for the group's expansion into real estate, confectionery, entertainment, hospitality, e-commerce, and textile businesses.",
      imageSrc: Leadership,
    },
    {
      name: "Rajubhai Kakadiya",
      role: "Chief Executive Officer",
      description:
        "With a dynamic and passionate persona, Mr. Jayesh B. Desai has been at the helm of the group since its inception. As a first-generation entrepreneur and exemplary leader, he has played a pivotal role in the success of the Rajhans Group. Mr. Jayesh Desai embarked on his entrepreneurial journey in 1996 with an edible oil venture, and his visionary leadership paved the way for the group's expansion into real estate, confectionery, entertainment, hospitality, e-commerce, and textile businesses.",
      imageSrc: Leadership,
    },
    {
      name: "Bhavsanbhai Mangroliya",
      role: "Chief Financial Officer",
      description:
        "With a dynamic and passionate persona, Mr. Jayesh B. Desai has been at the helm of the group since its inception. As a first-generation entrepreneur and exemplary leader, he has played a pivotal role in the success of the Rajhans Group. Mr. Jayesh Desai embarked on his entrepreneurial journey in 1996 with an edible oil venture, and his visionary leadership paved the way for the group's expansion into real estate, confectionery, entertainment, hospitality, e-commerce, and textile businesses.",
      imageSrc: Leadership,
    },
    {
      name: "Bhavsanbhai",
      role: "Chief Financial Officer",
      description:
        "With a dynamic and passionate persona, Mr. Jayesh B. Desai has been at the helm of the group since its inception. As a first-generation entrepreneur and exemplary leader, he has played a pivotal role in the success of the Rajhans Group. Mr. Jayesh Desai embarked on his entrepreneurial journey in 1996 with an edible oil venture, and his visionary leadership paved the way for the group's expansion into real estate, confectionery, entertainment, hospitality, e-commerce, and textile businesses.",
      imageSrc: Leadership,
    },
  ];
  const theme = useTheme();

  return (
    <>
      <PageTitle title={`Leadership`} />
      <Box sx={{ py: 4 }}>
        <Typography
          component="h2"
          variant="h4"
          color="text.primary"
          sx={{
            textAlign: "center",
            fontWeight: "600",
            mb: 2,
          }}
        >
          Our Management Team
        </Typography>
        <Typography
          sx={{
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            textAlign: "center",
            WebkitTextFillColor: "transparent",
            fontWeight: 600,
            fontSize: "14px",
          }}
        >
          Rajhans (Desai-Jain) Group is guided by dynamic leaders who instill
          their values in the workforce, ensuring growth across various business
          verticals. With their technical expertise, profound domain knowledge,
          and extensive cross-functional experience, the group consistently
          strives for new benchmarks while spreading the 'Wings of Happiness.'
        </Typography>
      </Box>
      <Box
        columnGap={2}
        py={{ xs: 4 }}
        px={{ xs: "2rem", sm: "4rem", md: "4rem", lg: "4rem", xl: "20rem" }}
        rowGap={3}
        display="grid"
        gridTemplateColumns={{
          xs: "repeat(1, 1fr)",
        }}
      >
        {highlights.map((highlight, index) => (
          <Grid
            container
            spacing={1}
            sx={{ alignItems: "center", my: 2 }}
            key={index}
          >
            <Grid item xs={12} sm={12} md={12} lg={5} xl={4}>
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
                      transform: "rotateY(30deg)",
                      "& > div:nth-child(2)": {
                        transform: "scaleY(0.9) translate3d(10px, 8px, 2px)",
                      },
                      "& > div:nth-child(3)": {
                        transform: "translate3d(10px, 8px, 2px)",
                      },
                    },
                  },
                }}
              >
                <Box
                  className="leader-inner"
                  sx={{
                    width: "315px",
                    height: "340px",
                    borderTopRightRadius: "150px",
                    borderBottomLeftRadius: "110px",
                    background: theme.palette.primary.gradient,
                    position: "relative",
                  }}
                >
                  <img
                    src={highlight.imageSrc}
                    alt={highlight.name}
                    width={`300px`}
                    height={`320px`}
                  />
                  <Box
                    sx={{
                      borderTopRightRadius: "25px",
                      borderBottomLeftRadius: "25px",
                      color: theme.palette.common.white,
                      fontWeight: "500",
                      background: theme.palette.primary.gradient,
                      position: "absolute",
                      bottom: "0",
                      right: "-4px",
                      p: 2,
                    }}
                  >
                    Read More
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={7} xl={8}>
              <Box>
                <Typography
                  sx={{
                    fontSize: "18px",
                    mb: 1,
                    fontWeight: "600",
                  }}
                >
                  {highlight.role}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    color: theme.palette.primary.main,
                    pb: 1,
                    mb: 2,
                    borderBottom: "1px solid #CBAB67",
                  }}
                >
                  {highlight.name}
                </Typography>
                <Typography
                  sx={{ fontSize: "14px", lineHeight: "35px!important" }}
                >
                  {highlight.description}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        ))}
      </Box>
    </>
  );
}

export default Ourmanagement;
