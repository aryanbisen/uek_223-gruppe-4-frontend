import {
    Paper,
    Grid,
    Typography, Button,
} from '@mui/material';
import React from 'react';
import {useNavigate} from "react-router-dom";


const ErrorPage = () => {
    const paperStyle = {
        padding: 20,
        height: '70vh',
        width: 320
    };
    const btnstyle = {marginTop: '16px'};
    const navigate = useNavigate();

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
                <Typography variant="h4" color="black" gutterBottom>
                    ERROR
                </Typography>
                <Button
                    variant="contained"
                    sx={{
                        mt: 3,
                        backgroundColor: '#CBC3E3',
                        '&:hover': { backgroundColor: '#2e004f' },
                    }}
                    onClick={() => navigate('/home')}
                >
                    Return Home
                </Button>
            </Paper>
        </Grid>
    );
};

export default ErrorPage;
