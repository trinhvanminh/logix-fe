import StarIcon from "@mui/icons-material/Star";
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Rating,
  Typography,
  Box,
  Chip,
} from "@mui/material";
import { Stack } from "@mui/system";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsOpenLoginPopUp } from "../../store/Global";

const labels = {
  1: { text: "Rất Tệ", bgcolor: "#ff3b2f" },
  2: { text: "Tệ", bgcolor: "#d89614" },
  3: { text: "Ổn", bgcolor: "white" },
  4: { text: "Tốt", bgcolor: "#ce93d8" },
  5: { text: "Tuyệt Vời", bgcolor: "#66bb6a" },
};

const MovieItem = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.Auth.authenticated);
  const [value, setValue] = useState(0);
  const [hover, setHover] = React.useState(-1);

  const handleRating = (event, newValue) => {
    if (!isAuthenticated) {
      dispatch(setIsOpenLoginPopUp(true));
      return;
    }
    setValue(newValue);
    // call api
  };

  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={3}
      sx={{ display: "flex", justifyContent: "center" }}
    >
      <Card
        sx={{
          maxWidth: 345,
          bgcolor: (theme) => theme.default.secondBgColor,
        }}
      >
        <CardMedia
          component="img"
          image="https://image.tmdb.org/t/p/w342/q54qEgagGOYCq5D1903eBVMNkbo.jpg"
          sx={{ cursor: "pointer" }}
        />
        <CardContent>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mb: 1,
              height: "20px",
            }}
          >
            <Stack alignItems="center" direction="row">
              <Rating
                size="small"
                sx={{
                  ".MuiRating-iconEmpty": {
                    color: "white",
                  },
                }}
                value={value}
                onChange={handleRating}
                onChangeActive={(event, newHover) => {
                  setHover(newHover);
                }}
                emptyIcon={
                  <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                }
              />
              <Typography
                sx={{ fontSize: "12px", color: "#ccc" }}
                component="span"
              >
                (15)
              </Typography>
            </Stack>
            {value !== null && (
              <Chip
                label={labels[hover !== -1 ? hover : value]?.text}
                size="small"
                sx={{
                  bgcolor: labels[hover !== -1 ? hover : value]?.bgcolor,
                  fontSize: "12px",
                  fontWeight: "500",
                }}
              />
            )}
          </Box>
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
