import MenuIcon from "@mui/icons-material/Menu";
import {
  Box,
  Button,
  Container,
  IconButton,
  Stack,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UserMenu from "../UserMenu";
import CustomButton from "../CustomButton";

const Header = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState(1);
  const [scrollTop, setScrollTop] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    const handleBgColorOnScroll = () => {
      setScrollTop(window.pageYOffset);
    };
    window.addEventListener("scroll", handleBgColorOnScroll);
    return () => {
      window.removeEventListener("scroll", handleBgColorOnScroll);
    };
  }, [scrollTop]);

  return (
    <Box
      sx={{
        width: "100vw",
        height: "56px",
        position: "fixed",
        top: 0,
        backgroundColor: (theme) =>
          scrollTop < 40 ? theme.default.bgColor : theme.default.secondBgColor,
        zIndex: 999,
        transition: "background-color 0.3s ease-in-out",
      }}
    >
      <Container maxWidth="xl" sx={{ height: "100%" }}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ height: "100%" }}
        >
          <IconButton
            color="inherit"
            sx={{
              mr: 2,
              display: {
                lg: "none",
                xl: "none",
                md: "none",
                sm: "block",
                xs: "block",
              },
            }}
          >
            <MenuIcon />
          </IconButton>
          <Button sx={{ height: "100%" }}>
            <img
              src={require("../../assets/images/logix-logo.png")}
              alt="logo"
              onClick={() => navigate("/")}
              style={{ height: "54px" }}
            />
          </Button>
          <Tabs
            value={value}
            onChange={handleChange}
            sx={{
              height: "100%",
              ".MuiTabs-scroller": {
                height: "100%",
                ".MuiTabs-flexContainer": {
                  height: "100%",
                },
              },
              display: {
                lg: "block",
                xl: "block",
                md: "block",
                sm: "none",
                xs: "none",
              },
            }}
          >
            <Tab value={1} label={<Typography>Phim mới</Typography>} />
            <Tab value={2} label={<Typography>Phim lẻ</Typography>} />
            <Tab value={3} label={<Typography>Phim bộ</Typography>} />
            <Tab value={4} label={<Typography>Phim chiếu rạp</Typography>} />
          </Tabs>
          <Stack
            spacing={2}
            direction="row"
            sx={{ alignItems: "center", height: "32px" }}
          >
            <UserMenu />
            <CustomButton onClick={() => navigate("/auth")}>Login</CustomButton>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Header;
