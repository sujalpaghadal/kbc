import React from "react";
import t1 from "../../src/assets/image/trusimage/m1.png";
import t2 from "../../src/assets/image/trusimage/m2.png";
import t3 from "../../src/assets/image/trusimage/m3.png";
import t4 from "../../src/assets/image/trusimage/m4.png";
import t5 from "../../src/assets/image/trusimage/m5.png";
import t6 from "../../src/assets/image/trusimage/m6.png";
import { Box, Container, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";

function Trustedgropup() {
  const theme = useTheme();

  return (
    <>
      <Box
        className="main-trust"
        sx={{
          backgroundImage: `url(${t6})`,
          height: "600px",
          width: "100%",
          backgroundSize: "cover",
          backgroundPosition: "center",
          mb: 10,
        }}
      >
        <Container>
          <Typography
            sx={{
              color: theme.palette.black.main,
              mb: 1,
              textAlign: "center",
              pt: 2,
              fontSize: { xs: "18px", md: "20px", lg: "20px" },
            }}
          >
            Most Trusted Realty Group
          </Typography>
          <Typography
            sx={{
              color: theme.palette.primary.main,
              mb: 4,
              textAlign: "center",
              fontSize: { xs: "18px", md: "25px", lg: "30px" },
            }}
          >
            Most Trusted Realty Group
          </Typography>

          <Box sx={{ my: 4 }}>
            <div className="trust-inner">
              <div className="item">
                <div className="trust-item">
                  <div className="trust-inner">
                    <img src={t2} alt="image" />
                  </div>
                  <div className="text"></div>
                </div>
                <div className="text">Intelligent design</div>
              </div>
              <div className="item">
                <div className="trust-item">
                  <div className="trust-inner">
                    <img src={t4} alt="image" />
                  </div>
                </div>
                <div className="text">Professional Approach</div>
              </div>
              <div className="item">
                <div className="trust-item">
                  <div className="trust-inner">
                    <img src={t1} alt="image" />
                  </div>
                </div>
                <div className="text">Lifetime Durability</div>
              </div>
            </div>
            <div className="trust-inner-1">
              <div className="item">
                <div className="text" style={{ marginBottom: "15px" }}>
                  Quality Assurance
                </div>
                <div className="trust-item">
                  <div className="trust-inner">
                    <img src={t5} alt="image" />
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="text" style={{ marginBottom: "15px" }}>
                  Green Initiatives
                </div>
                <div className="trust-item">
                  <div className="trust-inner">
                    <img src={t3} alt="image" />
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default Trustedgropup;
