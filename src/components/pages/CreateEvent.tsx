import React from 'react';
import { Box } from '@mui/material';
import Header from '../organisms/Header';
import CreateEventForm from '../organisms/CreateEventForm';

const CreateEvent: React.FC = () => {
    return (
        <Box>
            <Header />
            <CreateEventForm />
        </Box>
    );
};

export default CreateEvent;
