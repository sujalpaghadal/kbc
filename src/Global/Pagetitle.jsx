import { Box, Typography, Breadcrumbs, Link as MuiLink } from "@mui/material";
import React from "react";
import PropTypes from "prop-types";
import image from "../../src/assets/image/pagetitle.png";
import { useTheme } from "@emotion/react";
import { Link as RouterLink } from "react-router-dom";

const PageTitle = ({ title }) => {
  const theme = useTheme();

  return (
    <Box>
      <Box
        sx={{
          height: { xs: 400, md: 500 },
          py: { xs: 4, md: 10 },
          overflow: "hidden",
          position: "relative",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundImage: `url(${image})`,
        }}
      >
        <Box
          sx={{
            left: "50%",
            bottom: "10%",
            transform: "translate(-50%, 10%)",
            position: "absolute",
            textAlign: {
              xs: "center",
              md: "unset",
            },
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: "600",
              color: "#fff",
              textAlign: "center",
            }}
          >
            {title}
          </Typography>
          <Breadcrumbs
            sx={{
              justifyContent: "center",
              display: "flex",
              p: 2,
              borderRadius: "8px",
              color: "#fff",
              fontSize: { lg: "20px", md: "16px", sm: "14px" },
            }}
            separator=" / "
          >
            <MuiLink
              component={RouterLink}
              to="/"
              style={{ color: "#fff", textDecoration: "none" }}
            >
              Home
            </MuiLink>
            <Typography
              variant="h5"
              sx={{
                background: theme.palette.primary.gradient,
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontWeight: 600,
              }}
            >
              {title}
            </Typography>
          </Breadcrumbs>
        </Box>
      </Box>
    </Box>
  );
};

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
};

export default PageTitle;
