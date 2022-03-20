import React, { useState } from 'react';

// mui
import Button from "@mui/material/Button";
import SendIcon from '@mui/icons-material/Send';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

// component 
import Loader from '../components/Loader'

import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

// action
import { register } from '../actions/user.action';
import { RootState } from '../reducer';
import ErrorAlert from '../components/ErrorAlert';

const Register: React.FC = () => {

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const dispatch = useDispatch();
  const userLogin = useSelector((state: RootState) => state.userLogin);
  const { loading, error, errorStatus } = userLogin;

  const onSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(register({ name: name, email: email, password: password }));
  }

  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 3 }}>
        {
          loading ? (
            <Loader />
          ) : error ? (
            <ErrorAlert message={errorStatus} />
          ) : (
            <Box sx={{ boxShadow: 5, borderRadius: 3, p: 5 }}>
              <form onSubmit={onSignUp}>
                <TextField
                  required
                  sx={{ mb: 2, width: '100%' }}
                  id="outlined-name-input"
                  label="Name"
                  placeholder="Steve"
                  onChange={(e) => setName(e.target.value)}
                />
                <TextField
                  required
                  sx={{ mb: 2, width: '100%' }}
                  id="outlined-email-input"
                  label="Email"
                  type="email"
                  placeholder="example@gmail.com"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                  required
                  sx={{ mb: 2, width: '100%' }}
                  id="outlined-password-input"
                  label="Password"
                  type="password"
                  autoComplete="current-password"
                  onChange={(e) => setPassword(e.target.value)}
                />

                <Button
                  variant="contained"
                  endIcon={<SendIcon />}
                  sx={{ mb: 2 }}
                  disableElevation
                  type="submit" >
                  create
                </Button>

              </form>
              <Link to="/login" style={{ textDecoration: 'none' }}>Login to My Account</Link>
            </Box>
          )}
      </Box>
    </Container>
  )
}

export default Register;