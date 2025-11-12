import { Box, Typography, Chip, Button, Stack } from "@mui/material";

export default function Projectcard({ project, direction }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: {
          xs: "column",
          md: direction === "image-right" ? "row-reverse" : "row",
        },
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: project.bgColor,
        color: "white",
        minHeight: "100vh",
        px: 0,
        gap: 0,
        position: "relative",
        overflow: "hidden",
        textAlign: { xs: "left", md: "left" }, // ✅ changed "center" → "left" for xs
      }}
    >
      {/* ---------------- TEXT SECTION ---------------- */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: { xs: "flex-start", md: "flex-start" }, // ✅ text starts from left on mobile
          position: "relative",
          left:
            direction === "image-right"
              ? { xs: "0px", md: "60px" }
              : { xs: "0px", md: "40px" },
          zIndex: 2,
          textAlign: { xs: "left", md: "left" },
          px: { xs: 3, sm: 5, md: 0 },
        }}
      >
        {/* Title */}
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            mb: 2,
            mt:2,
            fontSize: { xs: "1.8rem", sm: "2rem", md: "2.5rem" },
          }}
        >
          {project.projectTitle}
        </Typography>

        {/* Subtitle */}
        <Typography
          variant="h6"
          sx={{
            fontWeight: 600,
            lineHeight: 1.5,
            fontSize: { xs: "1rem", md: "1.1rem" },
            maxWidth: { xs: "90%", md: "100%" },
          }}
        >
          {project.subtitle}
        </Typography>

        {/* Description */}
        <Typography
          sx={{
            lineHeight: 1.7,
            fontSize: { xs: "0.95rem", md: "1rem" },
            maxWidth: { xs: "90%", md: "90%" },
            mt: 1,
          }}
        >
          {project.description}
        </Typography>

        {/* Points */}
        <Box
          component="ul"
          sx={{
            pl: 0,
            ml: { xs: 0, md: -3 },
            listStylePosition: "inside",
            fontSize: { xs: "0.85rem", md: "1rem" },
            lineHeight: 2,
            "& li": {
              marginBottom: "8px",
            },
          }}
        >
          {project.points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </Box>

        {/* Chips */}
        <Stack
          direction={{ xs: "column", sm: "column", md: "row" }}
          spacing={1.5}
          alignItems={{ xs: "flex-start", md: "flex-start" }} // ✅ left-align chips on mobile
          justifyContent={{ xs: "flex-start", md: "flex-start" }}
          sx={{
            mb: 4,
            flexWrap: "wrap",
            fontSize: { xs: "0.9rem", md: "1rem" },
          }}
        >
          {project.tags.map((tag, index) => (
            <Chip
              key={index}
              label={tag}
              sx={{
                backgroundColor: "rgba(255,255,255,0.2)",
                color: "white",
                fontSize: { xs: "0.85rem", md: "1rem" },
                px: { xs: 1, md: 2 },
              }}
            />
          ))}
        </Stack>

        {/* Button */}
        <Button
          variant="outlined"
          sx={{
            borderColor: "white",
            color: "white",
            borderRadius: "10px",
            px: 3,
            py: 1,
            textTransform: "none",
            fontWeight: "bold",
            fontSize: { xs: "0.9rem", md: "1rem" },
            alignSelf: { xs: "flex-start", md: "flex-start" }, // ✅ button also aligns left
            "&:hover": {
              borderColor: "#fff",
              backgroundColor: "rgba(255,255,255,0.1)",
            },
          }}
        >
          View Case Study
        </Button>

        {/* ✅ Overlay image appears BELOW the button on XS only */}
        <Box
          component="img"
          src={project.overlayImage}
          alt={`${project.projectTitle} overlay`}
          sx={{
            display: { xs: "block", md: "none" },
            width: { xs: "220px" },
            height: "auto",
            mt: 3,
          }}
        />
      </Box>

      {/* ---------------- IMAGE SECTION ---------------- */}
      <Box
        sx={{
          flex: 1,
          display: { xs: "none", md: "flex" },
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <Box
          component="img"
          src={project.bgImage}
          alt={`${project.projectTitle} background`}
          sx={{
            width: "118%",
            height: "730px",
            objectFit: "cover",
          }}
        />
      </Box>

      {/* ---------------- OVERLAY IMAGE ---------------- */}
      <Box
        component="img"
        src={project.overlayImage}
        alt={`${project.projectTitle} overlay`}
        sx={{
          display: { xs: "none", md: "block" },
          position: "absolute",
          top: "59%",
          left:
            direction === "image-right"
              ? { xs: "50%", md: "45%" }
              : { xs: "50%", md: "55%" },
          transform: "translate(-55%, -56%)",
          width: { xs: "120px", sm: "180px", md: "200px" },
          height: "auto",
          zIndex: 3,
          transition: "all 0.3s ease",
        }}
      />
    </Box>
  );
}
