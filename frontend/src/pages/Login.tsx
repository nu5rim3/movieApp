import React, { useState, useEffect } from 'react';
import Button from "@mui/material/Button";
import SendIcon from '@mui/icons-material/Send';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

// component 
import Loader from '../components/Loader';

import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

// action
import { loginUser } from '../actions/user.action';
import { RootState } from '../reducer';
import ErrorAlert from '../components/ErrorAlert';

const Login: React.FC = () => {

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const dispatch = useDispatch();
    const userLogin = useSelector((state: RootState) => state.userLogin);
    const { data, loading, errorStatus } = userLogin;
    let { error } = userLogin;

    const onSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(loginUser({ email: email, password: password }));
    }


    return (
        <Container maxWidth="sm">
            <Box sx={{ my: 5 }}>

                <Box sx={{ boxShadow: 5, borderRadius: 3, p: 5 }} display="flex" justifyContent="center" alignItems="center">
                    {
                        loading ? (
                            <Loader />
                        ) :  (
                            <Box>
                                <form onSubmit={onSignIn}>
                                    <TextField
                                        required
                                        sx={{ mb: 2, width: '100%' }}
                                        id="outlined-required"
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
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <Button
                                        variant="contained"
                                        endIcon={<SendIcon />}
                                        sx={{ mb: 2 }}
                                        disableElevation
                                        type="submit" >
                                        sign in
                                    </Button>
                                </form>
                                <Link to="/register" style={{ textDecoration: 'none' }}>Create new Account</Link>
                            </Box>
                        )}
                        {error ? (
                            <ErrorAlert message={errorStatus} />
                        ) :<></>}
                </Box>
            </Box>
        </Container>
    )
}

export default Login;