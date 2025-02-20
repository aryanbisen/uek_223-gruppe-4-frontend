import {
    Paper,
    Grid,
    TextField,
    Button,
    Typography,
    Link,
} from '@mui/material';
import React, { useContext } from 'react';
import { Form, Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import ActiveUserContext from '../../../Contexts/ActiveUserContext';

const validationSchema = Yup.object().shape({
    email: Yup.string(),
    password: Yup.string(),
});

const Login = () => {
    const paperStyle = {
        padding: 20,
        height: '70vh',
        width: 280,
    };
    const btnstyle = { marginTop: '16px' };
    const navigate = useNavigate();
    const { login } = useContext(ActiveUserContext);

    const handleSubmit = (values: { email: string; password: string }) => {
        login(values.email.toLowerCase(), values.password)
            .then(() => {
                console.log(values);
                navigate('/home');
            })
            .catch((error) => {
                if (
                    (typeof error.response !== 'undefined' &&
                        error.response.status === 401) ||
                    error.response.status === 403
                ) {
                    alert('invalid login');
                } else {
                    alert('login Error');
                }
            });
    };

    return (
        <Grid
            container
            style={{
                background: 'linear-gradient(135deg, #2c2c2c, #4b0082)',
                minHeight: '100vh',
            }}
            justifyContent="center"
            alignItems="center"
        >
            <Paper elevation={10} style={paperStyle}>
                <Grid container direction="column" spacing={2}>
                    <Grid item>
                        <Typography variant="h4" align="center">
                            Sign In
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body2" align="center">
                            Default login:
                            <br />
                            email: admin@example.com
                            <br />
                            pw: 1234
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Formik
                            initialValues={{
                                email: '',
                                password: '',
                            }}
                            enableReinitialize
                            validationSchema={validationSchema}
                            onSubmit={handleSubmit}
                            validateOnChange
                            isInitialValid
                        >
                            {(props) => (
                                <Form onSubmit={props.handleSubmit}>
                                    <Grid container direction="column" spacing={2}>
                                        <Grid item>
                                            <TextField
                                                label="email"
                                                id="email"
                                                placeholder="Enter username"
                                                fullWidth
                                                required
                                                autoFocus
                                                onChange={props.handleChange}
                                                onBlur={props.handleBlur}
                                                value={props.values.email}
                                            />
                                            {props.errors.email && (
                                                <div id="feedback">{props.errors.email}</div>
                                            )}
                                        </Grid>
                                        <Grid item>
                                            <TextField
                                                id="password"
                                                label="password"
                                                placeholder="Enter password"
                                                type="password"
                                                fullWidth
                                                required
                                                onChange={props.handleChange}
                                                onBlur={props.handleBlur}
                                                value={props.values.password}
                                            />
                                            {props.errors.password && (
                                                <div id="feedback">{props.errors.password}</div>
                                            )}
                                        </Grid>
                                        <Grid item>
                                            <Button
                                                type="submit"
                                                color="primary"
                                                variant="contained"
                                                style={btnstyle}
                                                fullWidth
                                            >
                                                Sign in
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </Form>
                            )}
                        </Formik>
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
    );
};

export default Login;
