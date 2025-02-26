import React, { useState, useEffect } from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import axios from 'axios';

export default function Carousel() {
    const [events, setEvents] = useState<any[]>([]); // No interface, just using `any`
    const [index, setIndex] = useState(0);

    // Fetch events from the backend when the component mounts
    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await axios.get('http://localhost:8080/event'); // Assuming backend is at this URL
                setEvents(response.data); // Set the response data (only names will be used)
            } catch (error) {
                console.error('Error fetching events:', error);
            }
        };

        fetchEvents();
    }, []);

    const nextSlide = () => {
        setIndex((prevIndex) => (prevIndex + 1) % events.length);
    };

    const prevSlide = () => {
        setIndex((prevIndex) => (prevIndex - 1 + events.length) % events.length);
    };

    return (
        <Box sx={{ position: 'relative', maxWidth: 800, width: '100%' }}>
            {events.length > 0 ? (
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        backgroundColor: 'transparent',
                        border: 'none',
                    }}
                >
                    <Typography variant="h5" color="white" sx={{ textAlign: 'center' }}>
                        {events[index].eventName} {/* Display only name */}
                    </Typography>
                </Box>
            ) : (
                <div>Loading events...</div>
            )}

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
    );
}
