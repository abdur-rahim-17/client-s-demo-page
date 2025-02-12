import React from "react";
import { Box, Typography, Link, IconButton, Divider, Grid } from "@mui/material";
import { LinkedIn, Email, LocationOn } from "@mui/icons-material";

const Footer: React.FC = () => {
    return (
        <Box
            component="footer"
            sx={{
                width: "100%",
                py: 4,
                px: { xs: 3, md: 6 },
                mt: 5,
                background: "linear-gradient(135deg, #1a1a1a, #2d2d2d)",
                color: "#fff",
                boxShadow: "0px -5px 15px rgba(0, 0, 0, 0.3)",
            }}
        >
            <Grid container spacing={4} justifyContent="space-between" alignItems="flex-start">
                {/* Left Section - Company Info */}
                <Grid item xs={12} md={4}>
                    <Typography variant="h6" fontWeight="bold" sx={{ mb: 1 }}>
                        OAKSOL Technologies Pvt Ltd
                    </Typography>
                    <Typography variant="body2" sx={{ mb: 0, maxWidth: "400px", opacity: 0.8 }}>
                        Information Technology & Services
                    </Typography>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 1 }}>
                        <LocationOn fontSize="small" />
                        <Typography variant="body2" sx={{ opacity: 0.8 }}>
                            Bangalore, Karnataka, India
                        </Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 1 }}>
                        <Email fontSize="small" />
                        <Typography
                            variant="body2"
                            sx={{
                                opacity: 0.8,
                                textDecoration: "none",
                                transition: "color 0.3s ease",
                                "&:hover": { color: "#f5c518", opacity: 1 },
                            }}
                            component={Link}
                            href="mailto:contact@oaksol.com"
                            color="inherit"
                        >
                            support@oaksol.in
                        </Typography>
                    </Box>
                </Grid>

                {/* Middle Section - Quick Links */}
                {/* <Grid item xs={12} md={4}>
                    <Typography variant="h6" fontWeight="bold" sx={{ mb: 1 }}>
                        Quick Links
                    </Typography>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                        <Link
                            href="#"
                            color="inherit"
                            sx={{
                                fontSize: "0.9rem",
                                textDecoration: "none",
                                opacity: 0.8,
                                transition: "color 0.3s ease",
                                "&:hover": { color: "#f5c518", opacity: 1 },
                            }}
                        >
                            About Us
                        </Link>
                        <Link
                            href="#"
                            color="inherit"
                            sx={{
                                fontSize: "0.9rem",
                                textDecoration: "none",
                                opacity: 0.8,
                                transition: "color 0.3s ease",
                                "&:hover": { color: "#f5c518", opacity: 1 },
                            }}
                        >
                            Careers
                        </Link>
                        <Link
                            href="#"
                            color="inherit"
                            sx={{
                                fontSize: "0.9rem",
                                textDecoration: "none",
                                opacity: 0.8,
                                transition: "color 0.3s ease",
                                "&:hover": { color: "#f5c518", opacity: 1 },
                            }}
                        >
                            Contact Us
                        </Link>
                        <Link
                            href="#"
                            color="inherit"
                            sx={{
                                fontSize: "0.9rem",
                                textDecoration: "none",
                                opacity: 0.8,
                                transition: "color 0.3s ease",
                                "&:hover": { color: "#f5c518", opacity: 1 },
                            }}
                        >
                            Privacy Policy
                        </Link>
                        <Link
                            href="#"
                            color="inherit"
                            sx={{
                                fontSize: "0.9rem",
                                textDecoration: "none",
                                opacity: 0.8,
                                transition: "color 0.3s ease",
                                "&:hover": { color: "#f5c518", opacity: 1 },
                            }}
                        >
                            Terms of Service
                        </Link>
                    </Box>
                </Grid> */}

                {/* Right Section - Social Media */}
                <Grid item xs={12} md={4} textAlign={{ xs: "center", md: "right" }}>
                    <Typography variant="h6" fontWeight="bold" sx={{ mb: 1 }}>
                        Follow Us
                    </Typography>
                    <Box sx={{ display: "flex", justifyContent: { xs: "center", md: "flex-end" }, gap: 2 }}>
                        <IconButton
                            component={Link}
                            href="https://www.linkedin.com/company/oaksol/posts/?feedView=all"
                            color="inherit"
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{
                                transition: "transform 0.3s ease, color 0.3s ease",
                                "&:hover": { transform: "scale(1.2)", color: "#0077B5" }, // LinkedIn Blue
                            }}
                        >
                            <LinkedIn fontSize="large" />
                        </IconButton>

                    </Box>
                </Grid>
            </Grid>

            {/* Divider Line */}
            <Divider sx={{ bgcolor: "rgba(255, 255, 255, 0.2)", my: 3 }} />

            {/* Copyright */}
            <Typography variant="body2" textAlign="center" sx={{ opacity: 0.7 }}>
                © {new Date().getFullYear()} <strong>OAKSOL Technologies Pvt Ltd</strong>. All rights reserved.
            </Typography>
        </Box>
    );
};

export default Footer;
