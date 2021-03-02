import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import AdminSideNav from "../AdminSideNav/AdminSideNav";
import Axios from "axios";
import "./AdminInfo.css";

import AddAdminRodal from "./AddAdminRodal";

import {
  Typography,
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@material-ui/core";
import PersonAddIcon from "@material-ui/icons/PersonAdd";

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

const AdminInfo = () => {
  const classes = useStyles();

  const [listAdmin, setlistAdmin] = useState([]);
  const [page, setPage] = React.useState(0);
  const [data, setData] = useState([]);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const [render, setRender] = useState(false);

  const expireToken = () => {
    localStorage.clear() && <Redirect exact to="/Admin-Login" />;
  };

  useEffect(() => {
    Axios.get("http://localhost:8000/api/admin", {
      headers: {
        "content-type": "multipart/form-data",
        Authorization: "Bearer " + localStorage.getItem("tokens"),
      },
    }).then((response) => {
      setlistAdmin(response.data.admin);
    });
  }, [render]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(event.target.value, 5);
    setPage(0);
  };

  /**  Rodal Delete Functions  */
  const [visible, setVisible] = useState(false);

  const show = () => {
    setVisible(true);
  };

  const hide = () => {
    setVisible(false);
  };

  /** Delete Admin */

  const deleteAdmin = async (id) => {
    try {
      await Axios.delete(`http://localhost:8000/api/admin/${id} `, {
        headers: {
          Accept: "application/json",
          "content-type": "multipart/form-data",
          Authorization: "Bearer " + localStorage.getItem("tokens"),
        },
      }).then((response) => {
        if (response.data.status === "Token is Expired") {
          expireToken();
          return window.location.reload();
        } else if (response.status === 200) {
          console.log(response);
          setRender((prev) => !prev);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={classes.root}>
      <AdminSideNav />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Paper>
          <TableContainer>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <TableCell align="right">
                    <b>Username</b>
                  </TableCell>
                  <TableCell align="right">
                    <b>FirstName</b>
                  </TableCell>
                  <TableCell align="right">
                    <b>LastName</b>
                  </TableCell>
                  <TableCell align="right">
                    <b>Email</b>
                  </TableCell>
                  <TableCell align="right"></TableCell>
                  <TableCell align="right"></TableCell>
                  <TableCell align="right">
                    <PersonAddIcon
                      onClick={show}
                      style={{ cursor: "pointer" }}
                    />
                    <AddAdminRodal
                      visible={visible}
                      hide={hide}
                      animation={"animation"}
                      duration={500}
                      closeMaskOnClick={true}
                      closeOnEsc={true}
                      height={550}
                      width={500}
                      render={{ setRender }}
                    />
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {listAdmin
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((val) => {
                    return (
                      <TableRow key={val.id}>
                        <TableCell align="right">{val.username}</TableCell>
                        <TableCell align="right">{val.firstname}</TableCell>
                        <TableCell align="right">{val.lastname}</TableCell>
                        <TableCell align="right">{val.email}</TableCell>
                        <TableCell align="right"></TableCell>
                        <TableCell align="right">
                          <input type="submit" value="Edit" className="edit" />
                        </TableCell>
                        <TableCell align="right">
                          <input
                            type="submit"
                            value="Delete"
                            className="delete"
                            onClick={() => deleteAdmin(val.id)}
                          />
                        </TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[4, 7]}
            component="div"
            count={listAdmin.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </Paper>
      </main>
    </div>
  );
};

export default AdminInfo;
