import React from "react";
import { Box, Typography, Divider, Container } from "@mui/material";

const Work = () => {
    return (
        <Box
            sx={{
                backgroundColor: "#172b5b",
                color: "white",
                py: { xs: 1,sm:1.5, md: 1,lg:2 },
                px: { xs: 1, sm: 1, md: 1,lg:2 }
            }}
        >
            <Container maxWidth="xl" sx={{ p: 0 }}>
                <Typography
                    variant="h3"
                    sx={{
                        fontWeight: "bold",
                        textTransform: "uppercase",
                        m: 0,
                        mb: 1
                    }}
                >
                    Our Work
                </Typography>

                <Divider
                    sx={{
                        width: 120,
                        height: 3,
                        background:
                            "linear-gradient(90deg, #ff5f2e 0%, rgba(255,95,46,0) 100%)",
                        m: 0,
                        mb: 1
                    }}
                />

                <Typography
                    variant="h6"
                    sx={{
                        lineHeight: 1.4,
                        fontWeight: 500,
                        fontSize: 22,
                        m: 0,
                        mt: 1
                    }}
                >
                    Explore our diverse portfolio of Web3, mobile app, and web development
                    projects that showcase our commitment to innovation, quality, and
                    client satisfaction. From cutting-edge blockchain solutions to
                    captivating mobile experiences and stunning web designs, we take pride
                    in delivering excellence with every project.
                </Typography>
            </Container>
        </Box>
    );
};

export default Work;
