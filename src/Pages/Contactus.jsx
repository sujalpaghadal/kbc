import { useTheme } from "@emotion/react";
import { Box, Button, Card, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import PageTitle from "../Global/Pagetitle";
import vendor from "../../src/assets/image/vendor.png";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";
import LocationOnIcon from "@mui/icons-material/LocationOn";

function Contactus() {
  const theme = useTheme();
  const items = [
    {
      icon: (
        <MailIcon
          sx={{
            width: "40px",
            height: "40px",
            color: theme.palette.primary.main,
          }}
        />
      ),
      title: "Mail Here",
      description: "jbsit01@gmail.com.",
    },
    {
      icon: (
        <LocationOnIcon
          sx={{
            width: "40px",
            height: "40px",
            color: theme.palette.primary.main,
          }}
        />
      ),
      title: "Mobile integration",
      description:
        "F-38 City center, Yogi Chowk, Varachha, Surat, Gujarat 395010",
    },
    {
      icon: (
        <PhoneIcon
          sx={{
            width: "40px",
            height: "40px",
            color: theme.palette.primary.main,
          }}
        />
      ),
      title: "Available on all platforms",
      description: "+91 261 2961100/2961101",
    },
  ];

  return (
    <>
      <PageTitle title={`Contact Us`} />
      <Box sx={{ py: 4 }}>
        <Typography
          sx={{
            mb: { xs: 2, lg: 4 },
            fontSize: { xs: "18px", md: "30px", lg: "45px" },
            textAlign: "center",
            fontWeight: "500",
            color: theme.palette.black.main,
          }}
        >
          Conatact Us
        </Typography>
        <Box
          sx={{ py: 10 }}
          px={{ xs: "2rem", sm: "4rem", md: "1rem", lg: "2rem", xl: "18rem" }}
        >
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
                        Let us know if you need any information or have any
                        queries by using the form below.
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
                          <input
                            type="Sujectline"
                            name="Sujectline"
                            id="Sujectline"
                            placeholder="Subject Line *"
                            className="vender-form"
                          />
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
                            variant="contained"
                            sx={{
                              color: theme.palette.white,
                              width: "120px",
                              p: 2,
                              borderRadius: "50px",
                            }}
                          >
                            Submit
                          </Button>
                        </Grid>
                      </Stack>
                    </Box>
                  </form>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={12} lg={6} xl={6}>
              <Stack
                spacing={2}
                sx={{
                  width: "100%",
                  height: "100%",
                  display: {
                    sm: "flex",
                  },
                  justifyContent: "space-evenly",
                }}
              >
                {items.map(({ icon, title, description }, index) => (
                  <Card
                    key={index}
                    variant="outlined"
                    sx={{
                      p: 2,
                      height: "fit-content",
                      width: "100%",
                      background: "none",
                      alignItems: "center",
                      borderRadius: "10px",
                      boxShadow: "rgba(0, 0, 0, 0.09) 0px 3px 12px",
                    }}
                  >
                    <Grid
                      conatainer
                      row
                      sx={{
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "center",
                      }}
                    >
                      <Grid item sx={{ padding: "0 10px" }}>
                        <Box
                          sx={{
                            width: "90px",
                            height: "90px",
                            lineHeight: "100px",
                            textAlign: "center",
                            background: "#F9F9F9",
                            borderTopRightRadius: "20px",
                            borderBottomLeftRadius: "20px",
                          }}
                        >
                          {icon}
                        </Box>
                      </Grid>
                      <Grid item>
                        <Typography
                          color="text.primary"
                          variant="h6"
                          sx={{ pb: 1 }}
                          fontWeight="bold"
                        >
                          {title}
                        </Typography>
                        <Typography color="text.secondary" variant="p">
                          {description}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Card>
                ))}
              </Stack>
            </Grid>
          </Grid>
          <Box sx={{ boxShadow: 2, p: 2 ,my:4}}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119008.9850833956!2d72.7756923404273!3d21.230627848975356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04d5d6c001a3f%3A0x5ef17a12042c5a63!2sKarunesh%20Homes!5e0!3m2!1sen!2sin!4v1719644523573!5m2!1sen!2sin"
              width={`100%`}
              height={450}
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="karunesh-map"
            />
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Contactus;
