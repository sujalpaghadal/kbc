import React from "react";
import PageTitle from "../Global/Pagetitle";
import { Box, Button, Grid, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import suatain from "../../src/assets/image/sustainabolity/sustain.png";

function Careers() {
  const theme = useTheme();

  return (
    <>
      <PageTitle title={`Careers`} />
      <Box sx={{ py: 4 }}>
        <Box
          px={{ xs: "2rem", sm: "4rem", md: "4rem", lg: "4rem", xl: "10rem" }}
        >
          <Grid container row spacing={2} sx={{ py: 4 }}>
            <Grid item xs={12} sm={12} md={12} lg={6} xl={8}>
              <Box sx={{ p: 4 }}>
                <Typography variant="h3" sx={{ mb: 2 }}>
                  Work with Rajhans Realty
                </Typography>
                <Typography
                  sx={{ mb: 4, display: "flex", justifyContent: "flex-start" }}
                >
                  <Typography variant="h4">SOAR WITH THE </Typography>
                  <Typography
                    variant="h4"
                    sx={{ color: theme.palette.primary.main, mb: 3 }}
                  >
                    WINGS OF HAPPINESS
                  </Typography>
                </Typography>
                <Typography sx={{ color: theme.palette.darkGrey }}>
                  Smart, determined, and go-getters form a part of our elite
                  workforce. We believe in ability over experience and follow an
                  equal employment policy. The dictionary defines culture as
                  "The totality of socially transmitted behaviour patterns,
                  arts, beliefs, institutions, and all other products of human
                  work and thought." While this definition is far-reaching, it
                  does give some clues as to the nature of an organisation's
                  culture. We define corporate culture as the assumptions,
                  values, beliefs, behaviours, practices, norms, and products of
                  an organisation.
                </Typography>
              </Box>
              <Box sx={{ p: 4 }}>
                <Typography
                  variant="h6"
                  sx={{ color: theme.palette.primary.main, mb: 3 }}
                >
                  We follow equity theory
                </Typography>
                <Typography sx={{ color: theme.palette.darkGrey }}>
                  Smart, determined, and go-getters form a part of our elite
                  workforce. We believe in ability over experience and follow an
                  equal employment policy. The dictionary defines culture as
                  "The totality of socially transmitted behaviour patterns,
                  arts, beliefs, institutions, and all other products of human
                  work and thought." While this definition is far-reaching, it
                  does give some clues as to the nature of an organisation's
                  culture. We define corporate culture as the assumptions,
                  values, beliefs, behaviours, practices, norms, and products of
                  an organisation.
                </Typography>
              </Box>
              <Box sx={{ p: 4}}>
                <Typography
                  variant="h6"
                  sx={{ color: theme.palette.primary.main, mb: 3 }}
                >
                  Fun at Work Place
                </Typography>
                <Typography sx={{ color: theme.palette.darkGrey }}>
                  We celebrate employee birthdays by gifting bouquets of
                  flowers, inspiring books, & chocolates on behalf of the
                  organization. We celebrate all the festivals such as Holi,
                  Diwali, etc., with enthusiasm and joy every year by cutting
                  cake and distributing gifts & sweets, followed by a few words
                  from the top management. The Rajhans (Desai Jain) group
                  observes holidays on these festivals.
                </Typography>
              </Box>
              <Box sx={{ p: 4 }}>
                <Typography
                  variant="h6"
                  sx={{ color: theme.palette.primary.main, mb: 3 }}
                >
                  Training & Development
                </Typography>
                <Typography sx={{ color: theme.palette.darkGrey }}>
                  Indian organisations have realised the importance of corporate
                  training, which is now considered more of a retention tool
                  than a cost. The training system in the Indian industry has
                  undergone a change and has been instrumental in creating a
                  smarter workforce and yielding the best results. Generally, we
                  conduct behavioural and soft skills-related training
                  programmes, which go a long way in shaping up an employee to
                  produce key results in this competitive corporate world.
                  Following which, we take valuable feedback and suggestions
                  from our employees and management. This leads to the
                  successful completion of the training programme.
                </Typography>
              </Box>
              <Box>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    color: theme.palette.white,
                    width: "150px",
                    p: 2,
                    borderRadius: "50px",
                  }}
                >
                  Apply
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={6} xl={4}>
              <Box
                sx={{
                  minHeight: "280px",
                  width: 320,
                  my: 10,
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
                    my: 10,
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

export default Careers;
