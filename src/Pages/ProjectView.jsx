import {
  Box,
  Button,
  Card,
  CardActionArea,
  Container,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useRef } from "react";
import { useParams } from "react-router-dom";
import indrustrial from "../../src/assets/image/indrustrial/indrustial.png";
import PageTitle from "../Global/Pagetitle";
import "../../node_modules/swiper/swiper-bundle.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import B1 from "../../src/assets/image/Rectangle33.png";

function ProjectView() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  const projects = [
    {
      id: 1,
      title: "Karunesh Luxuria",
      description: "2 BHK Fabulous Living",
      location: "Gujarat - Surat",
      img: indrustrial,
      category: "Commercial",
    },
    {
      id: 2,
      title: "Greenwood Residency",
      description: "3 BHK Spacious Living",
      location: "Gujarat - Ahmedabad",
      img: indrustrial,
      category: "Residential",
    },
    {
      id: 3,
      title: "Skyline Heights",
      description: "4 BHK Luxury Apartments",
      location: "Maharashtra - Mumbai",
      img: indrustrial,
      category: "Commercial",
    },
  ];

  const { projectId } = useParams();
  const project = projects.find((p) => p.id.toString() === projectId);
  const swiperRef = useRef(null);

  if (!project) {
    return <Typography variant="h6">Project not found</Typography>;
  }

  const sliderData = [B1, B1, B1, B1, B1, B1, B1, B1, B1, B1];

  return (
    <>
      <PageTitle title={project?.title} />
      <Box
        sx={{
          backgroundColor: theme.palette.backgroundLiteGrey,
          padding: isMobile ? "40px 0px" : "80px 0px",
        }}
      >
        <Container maxWidth="lg">
          <Box>
            <Grid container display={"flex"} justifyContent={"center"}>
              <Grid item md={6} xs={12}>
                <Typography
                  sx={{
                    fontSize: "18px",
                    fontWeight: "800",
                    lineHeight: "22.5px",
                    color: "#CBAB67",
                  }}
                >
                  {"<< "}
                  Back to Projects
                </Typography>
                <Typography
                  mt={2}
                  sx={{
                    fontSize: isMobile ? "28px" : "38px",
                    fontWeight: "700",
                    lineHeight: isMobile ? "35px" : "47.5px",
                    color: "black",
                  }}
                >
                  Project Overview
                </Typography>
                <Typography
                  sx={{
                    fontSize: "12px",
                    fontWeight: "600",
                    lineHeight: "18px",
                  }}
                  mt={1.5}
                >
                  {project.description} at {project.location}. These apartments
                  offer a unique and peaceful living experience. With a grand
                  entrance and serene waterbody, {project.title} exudes elegance
                  and charm. It offers a range of excellent amenities to make
                  life more cheerful and jubilant.
                </Typography>
              </Grid>
              <Grid
                item
                md={6}
                xs={12}
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Box display="flex" alignItems="center" flexWrap="wrap">
                  <Box mx={1.5} py={2}>
                    <Button
                      type="submit"
                      variant="contained"
                      sx={{
                        background: theme.palette.primary.gradient,
                        color: theme.palette.white,
                        fontWeight: 500,
                        p: 2,
                        width: isMobile ? "150px" : "200px",
                        textTransform: "capitalize",
                        borderRadius: "50px",
                        fontSize: isMobile ? "16px" : "18px",
                      }}
                    >
                      Download Brochure
                    </Button>
                  </Box>
                  <Box mx={1.5} py={2}>
                    <Button
                      type="submit"
                      variant="contained"
                      sx={{
                        background: theme.palette.primary.gradient,
                        color: theme.palette.white,
                        fontWeight: 500,
                        p: 2,
                        width: isMobile ? "150px" : "200px",
                        textTransform: "capitalize",
                        borderRadius: "50px",
                        fontSize: isMobile ? "16px" : "18px",
                      }}
                    >
                      Share Project
                    </Button>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
      <Box m={isMobile ? "30px 0px" : "60px 0px"}>
        <Container>
          <Box display="flex" justifyContent="center" my={5}>
            <Typography
              sx={{
                fontSize: isMobile ? "28px" : "38px",
                fontWeight: "700",
                lineHeight: isMobile ? "35px" : "47.5px",
              }}
            >
              Floor Plans
            </Typography>
          </Box>
          <Box display="flex" justifyContent="center" my={5}>
            <Box display="flex" alignItems="center" flexWrap="wrap">
              <Box mx={1.5} py={2}>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    background: theme.palette.primary.gradient,
                    color: theme.palette.white,
                    fontWeight: 500,
                    p: 2,
                    width: isMobile ? "150px" : "200px",
                    textTransform: "capitalize",
                    borderRadius: "50px",
                    fontSize: isMobile ? "16px" : "18px",
                  }}
                >
                  Download all Plans
                </Button>
              </Box>
            </Box>
          </Box>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Card
                sx={{ maxWidth: 345, borderRadius: "10px", margin: "auto" }}
              >
                <CardActionArea>
                  <Box position="relative">
                    <img
                      height="300"
                      src={project.img}
                      alt={project.title}
                      style={{ width: "100%", objectFit: "cover" }}
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
                      Layout Plan
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
                    Layout Plans
                  </Typography>
                </Box>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card
                sx={{ maxWidth: 345, borderRadius: "10px", margin: "auto" }}
              >
                <CardActionArea>
                  <Box position="relative">
                    <img
                      height="300"
                      src={project.img}
                      alt={project.title}
                      style={{ width: "100%", objectFit: "cover" }}
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
                      Typical Layout
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
                    2 BHK Typical Layout
                  </Typography>
                </Box>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card
                sx={{ maxWidth: 345, borderRadius: "10px", margin: "auto" }}
              >
                <CardActionArea>
                  <Box position="relative">
                    <img
                      height="300"
                      src={project.img}
                      alt={project.title}
                      style={{ width: "100%", objectFit: "cover" }}
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
                      Typical Layout
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
                    3 BHK Typical Layout
                  </Typography>
                </Box>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box
        m={isMobile ? "30px 0px" : "60px 0px"}
        sx={{ backgroundColor: "#CBAB67" }}
      >
        <Container maxWidth="lg">
          <Box height={"500px"}>
            <Box
              sx={{ padding: isMobile ? "20px 0px" : "40px 0px" }}
              textAlign={"center"}
            >
              <Typography
                sx={{
                  fontSize: isMobile ? "28px" : "38px",
                  fontWeight: "700",
                  color: "white",
                }}
              >
                Project Gallery
              </Typography>
            </Box>
            <Box>
              <Swiper
                ref={swiperRef}
                modules={[Pagination, Autoplay]}
                navigation={{
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                }}
                slidesPerGroup={isMobile ? 1 : 6}
                pagination={false}
                loop={true}
                spaceBetween={50}
                autoplay={{
                  delay: 3000,
                }}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                  },
                  640: {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                  },
                  1024: {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                  },
                }}
              >
                {sliderData.map((item, index) => (
                  <SwiperSlide
                    key={index}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Box height={isMobile ? "300px" : "600px"}>
                      <img
                        src={item}
                        alt="companies"
                        style={{
                          height: "100%",
                          width: "100%",
                          objectFit: "contain",
                        }}
                      />
                    </Box>
                  </SwiperSlide>
                ))}
              </Swiper>
            </Box>
          </Box>
        </Container>
      </Box>
      <Box m={isMobile ? "50px 0px 30px 0px" : "300px 0px 60px 0px"}>
        <Container>
          <Box sx={{ p: 2, my: 4 }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119008.9850833956!2d72.7756923404273!3d21.230627848975356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04d5d6c001a3f%3A0x5ef17a12042c5a63!2sKarunesh%20Homes!5e0!3m2!1sen!2sin!4v1719644523573!5m2!1sen!2sin"
              width="100%"
              height={isMobile ? 300 : 450}
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="karunesh-map"
            />
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default ProjectView;
