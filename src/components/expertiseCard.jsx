import React from "react";
import { Box, Typography } from "@mui/material";

const ExpertiseCard = ({ items = [] }) => {
  return (
    <Box
      sx={{
        color: "black",
        py: { xs: 6, sm: 8 },
        px: { xs: 2, sm: 4, md: 6 },
        textAlign: "center",
        backgroundColor: "#F8FAFC",
      }}
    >
      {/* Heading */}
      <Typography
        sx={{
          fontSize: { xs: 28, sm: 36, md: 42 },
          fontWeight: 700,
          lineHeight: 1.3,
        }}
      >
        Our Diverse Web and Mobile Expertise
      </Typography>

      {/* Orange gradient line */}
      <Box
        sx={{
          width: { xs: 120, sm: 160 },
          height: 6,
          borderRadius: "999px",
          mx: "auto",
          my: 2,
          background: {
            xs: "linear-gradient(90deg, rgba(255,107,53,1) 0%, rgba(255,107,53,0.65) 40%, rgba(255,107,53,0) 100%)",
            sm: "linear-gradient(90deg, rgba(255,107,53,1) 0%, rgba(255,107,53,0.65) 45%, rgba(255,107,53,0) 100%)",
          },
        }}
      />

      {/* Description Text */}
      <Typography
        sx={{
          fontSize: 24,
          fontWeight: "400",
          color: "#000",
          mx: "auto",
          lineHeight: 1.6,
        }}
      >
        Explore a selection of our web and mobile projects, providing a glimpse
        into our diverse expertise.
        <br /> These projects reflect our commitment to delivering exceptional
        digital solutions.
      </Typography>

      {/* Cards */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)" },
          gap: 3,
          mt: 5,
        }}
      >
        {items.map((item, index) => (
          <Box
            key={index}
            sx={{
              position: "relative",
              backgroundImage: `url(${item.bgImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              color: "black",
             
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              overflow: "hidden",
              minHeight: 300,
              
    
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "translateY(-5px)",
              },
              "&:hover .overlay": {
                opacity: 0.7,
                transform: "translateY(0%)",
              },
              "&:hover .paragraph": {
                opacity: 1,
                maxHeight: 100,
              },
            }}
          >
            {/* Overlay (covers half card only on hover) */}
            <Box
              className="overlay"
              sx={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "100%",
                height: "50%",
                opacity: 0,
                transform: "translateY(100%)",
                transition: "all 0.4s ease",
                zIndex: 1,
              }}
            />

            {/* Logo */}
            <Box
              component="img"
              src={item.logo}
              alt={`${item.title} logo`}
              sx={{
                width: 100,
                height: 60,
                position: "absolute",
                top: 16,
                left: 16,
                objectFit: "contain",
                zIndex: 2,
              }}
            />

            {/* Text */}
            <Box sx={{ position: "relative", zIndex: 3, textAlign: "center", backgroundColor:"rgba(255,255,255,0.6)", }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  mb: 1,
                  textAlign: "center",
                }}
              >
                {item.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{ opacity: 0.9, textAlign: "center" }}
              >
                {item.subtitle}
              </Typography>

              {/* Paragraph (hidden until hover) */}
              <Typography
                className="paragraph"
                variant="body2"
                sx={{
                  color: "black",
                  opacity: 0,
                  maxHeight: 0,
                  overflow: "hidden",
                  transition: "all 0.4s ease",
                  mt: 1,
                  
                }}
              >
                {item.paragraph}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ExpertiseCard;
