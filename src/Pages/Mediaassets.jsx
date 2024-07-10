import { useTheme } from "@emotion/react";
import { Box, Container, Typography } from "@mui/material";
import React from "react";
import m1 from "../assets/image/media/m1.png";
import PageTitle from "../Global/Pagetitle";
import DateRangeIcon from "@mui/icons-material/DateRange";
import GetAppIcon from "@mui/icons-material/GetApp";

const awardsData = [
  {
    title: "Corporate Brochure",
    image: m1,
    icon: "17 Jan, 2024 : Dainik bhaskar",
  },
  {
    title: "Rajhans Realty Profile",
    image: m1,
    icon: "17 Jan, 2024 : Dainik bhaskar",
  },
  {
    title: "Rajhans Realty Profile",
    image: m1,
    icon: "17 Jan, 2024 : Dainik bhaskar",
  },
];

function Mediaassets() {
  const theme = useTheme();

  return (
    <>
      <PageTitle title={`Media Assets`} />
      <Box sx={{ pt: 15 }}>
        <Typography
          component="h2"
          variant="h4"
          color="text.primary"
          sx={{
            textAlign: "center",
            fontWeight: "600",
            mb: 4,
          }}
        >
          Media Assets
        </Typography>
        <Typography
          color="text.primary"
          sx={{
            width: { sm: "100%", md: "35%" },
            textAlign: { xs: "center" },
            fontWeight: "600",
            fontSize: "14px",
            margin: "auto",
            coloe: theme.palette.footerGray,
          }}
        >
          Explore Rajhans Group's digital transformation in media from print to
          digital. Join our journey, where we share compelling stories,
          achievements, and industry insights.
        </Typography>
        <Container sx={{ py: 8 }}>
          <Box
            columnGap={2}
            rowGap={3}
            display="grid"
            gridTemplateColumns={{
              xs: "repeat(1, 1fr)",
              sm: "repeat(2, 1fr)",
              md: "repeat(2, 1fr)",
              lg: "repeat(3, 1fr)",
            }}
            justifyContent="center" 
            alignItems="center"
          >
            {awardsData.map((award, index) => (
              <Box
                key={index}
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
                  sx={{
                    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
                    backgroundColor: "#fff",
                    borderTopRightRadius: "50px",
                    p: 1,
                    borderBottomLeftRadius: "50px",
                  }}
                >
                  <Box className="media-image">
                    <img
                      src={award.image}
                      alt="Award-Image"
                      style={{
                        width: "100%",
                        height: "auto",
                        borderTopRightRadius: "50px",
                        borderBottomLeftRadius: "50px",
                      }}
                    />
                    <Box className="download-icon">
                      <GetAppIcon />
                    </Box>
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        fontSize: "18px",
                        textAlign: "center",
                        fontWeight: "400",
                        color: theme.palette.black.main,
                      }}
                      m={2}
                    >
                      {award.title}
                    </Typography>
                    <Typography
                      sx={{
                        margin: 0,
                        fontSize: "14px",
                        textAlign: "center",
                        fontWeight: "400",
                        color: theme.palette.black.main,
                        alignItems: "center",
                        display: "flex",
                        justifyContent: "end",
                      }}
                      m={2}
                    >
                      <DateRangeIcon
                        sx={{ color: theme.palette.secondary.main, mr: 1 }}
                      />
                      {award.icon}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default Mediaassets;
