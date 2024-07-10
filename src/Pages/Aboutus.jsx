import { useTheme } from "@emotion/react";
import { Box, Card, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import PageTitle from "../Global/Pagetitle";
import about from "../../src/assets/image/about/about.png";
import vendor from "../../src/assets/image/vendor.png";

import VisibilityIcon from "@mui/icons-material/Visibility";
import Trustedgropup from "../Global/Trustedgropup";

function Aboutus() {
  const theme = useTheme();

  const items = [
    {
      icon: (
        <VisibilityIcon
          sx={{
            width: "30px",
            height: "30px",
            color: theme.palette.whitw,
          }}
        />
      ),
      title:
        "Timely Excellence: Our mission is to deliver quality structures on time, adhering to prevailing global standards, ensuring that each project meets or exceeds the expectations of our clients.",
    },
    {
      icon: (
        <VisibilityIcon
          sx={{
            width: "30px",
            height: "30px",
            color: theme.palette.white,
          }}
        />
      ),
      title:
        "Timely Excellence: Our mission is to deliver quality structures on time, adhering to prevailing global standards, ensuring that each project meets or exceeds the expectations of our clients.",
    },
    {
      icon: (
        <VisibilityIcon
          sx={{
            width: "30px",
            height: "30px",
            color: theme.palette.white,
          }}
        />
      ),
      title:
        "Timely Excellence: Our mission is to deliver quality structures on time, adhering to prevailing global standards, ensuring that each project meets or exceeds the expectations of our clients.",
    },
  ];
  return (
    <>
      <PageTitle title={`About us`} />
      <Box sx={{ py: 4 }}>
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
          About us
        </Typography>

        <Box
          columnGap={3}
          px={{ xs: "2rem", sm: "4rem", md: "4rem", lg: "6rem", xl: "20rem" }}
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
              <Box sx={{ px: 2 }}>
                <Typography
                  sx={{
                    fontSize: { zs: "30px", md: "35px", lg: "40px" },
                    color: theme.palette.black.main,
                    mb: 1,
                    fontWeight: 500,
                  }}
                >
                  About Dwarkesh Group
                </Typography>
                <Typography
                  sx={{
                    fontSize: { zs: "30px", md: "35px", lg: "30px" },
                    color: theme.palette.primary.main,
                    mb: 3,
                    fontWeight: 500,
                  }}
                >
                  About Dwarkesh Group
                </Typography>

                <Typography
                  sx={{ fontSize: "14px", lineHeight: "24px", pb: 1 }}
                >
                  Everyone has a dream world of their own that makes them happy.
                  For some, it’s a home sweet home, where they can live their
                  dreams. For others, it’s commercial space that fulfils their
                  business aspirations. At Rajhans Realty, we transform dreams
                  into reality by constructing new landmarks in residential,
                  commercial, leisure, industrial, and logistics categories.
                </Typography>
                <Typography
                  sx={{ fontSize: "14px", lineHeight: "24px", pb: 1 }}
                >
                  Within 10 years of starting operations, we have transformed
                  Gujarat’s skyline and have become one of the most trusted
                  builders in Gujarat and Maharashtra. In years to come, the
                  group is poised to enter states such as Haryana, Karnataka,
                  Delhi, Punjab, Madhya Pradesh, and Rajasthan. Rajhans Realty
                  is therefore committed to spreading its wings of happiness
                  nationally. At Rajhans Realty, our commitment extends beyond
                  borders as we strive to spread the wings of happiness
                  nationwide. Join us on the journey to transform your dreams
                  into a vibrant reality. Rajhans Realty stands firm in its
                  dedication and unwavering commitment to quality, earning a
                  plethora of prestigious accolades. Notable among these
                  achievements is the CREDAI Award in 2012 for the 'Best
                  Residential Apartment Lifestyle Non Metro' category and the
                  CNBC AWAAZ Real Estate Award in 2013 for the 'Best Fully
                  Completed Luxury Residential Project from Surat City.'
                </Typography>
                <Typography
                  sx={{ fontSize: "14px", lineHeight: "24px", pb: 1 }}
                >
                  Expanding on our list of honours, the group has reached
                  significant milestones with awards from Brands Academy
                  (2014–15). These include titles such as the 'Fastest Growing
                  Real Estate Developer of the Year' (Gujarat) and, for our
                  project Rajhans Elita, the distinction of 'Real Estate
                  Developer of the Year' (Luxury Housing). In the commercial
                  sector, Rajhans Ornate was recognised as the 'Best Commercial
                  Project of the Year.' Our footprint in the industry speaks
                  volumes about the excellence and impact that define Rajhans
                  Realty.
                </Typography>
              </Box>
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
                    src={about}
                    alt="sustain-image"
                    className="sustain-image"
                  />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>

      <Trustedgropup />

      <Box px={{ xs: "2rem", sm: "4rem", md: "6rem", xl: "18rem" }}>
        <Grid
          container
          spacing={6}
          row
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            height: "100%",
            py: 10,
          }}
        >
          <Grid item xs={12} md={12} lg={6} xl={6}>
            <Box
              px={{
                xs: "2rem",
                sm: "4rem",
                md: "1rem",
                lg: "2rem",
                xl: "2rem",
              }}
              sx={{
                position: "relative",
                width: "100%",
                backgroundImage: `url(${vendor})`,
                backgroundSize: "cover",
                borderRadius: "30px",
                backgroundPosition: "center",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  right: 0,
                  bottom: 0,
                  left: 0,
                  backgroundColor: "#A47816AD",
                  zIndex: 1,
                  borderRadius: "30px",
                },
                zIndex: 0,
              }}
            >
              <Box>
                <Box
                  sx={{
                    position: "relative",
                    zIndex: 3,
                    p: 2,
                    height: "600px",
                  }}
                >
                  <Typography
                    sx={{
                      color: theme.palette.white,
                      width: "180px",
                      pb: 3,
                      mb: 4,
                      fontSize: { sx: "20px", md: "25px", lg: "30px" },
                      borderBottom: "1px solid #fff",
                    }}
                  >
                    Our Vision
                  </Typography>
                  <Stack spacing={2}>
                    <Typography
                      sx={{
                        color: theme.palette.white,
                        lineHeight: "24px",
                        fontSize: "18px",
                      }}
                    >
                      To enrich people’s life with happiness by building high
                      quality residential, commercial, industrial, leisure and
                      logistics landmarks across India whilst adhering to the
                      most-advanced practices.
                    </Typography>
                  </Stack>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={12} lg={6} xl={6}>
            <Box
              px={{
                xs: "2rem",
                sm: "4rem",
                md: "1rem",
                lg: "2rem",
                xl: "2rem",
              }}
              sx={{
                position: "relative",
                width: "100%",
                backgroundImage: `url(${vendor})`,
                backgroundSize: "cover",
                borderRadius: "30px",
                backgroundPosition: "center",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  right: 0,
                  bottom: 0,
                  left: 0,
                  backgroundColor: "#A47816AD",
                  zIndex: 1,
                  borderRadius: "30px",
                },
                zIndex: 0,
              }}
            >
              <Box>
                <form>
                  <Box
                    sx={{
                      position: "relative",
                      zIndex: 3,
                      p: 2,
                      height: "600px",
                    }}
                  >
                    <Typography
                      sx={{
                        color: theme.palette.white,
                        width: "180px",
                        pb: 1,
                        mb: 4,
                        fontSize: { sx: "20px", md: "25px", lg: "30px" },
                        borderBottom: "1px solid #fff",
                      }}
                    >
                      Our Mission
                    </Typography>
                    <Stack spacing={2}>
                      {items.map(({ icon, title, description }, index) => (
                        <Box
                          key={index}
                          sx={{
                            pb: 2,
                            width: "100%",
                            background: "none",
                            alignItems: "center",
                            borderRadius: "10px",
                          }}
                        >
                          <Grid
                            conatainer
                            row
                            sx={{
                              display: "flex",
                              justifyContent: "flex-start",
                              alignItems: "center",
                            }}
                          >
                            <Grid sx={{ padding: "0 10px" }}>
                              <Box
                                sx={{
                                  color: "#fff",
                                }}
                              >
                                {icon}
                              </Box>
                            </Grid>
                            <Grid>
                              <Typography
                                color="text.primary"
                                variant="p"
                                sx={{ pb: 1, color: theme.palette.white }}
                              >
                                {title}
                              </Typography>
                            </Grid>
                          </Grid>
                        </Box>
                      ))}
                    </Stack>
                  </Box>
                </form>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Aboutus;
