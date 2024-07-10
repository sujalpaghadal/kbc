import React from "react";
import PageTitle from "../Global/Pagetitle";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import vendor from "../../src/assets/image/vendor.png";
import { useTheme } from "@emotion/react";

function Registerforvendor() {
  const theme = useTheme();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
  };

  return (
    <>
      <PageTitle title={`Register for Vendor`} />

      <Container sx={{ py: 10 }}>
        <Box
          px={{ xs: "2rem", sm: "4rem", md: "1rem", lg: "2rem", xl: "4rem" }}
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
              backgroundColor: "rgba(0, 0, 0, 0.7)",
              zIndex: 1,
              borderRadius: "30px",
            },
            zIndex: 0,
          }}
        >
          <Box>
            <form onSubmit={handleSubmit}>
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
                    fontSize: { sx: "20px", md: "25px", lg: "40px" },
                  }}
                >
                  Register for Vendor
                </Typography>
                <Typography
                  sx={{
                    color: theme.palette.primary.main,
                    fontWeight: 600,
                    pb: 3,
                  }}
                >
                  Kindly provide your details below and our representative will
                  get back to you.
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
                        name="Company Name"
                        placeholder="Company Name"
                        id="Company Name"
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
                    <Box>
                      <input
                        type="text"
                        name="city"
                        id="city"
                        placeholder="city"
                        className="vender-form"
                      />
                    </Box>
                    <Box>
                      <input
                        type="text"
                        name="zipcode"
                        placeholder="zipcode"
                        id="zipcode "
                        className="vender-form"
                      />
                    </Box>
                    <Box>
                      <input
                        type="text"
                        name="state"
                        placeholder="state"
                        id="state"
                        className="vender-form"
                      />
                    </Box>
                    <Box>
                      <input
                        type="text"
                        name="county"
                        placeholder="county"
                        id="county"
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
                      variant="contained"
                      sx={{ color: theme.palette.white, width: "150px",p:2,borderRadius:'50px' }}
                    >
                      Submit
                    </Button>
                  </Grid>
                </Stack>
              </Box>
            </form>
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default Registerforvendor;
