import { useTheme } from "@emotion/react";
import { Box, Container, Typography } from "@mui/material";
import React from "react";
import a1 from "../assets/image/award/a1.png";
import PageTitle from "../Global/Pagetitle";

const awardsData = [
  {
    title: "Credai Awards",
    image: a1,
  },
  {
    title: "Real Estate Developer of the Year [Surat]",
    image: a1,
  },
  {
    title: "UNEP Certificate",
    image: a1,
  },
];

function Awards() {
  const theme = useTheme();

  return (
    <>
      <PageTitle title={`Awards`} />
      <Box sx={{ pt: 15 }}>
        <Typography
          component="h2"
          variant="h4"
          color="text.primary"
          sx={{
            width: { sm: "100%", md: "60%" },
            textAlign: { xs: "center" },
            fontWeight: "600",
            margin: "auto",
          }}
        >
          Awards
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
                    background:
                      "linear-gradient(180deg, rgba(203, 171, 103, 1) 0%, rgba(181, 126, 10, 1) 100%)",
                    backgroundColor: "#fff",
                    borderTopRightRadius: "50px",
                    p: 1,
                    borderBottomLeftRadius: "50px",
                  }}
                >
                  <Box>
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
                  </Box>
                  <Box>
                    <Typography
                      variant="h2"
                      sx={{
                        fontSize: "18px",
                        fontWeight: "400",
                        color: theme.palette.white,
                        textAlign: "center",
                      }}
                      m={2}
                    >
                      {award.title}
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

export default Awards;
