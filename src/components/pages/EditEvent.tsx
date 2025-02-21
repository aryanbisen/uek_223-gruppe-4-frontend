import React from 'react';
import { Box } from '@mui/material';
import Header from '../organisms/Header';
import EditEventForm from '../organisms/EditEventForm';

const EditEvent: React.FC = () => {
    return (
        <Box>
            <Header />
            <EditEventForm />
        </Box>
    );
};

export default EditEvent;
