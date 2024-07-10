import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import PageTitle from "../Global/Pagetitle";
import { useTheme } from "@emotion/react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import h1 from "../../src/assets/image/newshilights/h1.png";

function SocialInitiatives() {
  const theme = useTheme();

  const options = {
loop: true,
      margin: 10,
      dots: true,
      responsiveClass: true,
      nav: false,
      smartSpeed: 1000,
      autoplay: true,
      autoplaySpeed: 3000,
      slideTransition: 'linear',
      responsive: {
        0: { items: 1 },
        600: { items: 1 },
        1000: { items: 1 },
      },
  };
  return (
    <>
      <Box py={{mt:4}}>
        <PageTitle title={`Social Initiatives`} />

        <Typography
          variant="h4"
          color="text.primary"
          sx={{
            textAlign: { xs: "center" },
            fontWeight: "600",
            my: 5,
          }}
        >
          Social Initiatives
        </Typography>

        <Box
          px={{ xs: "2rem", sm: "4rem", md: "4rem", lg: "4rem", xl: "12rem" }}
        >
          <Box
            sx={{
              boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
              backgroundColor: "#FAFAFA",
              p: 4,
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontWeight: "600",
                  maxWidth: "600px",
                  textAlign: "center",
                  margin: "auto",
                  my: 2,
                  fontSize: "16px",
                  color: theme.palette.primary.main,
                }}
              >
                Fostering Change: Social Initiatives Transforming Communities
              </Typography>
              <Typography
                sx={{
                  maxWidth: "800px",
                  textAlign: "center",
                  margin: "auto",
                  fontSize: "14px",
                  my: 2,

                  color: theme.palette.darkGray,
                }}
              >
                Social initiatives are purpose-driven endeavors that seek to
                address societal issues, champion positive change, and enhance
                the well-being of communities. These initiatives encompass a
                wide spectrum of efforts, from grassroots movements to
                large-scale projects initiated by organizations or governments.
                Their core focus is to tackle social, environmental, or economic
                challenges by engaging communities, creating awareness, and
                implementing sustainable solutions.
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box
          px={{ xs: "2rem", sm: "4rem", md: "4rem", lg: "4rem", xl: "12rem" }}
          sx={{py:10}}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={12} lg={7} xl={4}>
              <OwlCarousel className="owl-theme sensitivies-slider" {...options}>
                <Box className="item">
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
                        background: theme.palette.primary.main,
                        position: "relative",
                      }}
                    >
                      <img src={h1} alt="newhilights" className="nehilghts" />
                      <Box
                        sx={{
                          borderTopRightRadius: "25px",
                          borderBottomLeftRadius: "25px",
                          color: theme.palette.common.white,
                          fontWeight: "500",
                          background: theme.palette.primary.main,
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
                </Box>
                <Box className="item">
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
                        background: theme.palette.primary.main,
                        position: "relative",
                      }}
                    >
                      <img src={h1} alt="newhilights" className="nehilghts" />
                      <Box
                        sx={{
                          borderTopRightRadius: "25px",
                          borderBottomLeftRadius: "25px",
                          color: theme.palette.common.white,
                          fontWeight: "500",
                          background: theme.palette.primary.main,
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
                </Box>
              </OwlCarousel>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={7} xl={6}>
              <Box>
                <Typography
                  variant="h5"
                  sx={{
                    color: theme.palette.text.primary,
                    mb: 3,
                    fontWeight: 600,
                  }}
                >
                  Labour Day Celebration
                </Typography>
                <Typography
                  sx={{
                    background: theme.palette.primary.main,
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    fontWeight: 600,
                    mb: 3,
                  }}
                >
                  Sessions Are Concluded With Distribution Of Sweets To The
                  Workers. Needless To Say A Healthy And A Strong Workforce
                  Ensures A Healthy Growth For The Organization.
                </Typography>
                <Typography variant="body1" sx={{ fontSize: "14px" }}>
                  Workforce is what makes a difference to a company. And there
                  can be no better day to celebrate the spirit of workmanship
                  than the Labour Day itself. At Rajhans (Desai-Jain) Group, we
                  understand the importance of our workforce. Thus we conduct
                  sessions every year on “General Awareness Training on Health &
                  Safety”. The session enables the staff and the workers at our
                  various construction sites to gain knowledge on health and
                  safety. Construction being a rapidly growing industry in the
                  nation, demands a healthy and a competent workforce on a large
                  scale. This session adds impetus to the construction workers
                  as it highlights the benefits of health and safety. A safe
                  work environment in construction is essential and required by
                  the Occupational and Health Safety Administration (OSHA).
                  Making workers aware of the hazards, safety procedures and
                  accident prevention can help to reduce injuries amongst the
                  workers. Training supports employees by providing....
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}

export default SocialInitiatives;
