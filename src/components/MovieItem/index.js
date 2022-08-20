import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Rating,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const MovieItem = () => {
  const [value, setValue] = useState();
  return (
    <Grid item xs={3}>
      <Card
        sx={{
          maxWidth: 345,
          bgcolor: (theme) => theme.default.secondBgColor,
        }}
      >
        <CardMedia
          component="img"
          image="https://image.tmdb.org/t/p/w342/q54qEgagGOYCq5D1903eBVMNkbo.jpg"
        />
        <CardContent>
          <Rating
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            size="small"
            sx={{
              ".MuiRating-iconEmpty": {
                color: "white",
              },
            }}
          />
          <Typography sx={{ fontWeight: "bold", color: "white" }}>
            The Sandman: Người cát
          </Typography>
          <Typography sx={{ fontSize: "12px", color: "white" }}>
            Doraemon: Nobita Và Cuộc Chiến Vũ Trụ Tí Hon 2021
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default MovieItem;
