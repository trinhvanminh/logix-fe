import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Logout from "@mui/icons-material/Logout";
import Settings from "@mui/icons-material/Settings";
import { Avatar } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import stringAvatar from "../../utils/stringAvatar";
// import { useDispatch } from "react-redux";
// import { setAuthenticated } from "store/Auth";
export default function UserMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const id = open ? "profile" : undefined;
  //   const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => {
    handleClose();
    // localStorage.removeItem("token");
    // dispatch(setAuthenticated(false));
  };
  return (
    <>
      <IconButton
        onClick={handleClick}
        size="small"
        sx={{ ml: 2 }}
        disableRipple
      >
        <Avatar {...stringAvatar("Minh")} />
      </IconButton>
      <Menu
        id={id}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            backgroundColor: (theme) => theme.default.secondBgColor,
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={() => navigate("/user")}>
          <ListItemIcon>
            <AccountCircleIcon fontSize="small" />
          </ListItemIcon>
          Profile
        </MenuItem>
        <MenuItem onClick={() => navigate("/company")}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Balance
        </MenuItem>
        <MenuItem onClick={handleLogout}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </>
  );
}
