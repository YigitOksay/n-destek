import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
  Alert,
  Snackbar
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/main.scss";
import axios from "axios";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [open, setOpen] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const navigate = useNavigate();
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/auth/login",
        {
          email: email,
          password: password
        }
      );

      const jwtToken = response.data.access_token;
      localStorage.setItem("jwt", jwtToken);
      navigate("/");
    } catch (error) {
      setOpen(true);
      console.error(error);
    }
  };

  // const handleLogin = async () => {
  //   try {
  //     const response = await axios.post("auth/login/", {
  //       email: email,
  //       password: password
  //     });

  //     const jwtToken = response.data.token;
  //     localStorage.setItem("jwt", jwtToken);
  //     navigate("/");
  //   } catch (error) {
  //     console.error("Giriş hatası: ", error);
  //   }
  // };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <>
      <Grid container spacing={0} className="Login">
        <Grid item xs={12} md={6} lg={6} className="leftContent">
          <Link to="/">
            <img src="/document/svg/logo-dark.png" alt="N-Destek Logo" />
          </Link>
          <Grid item md={12} className="Form">
            <Box className="formText">
              <Typography variant="h2">Kullanıcı Bilgisi ile Giriş</Typography>
              <Typography>
                E-Posta adresin ve şifreni girerek N-Destek hesabına giriş
                yapabilirsin.
              </Typography>
            </Box>
            <Box className="FormContent">
              {error && (
                <Snackbar
                  open={open}
                  autoHideDuration={6000}
                  onClose={handleClose}
                >
                  <Alert
                    onClose={handleClose}
                    severity="error"
                    sx={{ width: "100%" }}
                  >
                    {error}
                  </Alert>
                </Snackbar>
              )}
              {success && (
                <Snackbar
                  open={open}
                  autoHideDuration={6000}
                  onClose={handleClose}
                >
                  <Alert
                    onClose={handleClose}
                    severity="success"
                    sx={{ width: "100%" }}
                  >
                    {success}
                  </Alert>
                </Snackbar>
              )}
              <FormControl sx={{ m: 2, width: "45vh" }} variant="outlined">
                <TextField
                  id="outlined-multiline-flexible"
                  label="Kullanıcı Adı"
                  multiline
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
              <FormControl sx={{ m: 2, width: "45vh" }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">
                  Şifre
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
                <Box>
                  <Button className="forgotBtn">Şifremi Unuttum</Button>
                </Box>
              </FormControl>
              <FormControl sx={{ m: 2, width: "45vh" }}>
                <Button
                  variant="contained"
                  className="LoginBtn"
                  onClick={handleLogin}
                >
                  Giriş
                </Button>
              </FormControl>
            </Box>
          </Grid>
          <Box className="copyright">
            <Typography>
              N-Destek Narval.net Destek Hizmeti Ürünüdür.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} lg={6} className="rightContent">
          <img src="/document/images/login.jpg" alt="Login Woman" />
        </Grid>
      </Grid>
    </>
  );
}

export default Login;
