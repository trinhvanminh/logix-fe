import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import {
  Box,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Box sx={{ bgcolor: (theme) => theme.default.bgColor, py: 1 }}>
      <Divider sx={{ bgcolor: (theme) => theme.default.secondBgColor }} />
      <Container maxWidth="lg">
        <Grid container sx={{ my: 2 }}>
          <Grid item xs={3}>
            <Stack spacing={2}>
              <Typography sx={{ color: "white" }}>Liên hệ</Typography>
              <Typography sx={{ color: "white" }}>Giới thiệu</Typography>
              <Typography sx={{ color: "white" }}>Bản quyền</Typography>
            </Stack>
          </Grid>
          <Grid item xs={3}>
            <Stack spacing={2}>
              <Typography sx={{ color: "white" }}>Phim bộ</Typography>
              <Typography sx={{ color: "white" }}>Phim lẻ</Typography>
              <Typography sx={{ color: "white" }}>Phim chiếu rạp</Typography>
            </Stack>
          </Grid>
          <Grid item xs={3}>
            <Stack spacing={2}>
              <Typography sx={{ color: "white" }}>Quảng cáo</Typography>
              <Typography sx={{ color: "white" }}>Góp ý</Typography>
              <Typography sx={{ color: "white" }}>Đầu tư</Typography>
            </Stack>
          </Grid>
          <Grid item xs={3}>
            <Stack spacing={2}>
              <Stack
                sx={{ color: "white" }}
                direction="row"
                alignItems="center"
                spacing={1}
              >
                <FacebookIcon />
                <span>Facebook</span>
              </Stack>
              <Stack
                sx={{ color: "white" }}
                direction="row"
                alignItems="center"
                spacing={1}
              >
                <TwitterIcon />
                <span>Twitter</span>
              </Stack>
              <Stack
                sx={{ color: "white" }}
                direction="row"
                alignItems="center"
                spacing={1}
              >
                <InstagramIcon />
                <span>Instagram</span>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
