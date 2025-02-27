import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, CircularProgress, Button } from '@mui/material';
import EventService from '../../Services/EventService';
import { useNavigate } from "react-router-dom";
import { Event } from "../../types/models/Event.model"

export default function EventDetailPage() {
    const { id } = useParams<{ id: string }>(); // Get event ID from URL
    const [event, setEvent] = useState<Event>();
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchEvent = async () => {
            try {
                if (id) {
                    await EventService.getEvent(id).then(response => setEvent(response));
                }
            } catch (error) {
                console.error('Error fetching event details:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchEvent();
    }, [id]);

    if (loading) {
        return <CircularProgress sx={{ display: 'block', margin: 'auto', mt: 5 }} />;
    }

    if (!event) {
        return <Typography variant="h5" sx={{ textAlign: 'center', mt: 5 }}>Event not found.</Typography>;
    }

    return (
        <Box sx={{ textAlign: 'center', mt: 5 }}>
            <Typography variant="h3">{event.eventName}</Typography>
            {event.date && <Typography variant="h5">📅 Date: {event.date}</Typography>}
            {event.location && <Typography variant="h5">📍 Location: {event.location}</Typography>}
            <Button
                variant="contained"
                color="primary"
                sx={{ mt: 2 }}
                onClick={() => navigate(`/edit-event/${id}`)}
            >
                ✏️ Edit
            </Button>
        </Box>
    );
}
