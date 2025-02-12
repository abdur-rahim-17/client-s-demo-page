import React, { useState } from "react";
import { Container, Typography, Box, IconButton, Alert, Slide } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { motion } from "framer-motion";
import TeamMemberCard from "../components/TeamMemberCard";
import { teamData } from "../data/teamData";
import Footer from "../components/Footer";

const Home: React.FC = () => {
    const [showBanner, setShowBanner] = useState(true);

    return (
        <>
            <Container maxWidth="lg" sx={{ py: 5 }}>
                <Slide direction="down" in={showBanner} mountOnEnter unmountOnExit>
                    <Alert
                        severity="warning"
                        variant="filled"
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            mb: 2,
                            borderRadius: 2,
                            boxShadow: 4,
                        }}
                        action={
                            <IconButton size="small" color="inherit" onClick={() => setShowBanner(false)}>
                                <CloseIcon fontSize="small" />
                            </IconButton>
                        }
                    >
                        System Maintenance is in progress. Some features may be unavailable.
                    </Alert>
                </Slide>

                <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: 2,
                            p: 2,
                            mb: 4,
                        }}
                    >
                        <Box sx={{ width: "100%", textAlign: "center" }}>
                            <Typography variant="h2" fontWeight="bold">
                                We Are Team
                            </Typography>
                        </Box>
                    </Box>
                </motion.div>

                <Box
                    display="grid"
                    gridTemplateColumns="repeat(auto-fit, minmax(300px, 1fr))"
                    gap={4}
                    justifyContent="center"
                    sx={{
                        pb: 4,
                        "& > *": {
                            transition: "0.3s ease-in-out",
                            "&:hover": {
                                transform: "translateY(-5px)",
                                boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
                            },
                        },
                    }}
                >
                    {teamData.map((member) => (
                        <motion.div key={member.id} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3, delay: member.id * 0.1 }}>
                            <TeamMemberCard member={member} />
                        </motion.div>
                    ))}
                </Box>

                <Box sx={{ mt: 5, textAlign: "center" }}>
                    <Typography variant="body1" sx={{ fontStyle: "italic", color: "text.secondary" }}>
                        "Empowering businesses with cutting-edge technology and innovative solutions. OAKSOL Technologies Pvt Ltd – Transforming ideas into reality!"
                    </Typography>
                </Box>
            </Container>

            <Footer />
        </>
    );
};

export default Home;
