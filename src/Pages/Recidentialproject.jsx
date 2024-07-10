import React from "react";
import PageTitle from "../Global/Pagetitle";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import indrustrial from "../../src/assets/image/indrustrial/indrustial.png";
import { useTheme } from "@emotion/react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import vendor from "../../src/assets/image/vendor.png";
import { useNavigate } from "react-router-dom";

function Recidentialproject() {
  const theme = useTheme();

  // Dummy data
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
    {
      id: 4,
      title: "Skyline Heights",
      description: "4 BHHK Luxury Apartments",
      location: "Maharashtra - Mumbai",
      img: indrustrial,
      category: "Commercial",
    },
    {
      id: 5,
      title: "Greenwood Residency",
      description: "3 BHHK Spacious Living",
      location: "Gujarat - Ahmedabad",
      img: indrustrial,
      category: "Residential",
    },
    {
      id: 6,
      title: "Skyline Heights",
      description: "4 BHHK Luxury Apartments",
      location: "Maharashtra - Mumbai",
      img: indrustrial,
      category: "Commercial",
    },
  ];

  const navigate = useNavigate();

  const handleButtonClick = (projectId) => {
    navigate(`/projectview/${projectId}`);
  };

  return (
    <>
      <PageTitle title={`Recidential Project`} />
      <Box sx={{ py: 8 }}>
        <Box
          sx={{
            background: theme.palette.backgroundLiteGrey,
          }}
        >
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
            Recidential Project
          </Typography>

          <Box px={{ xs: "2rem", sm: "4rem", md: "6rem", xl: "18rem" }}>
            <Stack spacing={3} sx={{ pb: 14 }}>
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
                      sx={{
                        maxWidth: 345,
                        borderRadius: "10px",
                        margin: "auto",
                      }}
                    >
                      <CardActionArea>
                        <Box
                          position="relative"
                          onClick={() => handleButtonClick(project?.id)}
                        >
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
              <Box>
                <Grid
                  item
                  xs={12}
                  md={8}
                  py={2}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{
                      background: theme.palette.primary.gradient,
                      color: theme.palette.white,
                      fontWeight: 500,
                      p: 2,
                      width: "200px",
                      textTransform: "capitalize",
                      borderRadius: "50px",
                      mr: 2,
                      mt: 2,
                      fontSize: "18px",
                    }}
                  >
                    Show More Project
                  </Button>
                </Grid>
              </Box>
            </Stack>
          </Box>
        </Box>
        <Box px={{ xs: "2rem", sm: "4rem", md: "6rem", xl: "18rem" }}>
          <Grid
            container
            spacing={6}
            row
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              height: "100%",
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
                    backgroundColor: "rgba(0, 0, 0, 0.8)",
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
                          pb: 3,
                          fontSize: { sx: "20px", md: "25px", lg: "30px" },
                        }}
                      >
                        Show Your Interest
                      </Typography>
                      <Typography
                        sx={{
                          color: theme.palette.primary.main,
                          fontWeight: 600,
                          pb: 3,
                        }}
                      >
                        Provide your details below to submit your interest.
                      </Typography>
                      <Stack spacing={2}>
                        <Box
                          columnGap={2}
                          rowGap={3}
                          display="grid"
                          gridTemplateColumns={{
                            xs: "repeat(1, 1fr)",
                            md: "repeat(2, 1fr)",
                          }}
                        >
                          <Box>
                            <input
                              type="text"
                              name="Fullname"
                              placeholder="Fullname"
                              id="Fullname"
                              className="vender-form"
                            />
                          </Box>
                          <Box>
                            <input
                              type="text"
                              name="lastname"
                              placeholder="Last Name"
                              id="lastname"
                              className="vender-form"
                            />
                          </Box>

                          <Box>
                            <input
                              type="text"
                              name="contact"
                              id="contact"
                              placeholder="conatct *"
                              className="vender-form"
                            />
                          </Box>
                          <Box>
                            <input
                              type="text"
                              name="Emailid"
                              id="Emailid"
                              placeholder="Email ID *"
                              className="vender-form"
                            />
                          </Box>
                        </Box>
                        <Box
                          display="grid"
                          gridTemplateColumns={{
                            xs: "repeat(1, 1fr)",
                            md: "repeat(1, 1fr)",
                          }}
                        >
                          <textarea
                            name="message"
                            id="message"
                            row="10"
                            col="30"
                            placeholder="Your Message"
                            className="text-area"
                          ></textarea>
                        </Box>

                        <Grid
                          item
                          xs={12}
                          md={8}
                          sx={{
                            display: "flex-start",
                            alignItems: "center",
                            justifyContent: "end",
                          }}
                        >
                          <Button
                            type="submit"
                            sx={{
                              background: theme.palette.primary.gradient,
                              width: "150px",
                              p: 1,
                              borderRadius: "50px",
                              color: theme.palette.white,
                            }}
                          >
                            Submit Interest
                          </Button>
                        </Grid>
                      </Stack>
                    </Box>
                  </form>
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
                    backgroundColor: "rgba(0, 0, 0, 0.8)",
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
                          pb: 3,
                          fontSize: { sx: "20px", md: "25px", lg: "30px" },
                        }}
                      >
                        Send Inquiry
                      </Typography>
                      <Typography
                        sx={{
                          color: theme.palette.primary.main,
                          fontWeight: 600,
                          pb: 3,
                        }}
                      >
                        Residential Projects
                      </Typography>
                      <Stack spacing={2}>
                        <Typography
                          sx={{
                            color: theme.palette.white,
                            lineHeight: "24px",
                          }}
                        >
                          Pioneering a New Era in Luxurious Residential Living
                        </Typography>
                        <Typography
                          sx={{
                            color: theme.palette.white,
                            lineHeight: "24px",
                          }}
                        >
                          Dwarkesh Group, the epitome of luxury and comfort in
                          residential living, has established itself as an
                          industry leader. We have redefined the standard of
                          excellence by offering world-class amenities and
                          impeccable craftsmanship.
                        </Typography>
                        <Typography
                          sx={{
                            color: theme.palette.white,
                            lineHeight: "24px",
                          }}
                        >
                          With a strong emphasis on architectural brilliance,
                          each project at Dwarkesh Group embodies the essence of
                          a luxurious lifestyle. Our homes feature spacious
                          living spaces, top-notch security, and unparalleled
                          comforts.
                        </Typography>
                        <Box sx={{ pt: 5 }}>
                          <Button
                            sx={{
                              background: theme.palette.primary.gradient,
                              color: theme.palette.white,
                              fontWeight: 500,
                              p: 1,
                              textTransform: "capitalize",
                              borderRadius: "50px",
                              mr: 2,
                            }}
                          >
                            About Dwarkesh Group
                          </Button>
                          <Button
                            sx={{
                              background: "transparent",
                              border: "1px solid #CBAB67",
                              textTransform: "capitalize",
                              borderRadius: "50px",
                            }}
                          >
                            Contact Us
                          </Button>
                        </Box>
                      </Stack>
                    </Box>
                  </form>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}

export default Recidentialproject;
