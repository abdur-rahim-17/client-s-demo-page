import React, { useState, useEffect } from "react";
import { Box, Typography, Container, Link } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import ConstructionIcon from "@mui/icons-material/Construction";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import { motion } from "framer-motion";

// Import Maintenance Background Image & Company Logo
import maintenanceBg from "../assets/maintenance.jpg"; // Ensure the path is correct
import companyLogo from "../assets/oaksol-logo.png"; // Add your company logo here

const MaintenancePage: React.FC = () => {
    const theme = useTheme();
    const [countdown, setCountdown] = useState(14400); // 4 hours in seconds

    // Countdown Timer Logic
    useEffect(() => {
        const interval = setInterval(() => {
            setCountdown((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    // Format Time
    const formatTime = (seconds: number) => {
        const h = Math.floor(seconds / 3600);
        const m = Math.floor((seconds % 3600) / 60);
        const s = seconds % 60;
        return `${h}h ${m}m ${s}s`;
    };

    return (
        <Box
            sx={{
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                px: 2,
                backgroundImage: `url(${maintenanceBg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                position: "relative",
                "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background: "rgba(0, 0, 0, 0.6)", // Darker Overlay for Better Contrast
                },
            }}
        >
            {/* Company Logo (Top Right Corner) */}
            <motion.img
                src={companyLogo}
                alt="Company Logo"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                style={{
                    position: "absolute",
                    top: "20px",
                    right: "30px",
                    width: "220px", // Adjust size as needed
                    height: "auto",
                    filter: "drop-shadow(0px 4px 6px rgba(0,0,0,0.5))", // Adds depth
                }}
            />

            <Container maxWidth="sm" sx={{ position: "relative", zIndex: 1 }}>
                {/* Animated Icon */}
                <motion.div initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
                    <ConstructionIcon sx={{ fontSize: 110, color: theme.palette.warning.main }} />
                </motion.div>

                {/* Glassmorphism Card */}
                <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
                    <Box
                        sx={{
                            mt: 3,
                            p: 3,
                            borderRadius: "15px",
                            backdropFilter: "blur(25px)",
                            background: "rgba(255, 255, 255, 0.2)", // More Transparent Glass Effect
                            boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.3)",
                            border: `1px solid rgba(255, 255, 255, 0.4)`,
                            transition: "0.3s",
                            "&:hover": {
                                boxShadow: "0px 15px 50px rgba(0, 0, 0, 0.4)",
                            },
                        }}
                    >
                        <Typography
                            variant="h3"
                            fontWeight="bold"
                            sx={{ color: "#fff", textShadow: "0px 0px 15px rgba(255, 255, 255, 0.5)" }}
                        >
                            Under Maintenance
                        </Typography>
                        <Typography color="text.secondary" mt={1} fontSize="1.1rem" sx={{ color: "#f0f0f0", opacity: 0.9 }}>
                            We're upgrading our system to enhance your experience. Please check back later.
                        </Typography>

                        {/* Countdown Timer */}
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                            <Box
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                                gap={1}
                                mt={3}
                                p={2}
                                borderRadius={3}
                                sx={{
                                    background: "rgba(255, 193, 7, 0.3)",
                                    border: `1px solid ${theme.palette.warning.main}`,
                                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.15)",
                                }}
                            >
                                <WarningAmberIcon color="warning" />
                                <Typography variant="body1" fontWeight="bold" sx={{ color: "#fff" }}>
                                    Estimated time left: {formatTime(countdown)}
                                </Typography>
                            </Box>
                        </motion.div>

                        {/* Emergency Contact Message */}
                        <Box
                            mt={4}
                            p={2}
                            sx={{
                                background: "rgba(255, 255, 255, 0.3)",
                                borderRadius: "12px",
                                boxShadow: "0px 5px 20px rgba(0, 0, 0, 0.3)",
                            }}
                        >
                            <Typography variant="body1" fontWeight="bold" sx={{ color: "#fff" }}>
                                🚨 Need Immediate Assistance?
                            </Typography>
                            <Typography variant="body2" sx={{ color: "#f0f0f0", mt: 1 }}>
                                If you have an urgent issue, please email us at{" "}
                                <Link
                                    href="mailto:support@oaksol.com"
                                    color="inherit"
                                    sx={{
                                        fontWeight: "bold",
                                        color: "#fff",
                                        textDecoration: "none",
                                        "&:hover": { textDecoration: "underline", color: "#FFD700" }, // Gold Hover Effect
                                    }}
                                >
                                    support@oaksol.in
                                </Link>
                            </Typography>
                        </Box>
                    </Box>
                </motion.div>
            </Container>
        </Box>
    );
};

export default MaintenancePage;
