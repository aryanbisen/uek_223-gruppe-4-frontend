import React, { useState, useEffect } from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom'; // Import navigation hook
import EventService from "../../Services/EventService";

export default function Carousel() {
    const [events, setEvents] = useState<{ id: string; eventName: string }[]>([]);
    const [index, setIndex] = useState(0);
    const navigate = useNavigate(); // Initialize navigation

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await EventService.getEvents(10, 0); // Fetch first 10 events
                setEvents(response);
            } catch (error) {
                console.error('Error fetching events:', error);
            }
        };

        fetchEvents();
    }, []);

    const nextSlide = () => {
        if (events.length > 0) {
            setIndex((prevIndex) => (prevIndex + 1) % events.length);
        }
    };

    const prevSlide = () => {
        if (events.length > 0) {
            setIndex((prevIndex) => (prevIndex - 1 + events.length) % events.length);
        }
    };

    const goToEventDetail = (eventId: string) => {
        navigate(`/event/${eventId}`); // Navigate to event detail page
    };

    return (
        <Box sx={{ position: 'relative', maxWidth: 800, width: '100%' }}>
            {events.length > 0 ? (
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Typography
                        variant="h5"
                        color="white"
                        sx={{ textAlign: 'center', cursor: 'pointer', textDecoration: 'underline' }}
                        onClick={() => goToEventDetail(events[index].id)} // Click event
                    >
                        {events[index].eventName}
                    </Typography>
                </Box>
            ) : (
                <Typography variant="h6" color="white" sx={{ textAlign: 'center' }}>
                    No events available.
                </Typography>
            )}

            {/* Navigation Buttons */}
            {events.length > 1 && (
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: 0,
                        right: 0,
                        display: 'flex',
                        justifyContent: 'space-between',
                        px: 2,
                    }}
                >
                    <IconButton onClick={prevSlide} sx={{ color: 'white' }}>
                        <ArrowBackIos />
                    </IconButton>
                    <IconButton onClick={nextSlide} sx={{ color: 'white' }}>
                        <ArrowForwardIos />
                    </IconButton>
                </Box>
            )}
        </Box>
    );
}
