import React from 'react';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import logo from '../../ourspacelogo.png';

export default function Logo() {
    const navigate = useNavigate();

    return (
        <Box
            component="img"
            src={logo}
            alt="logo"
            sx={{ height: 40, cursor: 'pointer' }}
            onClick={() => navigate('/home')}
        />
    );
}
