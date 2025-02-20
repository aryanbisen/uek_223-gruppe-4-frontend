import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

interface CarouselItemProps {
    image: string;
    title: string;
}

export default function CarouselItem({ image, title }: CarouselItemProps) {
    return (
        <Card sx={{ display: 'flex', flexDirection: 'column', backgroundColor: 'transparent', border: 'none' }}>
            <CardMedia component="img" height="400" image={image} alt={title} />
            <CardContent sx={{ textAlign: 'center' }}>
                <Typography variant="h5" color="white">
                    {title}
                </Typography>
            </CardContent>
        </Card>
    );
}
