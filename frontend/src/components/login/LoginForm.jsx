import React from "react";
import { Button, TextField, Typography } from "@mui/material";

const LoginForm = ({ setAuthData }) => {
  const handleSubmit = (event) => {
    event.preventDefault();

    setAuthData({
      username: event.target.username.value,
      password: event.target.password.value
    });
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <Typography variant="h4" component="h1">
        Sign in!
      </Typography>
      <TextField
        variant="standard"
        id="username"
        type="email"
        label="E-mail"
        name="username"
        required
      />
      <TextField
        variant="standard"
        id="password"
        type="password"
        label="Password"
        name="password"
        required
      />
      <Button
        variant="contained"
        type="submit"
      >
        Sign In
      </Button>
    </form>
  );
};

export default LoginForm;