import React from "react";
import PageTitle from "../Global/Pagetitle";
import { Box, Stack, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import brand from "../../src/assets/image/brand/brand.png";

const ambassadors = [
  {
    name: "Rohit Sharma",
    role: "Brand Ambassador, Real Estate (2013-14)",
    quote: "I have donned many colours, for my country, my IPL team and my state. Each has been an honour. I am proud to now be a part of Rajhans Group to wear the many colours of happiness. A company that is changing skylines & creating landmarks. I look forward to a great innings and a record breaking partnership.",
    image: brand,
  },
  {
    name: "John Doe",
    role: "Brand Ambassador, Technology (2015-16)",
    quote: "Working with Rajhans Group has been an incredible journey. They are leaders in innovation and community development. Proud to be associated with such a dynamic team.",
    image: brand,
  },
  // Add more ambassadors as needed
];

function Brandambassadors() {
  const theme = useTheme();
  return (
    <>
      <PageTitle title={`Brand Ambassadors`} />
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
          Words From Our
        </Typography>
        <Typography
          variant="h4"
          sx={{
            background: theme.palette.primary.gradient,
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            textAlign: "center",
            WebkitTextFillColor: "transparent",
            fontWeight: 600,
          }}
        >
          Then Brand Ambassadors
        </Typography>

        <Box
          px={{ xs: "2rem", sm: "4rem", md: "1rem", lg: "2rem", xl: "18rem" }}
        >
          <Stack spacing={3} sx={{ p: 5 }}>
            <Box
              columnGap={2}
              rowGap={3}
              display="grid"
              gridTemplateColumns={{
                xs: "repeat(1, 1fr)",
                md: "repeat(2, 2fr)",
              }}
            >
              {ambassadors.map((ambassador, index) => (
                <Box
                  key={index}
                  sx={{
                    textAlign: "center",
                    p: 4,
                    boxShadow: "1",
                    borderBottom: "4px solid #CBAB67",
                    borderBottomLeftRadius: "10px",
                    borderBottomRightRadius: "10px",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "25px",
                      color: theme.palette.black.main,
                      fontWeight: 600,
                      mb: 1,
                    }}
                  >
                    {ambassador.name}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "18px",
                      background: theme.palette.primary.gradient,
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      fontWeight: 600,
                      mb: 3,
                    }}
                  >
                    {ambassador.role}
                  </Typography>
                  <Box
                    className="item"
                    sx={{ justifyContent: "center", display: "flex" }}
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
                        variant="outlined"
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
                          sx={{
                            boxShadow:
                              "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
                            backgroundColor: "#fff",
                            borderTopRightRadius: "50px",
                            borderBottomLeftRadius: "50px",
                            width: "100%",
                            p: 1,
                          }}
                        >
                          <Box className="media-image">
                            <img
                              src={ambassador.image}
                              alt="Award-Image"
                              style={{
                                width: "100%",
                                height: "auto",
                                borderTopRightRadius: "50px",
                                borderBottomLeftRadius: "50px",
                              }}
                            />
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                  <Typography
                    sx={{
                      color: theme.palette.lightgrey,
                      fontSize: "14px",
                    }}
                  >
                    {ambassador.quote}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Stack>
        </Box>
      </Box>
    </>
  );
}

export default Brandambassadors;
