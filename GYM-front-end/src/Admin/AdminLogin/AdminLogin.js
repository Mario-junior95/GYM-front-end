import React, { useState, useEffect, inputEl } from "react";
import { Redirect } from "react-router-dom";
import Axios from "axios";

import "./AdminLogin.css";

// MUI Core
import { Button, Container, Grid, TextField } from "@material-ui/core";

const AdminLogin = () => {
  /**     states    */
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [tokens, setTokens] = useState("");

  /** Error States */

  const [usernameError, setUserNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [handleError, setHandleError] = useState("");

  const HandleLogin = async (e) => {
    e.preventDefault();
    try {
      await Axios.post("http://localhost:8000/api/admin-login", {
        username: username,
        password: password,
      }).then((response) => {
        setTokens(response.data.access_token);

        localStorage.setItem("username", response.data.admin.username);
        localStorage.setItem("idAdmin", response.data.admin.id);
        response &&
          response.data &&
          response.data.access_token &&
          localStorage.setItem("tokens", response.data.access_token);
      });
      window.location.reload();
    } catch (error) {
      if (error.response) {
        try {
          setUserNameError(error.response.data.errors.username);
          setPasswordError(error.response.data.errors.password);
        } catch (error) {
          setHandleError("Invalid Username or password");
        }
      }
    }
  };

  const [redirect, setRedirect] = useState(null);

  useEffect(() => {
    setRedirect(localStorage.getItem("tokens"));
  }, []);

  if (redirect) {
    return <Redirect exact to="/admin" />;
  } else {
    <Redirect exact to="/admin-Login" />;
  }

  return (
    <Container maxWidth="xs" className="adminContainer">
      <form>
        <h1>Admin Panel</h1>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <span style={{ color: "red", marginLeft: "4px" }}>
                {handleError}
              </span>
              <span style={{ color: "red", marginLeft: "4px" }}>
                {usernameError}
              </span>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  inputRef={inputEl}
                  label="Username"
                  name="username"
                  size="small"
                  variant="outlined"
                  onChange={(e) => {
                    setUsername(e.target.value);
                    setUserNameError("");
                    setPasswordError("");
                  }}
                  value={username}
                />
              </Grid>
              <span style={{ color: "red", marginLeft: "9px" }}>
                {passwordError}
              </span>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Password"
                  name="password"
                  size="small"
                  type="password"
                  variant="outlined"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setPasswordError("");
                    setUserNameError("");
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Button
              onClick={HandleLogin}
              color="primary"
              fullWidth
              type="submit"
              variant="contained"
            >
              Log in
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default AdminLogin;
