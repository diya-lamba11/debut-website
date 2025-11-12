import React from "react";
import { Box, Typography,Divider } from "@mui/material";
const Work = () => {
    return (
        <Box
            sx={{
                backgroundColor: "#172b5b",
                color: "white",
                py: { xs: 6, md: 10 },
                px: { xs: 3, sm: 8, md:3}
            }}
        >
            <Typography
                variant="h3"
                sx={{
                    fontWeight: "bold",
                    mb: 2,
                    textTransform: "uppercase",
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
                    mb: 2,

                }}
            />
            <Typography
                variant="h6"
                sx={{
                    lineHeight: 1.7,
                    fontWeight: 500,
                    fontSize:22,
                }}

            >
                Explore our diverse portfolio of Web3, mobile app, and web development
                projects that showcase our commitment to innovation, quality, and
                client satisfaction. From cutting-edge blockchain solutions to
                captivating mobile experiences and stunning web designs, we take pride
                in delivering excellence with every project.
            </Typography>
        </Box>
    )
}
export default Work;