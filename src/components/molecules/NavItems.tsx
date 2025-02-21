import React from 'react';
import { Box } from '@mui/material';
import NavItem from '../atoms/NavItem';

export default function NavItems() {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <NavItem label="Your Events" route="/events" />
            <NavItem label="Create Event" route="/create" />
        </Box>
    );
}
