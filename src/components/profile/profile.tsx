"use client"
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Alert, AlertTitle, Stack } from '@mui/material';
import { deepOrange } from '@mui/material/colors';
import { config } from '../../global/config';

function Copyright(props: any) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function SignUp({ user: data }: any) {
    const [user, setUser] = React.useState(data)
    const [alert, setAlert] = React.useState(<></>)
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const body = JSON.stringify(

            {
                fname: data.get("firstName"),
                lname: data.get("lastName"),
                email: data.get('email'),
                password: data.get('password'),
            }
        )
        try {

            const response: any = await (await fetch(`${config.hostname}/users`, {
                method: "PUT",
                body,
                cache: 'no-cache',
                headers: { 'Content-Type': 'application/json' },
            })).json()
            setUser(response.data)
            setAlert(
                <Alert severity="success">
                    <AlertTitle>Success</AlertTitle>
                    <strong>Profile Updated</strong>
                </Alert>
            )
        } catch (error) {
            setAlert(
                <Alert severity="error">
                    <AlertTitle>FAILED</AlertTitle>
                    <strong>Profile didn't upate</strong>
                </Alert>
            )

        }
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Stack direction="row" spacing={2}>
                    <Avatar
                        sx={{ width: 100, height: 100, textTransform: "capitalize", fontSize: 35 }}
                    >{user.fname}</Avatar>
                </Stack>
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant='standard'
                                autoComplete="given-name"
                                name="firstName"
                                required
                                fullWidth
                                id="firstName"
                                label="First Name"
                                autoFocus
                                defaultValue={user.fname}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant='standard'
                                required
                                fullWidth
                                id="lastName"
                                label="Last Name"
                                name="lastName"
                                autoComplete="family-name"
                                defaultValue={user.lname}

                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                defaultValue={user.email}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="new-password"
                                defaultValue={user.password}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            {/* <FormControlLabel
                                control={<Checkbox value="allowExtraEmails" color="primary" />}
                                label="I want to receive inspiration, marketing promotions and updates via email."
                            /> */}
                            {alert}
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Update Profile
                    </Button>
                </Box>
            </Box>
            {/* <Copyright sx={{ mt: 5 }} /> */}
        </Container>
    );
}