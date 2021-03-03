import React, { useState } from "react";
import clsx from "clsx";
import "./AdminSideNav.css";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import PersonIcon from "@material-ui/icons/Person";
import LockIcon from "@material-ui/icons/Lock";
import { Link, useHistory } from "react-router-dom";
import { useConfirm } from "material-ui-confirm";
import LogoWhite from "../../Images/logoWhite.svg";

import {
  makeStyles,
  useTheme,
  Drawer,
  AppBar,
  Toolbar,
  List,
  CssBaseline,
  Typography,
  ListItem,
  IconButton,
  Button,
} from "@material-ui/core";

// Import ChangePassword Rodal

import ChangePasswordRodal from "../ChangePassword/ChangePasswordRodal";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(4) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(4.5) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  button: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export default function AdminSideNav() {
  const classes = useStyles();
  const history = useHistory();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  /**    Rodal Password   */

  const [visible, setVisible] = useState(false);

  const show = () => {
    setVisible(true);
  };

  const hide = () => {
    setVisible(false);
  };

  /**    Logout Button Confirmation */

  const confirm = useConfirm();

  const fire = () => {
    confirm({
      title: "Are you sure you want to Exit!!!",
    })
      .then(() => {
        localStorage.removeItem("idAdmin");
        localStorage.removeItem("username");
        localStorage.removeItem("tokens");
        history.push("/");
      })
      .catch(() => {
        history.push("/admin");
      });
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Admin Panel
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <img
          src={LogoWhite}
          alt="logo_error"
          style={{ margin: "-4vw 0 0 0" }}
        />
        <List>
          <ListItem>
            <Link to="/admin">
              <div>
                <PersonIcon />
                Admins
              </div>
            </Link>
          </ListItem>
          <ListItem>
            <Link to="/admin-memberShip">Members</Link>
          </ListItem>
          <ListItem>
            <Link onClick={show} style={{ cursor: "pointer" }}>
              <div>
                <LockIcon />
                Change Password
              </div>
            </Link>
          </ListItem>
          <ListItem className={classes.root}>
            <Button color="secondary" onClick={fire}>
              Logout
            </Button>
          </ListItem>
        </List>
      </Drawer>
      {visible && (
        <ChangePasswordRodal
          visible={visible}
          hide={hide}
          animation={"slideLeft"}
          duration={500}
          closeMaskOnClick={true}
          closeOnEsc={true}
          height={400}
          width={500}
        />
      )}
    </div>
  );
}
