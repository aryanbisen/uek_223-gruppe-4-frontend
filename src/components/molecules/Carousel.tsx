import React, { useState } from 'react';
import { Box, IconButton } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import CarouselItem from '../atoms/CarouselItem';

const events = [
    { id: 1, name: 'Music Festival', image: 'https://source.unsplash.com/800x500/?concert' },
    { id: 2, name: 'Tech Conference', image: 'https://source.unsplash.com/800x500/?technology' },
    { id: 3, name: 'Art Exhibition', image: 'https://source.unsplash.com/800x500/?art' },
    { id: 4, name: 'Food Festival', image: 'https://source.unsplash.com/800x500/?food' },
    { id: 5, name: 'Sports Championship', image: 'https://source.unsplash.com/800x500/?sports' },
];

export default function Carousel() {
    const [index, setIndex] = useState(0);

    const nextSlide = () => {
        setIndex((prevIndex) => (prevIndex + 1) % events.length);
    };

    const prevSlide = () => {
        setIndex((prevIndex) => (prevIndex - 1 + events.length) % events.length);
    };

    return (
        <Box sx={{ position: 'relative', maxWidth: 800, width: '100%' }}>
            <CarouselItem image={events[index].image} title={events[index].name} />

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
