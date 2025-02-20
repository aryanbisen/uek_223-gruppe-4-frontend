import { Box, AppBar, Toolbar, Typography, Button, Avatar } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import logo from '../../logo1.png';

export default function HomePageLoggedIn() {
    const navigate = useNavigate();

    return (
        <Box
            display="flex"
            flexDirection="column"
            height="100vh"
        >
            {/* Header */}
            <AppBar position="static" sx={{ backgroundColor: 'black' }}>
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    {/* Logo */}
                    <Box
                        component="img"
                        src={logo}
                        alt="logo"
                        sx={{ height: 40, cursor: 'pointer' }}
                        onClick={() => navigate('/home')}
                    />

                    {/* Navigation */}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Button
                            color="inherit"
                            onClick={() => navigate('/events')}
                            sx={{
                                transition: 'color 0.3s ease-in-out',
                                '&:hover': { color: '#D8BFD8 !important' }
                            }}
                        >
                            Your Events
                        </Button>
                        <Button
                            color="inherit"
                            onClick={() => navigate('/create')}
                            sx={{
                                transition: 'color 0.3s ease-in-out',
                                '&:hover': { color: '#D8BFD8 !important' }
                            }}
                        >
                            Create Event
                        </Button>
                        <Avatar sx={{ cursor: 'pointer' }} onClick={() => navigate('/profile')} />
                    </Box>
                </Toolbar>
            </AppBar>

            {/* Main Content */}
            <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                flexDirection="column"
                flexGrow={1}
                sx={{
                    background: 'linear-gradient(135deg, #1a1a1a, #2e004f)',
                    color: '#fff',
                    textAlign: 'center',
                }}
            >
            </Box>
        </Box>
    );
}
