import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import Movies from "../Movies";

const MovieList = () => {
  return (
    <Box>
      <Typography
        sx={{
          fontSize: "20px",
          fontWeight: "bold",
          mb: 1,
        }}
      >
        PHIM ĐỀ CỬ
      </Typography>
      <Divider sx={{ bgcolor: (theme) => theme.default.lightPurple }} />
      <Movies />
    </Box>
  );
};

export default MovieList;
