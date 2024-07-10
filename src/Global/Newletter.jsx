import { useTheme } from "@emotion/react";
import { Box, Container, Typography } from "@mui/material";
import React from "react";

function Newletter() {
  const theme = useTheme();

  return (
    <>
      <Container>
        <Box
          sx={{
            pb: { xs: 2, md: 4,xl:5 },
            pt: { xs: 2, md: 4,xl:5 },
            pl: { xs: 2, md: 2,xl:1 },
            pr: { xs: 2, md: 2,xl:1 },
            background: theme.palette.newsletter.gradient,
            fontWeight: 600,
            borderRadius:'40px'
          }}
        >
          <Typography
            sx={{
              mb: { xs: 2, lg: 4 },
              fontSize: { xs: "18px", md: "30px", lg: "45px" },
              textAlign: "center",
              fontWeight: "500",
              color: theme.palette.white,
            }}
          >
            Newsletter
          </Typography>
          <Typography
            sx={{
              color: theme.palette.white,
              textAlign: "center",
              mb:2
            }}
          >
            Subscribe us& get Update to your inbox
          </Typography>
          <form method="post">
            <div className="news-form">
              <input
                type="email"
                placeholder="Your Email ID"
                name="email"
                id="email"
                className="newsform"
              />
              <input type="submit" value="Subscribe" className="news-submit"/>
            </div>
          </form>
        </Box>
      </Container>
    </>
  );
}

export default Newletter;
