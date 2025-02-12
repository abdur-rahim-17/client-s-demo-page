import React from "react";
import { Card, Avatar, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { TeamMember } from "../data/teamData";

const getRoleColor = (role: string) => {
    switch (role.toLowerCase()) {
        case "developer":
            return "#007BFF"; // Blue
        case "designer":
            return "#E4405F"; // Pinkish-red
        case "manager":
            return "#28A745"; // Green
        default:
            return "#FFC107"; // Yellow
    }
};

interface TeamMemberCardProps {
    member: TeamMember;
    // onViewDetails: () => void;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
        >
            <Card
                sx={{
                    maxWidth: 360,
                    textAlign: "center",
                    borderRadius: "16px",
                    boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.15)",
                    padding: 3,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    background: "rgba(255, 255, 255, 0.85)",
                    backdropFilter: "blur(10px)",
                    transition: "all 0.3s ease-in-out",
                    "&:hover": {
                        transform: "translateY(-10px)",
                        boxShadow: "0px 15px 40px rgba(0, 0, 0, 0.25)",
                    },
                }}
            >
                {/* Profile Avatar */}
                <Avatar
                    src={member.imageUrl}
                    alt={member.name}
                    sx={{
                        width: 130,
                        height: 130,
                        mb: 2,
                        border: `4px solid ${getRoleColor(member.role)}`,
                        transition: "0.3s",
                        "&:hover": {
                            boxShadow: `0px 0px 20px ${getRoleColor(member.role)}`,
                            transform: "scale(1.05)",
                        },
                    }}
                />

                {/* Name & Role */}
                <Typography variant="h6" fontWeight="bold" sx={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "90%" }}>
                    {member.name}
                </Typography>

                <Typography
                    variant="body2"
                    fontWeight="bold"
                    sx={{
                        textTransform: "uppercase",
                        mt: 0.5,
                        letterSpacing: 1,
                        color: getRoleColor(member.role),
                    }}
                >
                    {member.role}
                </Typography>

                {/* Social Media Icons */}
                {/* <Stack direction="row" spacing={2} sx={{ mt: 1.5 }}>
                    <Tooltip title="Facebook" arrow>
                        <IconButton
                            component="a"
                            href={member.facebook}
                            target="_blank"
                            sx={{
                                color: "#3b5998",
                                transition: "0.3s",
                                "&:hover": { transform: "scale(1.3)", boxShadow: "0px 4px 10px rgba(59, 89, 152, 0.5)" },
                            }}
                        >
                            <FacebookIcon />
                        </IconButton>
                    </Tooltip>

                    <Tooltip title="Instagram" arrow>
                        <IconButton
                            component="a"
                            href={member.instagram}
                            target="_blank"
                            sx={{
                                color: "#E4405F",
                                transition: "0.3s",
                                "&:hover": { transform: "scale(1.3)", boxShadow: "0px 4px 10px rgba(228, 64, 95, 0.5)" },
                            }}
                        >
                            <InstagramIcon />
                        </IconButton>
                    </Tooltip>

                    <Tooltip title="LinkedIn" arrow>
                        <IconButton
                            component="a"
                            href={member.linkedin}
                            target="_blank"
                            sx={{
                                color: "#0077b5",
                                transition: "0.3s",
                                "&:hover": { transform: "scale(1.3)", boxShadow: "0px 4px 10px rgba(0, 119, 181, 0.5)" },
                            }}
                        >
                            <LinkedInIcon />
                        </IconButton>
                    </Tooltip>
                </Stack> */}

                {/* View Details Button */}
                {/* <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                        startIcon={<InfoIcon />}
                        variant="contained"
                        color="primary"
                        sx={{
                            mt: 2.5,
                            borderRadius: "8px",
                            paddingX: 3,
                            fontWeight: "bold",
                            textTransform: "none",
                            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                            transition: "all 0.3s ease-in-out",
                            "&:hover": {
                                backgroundColor: "#1565c0",
                                transform: "scale(1.05)",
                            },
                        }}
                        onClick={onViewDetails}
                    >
                        View Details
                    </Button>
                </motion.div> */}
            </Card>
        </motion.div>
    );
};

export default TeamMemberCard;
