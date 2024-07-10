import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import PageTitle from "../Global/Pagetitle";
import { useTheme } from "@mui/material/styles";
import h1 from "../../src/assets/image/newshilights/h1.png";

function Newhilights() {
  const theme = useTheme();

  const highlights = [
    {
      date: "1 Jan ,2024",
      title:
        "Rajhans Group Takes Flight Towards Digital Transformation with SAP HANA Module in Project UDAAN",
      description:
        "The Rajhans Group proudly announced a major leap forward in their business journey with the successful implementation of the SAP HANA module. Under the visionary project title 'UDAAN,' the group aims to soar to new heights of efficiency & innovation. SAP HANA, a cutting-edge in-memory database and application platform, will empower Rajhans Group to revolutionize their business processes, enhance real-time analytics, and pave the way for unprecedented growth opportunities. UDAAN represents the group's commitment to embracing digital solutions for a more agile and responsive organizational structure. 'Digital transformation is not just a buzzword for us; it's a commitment to staying ahead in a rapidly evolving business landscape. With UDAAN, we are.....",
      imageSrc: h1,
    },
    {
      date: "1 Jan ,2024",
      title:
        "Rajhans Group Takes Flight Towards Digital Transformation with SAP HANA Module in Project UDAAN",
      description:
        "The Rajhans Group proudly announced a major leap forward in their business journey with the successful implementation of the SAP HANA module. Under the visionary project title 'UDAAN,' the group aims to soar to new heights of efficiency & innovation. SAP HANA, a cutting-edge in-memory database and application platform, will empower Rajhans Group to revolutionize their business processes, enhance real-time analytics, and pave the way for unprecedented growth opportunities. UDAAN represents the group's commitment to embracing digital solutions for a more agile and responsive organizational structure. 'Digital transformation is not just a buzzword for us; it's a commitment to staying ahead in a rapidly evolving business landscape. With UDAAN, we are.....",
      imageSrc: h1,
    },
    {
      date: "1 Jan ,2024",
      title:
        "Rajhans Group Takes Flight Towards Digital Transformation with SAP HANA Module in Project UDAAN",
      description:
        "The Rajhans Group proudly announced a major leap forward in their business journey with the successful implementation of the SAP HANA module. Under the visionary project title 'UDAAN,' the group aims to soar to new heights of efficiency & innovation. SAP HANA, a cutting-edge in-memory database and application platform, will empower Rajhans Group to revolutionize their business processes, enhance real-time analytics, and pave the way for unprecedented growth opportunities. UDAAN represents the group's commitment to embracing digital solutions for a more agile and responsive organizational structure. 'Digital transformation is not just a buzzword for us; it's a commitment to staying ahead in a rapidly evolving business landscape. With UDAAN, we are.....",
      imageSrc: h1,
    },
    {
      date: "1 Jan ,2024",
      title:
        "Rajhans Group Takes Flight Towards Digital Transformation with SAP HANA Module in Project UDAAN",
      description:
        "The Rajhans Group proudly announced a major leap forward in their business journey with the successful implementation of the SAP HANA module. Under the visionary project title 'UDAAN,' the group aims to soar to new heights of efficiency & innovation. SAP HANA, a cutting-edge in-memory database and application platform, will empower Rajhans Group to revolutionize their business processes, enhance real-time analytics, and pave the way for unprecedented growth opportunities. UDAAN represents the group's commitment to embracing digital solutions for a more agile and responsive organizational structure. 'Digital transformation is not just a buzzword for us; it's a commitment to staying ahead in a rapidly evolving business landscape. With UDAAN, we are.....",
      imageSrc: h1,
    },
  ];

  return (
    <>
      <PageTitle title={`News Highlights`} />
      <Box sx={{ py: 4 }}>
        <Typography
          variant="h4"
          color="text.primary"
          sx={{
            textAlign: { xs: "center" },
            fontWeight: "600",
            mb: 5,
          }}
        >
          News Highlights
        </Typography>

        <Box
          columnGap={2}
          px={{ xs: "2rem", sm: "4rem", md: "4rem", lg: "4rem", xl: "12rem" }}
          rowGap={3}
          display="grid"
          gridTemplateColumns={{
            xs: "repeat(1, 1fr)",
          }}
        >
          {highlights.map((highlight, index) => (
            <Grid container spacing={1} sx={{ alignItems: "center" ,my:2}}>
              <React.Fragment key={index}>
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
                            transform:
                              "scaleY(0.9) translate3d(10px, 8px, 2px)",
                          },
                          "& > div:nth-child(3)": {
                            transform: "translate3d(10px, 8px, 2px)",
                          },
                        },
                      },
                    }}
                  >
                    <Box
                      className="newhilights-inner"
                      sx={{
                        width: "450px",
                        height: "395px",
                        borderTopRightRadius: "230px",
                        borderBottomLeftRadius: "220px",
                        background: theme.palette.primary.gradient,
                        position: "relative",
                      }}
                    >
                      <img
                        src={highlight.imageSrc}
                        alt="newhilights"
                        className="nehilghts"
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
                          right: "0",
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
                      variant="h6"
                      sx={{ color: theme.palette.primary.main, mb: 2 }}
                    >
                      {highlight.date}
                    </Typography>
                    <Typography
                      sx={{ fontSize: "18px", my: 2, fontWeight: "600" }}
                    >
                      {highlight.title}
                    </Typography>
                    <Typography variant="body1" sx={{ fontSize: "14px" }}>
                      {highlight.description}
                    </Typography>
                  </Box>
                </Grid>
              </React.Fragment>
            </Grid>
          ))}
        </Box>
      </Box>
    </>
  );
}

export default Newhilights;
