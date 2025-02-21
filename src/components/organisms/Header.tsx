import React from 'react';
import { AppBar, Toolbar, Box } from '@mui/material';
import Logo from '../atoms/Logo';
import NavItems from '../molecules/NavItems';
import UserIcon from '../atoms/UserIcon';

export default function Header() {
    return (
        <AppBar position="static" sx={{ backgroundColor: 'black' }}>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Logo />
                <NavItems />
                <UserIcon />
            </Toolbar>
        </AppBar>
    );
}
