import React from "react";
import { Box, Typography, Link } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        width: "100%",
        py: 4,
        textAlign: "center",
      }}
    >
      <Typography variant="body2" color="text.secondary" sx={{ mx: 4 }}>
        © 2025 The Fin AI - Open Greek Financial LLM Leaderboard - Made by the Fin AI community.
        -{" "}
        <Link
          href="https://thefin.ai"
          target="_blank"
          rel="noopener noreferrer"
          color="inherit"
        >
          thefin.ai
        </Link>
      </Typography>
    </Box>
  );
};

export default Footer;
