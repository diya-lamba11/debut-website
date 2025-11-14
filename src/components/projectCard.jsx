import { Box, Typography, Chip, Button, Stack, Container } from "@mui/material";
 
export default function Projectcard({ project, direction }) {
    const isRight = direction === "image-left";
 
    return (
        <Box sx={{ backgroundColor: project.bgColor, position: "relative", overflow: "hidden" }}>
            <Box
                component="img"
                src={project.bgImage}
                alt="bg"
                sx={{
                    position: "absolute",
                    top: 0,
                    [isRight ? "right" : "left"]: 0,
                    width: "50%",
                    height: "100%",
                    objectFit: "cover",
                    display: { xs: "none", md: "block" },
                    zIndex: 1,
                }}
            />
 
            <Container maxWidth="xl">
                <Box
                    sx={{
                        position: "relative",
                        zIndex: 2,
                        display: "flex",
                        flexDirection: {
                            xs: "column",
                            md: isRight ? "row" : "row-reverse",
                        },
                        alignItems: "center",
                        py: 3,
                        gap: { xs: 1, md: 6 },
                        mb: { xs: 1, lg: 6 },
                        mt: 4
                    }}
                >
                    <Box
                        sx={{
                            width: { xs: "100%", md: "50%" },
                            display: "flex",
                            flexDirection: "column",
                            color: "white",
                            textAlign: "left",
                            pl: { md: isRight ? "0px" : "50px" },
                            pr: { md: isRight ? "0px" : "50px" },
                        }}
                    >
                        <Typography
                            sx={{
                                fontWeight: "bold",
                                mb: 2,
                                fontSize: { xs: "2rem", md: "2.5rem" },
                            }}
                        >
                            {project.title}
                        </Typography>
 
                        <Typography
                            variant="h6"
                            sx={{
                                fontWeight: 600,
                                mb: 2,
                                fontSize: { xs: "1.1rem", md: "19px" },
                            }}
                        >
                            {project.subtitle}
                        </Typography>
 
                        <Typography
                            sx={{ mb: 2, fontSize: { xs: "1rem", md: "17px" }, width: "95%" }}
                        >
                            {project.description}
                        </Typography>
 
                        <Box component="ul" sx={{ pl: 0, listStylePosition: "inside", mb: 3 }}>
                            {project.points.map((p, i) => (
                                <li key={i}>{p}</li>
                            ))}
                        </Box>
 
                        <Stack direction="row" flexWrap="wrap" spacing={0.5} mb={3} 
                        sx={{
                          gap: { xs: "6px", md: "10px" }, 
                          }}>
                            {project.tags.map((tag, i) => (
                                <Chip
                                    key={i}
                                    label={tag}
                                    sx={{
                                        backgroundColor: "rgba(255,255,255,0.15)",
                                        color: "white",
                                        transition: "all 0.3s ease",
                                        cursor: "pointer",
 
                                        "&:hover": {
                                            backgroundColor: "rgba(255,255,255,0.3)",
                                            transform: "scale(1.05)",
                                        },
                                    }}
                                />
                            ))}
                        </Stack>
 
 
                        <Button
                            variant="outlined"
                            sx={{ color: "white", borderColor: "white", alignSelf: "flex-start" }}
                        >
                            View Case Study
                        </Button>
                    </Box>
 
                    <Box
                        component="img"
                        src={project.overlayImage}
                        alt="overlay-mobile"
                        sx={{
                            display: { xs: "block", sm: "block", md: "none" },
                            width: { xs: "140px", sm: "160px" },
                            marginTop: "10px",
                            marginBottom: "10px",
                            alignSelf: "center",
                        }}
                    />
                </Box>
            </Container>
 
            <Box
                component="img"
                src={project.overlayImage}
                alt="overlay-image"
                sx={{
                    position: { xs: "static", md: "absolute" },
                    top: { md: "54%" },
                    ...(isRight
                        ? {
                            right: { md: "44%", lg: "47%" },
                            transform: { md: "translate(50%, -50%)" },
                        }
                        : {
                            left: { md: "47%" },
                            transform: { md: "translate(-50%, -50%)" },
                        }),
                    width: {
                        xs: "0px",
                        md: "150px",
                        lg: "170px",
                    },
                    display: { xs: "none", md: "block" },
                    zIndex: 3,
                    mb: { xs: 0, md: "40px" },
                }}
            />
        </Box>
    );
}
 
 
