import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Poppins, Arial, sans-serif",
  },
  palette: {
    black: {
      main: "#000",
    },
    primary: {
      main: "#cbab67",
      gradient:
        "linear-gradient(90deg, rgba(203, 171, 103, 1) 0%, rgba(181, 126, 10, 1) 100%)",
    },
    secondary: {
      main: "#b9871d",
    },
    newsletter: {
      gradient:
        "linear-gradient(180deg, rgba(203, 171, 103, 1) 0%, rgba(181, 126, 10, 1) 100%)",
    },
    gray: "rgba(0, 0, 0, 0.50)",
    white: "#fff",
    litePrimary: "rgba(0,134,255,0.5)",
    footerGray: "#575757",
    darkGray: "#616161",
    backgroundLiteGrey: "#FAFAFA",
    footertext: "rgba(171, 171, 171, 1)",
  },
});

export default theme;
