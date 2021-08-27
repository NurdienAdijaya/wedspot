import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { Avatar } from "@material-ui/core";
import { Notifications } from "@material-ui/icons";
<<<<<<< HEAD
import { Link } from "react-router-dom";
=======
import { useDispatch } from "react-redux";
>>>>>>> 9b0c065cc70dff54b01626eda33b400d63a38907

export function Notif() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
<<<<<<< HEAD
 
=======

>>>>>>> 9b0c065cc70dff54b01626eda33b400d63a38907
  return (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <Notifications />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>content</MenuItem>
      </Menu>
    </div>
  );
}

export function AvatarIcon({ avatar }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
<<<<<<< HEAD
=======
  const dispatch = useDispatch();
>>>>>>> 9b0c065cc70dff54b01626eda33b400d63a38907

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.clear();
    window.location.replace("/");
  };

  return (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <Avatar src={avatar} onClick={handleClick} />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
<<<<<<< HEAD
        <MenuItem onClick={handleClose}><Link to="/account">Profile</Link></MenuItem>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
=======
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>
          <p onClick={handleLogout}>Logout</p>
        </MenuItem>
>>>>>>> 9b0c065cc70dff54b01626eda33b400d63a38907
      </Menu>
    </div>
  );
}
