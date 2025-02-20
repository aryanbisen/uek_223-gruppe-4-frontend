import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface NavItemProps {
    label: string;
    route: string;
}

export default function NavItem({ label, route }: NavItemProps) {
    const navigate = useNavigate();

    return (
        <Button
            color="inherit"
            onClick={() => navigate(route)}
            sx={{ transition: 'color 0.3s ease-in-out', '&:hover': { color: '#D8BFD8 !important' } }}
        >
            {label}
        </Button>
    );
}
