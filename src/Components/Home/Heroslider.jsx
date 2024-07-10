import React from "react";
import {
  useTheme,
  Typography,
  Stack,
  Box,
  Container,
  Button,
} from "@mui/material";
import overlay from "../../assets/image/overlay.svg";
import recidency from "../../assets/image/recidential.png";

export default function Heroslider() {
  const theme = useTheme();

  return (
    <Box>
      <Box
        sx={{
          height: { xs: 600, md: 800 },
          py: { xs: 4, md: 10 },
          overflow: "hidden",
          position: "relative",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundImage: `url(${overlay}), url(https://i.postimg.cc/hjGq0DGf/pexels-pixabay-302769.jpg)`,
        }}
      >
        <Container>
          <Box
            sx={{
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              position: "absolute",
              textAlign: {
                xs: "center",
                md: "unset",
              },
            }}
          >
            <Typography
              variant="h5"
              sx={{
                color: theme.palette.primary.main,
                mb: 4,
                textAlign: "center",
                fontSize: { xs: "18px", md: "25px", lg: "30px" },
              }}
            >
              Dwarkesh Group
            </Typography>
            <Typography
              variant="h2"
              sx={{
                color: theme.palette.common.white,
                mb: 4,
                textAlign: "center",
                fontSize: { xs: "35px", md: "50px", lg: "50px" },
              }}
            >
              Live Your Luxury Life
            </Typography>

            <Stack
              spacing={2}
              display="flex"
              justifyContent="center"
              direction={{ xs: "column", md: "row" }}
              alignItems="center"
            >
              <Button
                variant="contained"
                sx={{
                  fontSize: "16px",
                  color: theme.palette.common.white,
                  px: 4,
                }}
              >
                Book Meeting
              </Button>
            </Stack>
          </Box>
        </Container>
      </Box>
      <div>
        <div className="residency-outer">
          <div className="container">
            <div className="residency-inner">
              <div className="item">
                <div className="inner-block">
                  <div className="logo">
                    <img src={recidency} alt="recidency" />
                  </div>
                </div>
                <div className="text">
                  <div>Residential</div>
                  <i class="fas fa-long-arrow-alt-right"></i>
                </div>
              </div>
              <div className="item">
                <div className="inner-block">
                  <div className="logo">
                    <img src={recidency} alt="recidency" />
                  </div>
                </div>
                <div className="text">
                  <div>Residential</div>
                  <i class="fas fa-long-arrow-alt-right"></i>
                </div>
              </div>
              <div className="item">
                <div className="inner-block">
                  <div className="logo">
                    <img src={recidency} alt="recidency" />
                  </div>
                </div>
                <div className="text">
                  <div>Residential</div>
                  <i class="fas fa-long-arrow-alt-right"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
}
