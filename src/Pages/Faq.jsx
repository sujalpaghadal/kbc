import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useTheme } from "@mui/material/styles";
import PageTitle from "../Global/Pagetitle";

const faqs = [
  {
    panel: "panel1",
    question:
      "How do I contact customer support if I have a question or issue?",
    answer: (
      <>
        You can reach our customer support team by emailing
        <Link> support@email.com </Link>
        or calling our toll-free number. We&apos;re here to assist you promptly.
      </>
    ),
  },
  {
    panel: "panel2",
    question:
      "Can I return the product if it doesn&apos;t meet my expectations?",
    answer: (
      <>
        Absolutely! We offer a hassle-free return policy. If you&apos;re not
        completely satisfied, you can return the product within [number of days]
        days for a full refund or exchange.
      </>
    ),
  },
  {
    panel: "panel3",
    question: "What makes your product stand out from others in the market?",
    answer: (
      <>
        Our product distinguishes itself through its adaptability, durability,
        and innovative features. We prioritize user satisfaction and continually
        strive to exceed expectations in every aspect.
      </>
    ),
  },
  {
    panel: "panel4",
    question: "Is there a warranty on the product, and what does it cover?",
    answer: (
      <>
        Yes, our product comes with a [length of warranty] warranty. It covers
        defects in materials and workmanship. If you encounter any issues
        covered by the warranty, please contact our customer support for
        assistance.
      </>
    ),
  },
];

export default function Faq() {
  const theme = useTheme();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <PageTitle title={`Faq's`} />
      <Container
        id="faq"
        sx={{
          pt: { xs: 4, sm: 12 },
          pb: { xs: 8, sm: 16 },
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: { xs: 3, sm: 6 },
        }}
      >
        <Typography
          component="h2"
          variant="h4"
          color="text.primary"
          sx={{
            width: { sm: "100%", md: "60%" },
            textAlign: { sm: "center", md: "center" },
            fontWeight: "600",
          }}
        >
          FAQ's for NRI
        </Typography>
        <Box sx={{ width: "100%" }}>
          {faqs.map((faq) => (
            <Accordion
              key={faq.panel}
              expanded={expanded === faq.panel}
              onChange={handleChange(faq.panel)}
              sx={{
                borderBottomLeftRadius: "20px!important",
                borderTopRightRadius: "20px!important",
                p: 2,
                mb: 4,
                boxShadow: 1,
              }}
            >
              <AccordionSummary
                expandIcon={
                  <ExpandMoreIcon sx={{ color: theme.palette.primary.main }} />
                }
                aria-controls={`${faq.panel}-content`}
                id={`${faq.panel}-header`}
              >
                <Typography component="componenent1" variant="body1">
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  variant="body2"
                  gutterBottom
                  sx={{ maxWidth: { sm: "100%", md: "70%", fontSize: "18px" } }}
                >
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Container>
    </>
  );
}
