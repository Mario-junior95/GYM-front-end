import React from "react";

import { Typography, useTheme, makeStyles } from "@material-ui/core";
import AdminSideNav from "../AdminSideNav/AdminSideNav";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
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
}));

const WorkWithUs = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AdminSideNav />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Typography paragraph>Work With Us</Typography>
      </main>
    </div>
  );
};

export default WorkWithUs;
