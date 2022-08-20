import { Box, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import MovieItem from "../MovieItem";

const MovieList = () => {
  return (
    <Box>
      <Typography
        sx={{
          fontSize: "20px",
          fontWeight: "bold",
          mb: 1,
          color: "white",
        }}
      >
        PHIM ĐỀ CỬ
      </Typography>
      <Divider sx={{ bgcolor: (theme) => theme.default.lightPurple, mb: 1 }} />
      <Grid container spacing={2}>
        {[...Array(8).keys()].map(() => (
          <MovieItem />
        ))}
      </Grid>
    </Box>
  );
};

export default MovieList;
