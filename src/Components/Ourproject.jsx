import { useTheme } from "@emotion/react";
import { Box, Card, CardActionArea, Stack, Typography } from "@mui/material";
import React from "react";
import indrustrial from "../../src/assets/image/indrustrial/indrustial.png";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

function Ourproject() {
  const theme = useTheme();

  const projects = [
    {
      id: 1,
      title: "Karunesh Luxuria",
      description: "2 BHHK Fabulous Living",
      location: "Gujarat - Surat",
      img: indrustrial,
      category: "Commercial",
    },
    {
      id: 2,
      title: "Greenwood Residency",
      description: "3 BHHK Spacious Living",
      location: "Gujarat - Ahmedabad",
      img: indrustrial,
      category: "Residential",
    },
    {
      id: 3,
      title: "Skyline Heights",
      description: "4 BHHK Luxury Apartments",
      location: "Maharashtra - Mumbai",
      img: indrustrial,
      category: "Commercial",
    },
  ];

  return (
    <>
      <Box px={{ xs: "2rem", sm: "4rem", md: "6rem", xl: "18rem" }}>
        <Stack spacing={3} sx={{ pb: 14 }}>
          <Typography
            component="h2"
            color="text.primary"
            sx={{
              textAlign: "center",
              fontWeight: "600",
              mb: 2,
              fontSize: "12px",
            }}
          >
            Industrial Properties
          </Typography>
          <Typography
            component="h2"
            variant="h5"
            color="text.primary"
            sx={{
              textAlign: "center",
              fontWeight: "600",
              mb: 10,
            }}
          >
            Featured Projects
          </Typography>
          <Box
            columnGap={2}
            rowGap={3}
            display="grid"
            gridTemplateColumns={{
              xs: "repeat(1, 1fr)",
              md: "repeat(3, 3fr)",
            }}
          >
            {projects.map((project) => (
              <Box key={project.id}>
                <Card
                  sx={{ maxWidth: 345, borderRadius: "10px", margin: "auto" }}
                >
                  <CardActionArea>
                    <Box position="relative">
                      <img
                        component="img"
                        height="300"
                        src={project.img}
                        alt={project.title}
                      />
                      <Box
                        sx={{
                          position: "absolute",
                          left: 0,
                          bottom: 3,
                          padding: 2,
                          color: theme.palette.white,
                          borderRadius: "10px",
                          background: theme.palette.primary.gradient,
                          zIndex: 2,
                        }}
                      >
                        {project.category}
                      </Box>
                    </Box>
                  </CardActionArea>
                  <Box sx={{ p: 2 }}>
                    <Typography
                      gutterBottom
                      variant="body1"
                      component="div"
                      sx={{ fontWeight: "600" }}
                    >
                      {project.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {project.description}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      px: 2,
                      py: 1,
                      borderTop: "1px solid #e1e1e1",
                    }}
                  >
                    <Typography sx={{ color: theme.palette.primary.main }}>
                      {project.location}
                    </Typography>
                    <Box>
                      <ArrowRightAltIcon
                        sx={{
                          color: theme.palette.primary.main,
                          fontSize: "22px",
                        }}
                      />
                    </Box>
                  </Box>
                </Card>
              </Box>
            ))}
          </Box>
        </Stack>
      </Box>
    </>
  );
}

export default Ourproject;
