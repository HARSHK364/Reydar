import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import { useTheme } from "@mui/material";
import ReydarCertificateImage from "../assets/ReydarCertificate.png";
import Restircition from "../assets/Restriction.jpeg";
import HomeImageCertificate from "../assets/image.png";
import jsPDF from "jspdf";

const Certificates = () => {
  const theme = useTheme();

  const certificates = [
    {
      title: "Reydar Certificate",
      details: ["Certificate ID: 12345", "Issued: 2026"],
      description:
        "This certificate verifies the authenticity of Reydar products.",
      icon: <i className="fas fa-certificate" />,
      image: ReydarCertificateImage,
    },
    {
      title: "RoHS Certificate",
      details: ["Certificate ID: 67890", "Issued: 2026"],
      description: "This certificate ensures compliance with restrictions.",
      icon: <i className="fas fa-shield-alt" />,
      image: Restircition,
    },
    {
      title: "Low voltage directive Certificate",
      details: ["Certificate ID: 11223", "Issued: 2026"],
      description: "This certificate authenticates the home image.",
      icon: <i className="fas fa-home" />,
      image: HomeImageCertificate,
    },
  ];

  const handleDownload = (title, image) => {
    const pdf = new jsPDF();
    pdf.text(title, 10, 10);
    pdf.addImage(image, "JPEG", 10, 20, 180, 160);
    pdf.save(`${title}.pdf`);
  };

  return (
    <Box sx={{ overflow: "hidden" }}>
      {/* Hero Section */}
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          background: `linear-gradient(135deg, 
            ${theme.palette.primary.main}15 0%, 
            ${theme.palette.secondary.main}10 50%, 
            ${theme.palette.primary.light}15 100%)`,
          position: "relative",
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: 6 }}>
            <Typography
              variant="h1"
              component="h1"
              gutterBottom
              sx={{
                fontWeight: "bold",
                background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.secondary.main} 90%)`,
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontSize: { xs: "2.5rem", md: "3.5rem" },
                mb: 3,
              }}
            >
              Certificates
            </Typography>
            <Typography
              variant="h4"
              color="text.primary"
              sx={{
                fontWeight: 600,
                fontSize: { xs: "1.5rem", md: "2rem" },
                maxWidth: "800px",
                mx: "auto",
                mb: 4,
              }}
            >
              You can trust REYDAR
            </Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              sx={{
                fontSize: { xs: "1rem", md: "1.2rem" },
                maxWidth: "600px",
                mx: "auto",
              }}
            >
              Here are certificates of authenticity
            </Typography>
          </Box>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 8 }}>
        {/* Certificates Information Cards */}
        <Box sx={{ mb: 8 }}>
          <Typography
            variant="h3"
            component="h2"
            textAlign="center"
            gutterBottom
            sx={{
              fontWeight: "bold",
              color: "primary.main",
              fontSize: { xs: "1.75rem", md: "2.25rem" },
              mb: 6,
            }}
          >
            Certificates
          </Typography>
          <Grid
            container
            spacing={4}
            className="certificate-cards"
            sx={{
              justifyContent: "center",
              mx: "auto",
            }}
          >
            {certificates.map((certificate, index) => (
              <Grid
                item
                xs={12}
                sm={12}
                md={6}
                lg={6}
                xl={6}
                key={index}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Card
                  sx={{
                    p: 4,
                    height: "100%",
                    minHeight: "350px",
                    textAlign: "center",
                    display: "flex",
                    flexDirection: "column",
                    borderRadius: 3,
                    border: "1px solid",
                    borderColor: "divider",
                    background:
                      "linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.95) 100%)",
                    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    position: "relative",
                    overflow: "hidden",
                    cursor: "pointer",
                    "&:hover": {
                      transform: "translateY(-12px) scale(1.02)",
                      boxShadow: `
                        0 20px 60px ${theme.palette.primary.main}20, 
                        0 10px 30px rgba(0, 0, 0, 0.1),
                        0 0 0 1px ${theme.palette.primary.main}30
                      `,
                      borderColor: "primary.main",
                    },
                  }}
                  onClick={() =>
                    handleDownload(certificate.title, certificate.image)
                  }
                >
                  <CardContent
                    sx={{
                      p: 0,
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      position: "relative",
                    }}
                  >
                    <Box sx={{ mb: 3 }}>
                      <img
                        src={certificate.image}
                        alt={certificate.title}
                        style={{
                          width: "100%",
                          maxWidth: "100%",
                          height: "auto",
                          objectFit: "contain",
                          borderRadius: "10px",
                          marginBottom: "16px",
                          display: "block",
                          maxWidth: "500px",
                          maxHeight: "900px",
                          "@media (max-width: 768px)": {
                            width: "100%",
                            maxWidth: "100%",
                            borderRadius: "10px",
                            display: "block",
                          },
                        }}
                      />
                      <Typography
                        variant="h6"
                        gutterBottom
                        sx={{
                          fontWeight: 700,
                          color: "primary.main",
                          fontSize: "1.3rem",
                          mb: 2,
                        }}
                      >
                        {certificate.title}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Certificates;
