import React from 'react';
import { Avatar } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function UserIcon() {
    const navigate = useNavigate();

    return <Avatar sx={{ cursor: 'pointer' }} onClick={() => navigate('/profile')} />;
}
