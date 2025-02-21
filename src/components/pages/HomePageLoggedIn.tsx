import React from 'react';
import { Box, Typography } from '@mui/material';
import Header from '../organisms/Header';
import Carousel from '../molecules/Carousel';

export default function HomePageLoggedIn() {
    return (
        <Box display="flex" flexDirection="column" height="100vh" sx={{ background: 'linear-gradient(135deg, #1a1a1a, #2e004f)' }}>
            <Header />

            <Box display="flex" alignItems="center" justifyContent="center" flexDirection="column" flexGrow={1}>
                <Typography variant="h4" color="white" gutterBottom>
                    Future Events
                </Typography>

                <Carousel />
            </Box>
        </Box>
    );
}
