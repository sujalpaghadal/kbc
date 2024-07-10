import React, { useState } from "react";
import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
  Collapse,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../assets/image/header logo.png";
import { useTheme } from "@emotion/react";
import { NavLink } from "react-router-dom";
const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const theme = useTheme();
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  const menuItems = [
    { label: "Home", to: "/" },
    { label: "Residential", to: "/recidentialproject" },
    { label: "Indrustrial", to: "/Indrustrialproject" },
  ];
  return (
    <>
      <AppBar
        sx={{
          position: "fixed",
          bgcolor: "background.paper",
          boxShadow: "0 2px 48px 0 rgba(0,0,0,.08)",
        }}
      >
        <Toolbar>
          <Box
            sx={{ width: "100%" }}
            px={{ xs: "2rem", sm: "4rem", md: "6rem", xl: "8rem" }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{
                  mr: 2,
                  flexGrow: 1,
                }}
              >
                <NavLink to={"/"}>
                  <Box
                    to={"/"}
                  >
                    <img src={logo} alt="Logo" />
                  </Box>
                </NavLink>
              </Typography>
              {/* Mobile Menu Toggle */}
              <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="menu"
                  onClick={toggleMobileMenu}
                  color="black"
                >
                  <MenuIcon />
                </IconButton>
              </Box>
              {/* Mobile Menu */}
              <Collapse
                in={mobileMenuOpen}
                timeout="auto"
                unmountOnExit
                sx={{
                  width: "100%",
                  position: "absolute",
                  top: "100%",
                  right: "0%",
                  zIndex: "modal",
                  boxShadow: "0 0px 8px rgba(0, 0, 0, 0.08)",
                }}
              >
                <Box
                  sx={{
                    pb: 2,
                    pt: 1,
                    bgcolor: "background.paper",
                  }}
                >
                  {/* Mobile Menu Items */}
                  {menuItems.map((item, index) => (
                    <NavLink
                      key={index}
                      to={item.to}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <Typography
                        sx={{
                          my: 2,
                          color: theme.palette.black.main,
                          display: "block",
                          textDecoration: "none",
                          paddingLeft: "30px",
                          fontWeight: "500",
                          "&:hover": {
                            color: theme.palette.primary.main,
                          },
                        }}
                      >
                        {item.label}
                      </Typography>
                    </NavLink>
                  ))}
                </Box>
              </Collapse>
              {/* Desktop Menu */}
              <Box
                sx={{
                  display: { xs: "none", md: "flex" },
                  justifyContent: "flex-end",
                }}
              >
                {/* Desktop Menu Items */}
                {menuItems.map((item, index) => (
                  <NavLink key={index} to={item.to}>
                    <Typography
                      sx={{
                        mx: 1.5,
                        color: theme.palette.black.main,
                        display: "block",
                        textDecoration: "none",
                        fontWeight: "500",
                        fontSize: "15px",
                        transition: "0.5s",
                        "&:hover": {
                          color: theme.palette.primary.main,
                        },
                      }}
                    >
                      {" "}
                      {item.label}
                    </Typography>
                  </NavLink>
                ))}
              </Box>
              <Box>
                
              </Box>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};
export default Header;
