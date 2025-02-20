import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Avatar, Box, Card, CardContent, CardMedia, IconButton } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import logo from '../../ourspacelogo.png';

const events = [
    { id: 1, name: 'Music Festival', image: 'https://source.unsplash.com/800x500/?concert' },
    { id: 2, name: 'Tech Conference', image: 'https://source.unsplash.com/800x500/?technology' },
    { id: 3, name: 'Art Exhibition', image: 'https://source.unsplash.com/800x500/?art' },
    { id: 4, name: 'Food Festival', image: 'https://source.unsplash.com/800x500/?food' },
    { id: 5, name: 'Sports Championship', image: 'https://source.unsplash.com/800x500/?sports' },
];

export default function EventCarousel() {
    const [index, setIndex] = useState(0);
    const navigate = useNavigate();

    const nextSlide = () => {
        setIndex((prevIndex) => (prevIndex + 1) % events.length);
    };

    const prevSlide = () => {
        setIndex((prevIndex) => (prevIndex - 1 + events.length) % events.length);
    };

    return (
        <Box display="flex" flexDirection="column" height="100vh" sx={{ background: 'linear-gradient(135deg, #1a1a1a, #2e004f)' }}>
            <AppBar position="static" sx={{ backgroundColor: 'black' }}>
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Box
                        component="img"
                        src={logo}
                        alt="logo"
                        sx={{ height: 40, cursor: 'pointer' }}
                        onClick={() => navigate('/home')}
                    />
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Button
                            color="inherit"
                            onClick={() => navigate('/events')}
                            sx={{ transition: 'color 0.3s ease-in-out', '&:hover': { color: '#D8BFD8 !important' } }}
                        >
                            Your Events
                        </Button>
                        <Button
                            color="inherit"
                            onClick={() => navigate('/create')}
                            sx={{ transition: 'color 0.3s ease-in-out', '&:hover': { color: '#D8BFD8 !important' } }}
                        >
                            Create Event
                        </Button>
                        <Avatar sx={{ cursor: 'pointer' }} onClick={() => navigate('/profile')} />
                    </Box>
                </Toolbar>
            </AppBar>

            <Box display="flex" alignItems="center" justifyContent="center" flexDirection="column" flexGrow={1}>
                <Typography variant="h4" color="white" gutterBottom>
                    Future Events
                </Typography>

                {/* Carousel Card */}
                <Box sx={{ position: 'relative', maxWidth: 800, width: '100%' }}>
                    <Card sx={{ display: 'flex', flexDirection: 'column', backgroundColor: 'transparent', border: 'none' }}>
                        <CardMedia
                            component="img"
                            height="400"
                            image={events[index].image}
                            alt={events[index].name}
                        />
                        <CardContent sx={{ textAlign: 'center' }}>
                            <Typography variant="h5" color="white">{events[index].name}</Typography>
                        </CardContent>
                    </Card>

                    {/* Navigation Buttons */}
                    <Box sx={{ position: 'absolute', top: '50%', left: '10px', right: '10px', display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                        <IconButton onClick={prevSlide} sx={{ color: 'white' }}>
                            <ArrowBackIos />
                        </IconButton>
                        <IconButton onClick={nextSlide} sx={{ color: 'white' }}>
                            <ArrowForwardIos />
                        </IconButton>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}
