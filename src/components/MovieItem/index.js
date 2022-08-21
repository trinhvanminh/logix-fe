import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";

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
  CardActions,
  IconButton,
} from "@mui/material";
import { Stack } from "@mui/system";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsOpenLoginPopUp } from "../../store/Global";

const labels = {
  1: { text: "Rất Tệ", bgcolor: "#ff3b2f" },
  2: { text: "Tệ", bgcolor: "#d89614" },
  3: { text: "Ổn", bgcolor: "white" },
  4: { text: "Tốt", bgcolor: "#ce93d8" },
  5: { text: "Tuyệt Vời", bgcolor: "#66bb6a" },
};

const MovieItem = ({ movie }) => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.Auth.authenticated);
  const [value, setValue] = useState(
    parseInt((movie?.like * 5) / (movie?.like + movie?.dislike))
  );
  const [hover, setHover] = React.useState(-1);
  const [likeStatus, setlikeStatus] = useState(0);

  useEffect(() => {
    if (movie?.my_rate_status) {
      setlikeStatus(movie.my_rate_status);
    }
  }, [movie]);

  const handleLikeDislike = (value) => {
    if (!isAuthenticated) {
      dispatch(setIsOpenLoginPopUp(true));
      return;
    }
    setlikeStatus(value);
    //call api
    // if errror => setlikeStatus(0)
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
          image={movie?.thumbnail_url}
          sx={{
            cursor: "pointer",
            height: "300px",
            objectFit: "cover",
            transition: "all 0.1s ease-in-out",
            ":hover": {
              opacity: 0.6,
              scale: "1.02",
            },
          }}
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
                onChangeActive={(event, newHover) => {
                  setHover(newHover);
                }}
                emptyIcon={
                  <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                }
              />
              <Typography
                sx={{
                  fontSize: "12px",
                  color: "#ccc",
                }}
                component="span"
              >
                ({movie?.like + movie?.dislike || 0})
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
          <Typography
            sx={{
              fontWeight: "bold",
              color: "white",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              my: 1,
              cursor: "pointer",
              ":hover": {
                textDecoration: "underline",
              },
            }}
            title={movie?.title}
          >
            {movie?.title}
          </Typography>
          <Typography
            sx={{
              fontSize: "12px",
              color: "#ccc",
              maskImage: "linear-gradient(#fff,#fff,hsla(0,0%,100%,0))",
              maxHeight: "34px",
              overflow: "hidden",
            }}
            title={movie?.description}
          >
            {movie?.description}
          </Typography>
        </CardContent>
        <CardActions sx={{ mt: -2 }}>
          <Stack direction="row">
            {likeStatus !== 1 ? (
              <IconButton onClick={() => handleLikeDislike(1)}>
                <ThumbUpOffAltIcon sx={{ color: "#9099a0" }} />
              </IconButton>
            ) : (
              <IconButton onClick={() => handleLikeDislike(0)}>
                <ThumbUpIcon sx={{ color: "green" }} />
              </IconButton>
            )}
            {likeStatus !== -1 ? (
              <IconButton onClick={() => handleLikeDislike(-1)}>
                <ThumbDownOffAltIcon sx={{ color: "#9099a0" }} />
              </IconButton>
            ) : (
              <IconButton onClick={() => handleLikeDislike(0)}>
                <ThumbDownAltIcon sx={{ color: "green" }} />
              </IconButton>
            )}
          </Stack>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default MovieItem;
