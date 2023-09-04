import { useContext, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { Helmet } from "react-helmet-async";
import { Breadcrumbs, Link, Typography } from "@mui/material";
import LoginForm from "./LoginForm";
import { authentication } from "../../utils/authenticationRequest";
import { responseStatus } from "../../utils/consts";
import { AppContext } from "../../App";

const Login = () => {
  const navigate = useNavigate();

  const { setAuthenticated, authenticated } = useContext(AppContext);

  const [authData, setAuthData] = useState();

  const authenticationRequest = () => {
    if (!authData) {
      return;
    }

    axios.post(`/api/login-check`, authData).then(response => {
      if (response.status === responseStatus.HTTP_OK && response.data.token) {
        localStorage.setItem("token", response.data.token);
        setAuthenticated(true);
      }
    }).catch(error => {
      console.error(error.response.data.detail === "The presented password is invalid." ? "Invalid password" : error.response.data.detail, "error");
    });
  };

  useEffect(() => {
    authenticationRequest();
  }, [authData]);

  useEffect(() => {
    authentication(navigate, authenticated);
  }, [authenticated]);

  return (
    <>
      <Helmet>
        <title>
          Sign in
        </title>
      </Helmet>
      <Breadcrumbs aria-label="breadcrumb">
        <Link component={NavLink} underline="hover" color="inherit" to="/">
          Home
        </Link>
        <Typography color="text.primary">Sign In</Typography>
      </Breadcrumbs>
      <LoginForm
        authData={authData}
        setAuthData={setAuthData}
      />
    </>
  );
};

export default Login;